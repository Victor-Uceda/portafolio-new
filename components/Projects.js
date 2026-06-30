import ProjectCard from "./ProjectCard";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <section id="proyectos">
      <h2
        style={{
          fontSize: 22,
          fontWeight: 600,
          marginBottom: 32,
          letterSpacing: "-0.3px",
          textAlign: "center",
        }}
      >
        Proyectos
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 24,
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
