import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-eye">404</div>
        <h1>Page not found</h1>
        <p className="hero-sub">That page is not part of this site.</p>
        <div className="hero-ctas">
          <Link className="btn btn-p" href="/">
            Return home →
          </Link>
        </div>
      </div>
    </section>
  );
}
