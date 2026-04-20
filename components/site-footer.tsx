import Link from "next/link";

import { Logo } from "@/components/logo";
import { footerCopy, navItems, site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-shell">
        <div className="footer-brand">
          <a
            aria-label={site.name}
            className="footer-logo"
            href={site.logoHref}
            rel="noreferrer"
            target="_blank"
          >
            <Logo />
          </a>
          <p>{footerCopy.lineOne}</p>
          <p>{footerCopy.lineTwo}</p>
        </div>
        <nav aria-label="Footer" className="footer-nav">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
