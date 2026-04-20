import type { Metadata } from "next";

import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import {
  contactLinks,
  sideEventNotes,
  site,
  supportOffers,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Side Events",
  description:
    "Updates on Indian and Asia-focused side events around SuperReturn week, plus how Indian VCs can help you prepare.",
};

export default function SideEventsPage() {
  return (
    <>
      <PageHero
        description="We are tracking the side conversations and smaller rooms that tend to matter most once the conference day winds down."
        eyebrow="Side events"
        title="What is happening on the margins"
      >
        <div className="button-row">
          <ButtonLink href={contactLinks.sideEvents}>Ping us</ButtonLink>
          <ButtonLink href={contactLinks.general} variant="secondary">
            Reach out by email
          </ButtonLink>
        </div>
      </PageHero>

      <section className="page-section">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Current read"
            title="We will keep this updated as details firm up"
          />
          <div className="note-stack">
            {sideEventNotes.map((note) => (
              <article className="note-card" key={note}>
                <p>{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="section-shell cta-band">
          <div className="cta-copy">
            <p className="eyebrow">Support</p>
            <h2 className="section-title">What we can do before you land</h2>
            <p className="section-description">
              The most useful prep is usually simple: compare notes on the room,
              sharpen the shortlist, and make sure you do not waste the week.
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
              <small>10% off on the official registration flow</small>
            </div>
            <div className="button-row">
              <ButtonLink href={site.officialSite}>Use the official site</ButtonLink>
              <ButtonLink href="/our-take" variant="secondary">
                Read our take
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
