import Link from "next/link";

export function MobileCta() {
  return (
    <nav className="desktop-mobile-nav" aria-label="Primary">
      <Link className="desktop-mobile-link desktop-mobile-link-active" href="/">
        <span>⌂</span>
        <small>Home</small>
      </Link>
      <Link className="desktop-mobile-link" href="/projects">
        <span>▦</span>
        <small>Work</small>
      </Link>
      <Link className="desktop-mobile-link" href="/contact#quote-form">
        <span>✎</span>
        <small>Quote</small>
      </Link>
      <Link className="desktop-mobile-link" href="/contact">
        <span>☏</span>
        <small>Contact</small>
      </Link>
    </nav>
  );
}
