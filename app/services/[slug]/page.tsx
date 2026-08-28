import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/project-card";
import { QuoteForm } from "@/components/quote-form";
import { SchemaScript } from "@/components/schema-script";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  serviceSchema,
} from "@/lib/seo";
import { getArea, getRelatedProjects, getService } from "@/lib/site-data";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return buildMetadata({
    title: service.seoTitle,
    description: service.heroCopy,
    path: `/services/${service.slug}`,
    keywords: service.targetKeywords,
  });
}

export async function generateStaticParams() {
  const { services } = await import("@/lib/site-data");
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(service.relatedProjects);
  const servedAreas = service.servedAreas
    .map((areaSlug) => getArea(areaSlug))
    .filter((area) => area !== undefined);

  return (
    <>
      <SchemaScript
        data={serviceSchema(
          service.serviceName,
          service.heroCopy,
          servedAreas.map((area) => area.name),
          `/services/${service.slug}`,
        )}
      />
      <SchemaScript data={faqSchema(service.faqItems)} />
      <SchemaScript
        data={breadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" },
          { name: service.serviceName, item: `/services/${service.slug}` },
        ])}
      />
      <section className="section">
        <div className="shell page-hero">
          <div>
            <p className="eyebrow">{service.targetKeywords[0]}</p>
            <h1>{service.heading}</h1>
            <p className="hero-copy">{service.heroCopy}</p>
            <ul className="service-points">
              {service.proofPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="page-visual">
            <Image
              alt={service.serviceName}
              src={service.image.src}
              fill
              sizes="(max-width: 1100px) 100vw, 42vw"
              quality={76}
            />
            <span>{service.serviceName}</span>
          </div>
        </div>
      </section>

      <section className="section surface-low">
        <div className="shell editorial-intro">
          <div>
            <p className="eyebrow">Areas Served</p>
            <h2>{service.serviceName} across the Kansas City metro.</h2>
          </div>
          <div>
            <p className="section-copy">
              Choose your city for a direct summary of local services and nearby project evidence.
            </p>
            <ul className="stack-list">
              {servedAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/service-areas/${area.slug}`}>
                    {service.serviceName} in {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell detail-grid">
          {service.detailSections.map((section) => (
            <article key={section.title} className="detail-panel">
              <p className="eyebrow">What To Expect</p>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell editorial-intro">
          <div>
            <p className="eyebrow">Related Projects</p>
            <h2>Recent projects for this service.</h2>
          </div>
          <p className="section-copy">Recent work helps qualify the lead faster.</p>
        </div>
        <div className="shell project-grid">
          {relatedProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              imageSizes="(max-width: 1100px) 100vw, 48vw"
            />
          ))}
        </div>
        <div className="shell">
          <p className="section-copy">
            Source: <Link href="/projects">ZJ Carpentry project portfolio</Link>.
          </p>
        </div>
      </section>

      <section className="section surface-low">
        <div className="shell faq-grid">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title">Questions homeowners ask before they call.</h2>
          </div>
          <div className="faq-list">
            {service.faqItems.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell contact-page">
          <div>
            <p className="eyebrow">Get Quote</p>
            <h2 className="section-title">Request A Quote.</h2>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
