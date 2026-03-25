import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Deck building, remodeling, and interior carpentry services for Kansas City and nearby suburbs.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="shell lead-grid">
        <div>
          <p className="eyebrow">Services</p>
          <h1 className="services-page-title">Decks, remodels, and interior carpentry.</h1>
        </div>
        <p>Choose the type of work you need and start with the right service.</p>
      </div>
      <div className="shell service-grid">
        {services.map((service) => (
          <article key={service.slug} className="service-card">
            <div className="service-photo">
              <img alt={service.serviceName} src={service.imageUrl} />
            </div>
            <p className="eyebrow">{service.targetKeywords[0]}</p>
            <h2>{service.serviceName}</h2>
            <p>{service.intro}</p>
            <ul className="service-points">
              {service.proofPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link href={`/services/${service.slug}`}>View Service</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
