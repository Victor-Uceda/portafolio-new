"use client";

import { useState, useEffect, useRef } from "react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (open && navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [open]);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observers = [];

    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const label = links.find((l) => l.href === `#${id}`)?.label;
            if (label) setActive(label);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <nav ref={navRef} className="navbar-pill">
        <div className="navbar-pill-inner">
          <div className="navbar-pill-links">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={
                  "navbar-pill-item" + (active === l.label ? " active" : "")
                }
                onClick={() => setActive(l.label)}
              >
                {l.label}
              </a>
            ))}
          </div>

          <button
            className="navbar-pill-hamburger"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              {open ? (
                <>
                  <line x1="1" y1="1" x2="17" y2="13" stroke="currentColor" strokeWidth="2" />
                  <line x1="17" y1="1" x2="1" y2="13" stroke="currentColor" strokeWidth="2" />
                </>
              ) : (
                <>
                  <rect y="0" width="18" height="2" rx="1" fill="currentColor" />
                  <rect y="6" width="18" height="2" rx="1" fill="currentColor" />
                  <rect y="12" width="18" height="2" rx="1" fill="currentColor" />
                </>
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="navbar-pill-mobile">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={
                  "navbar-pill-item" + (active === l.label ? " active" : "")
                }
                onClick={() => {
                  setActive(l.label);
                  setOpen(false);
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
