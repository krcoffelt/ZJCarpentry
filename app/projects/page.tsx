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
          <h1>Recent deck, remodel, and interior work.</h1>
        </div>
        <p>Examples of the kinds of projects homeowners ask about most.</p>
      </div>
      <div className="shell project-grid">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="shell service-grid" style={{ marginTop: "1.5rem" }}>
        {projects.slice(3).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
