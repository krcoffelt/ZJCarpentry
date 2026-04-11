import Link from "next/link";
import { company } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="desktop-footer">
      <div className="desktop-shell desktop-footer-grid">
        <div className="desktop-footer-brand">
          <span className="desktop-footer-logo">Z &amp; J Carpentry</span>
          <p>
            Deck building, remodeling, flooring, and interior carpentry across
            the Kansas City metro.
          </p>
        </div>
        <div>
          <h4>Services</h4>
          <div className="desktop-footer-links">
            <Link href="/services/deck-building">Decks</Link>
            <Link href="/services/remodeling">Flooring</Link>
            <Link href="/services/interior-carpentry">Custom Build</Link>
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <div className="desktop-footer-links">
            <Link href="/projects">Our Work</Link>
            <Link href="/about">Our Story</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h4>Contact</h4>
          <div className="desktop-footer-contact">
            <p>Kansas City Metro Area</p>
            <p>{company.phone}</p>
          </div>
        </div>
      </div>
      <div className="desktop-shell desktop-footer-bottom">
        <p>© 2024 Z &amp; J Carpentry.</p>
        <p>
          Website by{" "}
          <a href="https://hometownkc.agency" target="_blank" rel="noreferrer">
            Hometown Marketing Agency
          </a>
        </p>
      </div>
    </footer>
  );
}
