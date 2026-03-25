import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/site-data";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  imageSizes?: string;
};

export function ProjectCard({
  project,
  featured = false,
  imageSizes = "(max-width: 1100px) 100vw, 50vw",
}: ProjectCardProps) {
  return (
    <article className={`project-card${featured ? " project-card-featured" : ""}`}>
      <div className="project-image">
        <Image
          alt={project.title}
          src={project.image.src}
          fill
          sizes={featured ? "(max-width: 1100px) 100vw, 75vw" : imageSizes}
          quality={76}
        />
        <span>{project.imageLabel}</span>
      </div>
      <div className="project-body">
        <div className="project-meta">
          <p className="eyebrow">{project.location}</p>
          <p className="project-window">{project.completionWindow}</p>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="scope-list">
          {project.scope.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link href="/contact#quote-form">Get a quote like this</Link>
      </div>
    </article>
  );
}
