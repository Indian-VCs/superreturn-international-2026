import { ButtonLink } from "@/components/button-link";
import { Logo } from "@/components/logo";
import { contactLinks, navItems, site } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-inner">
        <a
          aria-label={site.name}
          className="nav-logo"
          href={site.logoHref}
        >
          <Logo />
        </a>
        <div className="nav-actions">
          <div className="nav-links">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <ButtonLink href={contactLinks.attend} size="sm" variant="ghost">
            Reach Out →
          </ButtonLink>
        </div>
      </div>
    </nav>
  );
}
