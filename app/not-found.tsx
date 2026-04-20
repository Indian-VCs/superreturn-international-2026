import Link from "next/link";

export default function NotFound() {
  return (
    <section className="subpage-hero">
      <div className="section-shell">
        <p className="eyebrow">404</p>
        <h1 className="page-title">That page is not part of this site.</h1>
        <p className="page-description">
          Head back to the overview and continue from there.
        </p>
        <Link className="button button--primary" href="/">
          Return home
        </Link>
      </div>
    </section>
  );
}
