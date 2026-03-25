import { QuoteForm } from "@/components/quote-form";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Call now or request a quote for deck building, remodeling, and interior carpentry in Kansas City and nearby suburbs.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="section">
      <div className="shell contact-page">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Call now or send a short quote request.</h1>
          <div className="contact-block">
            <p>
              <strong>Phone</strong>
            </p>
            <p>
              <a href={company.phoneHref}>{company.phone}</a>
            </p>
            <p>
              <strong>Email</strong>
            </p>
            <p>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            <p>
              <strong>Service Area</strong>
            </p>
            <p>{company.serviceRegion}</p>
          </div>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
