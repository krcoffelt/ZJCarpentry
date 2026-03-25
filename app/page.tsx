import Image from "next/image";
import Link from "next/link";
import { HeroMedia } from "@/components/hero-media";
import { buildMetadata } from "@/lib/seo";
import { company, photoLibrary, reviews } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Kansas City Deck and Remodeling Contractor",
  description:
    "Deck building, remodeling, flooring, and interior carpentry for Kansas City homeowners.",
});

const serviceCards = [
  {
    title: "Custom Deck Building",
    body: "Deck construction and rebuilds designed for durability, clean installation, and long-term outdoor use.",
    cta: "Learn More",
    href: "/services/deck-building",
    image: photoLibrary.deck,
    alt: "Custom deck",
  },
  {
    title: "Precision Flooring",
    body: "Hardwood and flooring installation for homeowners looking for a clean finish and dependable project execution.",
    cta: "Hardwood Refinishing",
    href: "/services/remodeling",
    image: photoLibrary.flooring,
    alt: "Precision flooring",
    bullets: ["New floor installation", "Floor replacement", "Clean, finished look"],
  },
  {
    title: "Interior Carpentry",
    body: "Built-ins, trim, accent walls, and custom woodwork for remodels and interior upgrades.",
    cta: "Request a Quote",
    href: "/services/interior-carpentry",
    image: photoLibrary.carpentry,
    alt: "Custom built-in walnut shelving unit",
  },
];

const processItems = [
  {
    number: "01",
    title: "Consult & Scope",
    body: "We review the project, talk through materials and layout, and define the scope before pricing.",
  },
  {
    number: "02",
    title: "Schedule & Prep",
    body: "Once approved, we line up materials, confirm timing, and prepare the site for a smooth build.",
  },
  {
    number: "03",
    title: "Build & Finish",
    body: "We complete the work with professional jobsite standards, clear communication, and a finished result ready to use.",
  },
];

export default function HomePage() {
  const featuredReviews = reviews.slice(0, 6);

  return (
    <div className="desktop-page">
      <section className="desktop-hero">
        <HeroMedia
          image={photoLibrary.hero}
          videoSrc="/videos/ZJCarpentry_SlowMo.mp4"
          alt="Finished cedar deck project"
        />
        <div className="desktop-hero-overlay" />
        <div className="desktop-shell desktop-hero-content">
          <div className="desktop-hero-copy">
            <span className="desktop-est-badge">Established 1994</span>
            <p className="desktop-overline">Serving Kansas City And Nearby Suburbs</p>
            <h1>
              <span className="desktop-hero-line">Deck &amp; Remodel</span>
              <span className="desktop-hero-line">Contractor</span>
            </h1>
            <p className="desktop-hero-text">
              Professional deck building, remodeling, flooring, and interior
              carpentry for homeowners across the Kansas City metro.
            </p>
            <div className="desktop-hero-actions">
              <Link className="desktop-quote-button desktop-hero-button" href="/contact#quote-form">
                Request a Quote
              </Link>
              <a className="desktop-call-button" href={company.phoneHref}>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="desktop-section">
        <div className="desktop-shell">
          <div className="desktop-section-heading">
            <h2>Specialized Services for Kansas City Homes</h2>
            <div className="desktop-section-rule" />
          </div>

          <div className="desktop-bento-grid">
            <article className="desktop-feature-card">
              <Image
                alt={serviceCards[0].alt}
                src={serviceCards[0].image.src}
                fill
                sizes="(max-width: 900px) 100vw, 66vw"
                quality={78}
              />
              <div className="desktop-feature-overlay" />
              <div className="desktop-feature-copy">
                <h3>{serviceCards[0].title}</h3>
                <p>{serviceCards[0].body}</p>
                <Link className="desktop-inline-link" href={serviceCards[0].href}>
                  {serviceCards[0].cta}
                </Link>
              </div>
            </article>

            <article className="desktop-side-card">
              <div className="desktop-side-icon">◈</div>
              <div>
                <h3>{serviceCards[1].title}</h3>
                <p>{serviceCards[1].body}</p>
              </div>
              <ul>
                {serviceCards[1].bullets?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="desktop-gold-card">
              <div className="desktop-gold-icon">⚒</div>
              <div>
                <h3>{serviceCards[2].title}</h3>
                <p>{serviceCards[2].body}</p>
              </div>
              <Link className="desktop-gold-link" href={serviceCards[2].href}>
                {serviceCards[2].cta}
              </Link>
            </article>

            <article className="desktop-wide-image-card">
              <Image
                alt="Poolside pergola project"
                src={photoLibrary.pergola.src}
                fill
                sizes="(max-width: 900px) 100vw, 66vw"
                quality={74}
              />
              <div className="desktop-wide-image-overlay" />
              <div className="desktop-wide-image-title">Recent Project Work</div>
            </article>
          </div>
        </div>
      </section>

      <section className="desktop-process-section" id="process">
        <div className="desktop-shell">
          <div className="desktop-process-header">
            <h2>Our Process</h2>
            <p>
              A straightforward path from first call to finished project.
            </p>
          </div>

          <div className="desktop-process-grid">
            {processItems.map((item, index) => (
              <article key={item.number} className="desktop-process-step">
                <div className={`desktop-process-box ${index === 1 ? "desktop-process-box-active" : ""}`}>
                  {item.number}
                </div>
                <div className="desktop-process-step-copy">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="desktop-section" id="testimonials">
        <div className="desktop-shell desktop-testimonial-grid">
          <div className="desktop-testimonial-intro">
            <p className="desktop-testimonial-kicker">Client Reviews</p>
            <h2 className="two-line-lock">
              <span>What Homeowners Say</span>
              <span>In Kansas City</span>
            </h2>
            <p>
              Homeowners remember clear communication, professional work, and a
              finished result that looks right.
            </p>
            <div className="desktop-testimonial-meta">
              <div>
                <strong>6 Recent Reviews</strong>
                <span>Decks, remodels, and interior work</span>
              </div>
              <div>
                <strong>Professional Communication</strong>
                <span>Quoted clearly and followed through</span>
              </div>
            </div>
          </div>
          <div className="desktop-testimonial-list">
            {featuredReviews.map((review, index) => (
              <article
                key={review.name}
                className={`desktop-testimonial-card${index === 0 ? " desktop-testimonial-card-featured" : ""}`}
              >
                <div className="desktop-stars">★★★★★</div>
                <p className="desktop-testimonial-quote">"{review.quote}"</p>
                <div className="desktop-testimonial-person">
                  <strong>{review.name}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="desktop-cta-banner">
        <div className="desktop-shell">
          <div className="desktop-cta-card">
            <Image
              alt="Deck stairs and railing project"
              src={photoLibrary.deckSteps.src}
              fill
              sizes="(max-width: 900px) 100vw, 66vw"
              quality={76}
            />
            <div className="desktop-cta-overlay" />
            <div className="desktop-cta-content">
              <h2>
                <span className="desktop-cta-line">Ready to Start Your Next</span>
                <span className="desktop-cta-line">Home Project?</span>
              </h2>
              <p>
                Request a quote today for deck work, remodeling, flooring, or
                interior carpentry in the Kansas City area.
              </p>
              <Link className="desktop-quote-button desktop-cta-button" href="/contact#quote-form">
                Request Your Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
