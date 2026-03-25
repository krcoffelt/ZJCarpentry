import Link from "next/link";
import { company } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="desktop-nav">
      <div className="desktop-shell desktop-nav-inner">
        <Link className="desktop-brand" href="/">
          <span>Z &amp; J Carpentry</span>
        </Link>
        <nav className="desktop-nav-links" aria-label="Primary">
          <Link href="/projects">Portfolio</Link>
          <Link href="/services">Services</Link>
          <a href="#process">Process</a>
          <a href="#testimonials">Testimonials</a>
        </nav>
        <div className="desktop-nav-actions">
          <a className="desktop-ghost-link" href={company.phoneHref}>
            Call Now
          </a>
          <Link className="desktop-quote-button" href="/contact#quote-form">
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
