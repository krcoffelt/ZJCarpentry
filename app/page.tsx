import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { company, photoLibrary } from "@/lib/site-data";

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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQRDzDwSSyAUQO4IoI19Yx5i5jJBxue7r5MEY3rLW8cMj7yFslLg_6ugJHtC8lu5fpXvWnPnnt9ajMe8uORkT5aSCTt1MqQ53i0f_kAinQBZbsv3ddXlUm7vc9hwf835lw6if-0bjzypnd4Slg6d4X6CgJm3KkFQ3Xn3VoJTNKkhHzkazsdha_3Fotc0ruFL6dpMq-zBzhtGN6wC2IXa8gDfznFZYN9Z8RfB8oDzCn6LH_sMYiT4x5yJDVpMQe8JySVv2sMTZ9XsI",
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
  return (
    <div className="desktop-page">
      <section className="desktop-hero">
        <div className="desktop-hero-media">
          <img
            alt="High-end wooden deck"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuALl8er31rAC-aqy7lKS3js2G3qvzDQ0cLjI0YCfjpGYAHvFZocNpZQ_ybC6fjXUL4TgTwz_v26Oa4v6WOr_fpAeWHVy5YbmekVm4T1DkBZT_MxznonTlS4s-4suUzNKd06AnLcNLEqkz5EzAkBtrhGGAeQvDlDPSXNDvVHuKsUObWjHFKJ6dO3u-szTKoskBLshAZbS2U7eDy0ue_GezEJXrqCZ0LYJSfHpObvh55W_zVd8mbRy47xaoQ_xCqOgIB0Te0hOZ53Kz8"
          />
        </div>
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
              <img alt={serviceCards[0].alt} src={serviceCards[0].image} />
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
              <img
                alt="Woodworking detail"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw-GYZmT24sQNIE6l-1uxxxa2VTb4HvaEDVzwD7LXXcQLt3whdeTKWD--4zZ5Qo1nqFoBm4W3q6LegH-mLBWpKparn_YyhsmKzZxwNjvCtQQhhwqWacghwd0LEEj6bwJmRKcT1O41ZeXtGiU2TtPQPZNb8fdaD2_sJb8y-3Ys91RLHfQFaaZyIGoKM5SWDfFqzogddexxCWmR1gZGX6OibrRLU6Ip_LPNW0JAtaNj0Z0R2I2XdArD9LbSptgab73pbT_CXw5JdOOQ"
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
            <h2>Word of Mouth from Kansas City Homeowners</h2>
            <p>
              Homeowners remember clear communication, professional work, and a
              finished result that looks right.
            </p>
            <div className="desktop-testimonial-controls">
              <button type="button">‹</button>
              <button type="button">›</button>
            </div>
          </div>
          <article className="desktop-testimonial-card">
            <div className="desktop-stars">★★★★★</div>
            <p className="desktop-testimonial-quote">
              "The deck turned out great, the crew communicated well, and the
              whole project felt organized from start to finish."
            </p>
            <div className="desktop-testimonial-person">
              <div className="desktop-testimonial-avatar">
                <img
                  alt="Client portrait"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc6IKRBdIK_9JbcOOPZIm7rXiEF0o2usoxf3XZWc2AGvzKsrwlEcCeA6CpA_gaWnrnewxMuYsR9wRtZRNdb9EpGJ7yL-MPWWWPQFmRlX3bO-QSJJkETmIQoG9LkXOQbVFM-MR7nyIirmUJIXD_loAQ23BP1QJ3Y9UREZgZlzbdP5Hgu9nw33IkQVcYH3qPBB5xvEYHTHOWV5cPQ8eYr_3bDKS6x8FDGfE5Twkg0SkKXUc2lR3elNs6I6PdVRp8ejBNqrYQos3kKgA"
                />
              </div>
              <div>
                <strong>David Henderson</strong>
                <small>Kansas City Homeowner</small>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="desktop-cta-banner">
        <div className="desktop-shell">
          <div className="desktop-cta-card">
            <img
              alt="Wood texture"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrm3eyN2cfzsXjs3dJnkYyaTOqhdl2w5rnLYCMfQ5zhpkZs1mpKmHnIi5jxwqw7PPoja61YVrI-HeoKnTuFZkZlPJr1gbMQ1Tdvc9b2wq9-vs_vRbOWY_wzrmUI7KER3Uz0pMUumkOomIX4FedoaBl9a8GFJc3g-QGSBarzOjpHwd1_vZg4-gnKge0kabbXFM_BFTEhD7irbxQh_IzZwwy-lsUOR1Tm5vt_iYWzLBMPSQ00BguZJp4pmKtSbV2FUEvPZXe5WDC3-o"
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
