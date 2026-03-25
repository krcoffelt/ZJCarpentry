import { ProjectCard } from "@/components/project-card";
import { buildMetadata } from "@/lib/seo";
import { projects } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Projects",
  description:
    "Recent deck, remodel, and interior carpentry project examples for Kansas City homeowners.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="shell lead-grid">
        <div>
          <p className="eyebrow">Projects</p>
          <h1>Recent Kansas City Projects.</h1>
        </div>
        <p>Examples of the kinds of projects homeowners ask about most.</p>
      </div>
      <div className="shell portfolio-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            featured={index === 0}
            imageSizes="(max-width: 1100px) 100vw, 50vw"
          />
        ))}
      </div>
    </section>
  );
}
