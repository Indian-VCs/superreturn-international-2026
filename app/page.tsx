const homeMarkup = `
<nav class="nav">
  <div class="nav-inner">
    <a href="https://www.indianvcs.com" class="nav-logo" aria-label="Indian VCs">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420.99 60.48"><defs><style>.l1{fill:#d21905}.l1,.l2{stroke-width:0}.l2{fill:#191816}</style></defs><g><g><path class="l2" d="M0,59.04v-1.51l6.62-1.08V4.03L0,3.02v-1.58h21.17v1.58l-6.62,1.01v52.42l6.62,1.08v1.51H0Z"/><path class="l2" d="M25.99,57.6l5.04-.72V23.9l-5.04-.72v-1.44h12.24v7.78c1.78-2.59,3.86-4.64,6.26-6.16,2.4-1.51,4.99-2.27,7.78-2.27,3.46,0,6.18.86,8.17,2.59,1.99,1.73,2.99,4.3,2.99,7.7v25.49l5.04.72v1.44h-16.56v-1.44l4.32-.72v-25.34c0-2.5-.5-4.43-1.51-5.8-1.01-1.37-2.57-2.05-4.68-2.05s-4.33.8-6.37,2.41c-2.04,1.61-3.85,3.59-5.44,5.94v24.84l4.32.72v1.44h-16.56v-1.44Z"/><path class="l2" d="M81.07,57.35c-2.59-1.61-4.61-3.86-6.05-6.77-1.44-2.9-2.16-6.3-2.16-10.19s.72-7.28,2.16-10.19c1.44-2.9,3.46-5.15,6.05-6.73,2.59-1.58,5.59-2.38,9-2.38,2.78,0,5.21.73,7.27,2.2,2.06,1.46,3.7,3.47,4.9,6.01V3.6l-5.04-.72v-1.44h12.24v55.44l5.04.72v1.44h-12.24v-7.49c-1.2,2.54-2.83,4.55-4.9,6.01-2.06,1.46-4.49,2.2-7.27,2.2-3.41,0-6.41-.8-9-2.41ZM96.52,56.12c1.7-1.22,3.07-2.86,4.1-4.9,1.03-2.04,1.57-4.26,1.62-6.66v-8.28c-.05-2.4-.59-4.62-1.62-6.66-1.03-2.04-2.4-3.67-4.1-4.9-1.7-1.22-3.61-1.84-5.72-1.84-6.67,0-10.01,4.63-10.01,13.9v7.2c0,9.31,3.34,13.97,10.01,13.97,2.11,0,4.02-.61,5.72-1.84Z"/><path class="l2" d="M118.01,59.04v-1.44l5.04-.72V23.98l-5.04-.72v-1.44h12.24v35.06l5.04.72v1.44h-17.28ZM122.18,11.99c-.96-.94-1.44-2.08-1.44-3.42s.47-2.47,1.4-3.38c.94-.91,2.1-1.37,3.49-1.37,1.3,0,2.4.46,3.31,1.37.91.91,1.37,2.04,1.37,3.38s-.46,2.48-1.37,3.42c-.91.94-2.02,1.4-3.31,1.4s-2.5-.47-3.46-1.4Z"/><path class="l2" d="M143.06,57.35c-1.97-1.61-2.95-4-2.95-7.16,0-4.51,1.9-7.72,5.69-9.61,3.79-1.9,8.18-2.84,13.18-2.84h4.82v-5.54c0-2.5-.28-4.43-.83-5.8-.55-1.37-1.4-2.33-2.56-2.88-1.15-.55-2.71-.83-4.68-.83-2.26,0-3.94.44-5.04,1.33-1.11.89-1.66,2.08-1.66,3.56,0,1.39.67,2.3,2.02,2.74,0,1.2-.46,2.26-1.37,3.17s-1.99,1.37-3.24,1.37c-1.34,0-2.42-.37-3.24-1.12-.82-.74-1.22-1.88-1.22-3.42,0-2.78,1.39-5.02,4.18-6.7,2.78-1.68,6.26-2.52,10.44-2.52,9.6,0,14.4,4.18,14.4,12.53v20.59c0,1.06.23,1.86.68,2.41.46.55,1.12.83,1.98.83.82,0,1.46-.28,1.94-.83.48-.55.72-1.31.72-2.27h1.51c0,1.68-.54,3-1.62,3.96-1.08.96-2.58,1.44-4.5,1.44-2.21,0-4.07-.64-5.58-1.91-1.51-1.27-2.29-3.25-2.34-5.94-1.15,2.45-2.92,4.37-5.29,5.76s-5,2.09-7.88,2.09c-3.07,0-5.59-.8-7.56-2.41ZM158.58,55.44c1.37-.77,2.53-1.88,3.49-3.35.96-1.46,1.54-3.23,1.73-5.29v-7.49h-4.82c-3.94,0-6.88.88-8.82,2.63-1.94,1.75-2.92,4.21-2.92,7.38,0,2.64.62,4.51,1.87,5.62,1.25,1.1,3.07,1.66,5.47,1.66,1.3,0,2.63-.38,4-1.15Z"/><path class="l2" d="M179.57,57.6l5.04-.72V23.9l-5.04-.72v-1.44h12.24v7.78c1.78-2.59,3.86-4.64,6.26-6.16,2.4-1.51,4.99-2.27,7.78-2.27,3.46,0,6.18.86,8.17,2.59,1.99,1.73,2.99,4.3,2.99,7.7v25.49l5.04.72v1.44h-16.56v-1.44l4.32-.72v-25.34c0-2.5-.5-4.43-1.51-5.8-1.01-1.37-2.57-2.05-4.68-2.05s-4.33.8-6.37,2.41c-2.04,1.61-3.85,3.59-5.44,5.94v24.84l4.32.72v1.44h-16.56v-1.44Z"/></g><g><path class="l2" d="M313.49,60.48l-20.74-56.45-5.76-1.01v-1.58h21.1v1.58l-6.77.86,15.84,43.13,15.55-40.75-8.28-3.24v-1.58h15.48v1.58l-5.26,3.17-20.59,54.29h-.58Z"/><path class="l2" d="M352.88,56.66c-3.94-2.54-6.97-6.1-9.11-10.66-2.14-4.56-3.2-9.82-3.2-15.77s1.09-11.22,3.28-15.8c2.18-4.58,5.28-8.14,9.29-10.66,4.01-2.52,8.63-3.78,13.86-3.78,2.06,0,4.16.36,6.3,1.08,2.13.72,4.07,1.73,5.8,3.02l4.82-4.1h1.51v17.86h-1.51l-4.46-11.16c-1.68-1.54-3.64-2.76-5.87-3.67-2.23-.91-4.43-1.37-6.59-1.37-3.36,0-6.32.86-8.89,2.59-2.57,1.73-4.57,4.25-6.01,7.56-1.44,3.31-2.16,7.25-2.16,11.81v13.18c0,4.56.7,8.5,2.09,11.81,1.39,3.31,3.34,5.84,5.83,7.6,2.5,1.75,5.42,2.63,8.78,2.63,2.45,0,4.9-.54,7.34-1.62,2.45-1.08,4.49-2.53,6.12-4.36l4.18-11.59h1.51v18.5h-1.51l-5.18-3.67c-1.73,1.39-3.7,2.47-5.9,3.24-2.21.77-4.39,1.15-6.55,1.15-5.23,0-9.82-1.27-13.75-3.82Z"/><path class="l2" d="M397.73,57.24c-2.64-1.68-3.96-3.86-3.96-6.55,0-1.39.37-2.48,1.12-3.28.74-.79,1.74-1.19,2.99-1.19.96,0,1.78.24,2.45.72.67.48,1.15,1.15,1.44,2.02-1.06,1.15-1.58,2.38-1.58,3.67,0,1.49.67,2.78,2.02,3.89,1.34,1.1,3.14,1.66,5.4,1.66,3.02,0,5.5-.68,7.42-2.05,1.92-1.37,2.88-3.2,2.88-5.51,0-1.34-.41-2.35-1.22-3.02-.82-.67-2.4-1.44-4.75-2.3l-10.87-3.96c-4.27-1.54-6.41-4.39-6.41-8.57,0-3.41,1.18-6.2,3.53-8.39,2.35-2.18,5.59-3.28,9.72-3.28,3.41,0,6.32.78,8.75,2.34,2.42,1.56,3.64,3.78,3.64,6.66,0,1.15-.31,2.08-.94,2.77-.62.7-1.44,1.04-2.45,1.04s-1.84-.28-2.48-.83c-.65-.55-.97-1.31-.97-2.27.62-.48,1.05-1,1.3-1.55.24-.55.36-1.21.36-1.98,0-1.34-.59-2.45-1.76-3.31-1.18-.86-2.99-1.3-5.44-1.3-2.11,0-3.92.32-5.44.97s-2.65,1.5-3.42,2.56c-.77,1.06-1.15,2.14-1.15,3.24s.42,2.06,1.26,2.74c.84.67,2.39,1.42,4.64,2.23l10.08,3.6c2.35.86,4.13,2.06,5.33,3.6,1.2,1.54,1.8,3.53,1.8,5.98,0,3.5-1.1,6.41-3.31,8.71-2.21,2.3-5.57,3.46-10.08,3.46-3.94,0-7.22-.84-9.86-2.52Z"/></g><rect class="l1" x="258.9" y="26.26" width="7.92" height="57.6" transform="translate(317.92 -207.79) rotate(90)"/></g></svg>
    </a>
    <div style="display:flex;align-items:center;gap:14px">
      <div class="nav-links">
        <a href="#our-take">Our Take</a>
        <a href="#schedule">Schedule</a>
        <a href="#side-events">Side Events</a>
      </div>
      <a href="mailto:pc@indianvcs.com?subject=SuperReturn%202026%20-%20Planning%20to%20Attend" class="btn btn-p" style="padding:8px 16px;font-size:12px;letter-spacing:0">Reach Out &rarr;</a>
    </div>
  </div>
</nav>

<section class="hero">
  <div class="hero-inner">
    <div class="hero-eye"><span class="dot"></span> June 2026 &middot; Berlin</div>
    <h1>SuperReturn <em>International</em></h1>
    <p class="hero-sub">6,000+ senior decision-makers. 2,000+ LPs. 80+ countries. Here's what Indian fund managers need to know &mdash; and how we can help.</p>
    <div class="hero-meta">
      <div class="hm"><strong>Jun 8&ndash;12, 2026</strong></div>
      <div class="hm">&middot;</div>
      <div class="hm"><strong>InterContinental, Berlin</strong></div>
      <div class="hm">&middot;</div>
      <div class="hm"><strong>500+ Speakers</strong></div>
      <div class="hm">&middot;</div>
      <div class="hm"><strong>80+ Countries</strong></div>
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <a href="mailto:pc@indianvcs.com?subject=SuperReturn%202026%20-%20Planning%20to%20Attend" class="btn btn-p">Planning to Attend? Talk to Us &rarr;</a>
      <a href="https://informaconnect.com/superreturn-international/" target="_blank" rel="noopener" class="btn btn-s">Official Site &rarr;</a>
    </div>
  </div>
</section>

<section class="sec" id="our-take">
  <div class="wrap">
    <div class="the-link"></div>
    <div class="lb">Our Take</div>
    <h2 class="st">Is it worth the trip? Our honest view.</h2>

    <div class="take">
      <h3>For established fund managers</h3>
      <p>European Fund of Funds are actively looking at India right now &mdash; and SuperReturn is where they are. If European family offices, sovereign wealth, or US endowments are on your LP target list, this is a high-signal room. The hallway conversations matter more than the panels. <strong>If you have warm leads with European allocators, this is where you make them real.</strong></p>
    </div>

    <div class="take">
      <h3>For emerging managers</h3>
      <p>This isn't where you'll close your first commitment &mdash; and that's fine. The Asia-focused LP circuit is already saturated with India deal flow; the LPs here are a different audience. <strong>Think of it as uncharted territory:</strong> European and US allocators who haven't yet formed a view on India. Go to learn the room, not to pitch. The relationships you build now pay off over 2&ndash;3 fundraising cycles.</p>
    </div>

    <p style="font-size:12px;color:var(--t3);line-height:1.6;margin-top:4px"><em>We attended SuperReturn Asia, which shapes this view. Berlin is larger and more European/US-focused &mdash; we'll share sharper insights after attending in June.</em></p>
  </div>
</section>

<section class="sec" id="schedule">
  <div class="wrap">
    <div class="the-link"></div>
    <div class="lb">Schedule</div>
    <h2 class="st">5 days at a glance</h2>
    <p class="sd">Days 1&ndash;2 are specialist summits running in parallel &mdash; pick one track. Days 3&ndash;5 are the main conference with all 6,000+ attendees in one room.</p>

    <div class="sched-group">
      <div class="sched-group-label">Summit Days &middot; June 8&ndash;9</div>
      <div class="sched-row">
        <div class="sched-card">
          <div class="sched-card-day">Monday</div>
          <div class="sched-card-date">8 June</div>
          <ul>
            <li>Private Debt Summit Day 1</li>
            <li>German Private Equity Summit</li>
            <li>AI &amp; Tech Summit</li>
            <li>Sports Investing Summit</li>
            <li>Women in Private Markets</li>
          </ul>
        </div>
        <div class="sched-card">
          <div class="sched-card-day">Tuesday</div>
          <div class="sched-card-date">9 June</div>
          <ul>
            <li>Private Debt Summit Day 2</li>
            <li>Mid-Market Summit</li>
            <li>Secondaries Summit</li>
            <li>Private Wealth Summit</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="sched-group">
      <div class="sched-group-label">Main Conference &middot; June 10&ndash;12</div>
      <div class="sched-row">
        <div class="sched-card mc">
          <div class="sched-card-day">Wednesday</div>
          <div class="sched-card-date">10 June</div>
          <ul>
            <li class="hi">State of the Union 2026</li>
            <li class="hi">Fundraising &mdash; Bracing for a Busy 2026?</li>
            <li>David Rubenstein keynote</li>
            <li>LP-GP Matchmaking (Allocate)</li>
            <li>Marlene Bar Evening</li>
          </ul>
        </div>
        <div class="sched-card mc">
          <div class="sched-card-day">Thursday</div>
          <div class="sched-card-date">11 June</div>
          <ul>
            <li>Exits &amp; Deal Activity</li>
            <li class="hi">Reassessing Asia Private Equity</li>
            <li>Al Gore keynote</li>
            <li>LP-GP Matchmaking (Allocate)</li>
            <li>Berlin Zoo Reception (eve.)</li>
          </ul>
        </div>
        <div class="sched-card mc">
          <div class="sched-card-day">Friday</div>
          <div class="sched-card-date">12 June</div>
          <ul>
            <li>Co-Investments 2026</li>
            <li class="hi">Emerging Manager Programs</li>
            <li>How to Pitch (workshop)</li>
            <li class="dim">Closes 3 PM</li>
          </ul>
        </div>
      </div>
    </div>

    <div style="background:#fff;border:1px solid var(--border);border-radius:10px;padding:22px">
      <div class="lb" style="margin-bottom:12px">Sessions we'd highlight for Indian GPs</div>
      <ul class="session-list">
        <li>Reassessing Asia Private Equity &mdash; closed-door, Thursday</li>
        <li>Fundraising &mdash; Bracing for a Busy 2026? &mdash; Wednesday</li>
        <li>Emerging Manager Programs (DEI is Dead) &mdash; Friday</li>
        <li>LP-GP Matchmaking via Allocate &mdash; Wednesday &amp; Thursday</li>
      </ul>
    </div>
    <p style="font-size:12px;color:var(--t3);margin-top:12px">
      Full agenda on the <a href="https://informaconnect.com/superreturn-international/" target="_blank" rel="noopener" style="color:var(--red)">official SuperReturn site &rarr;</a>
    </p>
  </div>
</section>

<section class="sec" id="side-events">
  <div class="wrap">
    <div class="the-link"></div>
    <div class="lb">Side Events</div>
    <h2 class="st">What's happening on the margins</h2>

    <div class="side-box">
      <p>We're hearing about a few side events being organised for Indian and Asia-focused GPs during SuperReturn week in Berlin. As we confirm details, we'll keep this page updated.</p>
      <p>If you're attending, <strong>ping us directly</strong> &mdash; we'll loop you in as soon as we know more.</p>
      <a href="mailto:pc@indianvcs.com?subject=SuperReturn%202026%20-%20Side%20Events" class="btn btn-p">Ping us &rarr; pc@indianvcs.com</a>
    </div>
  </div>
</section>

<section class="sec" id="help">
  <div class="wrap">
    <div class="cta-banner">
      <h3>Planning to attend? We can help.</h3>
      <p>Indian VCs is building a bridge between India's venture ecosystem and global LP networks. If you're considering SuperReturn, we're here to support.</p>
      <div class="cta-opts">
        <div class="cta-o"><h4>10% Off Passes</h4><p>Use our partner code FKR3646IVCS at checkout for 10% off.</p></div>
        <div class="cta-o"><h4>Event Prep &amp; Insights</h4><p>Sessions, LPs to target, prep advice. Happy to jump on a call.</p></div>
        <div class="cta-o"><h4>India Side Event</h4><p>We may host a side event for Indian GPs in Berlin. Interested? Tell us.</p></div>
        <div class="cta-o"><h4>Already Going?</h4><p>Let us know! We'd love to coordinate and connect Indian GPs attending.</p></div>
      </div>
      <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:8px;padding:16px 20px;margin-bottom:16px;display:inline-block">
        <p style="font-size:13px;color:var(--cream);margin-bottom:4px;font-weight:600">10% off with our partner code</p>
        <p style="font-size:20px;font-weight:700;color:var(--red);letter-spacing:2px;margin-bottom:4px;font-family:'DM Sans',sans-serif">FKR3646IVCS</p>
        <p style="font-size:11px;color:#8a837c;margin-bottom:0">Use at checkout on the official SuperReturn site</p>
      </div>
      <br>
      <a href="mailto:pc@indianvcs.com?subject=SuperReturn%202026%20-%20Indian%20VCs" class="btn btn-p">Reach Out &rarr; pc@indianvcs.com</a>
      <p style="font-size:11px;color:#78706a;margin-top:12px;margin-bottom:0">Happy to get on a call anytime. No sales pitch &mdash; just here to help Indian fund managers navigate the global LP landscape.</p>
    </div>
  </div>
</section>

<footer class="footer">
  <div class="footer-logo">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420.99 60.48"><defs><style>.f1{fill:#d21905}.f1,.f2{stroke-width:0}.f2{fill:#191816}</style></defs><g><g><path class="f2" d="M0,59.04v-1.51l6.62-1.08V4.03L0,3.02v-1.58h21.17v1.58l-6.62,1.01v52.42l6.62,1.08v1.51H0Z"/><path class="f2" d="M25.99,57.6l5.04-.72V23.9l-5.04-.72v-1.44h12.24v7.78c1.78-2.59,3.86-4.64,6.26-6.16,2.4-1.51,4.99-2.27,7.78-2.27,3.46,0,6.18.86,8.17,2.59,1.99,1.73,2.99,4.3,2.99,7.7v25.49l5.04.72v1.44h-16.56v-1.44l4.32-.72v-25.34c0-2.5-.5-4.43-1.51-5.8-1.01-1.37-2.57-2.05-4.68-2.05s-4.33.8-6.37,2.41c-2.04,1.61-3.85,3.59-5.44,5.94v24.84l4.32.72v1.44h-16.56v-1.44Z"/><path class="f2" d="M81.07,57.35c-2.59-1.61-4.61-3.86-6.05-6.77-1.44-2.9-2.16-6.3-2.16-10.19s.72-7.28,2.16-10.19c1.44-2.9,3.46-5.15,6.05-6.73,2.59-1.58,5.59-2.38,9-2.38,2.78,0,5.21.73,7.27,2.2,2.06,1.46,3.7,3.47,4.9,6.01V3.6l-5.04-.72v-1.44h12.24v55.44l5.04.72v1.44h-12.24v-7.49c-1.2,2.54-2.83,4.55-4.9,6.01-2.06,1.46-4.49,2.2-7.27,2.2-3.41,0-6.41-.8-9-2.41ZM96.52,56.12c1.7-1.22,3.07-2.86,4.1-4.9,1.03-2.04,1.57-4.26,1.62-6.66v-8.28c-.05-2.4-.59-4.62-1.62-6.66-1.03-2.04-2.4-3.67-4.1-4.9-1.7-1.22-3.61-1.84-5.72-1.84-6.67,0-10.01,4.63-10.01,13.9v7.2c0,9.31,3.34,13.97,10.01,13.97,2.11,0,4.02-.61,5.72-1.84Z"/><path class="f2" d="M118.01,59.04v-1.44l5.04-.72V23.98l-5.04-.72v-1.44h12.24v35.06l5.04.72v1.44h-17.28Z"/><path class="f2" d="M143.06,57.35c-1.97-1.61-2.95-4-2.95-7.16,0-4.51,1.9-7.72,5.69-9.61,3.79-1.9,8.18-2.84,13.18-2.84h4.82v-5.54c0-2.5-.28-4.43-.83-5.8-.55-1.37-1.4-2.33-2.56-2.88-1.15-.55-2.71-.83-4.68-.83-2.26,0-3.94.44-5.04,1.33-1.11.89-1.66,2.08-1.66,3.56,0,1.39.67,2.3,2.02,2.74,0,1.2-.46,2.26-1.37,3.17s-1.99,1.37-3.24,1.37c-1.34,0-2.42-.37-3.24-1.12-.82-.74-1.22-1.88-1.22-3.42,0-2.78,1.39-5.02,4.18-6.7,2.78-1.68,6.26-2.52,10.44-2.52,9.6,0,14.4,4.18,14.4,12.53v20.59c0,1.06.23,1.86.68,2.41.46.55,1.12.83,1.98.83.82,0,1.46-.28,1.94-.83.48-.55.72-1.31.72-2.27h1.51c0,1.68-.54,3-1.62,3.96-1.08.96-2.58,1.44-4.5,1.44-2.21,0-4.07-.64-5.58-1.91-1.51-1.27-2.29-3.25-2.34-5.94-1.15,2.45-2.92,4.37-5.29,5.76s-5,2.09-7.88,2.09c-3.07,0-5.59-.8-7.56-2.41Z"/><path class="f2" d="M179.57,57.6l5.04-.72V23.9l-5.04-.72v-1.44h12.24v7.78c1.78-2.59,3.86-4.64,6.26-6.16,2.4-1.51,4.99-2.27,7.78-2.27,3.46,0,6.18.86,8.17,2.59,1.99,1.73,2.99,4.3,2.99,7.7v25.49l5.04.72v1.44h-16.56v-1.44l4.32-.72v-25.34c0-2.5-.5-4.43-1.51-5.8-1.01-1.37-2.57-2.05-4.68-2.05s-4.33.8-6.37,2.41c-2.04,1.61-3.85,3.59-5.44,5.94v24.84l4.32.72v1.44h-16.56v-1.44Z"/></g><g><path class="f2" d="M313.49,60.48l-20.74-56.45-5.76-1.01v-1.58h21.1v1.58l-6.77.86,15.84,43.13,15.55-40.75-8.28-3.24v-1.58h15.48v1.58l-5.26,3.17-20.59,54.29h-.58Z"/><path class="f2" d="M352.88,56.66c-3.94-2.54-6.97-6.1-9.11-10.66-2.14-4.56-3.2-9.82-3.2-15.77s1.09-11.22,3.28-15.8c2.18-4.58,5.28-8.14,9.29-10.66,4.01-2.52,8.63-3.78,13.86-3.78,2.06,0,4.16.36,6.3,1.08,2.13.72,4.07,1.73,5.8,3.02l4.82-4.1h1.51v17.86h-1.51l-4.46-11.16c-1.68-1.54-3.64-2.76-5.87-3.67-2.23-.91-4.43-1.37-6.59-1.37-3.36,0-6.32.86-8.89,2.59-2.57,1.73-4.57,4.25-6.01,7.56-1.44,3.31-2.16,7.25-2.16,11.81v13.18c0,4.56.7,8.5,2.09,11.81,1.39,3.31,3.34,5.84,5.83,7.6,2.5,1.75,5.42,2.63,8.78,2.63,2.45,0,4.9-.54,7.34-1.62,2.45-1.08,4.49-2.53,6.12-4.36l4.18-11.59h1.51v18.5h-1.51l-5.18-3.67c-1.73,1.39-3.7,2.47-5.9,3.24-2.21.77-4.39,1.15-6.55,1.15-5.23,0-9.82-1.27-13.75-3.82Z"/><path class="f2" d="M397.73,57.24c-2.64-1.68-3.96-3.86-3.96-6.55,0-1.39.37-2.48,1.12-3.28.74-.79,1.74-1.19,2.99-1.19.96,0,1.78.24,2.45.72.67.48,1.15,1.15,1.44,2.02-1.06,1.15-1.58,2.38-1.58,3.67,0,1.49.67,2.78,2.02,3.89,1.34,1.1,3.14,1.66,5.4,1.66,3.02,0,5.5-.68,7.42-2.05,1.92-1.37,2.88-3.2,2.88-5.51,0-1.34-.41-2.35-1.22-3.02-.82-.67-2.4-1.44-4.75-2.3l-10.87-3.96c-4.27-1.54-6.41-4.39-6.41-8.57,0-3.41,1.18-6.2,3.53-8.39,2.35-2.18,5.59-3.28,9.72-3.28,3.41,0,6.32.78,8.75,2.34,2.42,1.56,3.64,3.78,3.64,6.66,0,1.15-.31,2.08-.94,2.77-.62.7-1.44,1.04-2.45,1.04s-1.84-.28-2.48-.83c-.65-.55-.97-1.31-.97-2.27.62-.48,1.05-1,1.3-1.55.24-.55.36-1.21.36-1.98,0-1.34-.59-2.45-1.76-3.31-1.18-.86-2.99-1.3-5.44-1.3-2.11,0-3.92.32-5.44.97s-2.65,1.5-3.42,2.56c-.77,1.06-1.15,2.14-1.15,3.24s.42,2.06,1.26,2.74c.84.67,2.39,1.42,4.64,2.23l10.08,3.6c2.35.86,4.13,2.06,5.33,3.6,1.2,1.54,1.8,3.53,1.8,5.98,0,3.5-1.1,6.41-3.31,8.71-2.21,2.3-5.57,3.46-10.08,3.46-3.94,0-7.22-.84-9.86-2.52Z"/></g><rect class="f1" x="258.9" y="26.26" width="7.92" height="57.6" transform="translate(317.92 -207.79) rotate(90)"/></g></svg>
  </div>
  <p style="margin-bottom:5px">Building global LP-GP networks for India's venture ecosystem</p>
  <p>Independent guide. Not affiliated with SuperReturn or Informa Connect.</p>
</footer>
`;

export default function HomePage() {
  return <div dangerouslySetInnerHTML={{ __html: homeMarkup }} />;
}
