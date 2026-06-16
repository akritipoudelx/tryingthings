import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Platform() {
  useEffect(() => {
    const s = document.createElement('script');
    s.src = '/js/webflow.js';
    document.body.appendChild(s);

    const t = document.createElement('script');
    t.src = 'https://tally.so/widgets/embed.js';
    document.body.appendChild(t);

    return () => {
      if (document.body.contains(s)) document.body.removeChild(s);
      if (document.body.contains(t)) document.body.removeChild(t);
    };
  }, []);

  return (
    <div className="page-wrapper">
      <style>{`
        :root {
          --ink: #14150E;
          --pine: #2D3F1A;
          --sage: #8A9F52;
          --signal: #62B91A;
          --ground: #FAF7F0;
          --surface: #EDE4D3;
          --surface-soft: #F4ECDC;
          --rule: #D8CFBB;
          --ink-muted: #5C5950;
          --white: #FFFFFF;
        }

        .enrich-mono {
          font-family: "SF Mono","JetBrains Mono","Fira Code",Menlo,Consolas,monospace;
        }

        /* HERO */
        .enrich-hero {
          background: var(--pine);
          color: var(--white);
          padding: 100px 24px 80px;
          text-align: left;
        }
        .enrich-hero-inner {
          max-width: 860px;
          margin: 0 auto;
        }
        .enrich-eyebrow {
          font-family: "SF Mono","JetBrains Mono","Fira Code",Menlo,Consolas,monospace;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--sage);
          margin-bottom: 20px;
        }
        .enrich-hero h1 {
          font-family: 'Public Sans', sans-serif;
          font-weight: 600;
          font-size: clamp(40px, 6vw, 72px);
          line-height: 1.05;
          margin: 0 0 24px;
          color: var(--white);
        }
        .enrich-hero-sub {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          line-height: 1.6;
          color: rgba(255,255,255,0.75);
          max-width: 560px;
          margin: 0;
        }

        /* WHAT IS ENRICH */
        .enrich-what {
          background: var(--ground);
          padding: 80px 24px;
          border-bottom: 1px solid var(--rule);
        }
        .enrich-section-inner {
          max-width: 860px;
          margin: 0 auto;
        }
        .enrich-label {
          font-family: "SF Mono","JetBrains Mono","Fira Code",Menlo,Consolas,monospace;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink-muted);
          margin-bottom: 16px;
        }
        .enrich-what h2 {
          font-family: 'Public Sans', sans-serif;
          font-weight: 600;
          font-size: clamp(26px, 3.5vw, 38px);
          color: var(--ink);
          margin: 0 0 20px;
        }
        .enrich-what p {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: var(--ink-muted);
          max-width: 620px;
          margin: 0;
        }

        /* DASHBOARD SECTION */
        .enrich-dashboard {
          background: var(--surface-soft);
          padding: 80px 24px;
          border-bottom: 1px solid var(--rule);
        }
        .enrich-dashboard-header {
          margin-bottom: 40px;
        }
        .enrich-dashboard-header h2 {
          font-family: 'Public Sans', sans-serif;
          font-weight: 600;
          font-size: clamp(22px, 3vw, 32px);
          color: var(--ink);
          margin: 0;
        }
        .enrich-card {
          background: var(--white);
          border: 1px solid var(--rule);
          border-radius: 10px;
          overflow: hidden;
        }
        .enrich-card-header {
          background: var(--pine);
          color: var(--white);
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .enrich-card-header-title {
          font-family: "SF Mono","JetBrains Mono","Fira Code",Menlo,Consolas,monospace;
          font-size: 12px;
          letter-spacing: 0.08em;
        }
        .enrich-card-header-upc {
          font-family: "SF Mono","JetBrains Mono","Fira Code",Menlo,Consolas,monospace;
          font-size: 11px;
          color: var(--sage);
          margin-left: auto;
        }
        .enrich-card-body {
          padding: 24px 20px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }
        .enrich-data-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .enrich-data-group-label {
          font-family: "SF Mono","JetBrains Mono","Fira Code",Menlo,Consolas,monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--sage);
          border-bottom: 1px solid var(--rule);
          padding-bottom: 6px;
          margin-bottom: 4px;
        }
        .enrich-data-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 8px;
        }
        .enrich-data-key {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          color: var(--ink-muted);
          white-space: nowrap;
        }
        .enrich-data-val {
          font-family: "SF Mono","JetBrains Mono","Fira Code",Menlo,Consolas,monospace;
          font-size: 11px;
          color: var(--ink);
          text-align: right;
        }
        .enrich-data-val.highlight {
          color: var(--signal);
        }
        .enrich-data-val.warn {
          color: #C85A00;
        }

        /* NFPA DIAMOND */
        .enrich-nfpa-wrap {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }
        .enrich-nfpa-diamond {
          width: 80px;
          height: 80px;
          position: relative;
          transform: rotate(45deg);
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 2px;
          background: var(--rule);
          border: 2px solid var(--rule);
          border-radius: 2px;
          overflow: hidden;
        }
        .enrich-nfpa-q {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .enrich-nfpa-q span {
          transform: rotate(-45deg);
          font-family: "SF Mono","JetBrains Mono","Fira Code",Menlo,Consolas,monospace;
          font-size: 15px;
          font-weight: 700;
          color: var(--white);
          line-height: 1;
        }
        .enrich-nfpa-blue  { background: #1B4FD8; }
        .enrich-nfpa-red   { background: #C8221A; }
        .enrich-nfpa-yellow{ background: #E8B800; }
        .enrich-nfpa-white { background: #E8E8E8; }
        .enrich-nfpa-white span { color: var(--ink); }
        .enrich-nfpa-legend {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .enrich-nfpa-legend-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          color: var(--ink-muted);
        }
        .enrich-nfpa-dot {
          width: 10px;
          height: 10px;
          border-radius: 2px;
          flex-shrink: 0;
        }

        /* INSIGHTS TABLE */
        .enrich-insights {
          background: var(--ground);
          padding: 80px 24px;
          border-bottom: 1px solid var(--rule);
        }
        .enrich-insights h2 {
          font-family: 'Public Sans', sans-serif;
          font-weight: 600;
          font-size: clamp(22px, 3vw, 32px);
          color: var(--ink);
          margin: 0 0 8px;
        }
        .enrich-insights-sub {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: var(--ink-muted);
          margin-bottom: 36px;
          max-width: 580px;
          line-height: 1.6;
        }
        .enrich-triage-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 28px;
        }
        .enrich-triage-card {
          background: var(--white);
          border: 1px solid var(--rule);
          border-radius: 8px;
          padding: 20px 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .enrich-triage-status {
          font-family: "SF Mono","JetBrains Mono","Fira Code",Menlo,Consolas,monospace;
          font-size: 12px;
          color: var(--ink);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .enrich-triage-meaning {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: var(--ink-muted);
          line-height: 1.5;
        }
        .enrich-triage-action {
          font-family: "SF Mono","JetBrains Mono","Fira Code",Menlo,Consolas,monospace;
          font-size: 10px;
          color: var(--sage);
          letter-spacing: 0.05em;
          margin-top: auto;
        }
        .enrich-insights-note {
          background: var(--surface);
          border-left: 3px solid var(--sage);
          border-radius: 0 6px 6px 0;
          padding: 14px 18px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: var(--ink-muted);
          line-height: 1.6;
          max-width: 640px;
        }

        /* ANALYTICS */
        .enrich-analytics {
          background: var(--pine);
          color: var(--white);
          padding: 80px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .enrich-analytics h2 {
          font-family: 'Public Sans', sans-serif;
          font-weight: 600;
          font-size: clamp(22px, 3vw, 32px);
          color: var(--white);
          margin: 0 0 8px;
        }
        .enrich-analytics-sub {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          margin-bottom: 40px;
        }
        .enrich-stat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
          gap: 16px;
        }
        .enrich-stat-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 20px 18px;
        }
        .enrich-stat-label {
          font-family: "SF Mono","JetBrains Mono","Fira Code",Menlo,Consolas,monospace;
          font-size: 9px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--sage);
          margin-bottom: 10px;
        }
        .enrich-stat-value {
          font-family: 'Public Sans', sans-serif;
          font-weight: 600;
          font-size: 32px;
          color: var(--white);
          line-height: 1;
          margin-bottom: 4px;
        }
        .enrich-stat-desc {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          color: rgba(255,255,255,0.45);
          line-height: 1.4;
        }

        /* CLIENTS */
        .enrich-clients {
          background: var(--ground);
          padding: 64px 24px;
          border-bottom: 1px solid var(--rule);
        }
        .enrich-clients h2 {
          font-family: 'Public Sans', sans-serif;
          font-weight: 600;
          font-size: clamp(18px, 2.5vw, 26px);
          color: var(--ink);
          margin: 0 0 28px;
        }
        .enrich-client-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .enrich-client-pill {
          background: var(--white);
          border: 1px solid var(--rule);
          border-radius: 100px;
          padding: 7px 18px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: var(--ink);
          white-space: nowrap;
        }
        .enrich-client-pill.supplier {
          background: var(--surface);
          color: var(--ink-muted);
          font-style: italic;
        }

        /* HOW TO GET IN */
        .enrich-howin {
          background: var(--surface-soft);
          padding: 80px 24px;
          border-bottom: 1px solid var(--rule);
        }
        .enrich-howin h2 {
          font-family: 'Public Sans', sans-serif;
          font-weight: 600;
          font-size: clamp(22px, 3vw, 32px);
          color: var(--ink);
          margin: 0 0 36px;
        }
        .enrich-steps {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 600px;
        }
        .enrich-step {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .enrich-step-num {
          font-family: "SF Mono","JetBrains Mono","Fira Code",Menlo,Consolas,monospace;
          font-size: 11px;
          color: var(--sage);
          background: var(--white);
          border: 1px solid var(--rule);
          border-radius: 4px;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .enrich-step-text {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: var(--ink-muted);
          line-height: 1.6;
        }
        .enrich-step-text strong {
          color: var(--ink);
          font-weight: 600;
        }
        .enrich-step-code {
          display: inline;
          font-family: "SF Mono","JetBrains Mono","Fira Code",Menlo,Consolas,monospace;
          font-size: 12px;
          background: var(--surface);
          border: 1px solid var(--rule);
          border-radius: 3px;
          padding: 1px 6px;
          color: var(--ink);
        }

        /* CTA */
        .enrich-cta {
          background: var(--ground);
          padding: 80px 24px 100px;
          text-align: center;
        }
        .enrich-cta h2 {
          font-family: 'Public Sans', sans-serif;
          font-weight: 600;
          font-size: clamp(26px, 4vw, 44px);
          color: var(--ink);
          margin: 0 0 14px;
        }
        .enrich-cta p {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: var(--ink-muted);
          margin: 0 0 36px;
        }
        .enrich-btn {
          display: inline-block;
          background: var(--pine);
          color: var(--white);
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 32px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.15s;
        }
        .enrich-btn:hover {
          background: var(--signal);
          color: var(--white);
        }

        @media (max-width: 600px) {
          .enrich-card-body {
            grid-template-columns: 1fr;
          }
          .enrich-stat-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>

      <Navbar />

      {/* HERO */}
      <section className="enrich-hero">
        <div className="enrich-hero-inner">
          <div className="enrich-eyebrow">S2 · Enrich</div>
          <h1>Gotta embed them all.</h1>
          <p className="enrich-hero-sub">
            Every product in your catalog. Classified, searchable, and explained — with the full regulatory picture from one place.
          </p>
        </div>
      </section>

      {/* WHAT IS ENRICH */}
      <section className="enrich-what">
        <div className="enrich-section-inner">
          <div className="enrich-label">What it is</div>
          <h2>The classification portal.</h2>
          <p>
            Enrich is the product classification portal for retailers and suppliers. It's where smarter3 output becomes actionable. Upload your catalog, we classify it, and you get back a live searchable dashboard showing every product's regulatory status — waste codes, transport hazards, storage requirements, battery data, and more.
          </p>
        </div>
      </section>

      {/* DASHBOARD SECTION */}
      <section className="enrich-dashboard">
        <div className="enrich-section-inner">
          <div className="enrich-dashboard-header">
            <div className="enrich-label">The Dashboard</div>
            <h2>One card. Full picture.</h2>
          </div>

          <div className="enrich-card">
            <div className="enrich-card-header">
              <span className="enrich-card-header-title">Rust-Oleum Stops Rust Spray Paint — Flat Black 12 oz</span>
              <span className="enrich-card-header-upc">UPC 020066301156</span>
            </div>
            <div className="enrich-card-body">

              {/* Waste */}
              <div className="enrich-data-group">
                <div className="enrich-data-group-label">Waste</div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">RCRA codes</span>
                  <span className="enrich-data-val highlight">D001, F003</span>
                </div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">State codes (CA)</span>
                  <span className="enrich-data-val">741, 135</span>
                </div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">Waste category</span>
                  <span className="enrich-data-val warn">Hazardous</span>
                </div>
              </div>

              {/* Transportation */}
              <div className="enrich-data-group">
                <div className="enrich-data-group-label">Transportation</div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">DOT (ground)</span>
                  <span className="enrich-data-val">Flammable Liquid, n.o.s.</span>
                </div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">IATA (air)</span>
                  <span className="enrich-data-val warn">Restricted</span>
                </div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">IMDG (ocean)</span>
                  <span className="enrich-data-val">Class 3 PG II</span>
                </div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">Least-burden option</span>
                  <span className="enrich-data-val highlight">Ground LTD QTY</span>
                </div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">Exception code</span>
                  <span className="enrich-data-val enrich-mono">§173.150(b)</span>
                </div>
              </div>

              {/* Storage & Handling + NFPA */}
              <div className="enrich-data-group">
                <div className="enrich-data-group-label">Storage &amp; Handling</div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">Flash point</span>
                  <span className="enrich-data-val warn">20°C (68°F)</span>
                </div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">IFC code</span>
                  <span className="enrich-data-val">IFC-3704.2</span>
                </div>
                <div style={{ marginTop: 12 }}>
                  <div className="enrich-nfpa-wrap">
                    <div className="enrich-nfpa-diamond">
                      {/* top = blue (health), right = red (fire), bottom = yellow (reactivity), left = white (special) */}
                      {/* Grid order: top-left=blue, top-right=red, bottom-left=white, bottom-right=yellow */}
                      <div className="enrich-nfpa-q enrich-nfpa-blue"><span>1</span></div>
                      <div className="enrich-nfpa-q enrich-nfpa-red"><span>3</span></div>
                      <div className="enrich-nfpa-q enrich-nfpa-white"><span>—</span></div>
                      <div className="enrich-nfpa-q enrich-nfpa-yellow"><span>0</span></div>
                    </div>
                    <div className="enrich-nfpa-legend">
                      <div className="enrich-nfpa-legend-row"><div className="enrich-nfpa-dot" style={{background:'#1B4FD8'}}/>Health: 1</div>
                      <div className="enrich-nfpa-legend-row"><div className="enrich-nfpa-dot" style={{background:'#C8221A'}}/>Fire: 3</div>
                      <div className="enrich-nfpa-legend-row"><div className="enrich-nfpa-dot" style={{background:'#E8B800'}}/>Reactivity: 0</div>
                      <div className="enrich-nfpa-legend-row"><div className="enrich-nfpa-dot" style={{background:'#E8E8E8',border:'1px solid #ccc'}}/>Special: —</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Battery */}
              <div className="enrich-data-group">
                <div className="enrich-data-group-label">Battery</div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">Contains battery</span>
                  <span className="enrich-data-val">No</span>
                </div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">Battery chemistry</span>
                  <span className="enrich-data-val">—</span>
                </div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">Cell type</span>
                  <span className="enrich-data-val">—</span>
                </div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">Lithium Wh</span>
                  <span className="enrich-data-val">—</span>
                </div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">UN38.3 report</span>
                  <span className="enrich-data-val">N/A</span>
                </div>
              </div>

              {/* Retailer & Product Details */}
              <div className="enrich-data-group">
                <div className="enrich-data-group-label">Retailer Details</div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">Dept.</span>
                  <span className="enrich-data-val">Paint &amp; Supplies</span>
                </div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">Category</span>
                  <span className="enrich-data-val">Spray Paint</span>
                </div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">SKU</span>
                  <span className="enrich-data-val enrich-mono">RST-7779830</span>
                </div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">Restricted states</span>
                  <span className="enrich-data-val warn">CA, NY, CT</span>
                </div>
              </div>

              {/* Chemical Attributes */}
              <div className="enrich-data-group">
                <div className="enrich-data-group-label">Chemical Attributes</div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">VOC content</span>
                  <span className="enrich-data-val warn">High</span>
                </div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">Propellant</span>
                  <span className="enrich-data-val">Propane / Butane</span>
                </div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">Aerosol class</span>
                  <span className="enrich-data-val">Level 3</span>
                </div>
                <div className="enrich-data-row">
                  <span className="enrich-data-key">SDS version</span>
                  <span className="enrich-data-val enrich-mono">2023-08-14</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SMARTER INSIGHTS */}
      <section className="enrich-insights">
        <div className="enrich-section-inner">
          <div className="enrich-label">Smarter Insights</div>
          <h2>Product Truth Triage</h2>
          <p className="enrich-insights-sub">
            Not every product has the same data quality. Enrich surfaces confidence signals so you know what to trust — and what to verify.
          </p>

          <div className="enrich-triage-grid">
            <div className="enrich-triage-card">
              <div className="enrich-triage-status">✅ Verified</div>
              <div className="enrich-triage-meaning">High-confidence match from multiple authoritative sources.</div>
              <div className="enrich-triage-action">→ No action needed</div>
            </div>
            <div className="enrich-triage-card">
              <div className="enrich-triage-status">🔍 Digital Trace</div>
              <div className="enrich-triage-meaning">Data found online — PIM system, brand website, or public listing.</div>
              <div className="enrich-triage-action">→ Check PIM or website</div>
            </div>
            <div className="enrich-triage-card">
              <div className="enrich-triage-status">📷 IRL Observation</div>
              <div className="enrich-triage-meaning">Minimal digital footprint. Physical product is the only source of truth.</div>
              <div className="enrich-triage-action">→ Store associate scans product</div>
            </div>
            <div className="enrich-triage-card">
              <div className="enrich-triage-status">⏳ Unscored</div>
              <div className="enrich-triage-meaning">Not yet classified. In the queue.</div>
              <div className="enrich-triage-action">→ Awaiting classification</div>
            </div>
          </div>

          <div className="enrich-insights-note">
            Not every product has a digital trail. Luxury goods, specialty chemicals, private-label items — sometimes the only source of truth is the physical box on the shelf.
          </div>
        </div>
      </section>

      {/* ANALYTICS */}
      <section className="enrich-analytics">
        <div className="enrich-section-inner">
          <div className="enrich-label" style={{color:'var(--sage)'}}>Analytics</div>
          <h2>Portfolio-level visibility.</h2>
          <p className="enrich-analytics-sub">Aggregate metrics across your full catalog — not just line-item classification.</p>

          <div className="enrich-stat-grid">
            <div className="enrich-stat-card">
              <div className="enrich-stat-label">Hazard Distribution</div>
              <div className="enrich-stat-value">34%</div>
              <div className="enrich-stat-desc">of catalog has at least one regulated hazard</div>
            </div>
            <div className="enrich-stat-card">
              <div className="enrich-stat-label">RSL Coverage</div>
              <div className="enrich-stat-value">91%</div>
              <div className="enrich-stat-desc">products with restricted substance list check</div>
            </div>
            <div className="enrich-stat-card">
              <div className="enrich-stat-label">Classification Quality</div>
              <div className="enrich-stat-value">4.7<span style={{fontSize:18,fontWeight:400}}>/5</span></div>
              <div className="enrich-stat-desc">avg. confidence score across catalog</div>
            </div>
            <div className="enrich-stat-card">
              <div className="enrich-stat-label">Attestation Coverage</div>
              <div className="enrich-stat-value">78%</div>
              <div className="enrich-stat-desc">products with supplier attestation on file</div>
            </div>
            <div className="enrich-stat-card">
              <div className="enrich-stat-label">Anomalies</div>
              <div className="enrich-stat-value">12</div>
              <div className="enrich-stat-desc">flagged items requiring review this cycle</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO USES IT */}
      <section className="enrich-clients">
        <div className="enrich-section-inner">
          <div className="enrich-label">Who uses it</div>
          <h2>Trusted by retailers &amp; suppliers.</h2>
          <div className="enrich-client-list">
            <span className="enrich-client-pill">Bass Pro</span>
            <span className="enrich-client-pill">Costco</span>
            <span className="enrich-client-pill">Lowe's</span>
            <span className="enrich-client-pill">Macy's</span>
            <span className="enrich-client-pill">Nordstrom</span>
            <span className="enrich-client-pill">Wegmans</span>
            <span className="enrich-client-pill supplier">Plipform · supplier</span>
          </div>
        </div>
      </section>

      {/* HOW TO GET IN */}
      <section className="enrich-howin">
        <div className="enrich-section-inner">
          <div className="enrich-label">How to get in</div>
          <h2>Three ways to start.</h2>
          <div className="enrich-steps">
            <div className="enrich-step">
              <div className="enrich-step-num">01</div>
              <div className="enrich-step-text">
                <strong>Batch upload.</strong> Drop a <span className="enrich-step-code">.csv</span> with your UPCs and product names. We handle the rest.
              </div>
            </div>
            <div className="enrich-step">
              <div className="enrich-step-num">02</div>
              <div className="enrich-step-text">
                <strong>One at a time.</strong> Add individual products via the portal — useful for spot-checks or new SKU onboarding.
              </div>
            </div>
            <div className="enrich-step">
              <div className="enrich-step-num">03</div>
              <div className="enrich-step-text">
                <strong>Search instantly.</strong> Classification runs against <span className="enrich-step-code">smarter3_canonical</span> and surfaces in real time. Search by UPC or product name.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="enrich-cta">
        <div className="enrich-section-inner">
          <div className="enrich-label" style={{textAlign:'center'}}>Ready?</div>
          <h2>Get Sorted.</h2>
          <p>Start classifying your catalog. No setup fee. No minimum SKU count.</p>
          <button
            className="enrich-btn"
            data-tally-open="xXRkXr"
            data-tally-overlay="1"
            data-tally-layout="modal"
            data-tally-hide-title="1"
            data-tally-align-left="1"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
          >
            Get Sorted
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
