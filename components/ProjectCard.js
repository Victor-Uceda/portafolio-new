import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <Image
          src={"/" + project.image}
          alt={project.title}
          width={1310}
          height={693}
          className="project-image"
        />
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>

        <p className="project-desc">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta project-card-cta"
        >
          Visitar sitio
        </a>
      </div>
    </article>
  );
}
