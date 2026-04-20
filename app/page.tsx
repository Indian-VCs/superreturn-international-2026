import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import {
  contactLinks,
  eventFacts,
  site,
  storyCards,
  supportOffers,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <img
          alt="Berlin skyline at dusk"
          className="hero-image"
          src={site.berlinImage}
        />
        <div className="hero-scrim" />
        <div className="hero-radial" />
        <div className="section-shell hero-shell">
          <div className="hero-copy">
            <p className="hero-eyebrow">
              <span className="hero-dot" />
              {site.heroDate} - {site.heroLocation}
            </p>
            <h1 className="hero-title">
              SuperReturn <em>International</em>
            </h1>
            <p className="hero-summary">{site.heroSummary}</p>
            <div className="hero-meta">
              {eventFacts.map((fact) => (
                <span className="hero-meta-pill" key={fact}>
                  {fact}
                </span>
              ))}
            </div>
            <div className="button-row">
              <ButtonLink href={contactLinks.attend}>Planning to attend?</ButtonLink>
              <ButtonLink href={site.officialSite} variant="secondary">
                Official site
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell">
          <SectionHeading
            description="The Berlin week is large, allocator-heavy, and easy to waste if you do not arrive with a clear objective."
            eyebrow="Overview"
            title="A sharper read on where the signal actually is"
          />
          <div className="story-grid">
            {storyCards.map((card) => (
              <article className="story-card" key={card.href}>
                <p className="story-label">{card.label}</p>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <ButtonLink href={card.href} variant="ghost">
                  Open section
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="section-shell split-band">
          <div>
            <p className="eyebrow">Why this room</p>
            <h2 className="section-title">
              The hallway conversations matter more than the stage.
            </h2>
            <p className="section-description">
              If you are tracking European allocators already, this week can
              tighten real conversations. If you are earlier, it is a market
              read and a relationship-building trip, not a quick fundraising
              sprint.
            </p>
          </div>
          <div className="quote-panel">
            <p>
              Berlin is where you test how India resonates with allocators who
              are not already steeped in the Asia conference circuit.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell cta-band">
          <div className="cta-copy">
            <p className="eyebrow">How we help</p>
            <h2 className="section-title">Planning to attend? We can help.</h2>
            <p className="section-description">
              Indian VCs is building a bridge between India&apos;s venture
              ecosystem and global LP networks. If you are considering
              SuperReturn, we can help you prepare the week properly.
            </p>
          </div>
          <div className="offer-grid">
            {supportOffers.map((offer) => (
              <article className="offer-card" key={offer.title}>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
              </article>
            ))}
          </div>
          <div className="cta-footer">
            <div className="code-pill">
              <span>Partner code</span>
              <strong>{site.partnerCode}</strong>
              <small>Use at checkout on the official site</small>
            </div>
            <div className="button-row">
              <ButtonLink href={contactLinks.general}>Reach out</ButtonLink>
              <ButtonLink href="/side-events" variant="secondary">
                Side-event updates
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
