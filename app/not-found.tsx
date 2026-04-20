import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="the-link" aria-hidden="true" />
        <div className="hero-eye">404 · Not Found</div>
        <h1>
          Hmm, that page isn't <em>here.</em>
        </h1>
        <p className="hero-sub">
          The page you're looking for isn't part of this guide. Try one of these instead.
        </p>
        <div className="hero-ctas">
          <Link className="btn btn-p" href="/">
            Back to Overview →
          </Link>
          <Link className="btn btn-s" href="/#our-take">
            Our Take
          </Link>
          <Link className="btn btn-s" href="/#schedule">
            Schedule
          </Link>
          <Link className="btn btn-s" href="/#side-events">
            Side Events
          </Link>
        </div>
      </div>
    </section>
  );
}
