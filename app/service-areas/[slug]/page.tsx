import Link from "next/link";
import { notFound } from "next/navigation";
import { QuoteForm } from "@/components/quote-form";
import { SchemaScript } from "@/components/schema-script";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { getArea, getService } from "@/lib/site-data";

type AreaPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { areas } = await import("@/lib/site-data");
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = getArea(slug);

  if (!area) {
    return {};
  }

  return buildMetadata({
    title: `${area.name} Service Area`,
    description: area.intro,
    path: `/service-areas/${area.slug}`,
  });
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = getArea(slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <SchemaScript
        data={breadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Service Areas", item: "/services" },
          { name: area.name, item: `/service-areas/${area.slug}` },
        ])}
      />
      <section className="section">
        <div className="shell page-hero">
          <div>
            <p className="eyebrow">Service Area</p>
            <h1>{area.name}</h1>
            <p className="hero-copy">{area.intro}</p>
            <ul className="service-points">
              {area.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
          <div className="contact-block">
            <p className="eyebrow">Nearby neighborhoods</p>
            <ul className="stack-list">
              {area.neighborhoods.map((neighborhood) => (
                <li key={neighborhood}>{neighborhood}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section surface-low">
        <div className="shell service-grid">
          {area.relatedServices.map((serviceSlug) => {
            const service = getService(serviceSlug);

            if (!service) {
              return null;
            }

            return (
              <article key={service.slug} className="service-card">
                <p className="eyebrow">Related Service</p>
                <h2>{service.serviceName}</h2>
                <p>{service.heroCopy}</p>
                <Link href={`/services/${service.slug}`}>View Service</Link>
              </article>
            );
          })}
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
