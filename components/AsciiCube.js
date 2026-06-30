"use client";

import { useEffect, useRef } from "react";

const NB_COLS = 48;
const NB_ROWS = 30;

const Vec3 = (x, y, z) => ({ x, y, z });
const Vec2 = (x, y) => ({ x, y });

const cubeVertices = [
  Vec3(-1, -1, -1), Vec3(-1,  1, -1), Vec3( 1,  1, -1), Vec3( 1, -1, -1),
  Vec3( 1,  1,  1), Vec3( 1, -1,  1), Vec3(-1, -1,  1), Vec3(-1,  1,  1),
];

const cubeTriangles = [
  [0, 1, 2], [0, 2, 3],
  [3, 2, 4], [3, 4, 5],
  [5, 4, 7], [5, 7, 6],
  [6, 7, 1], [6, 1, 0],
  [6, 0, 3], [6, 3, 5],
  [1, 7, 4], [1, 4, 2],
];

const symbols = "$$**++--@@==";
const cameraV = Vec3(0, 0, 1);

function dot(a, b) {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

function cross(a, b) {
  return Vec3(
    a.y * b.z - a.z * b.y,
    a.z * b.x - a.x * b.z,
    a.x * b.y - a.y * b.x
  );
}

function rotX(v, a) {
  const c = Math.cos(a), s = Math.sin(a);
  return Vec3(v.x, c * v.y - s * v.z, s * v.y + c * v.z);
}

function rotY(v, a) {
  const c = Math.cos(a), s = Math.sin(a);
  return Vec3(c * v.x + s * v.z, v.y, -s * v.x + c * v.z);
}

function rotZ(v, a) {
  const c = Math.cos(a), s = Math.sin(a);
  return Vec3(c * v.x - s * v.y, s * v.x + c * v.y, v.z);
}

function project(v) {
  return Vec2(
    v.x / v.z + NB_COLS / 2,
    v.y / v.z + NB_ROWS / 2
  );
}

export default function AsciiCube() {
  const preRef = useRef(null);

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;

    const screen = Array.from({ length: NB_ROWS }, () => new Uint8Array(NB_COLS).fill(32));

    let angleX = 0, angleY = 0, angleZ = 0;
    let animId, paused = false;

    const observer = new IntersectionObserver(
      ([e]) => { paused = !e.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(pre);

    function clear() {
      for (let r = 0; r < NB_ROWS; r++)
        screen[r].fill(32);
    }

    function drawScanLine(y, x0, x1, sym) {
      let left = Math.round(x0), right = Math.round(x1);
      if (left > right) { const t = left; left = right; right = t; }
      if (y < 0 || y >= NB_ROWS) return;
      const row = screen[y];
      const l = Math.max(0, Math.min(NB_COLS - 1, left));
      const r = Math.max(0, Math.min(NB_COLS - 1, right));
      for (let x = l; x <= r; x++)
        row[x] = sym;
    }

    function drawFlatTop(t0, t1, b, sym) {
      let xL = t0.x, xR = t1.x;
      const incL = (b.x - t0.x) / (b.y - t0.y);
      const incR = (b.x - t1.x) / (b.y - t1.y);
      const yB = Math.max(0, Math.round(t0.y));
      const yE = Math.min(NB_ROWS - 1, Math.floor(b.y));
      for (let y = yB; y <= yE; y++) {
        drawScanLine(y, Math.round(xL), Math.round(xR), sym);
        xL += incL; xR += incR;
      }
    }

    function drawFlatBottom(t, b0, b1, sym) {
      let xL = t.x, xR = t.x;
      const decL = (t.x - b0.x) / (b0.y - t.y);
      const decR = (t.x - b1.x) / (b1.y - t.y);
      const yB = Math.max(0, Math.round(t.y));
      const yE = Math.min(NB_ROWS - 1, Math.floor(b0.y));
      for (let y = yB; y <= yE; y++) {
        drawScanLine(y, Math.round(xL), Math.round(xR), sym);
        xL -= decL; xR -= decR;
      }
    }

    function drawTriangle(v0, v1, v2, sym) {
      let a = { ...v0 }, b = { ...v1 }, c = { ...v2 };
      if (a.y > b.y) { const t = a; a = b; b = t; }
      if (b.y > c.y) { const t = c; c = b; b = t; }
      if (a.y > b.y) { const t = a; a = b; b = t; }

      if (c.y === b.y) { drawFlatBottom(a, b, c, sym); return; }
      if (a.y === b.y) { drawFlatTop(a, b, c, sym); return; }

      const mid = Vec2(
        a.x + (c.x - a.x) * (b.y - a.y) / (c.y - a.y),
        b.y
      );
      drawFlatBottom(a, b, mid, sym);
      drawFlatTop(b, mid, c, sym);
    }

    function tick() {
      if (!paused) {
        clear();
        angleX += 0.015;
        angleY += 0.025;
        angleZ += 0.01;

        const faces = [];

        for (let s = 0; s < cubeTriangles.length; s++) {
          const tri = cubeTriangles[s];
          const tv = [
            rotZ(rotY(rotX(cubeVertices[tri[0]], angleX), angleY), angleZ),
            rotZ(rotY(rotX(cubeVertices[tri[1]], angleX), angleY), angleZ),
            rotZ(rotY(rotX(cubeVertices[tri[2]], angleX), angleY), angleZ),
          ];

          tv[0].z += 12;
          tv[1].z += 12;
          tv[2].z += 12;

          const scale = 72;
          for (let i = 0; i < 3; i++) {
            tv[i].y *= scale;
            tv[i].x *= scale * 1.8;
          }

          const v01 = Vec3(tv[1].x - tv[0].x, tv[1].y - tv[0].y, tv[1].z - tv[0].z);
          const v02 = Vec3(tv[2].x - tv[0].x, tv[2].y - tv[0].y, tv[2].z - tv[0].z);
          const normal = cross(v01, v02);

          if (dot(cameraV, normal) > -0.01) continue;

          const pp = tv.map(p => project(p));
          const depth = (tv[0].z + tv[1].z + tv[2].z) / 3;

          faces.push({ depth, pp, sym: symbols.charCodeAt(s) });
        }

        faces.sort((a, b) => b.depth - a.depth);

        for (const face of faces) {
          drawTriangle(face.pp[0], face.pp[1], face.pp[2], face.sym);
        }

        let out = "";
        for (let r = 0; r < NB_ROWS; r++) {
          out += String.fromCharCode(...screen[r]) + "\n";
        }
        pre.textContent = out;
      }
      animId = requestAnimationFrame(tick);
    }

    tick();

    return () => { cancelAnimationFrame(animId); observer.disconnect(); };
  }, []);

  return (
    <div className="cube-wrapper">
      <pre
        ref={preRef}
        aria-label="3D rotating ASCII cube"
        className="cube-pre"
      />
    </div>
  );
}
