import { Logo } from "@/components/logo";
import { footerCopy, site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <a aria-label={site.name} href={site.logoHref}>
          <Logo />
        </a>
      </div>
      <p>{footerCopy.lineOne}</p>
      <p>{footerCopy.lineTwo}</p>
    </footer>
  );
}
