import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Company() {
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
        /* ident- namespace to avoid Webflow CSS conflicts */

        .ident-hero {
          background-color: #2D3F1A;
          padding: 120px 0 96px;
          position: relative;
          overflow: hidden;
        }
        .ident-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 80% 20%, rgba(98,185,26,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 10% 80%, rgba(138,159,82,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .ident-container {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .ident-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(98,185,26,0.18);
          border: 1px solid rgba(98,185,26,0.35);
          border-radius: 4px;
          padding: 4px 10px;
          margin-bottom: 24px;
        }
        .ident-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #62B91A;
        }
        .ident-eyebrow-text {
          font-family: 'Public Sans', sans-serif;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #62B91A;
        }
        .ident-hero-headline {
          font-family: 'Public Sans', sans-serif;
          font-weight: 600;
          font-size: clamp(48px, 6vw, 80px);
          line-height: 1.05;
          color: #FFFFFF;
          margin: 0 0 20px;
          letter-spacing: -0.02em;
        }
        .ident-hero-sub {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          line-height: 1.65;
          color: rgba(255,255,255,0.65);
          max-width: 560px;
          margin: 0;
        }

        /* Section scaffolding */
        .ident-section {
          padding: 88px 0;
          border-bottom: 1px solid #D8CFBB;
        }
        .ident-section-bg-ground {
          background: #FAF7F0;
        }
        .ident-section-bg-surface {
          background: #EDE4D3;
        }

        /* Capability layout */
        .ident-cap-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .ident-cap-grid.ident-reverse {
          direction: rtl;
        }
        .ident-cap-grid.ident-reverse > * {
          direction: ltr;
        }
        @media (max-width: 840px) {
          .ident-cap-grid,
          .ident-cap-grid.ident-reverse {
            grid-template-columns: 1fr;
            direction: ltr;
          }
        }

        .ident-cap-label {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #62B91A;
          margin: 0 0 12px;
        }
        .ident-cap-title {
          font-family: 'Public Sans', sans-serif;
          font-weight: 600;
          font-size: clamp(26px, 3vw, 38px);
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #14150E;
          margin: 0 0 18px;
        }
        .ident-cap-body {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: #5C5950;
          margin: 0 0 28px;
        }

        /* Pill tags */
        .ident-pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
        .ident-pill {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #2D3F1A;
          background: #EDE4D3;
          border: 1px solid #D8CFBB;
          border-radius: 3px;
          padding: 4px 10px;
        }
        .ident-pill-note {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #5C5950;
          line-height: 1.5;
          font-style: italic;
          margin: 0;
        }

        /* Code panels */
        .ident-panel {
          background: #14150E;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .ident-panel-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .ident-panel-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .ident-panel-dot-r { background: #FF5F57; }
        .ident-panel-dot-y { background: #FEBC2E; }
        .ident-panel-dot-g { background: #28C840; }
        .ident-panel-filename {
          font-family: 'Courier New', monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.35);
          margin-left: 4px;
        }
        .ident-panel-body {
          padding: 20px 20px 24px;
        }

        /* IO flow */
        .ident-io-flow {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .ident-io-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .ident-io-row:last-child { border-bottom: none; }
        .ident-io-badge {
          font-family: 'Courier New', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 2px 7px;
          border-radius: 2px;
          flex-shrink: 0;
          width: 44px;
          text-align: center;
        }
        .ident-io-badge-in {
          background: rgba(138,159,82,0.2);
          color: #8A9F52;
          border: 1px solid rgba(138,159,82,0.3);
        }
        .ident-io-badge-out {
          background: rgba(98,185,26,0.15);
          color: #62B91A;
          border: 1px solid rgba(98,185,26,0.3);
        }
        .ident-io-file {
          font-family: 'Courier New', monospace;
          font-size: 12px;
          color: rgba(255,255,255,0.75);
          flex: 1;
        }
        .ident-io-check {
          font-size: 13px;
          color: #62B91A;
        }
        .ident-io-divider {
          border-top: 1px solid rgba(255,255,255,0.08);
          margin: 8px 0;
        }
        .ident-code-pre {
          font-family: 'Courier New', monospace;
          font-size: 12.5px;
          line-height: 1.75;
          color: rgba(255,255,255,0.82);
          margin: 0;
          white-space: pre;
          overflow-x: auto;
          background: transparent;
          border: none;
          padding: 0;
        }
        .ident-code-divider {
          border-top: 1px solid rgba(255,255,255,0.06);
          margin: 16px 0;
        }

        /* Batch review decisions */
        .ident-batch-stats {
          font-family: 'Courier New', monospace;
          font-size: 12.5px;
          line-height: 1.75;
          color: rgba(255,255,255,0.75);
          margin: 0 0 16px;
          white-space: pre;
          overflow-x: auto;
        }
        .ident-decision-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
          border-radius: 6px;
          overflow: hidden;
        }
        .ident-decision-cell {
          background: #14150E;
          padding: 16px;
          text-align: center;
        }
        .ident-decision-icon {
          font-size: 18px;
          margin-bottom: 6px;
        }
        .ident-decision-label {
          font-family: 'Courier New', monospace;
          font-size: 10px;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .ident-decision-value {
          font-family: 'Public Sans', sans-serif;
          font-weight: 600;
          font-size: 18px;
          margin-top: 4px;
        }
        .ident-decision-value-green { color: #62B91A; }
        .ident-decision-value-yellow { color: #F5C842; }
        .ident-decision-value-blue { color: #8AB4F8; }

        /* Why it matters */
        .ident-why {
          background: #2D3F1A;
          padding: 88px 0;
        }
        .ident-why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 840px) {
          .ident-why-grid { grid-template-columns: 1fr; }
        }
        .ident-why-label {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #8A9F52;
          margin: 0 0 14px;
        }
        .ident-why-title {
          font-family: 'Public Sans', sans-serif;
          font-weight: 600;
          font-size: clamp(28px, 3.5vw, 42px);
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: #FFFFFF;
          margin: 0 0 32px;
        }
        .ident-risk-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .ident-risk-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .ident-risk-tag {
          font-family: 'Courier New', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 3px 8px;
          border-radius: 2px;
          flex-shrink: 0;
          margin-top: 2px;
          white-space: nowrap;
        }
        .ident-risk-tag-red {
          background: rgba(239,68,68,0.2);
          color: #F87171;
          border: 1px solid rgba(239,68,68,0.3);
        }
        .ident-risk-tag-yellow {
          background: rgba(245,200,66,0.15);
          color: #F5C842;
          border: 1px solid rgba(245,200,66,0.3);
        }
        .ident-risk-tag-orange {
          background: rgba(251,146,60,0.15);
          color: #FB923C;
          border: 1px solid rgba(251,146,60,0.3);
        }
        .ident-risk-text {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.6;
          color: rgba(255,255,255,0.6);
          margin: 0;
        }
        .ident-stat-box {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 40px 36px;
        }
        .ident-stat-num {
          font-family: 'Public Sans', sans-serif;
          font-weight: 600;
          font-size: 64px;
          line-height: 1;
          letter-spacing: -0.04em;
          color: #62B91A;
          margin: 0 0 8px;
        }
        .ident-stat-divider {
          width: 40px;
          height: 2px;
          background: rgba(98,185,26,0.4);
          margin: 16px 0;
        }
        .ident-stat-desc {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255,255,255,0.55);
          margin: 0;
        }

        /* Tech snapshot */
        .ident-tech {
          background: #14150E;
          padding: 88px 0;
        }
        .ident-tech-label {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #8A9F52;
          margin: 0 0 14px;
        }
        .ident-tech-title {
          font-family: 'Public Sans', sans-serif;
          font-weight: 600;
          font-size: clamp(26px, 3vw, 36px);
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #FFFFFF;
          margin: 0 0 48px;
        }
        .ident-tech-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
          border-radius: 8px;
          overflow: hidden;
        }
        @media (max-width: 840px) {
          .ident-tech-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .ident-tech-grid { grid-template-columns: 1fr; }
        }
        .ident-tech-cell {
          background: #1a1b13;
          padding: 28px 24px;
        }
        .ident-tech-cell-label {
          font-family: 'Courier New', monospace;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #62B91A;
          margin: 0 0 10px;
        }
        .ident-tech-cell-value {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          line-height: 1.55;
          color: rgba(255,255,255,0.65);
          margin: 0;
        }
        .ident-tech-cell-value strong {
          color: rgba(255,255,255,0.88);
          font-weight: 500;
        }

        /* Tim queue */
        .ident-tim-card {
          background: #14150E;
          border-radius: 8px;
          padding: 24px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .ident-tim-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .ident-tim-title-text {
          font-family: 'Courier New', monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.06em;
        }
        .ident-tim-badge {
          font-family: 'Courier New', monospace;
          font-size: 10px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 2px;
          background: rgba(245,200,66,0.15);
          color: #F5C842;
          border: 1px solid rgba(245,200,66,0.3);
          letter-spacing: 0.08em;
        }
        .ident-tim-rows {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .ident-tim-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          background: rgba(255,255,255,0.03);
          border-radius: 4px;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .ident-tim-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .ident-tim-dot-pending { background: #F5C842; }
        .ident-tim-dot-rerun   { background: #8AB4F8; }
        .ident-tim-dot-done    { background: #62B91A; }
        .ident-tim-name {
          font-family: 'Courier New', monospace;
          font-size: 11.5px;
          color: rgba(255,255,255,0.7);
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .ident-tim-action {
          font-family: 'Courier New', monospace;
          font-size: 10px;
          color: rgba(255,255,255,0.28);
          letter-spacing: 0.06em;
          flex-shrink: 0;
        }

        /* CTA */
        .ident-cta {
          background: #FAF7F0;
          padding: 96px 0;
          text-align: center;
          border-top: 1px solid #D8CFBB;
        }
        .ident-cta-title {
          font-family: 'Public Sans', sans-serif;
          font-weight: 600;
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #14150E;
          margin: 0 0 16px;
        }
        .ident-cta-sub {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          line-height: 1.6;
          color: #5C5950;
          margin: 0 auto 36px;
          max-width: 460px;
        }
        .ident-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #2D3F1A;
          color: #FFFFFF;
          font-family: 'Public Sans', sans-serif;
          font-weight: 600;
          font-size: 15px;
          letter-spacing: 0.01em;
          padding: 14px 28px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.18s ease;
        }
        .ident-cta-btn:hover {
          background: #3a5220;
        }
        .ident-cta-arrow {
          font-size: 17px;
          line-height: 1;
          display: inline-block;
          transition: transform 0.18s ease;
        }
        .ident-cta-btn:hover .ident-cta-arrow {
          transform: translateX(3px);
        }
      `}</style>

      <Navbar />

      {/* ── Hero ── */}
      <section className="ident-hero">
        <div className="ident-container">
          <div className="ident-eyebrow">
            <span className="ident-eyebrow-dot" />
            <span className="ident-eyebrow-text">S1 · Identify</span>
          </div>
          <h1 className="ident-hero-headline">Meet Sordex.</h1>
          <p className="ident-hero-sub">
            The agent that takes whatever you send — CSV, JSONL, a spreadsheet from 2019 — and figures out what it means.
          </p>
        </div>
      </section>

      {/* ── Step 01: Input Mapping ── */}
      <section className="ident-section ident-section-bg-ground">
        <div className="ident-container">
          <div className="ident-cap-grid">
            {/* Copy */}
            <div>
              <p className="ident-cap-label">Step 01 · Input Mapping</p>
              <h2 className="ident-cap-title">Raw file in.<br />Canonical product out.</h2>
              <p className="ident-cap-body">
                Retailers send data in wildly different formats. Column names change. Fields are missing. Products have different names across different systems. Sordex reads your raw file, understands its structure, and maps it to a canonical product format before any classification begins.
              </p>
              <div className="ident-pill-row">
                <span className="ident-pill">CSV</span>
                <span className="ident-pill">JSONL</span>
                <span className="ident-pill">NDJSON</span>
              </div>
              <p className="ident-pill-note">
                Uses database-managed "skills" — versioned prompt sets tunable per retailer.
              </p>
            </div>
            {/* Panel */}
            <div>
              <div className="ident-panel">
                <div className="ident-panel-header">
                  <span className="ident-panel-dot ident-panel-dot-r" />
                  <span className="ident-panel-dot ident-panel-dot-y" />
                  <span className="ident-panel-dot ident-panel-dot-g" />
                  <span className="ident-panel-filename">sordex · input-mapping</span>
                </div>
                <div className="ident-panel-body">
                  <div className="ident-io-flow">
                    <div className="ident-io-row">
                      <span className="ident-io-badge ident-io-badge-in">IN</span>
                      <span className="ident-io-file">retailer-catalog-q2.csv</span>
                    </div>
                    <div className="ident-io-row">
                      <span className="ident-io-badge ident-io-badge-in">IN</span>
                      <span className="ident-io-file">new-products-april.jsonl</span>
                    </div>
                  </div>
                  <div className="ident-io-divider" />
                  <div className="ident-io-flow">
                    <div className="ident-io-row">
                      <span className="ident-io-badge ident-io-badge-out">OUT</span>
                      <span className="ident-io-file">mapped-products.jsonl</span>
                      <span className="ident-io-check">✓</span>
                    </div>
                    <div className="ident-io-row">
                      <span className="ident-io-badge ident-io-badge-out">OUT</span>
                      <span className="ident-io-file">mapping-summary.json</span>
                      <span className="ident-io-check">✓</span>
                    </div>
                    <div className="ident-io-row">
                      <span className="ident-io-badge ident-io-badge-out">OUT</span>
                      <span className="ident-io-file">input-mapping-report.md</span>
                      <span className="ident-io-check">✓</span>
                    </div>
                  </div>
                  <div className="ident-code-divider" />
                  <pre className="ident-code-pre">{`// canonical product shape
{
  "sku":        "WD-40-11OZ",
  "name":       "WD-40 Multi-Use 11oz",
  "upc":        "079567000115",
  "mapped_at":  "2025-06-16T14:32:01Z",
  "skill_ver":  "v3.2.1"
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Step 02: Batch Review ── */}
      <section className="ident-section ident-section-bg-surface">
        <div className="ident-container">
          <div className="ident-cap-grid ident-reverse">
            {/* Panel (visually right, logically first due to rtl) */}
            <div>
              <div className="ident-panel">
                <div className="ident-panel-header">
                  <span className="ident-panel-dot ident-panel-dot-r" />
                  <span className="ident-panel-dot ident-panel-dot-y" />
                  <span className="ident-panel-dot ident-panel-dot-g" />
                  <span className="ident-panel-filename">sordex · batch-review #4471</span>
                </div>
                <div className="ident-panel-body">
                  <pre className="ident-batch-stats">{`products_evaluated:  3,842
auto_validated:      3,609  // 93.9%
flagged_for_tim:       174
queued_rerun:           59
runtime_mode:  "openai-responses"
model:              "gpt-5.5"`}</pre>
                  <div className="ident-decision-grid">
                    <div className="ident-decision-cell">
                      <div className="ident-decision-icon">✅</div>
                      <div className="ident-decision-label">Validate</div>
                      <div className={`ident-decision-value ident-decision-value-green`}>3,609</div>
                    </div>
                    <div className="ident-decision-cell">
                      <div className="ident-decision-icon">🚩</div>
                      <div className="ident-decision-label">Tim Queue</div>
                      <div className={`ident-decision-value ident-decision-value-yellow`}>174</div>
                    </div>
                    <div className="ident-decision-cell">
                      <div className="ident-decision-icon">🔁</div>
                      <div className="ident-decision-label">Rerun</div>
                      <div className={`ident-decision-value ident-decision-value-blue`}>59</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Copy */}
            <div>
              <p className="ident-cap-label">Step 02 · Batch Review</p>
              <h2 className="ident-cap-title">Audit. Flag.<br />Move on.</h2>
              <p className="ident-cap-body">
                After smarter3 classifies the products, Sordex audits the results. Checks each product against retailer-specific review logic, flags anomalies, and decides: validate, flag for human review, or queue for rerun.
              </p>
              <div className="ident-pill-row">
                <span className="ident-pill">batch-decisions.jsonl</span>
                <span className="ident-pill">batch-review-report.md</span>
                <span className="ident-pill">tim-review-packets.jsonl</span>
              </div>
              <p className="ident-pill-note">
                Runs locally (rules-based), via OpenAI Responses API (gpt-5.5), or through GCS for large batches. Fully auditable — every decision logged, append-only history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Step 03: Tim Queue ── */}
      <section className="ident-section ident-section-bg-ground">
        <div className="ident-container">
          <div className="ident-cap-grid">
            {/* Copy */}
            <div>
              <p className="ident-cap-label">Step 03 · The Tim Queue</p>
              <h2 className="ident-cap-title">The feedback<br />loop that sticks.</h2>
              <p className="ident-cap-body">
                Products that need a human eye get routed to structured review. Sordex creates the review packet, tracks the decision, and triggers follow-up reruns.
              </p>
              <p className="ident-cap-body" style={{ marginTop: '-12px' }}>
                It's the feedback loop that keeps classification improving over time. Every human decision feeds back into the system. The queue shrinks. Confidence scores rise.
              </p>
            </div>
            {/* Panel */}
            <div>
              <div className="ident-tim-card">
                <div className="ident-tim-header">
                  <span className="ident-tim-title-text">tim-review-queue · active</span>
                  <span className="ident-tim-badge">174 pending</span>
                </div>
                <div className="ident-tim-rows">
                  <div className="ident-tim-item">
                    <span className="ident-tim-dot ident-tim-dot-pending" />
                    <span className="ident-tim-name">Lysol Disinfectant 32oz · LY-DSF-32</span>
                    <span className="ident-tim-action">AWAITING</span>
                  </div>
                  <div className="ident-tim-item">
                    <span className="ident-tim-dot ident-tim-dot-pending" />
                    <span className="ident-tim-name">Raid Ant &amp; Roach 17.5oz · RA-ANT-175</span>
                    <span className="ident-tim-action">AWAITING</span>
                  </div>
                  <div className="ident-tim-item">
                    <span className="ident-tim-dot ident-tim-dot-rerun" />
                    <span className="ident-tim-name">3M VHB Foam Tape · 3M-VHB-4910</span>
                    <span className="ident-tim-action">RERUN</span>
                  </div>
                  <div className="ident-tim-item">
                    <span className="ident-tim-dot ident-tim-dot-done" />
                    <span className="ident-tim-name">Energizer MAX AA 8pk · EN-AA-8PK</span>
                    <span className="ident-tim-action">RESOLVED ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why It Matters ── */}
      <section className="ident-why">
        <div className="ident-container">
          <div className="ident-why-grid">
            <div>
              <p className="ident-why-label">Why it matters</p>
              <h2 className="ident-why-title">Classification errors aren't free.</h2>
              <div className="ident-risk-list">
                <div className="ident-risk-item">
                  <span className="ident-risk-tag ident-risk-tag-red">COMPLIANCE</span>
                  <p className="ident-risk-text">Underpaying hazmat fees creates regulatory exposure. One audit can cost more than years of classification work.</p>
                </div>
                <div className="ident-risk-item">
                  <span className="ident-risk-tag ident-risk-tag-yellow">WASTE</span>
                  <p className="ident-risk-text">Overpaying on fees you don't owe adds up quietly — wrong classification on every shipment, indefinitely.</p>
                </div>
                <div className="ident-risk-item">
                  <span className="ident-risk-tag ident-risk-tag-orange">LIABILITY</span>
                  <p className="ident-risk-text">Routing regulated product through standard shipping isn't just a mistake. It's a liability event.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="ident-stat-box">
                <div className="ident-stat-num">↓ 90%</div>
                <div className="ident-stat-divider" />
                <p className="ident-stat-desc">
                  Sordex reduces human review rate from "everything" to "only what actually needs it." Most batches resolve in a single automated pass — no manual triage required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technical Snapshot ── */}
      <section className="ident-tech">
        <div className="ident-container">
          <p className="ident-tech-label">Technical Snapshot</p>
          <h2 className="ident-tech-title">How the machine runs.</h2>
          <div className="ident-tech-grid">
            <div className="ident-tech-cell">
              <div className="ident-tech-cell-label">API + UI</div>
              <p className="ident-tech-cell-value"><strong>FastAPI</strong> backend · <strong>Next.js</strong> admin UI</p>
            </div>
            <div className="ident-tech-cell">
              <div className="ident-tech-cell-label">Storage</div>
              <p className="ident-tech-cell-value"><strong>SQLAlchemy / Postgres</strong> · full event &amp; audit history</p>
            </div>
            <div className="ident-tech-cell">
              <div className="ident-tech-cell-label">Intelligence</div>
              <p className="ident-tech-cell-value"><strong>OpenAI Responses API</strong> · structured Pydantic output</p>
            </div>
            <div className="ident-tech-cell">
              <div className="ident-tech-cell-label">Skills</div>
              <p className="ident-tech-cell-value">Admin UI for <strong>versioned skills</strong> and prompts per retailer</p>
            </div>
            <div className="ident-tech-cell">
              <div className="ident-tech-cell-label">Infrastructure</div>
              <p className="ident-tech-cell-value"><strong>GCP-native</strong> · Cloud Tasks, Cloud Storage</p>
            </div>
            <div className="ident-tech-cell">
              <div className="ident-tech-cell-label">Classification time</div>
              <p className="ident-tech-cell-value"><strong>15–20 min</strong> per product through smarter3</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ident-cta">
        <div className="ident-container">
          <h2 className="ident-cta-title">Ready to get sorted?</h2>
          <p className="ident-cta-sub">See what Sordex does with your actual product data.</p>
          <button
            className="ident-cta-btn"
            data-tally-open="xXRkXr"
            data-tally-overlay="1"
            data-tally-layout="modal"
            data-tally-hide-title="1"
            data-tally-align-left="1"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
          >
            Get Sorted
            <span className="ident-cta-arrow">→</span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
