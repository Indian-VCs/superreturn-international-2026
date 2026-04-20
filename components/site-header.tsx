import { ButtonLink } from "@/components/button-link";
import { Logo } from "@/components/logo";
import { contactLinks, navItems, site } from "@/lib/site-data";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="section-shell header-shell">
        <a
          aria-label={site.name}
          className="header-logo"
          href={site.logoHref}
          rel="noreferrer"
          target="_blank"
        >
          <Logo />
        </a>
        <div className="header-actions">
          <nav aria-label="Primary" className="header-nav">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <ButtonLink href={contactLinks.attend} variant="primary">
            Reach out
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
