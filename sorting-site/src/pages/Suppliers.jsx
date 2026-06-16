import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Suppliers() {
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
        /* ── Reset ── */
        .compute-page * { box-sizing: border-box; }

        /* ── Hero ── */
        .compute-hero {
          background-color: #2D3F1A;
          color: #FFFFFF;
          padding: 100px 0 80px;
        }
        .compute-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .compute-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8A9F52;
          margin-bottom: 20px;
        }
        .compute-hero-headline {
          font-family: 'Public Sans', sans-serif;
          font-size: clamp(52px, 7vw, 88px);
          font-weight: 600;
          line-height: 1.0;
          color: #FFFFFF;
          margin: 0 0 28px;
        }
        .compute-hero-sub {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          line-height: 1.65;
          color: rgba(255,255,255,0.72);
          max-width: 640px;
          margin: 0;
        }

        /* ── Timeline ── */
        .compute-timeline {
          background-color: #FAF7F0;
          padding: 80px 0 0;
        }
        .compute-timeline-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
        }
        .compute-spine {
          position: absolute;
          left: 64px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #8A9F52, #2D3F1A);
          opacity: 0.22;
        }

        /* ── Model section shared ── */
        .compute-model {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 0 40px;
          padding-bottom: 72px;
          position: relative;
        }
        .compute-model-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 6px;
        }
        .compute-model-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #8A9F52;
          border: 3px solid #FAF7F0;
          outline: 2px solid #8A9F52;
          flex-shrink: 0;
        }
        .compute-model-line {
          flex: 1;
          width: 2px;
          background: #D8CFBB;
          margin-top: 8px;
        }
        .compute-model-version {
          font-family: 'Courier New', Courier, monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: #8A9F52;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .compute-model-title {
          font-family: 'Public Sans', sans-serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 600;
          color: #14150E;
          line-height: 1.1;
          margin: 0 0 6px;
        }
        .compute-model-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: #5C5950;
          font-style: italic;
          margin: 0 0 32px;
        }
        .compute-model-prose {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: #3a3a30;
          margin: 0 0 28px;
          max-width: 700px;
        }

        /* ── Steps list ── */
        .compute-steps {
          list-style: none;
          margin: 0 0 32px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
          max-width: 720px;
        }
        .compute-step {
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 0 16px;
          align-items: start;
          background: #EDE4D3;
          border-radius: 8px;
          padding: 16px 20px 16px 16px;
        }
        .compute-step-num {
          font-family: 'Courier New', Courier, monospace;
          font-size: 12px;
          font-weight: 700;
          color: #8A9F52;
          padding-top: 2px;
        }
        .compute-step-label {
          font-family: 'Courier New', Courier, monospace;
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #2D3F1A;
          font-weight: 700;
          display: block;
          margin-bottom: 5px;
        }
        .compute-step-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          line-height: 1.6;
          color: #5C5950;
          margin: 0;
        }

        /* ── IO block ── */
        .compute-io {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          max-width: 720px;
          margin-bottom: 12px;
        }
        .compute-io-card {
          flex: 1;
          min-width: 260px;
          background: #F4ECDC;
          border: 1px solid #D8CFBB;
          border-radius: 8px;
          padding: 16px 20px;
        }
        .compute-io-label {
          font-family: 'Courier New', Courier, monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8A9F52;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .compute-io-values {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #5C5950;
          line-height: 1.7;
          margin: 0;
        }

        /* ── Sub-section heading ── */
        .compute-subsection-head {
          font-family: 'Public Sans', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #14150E;
          margin: 32px 0 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .compute-subsection-head::after {
          content: '';
          display: block;
          flex: 1;
          height: 1px;
          background: #D8CFBB;
          max-width: 240px;
        }

        /* ── Flow steps ── */
        .compute-flow {
          display: flex;
          flex-direction: column;
          gap: 0;
          max-width: 700px;
          margin-bottom: 24px;
        }
        .compute-flow-step {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }
        .compute-flow-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          width: 32px;
        }
        .compute-flow-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #2D3F1A;
          color: #FFFFFF;
          font-family: 'Courier New', Courier, monospace;
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .compute-flow-vline {
          width: 2px;
          background: #D8CFBB;
          flex: 1;
          min-height: 20px;
        }
        .compute-flow-body {
          padding: 4px 0 20px;
        }
        .compute-flow-title {
          font-family: 'Courier New', Courier, monospace;
          font-size: 12px;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #2D3F1A;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .compute-flow-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #5C5950;
          line-height: 1.6;
          margin: 0;
        }
        .compute-flow-highlight {
          display: inline-block;
          background: #EDE4D3;
          border-left: 3px solid #8A9F52;
          padding: 4px 10px;
          font-family: 'Courier New', Courier, monospace;
          font-size: 12px;
          color: #2D3F1A;
          border-radius: 0 4px 4px 0;
          margin-top: 6px;
        }

        /* ── API code block ── */
        .compute-code-block {
          background: #14150E;
          border-radius: 8px;
          padding: 20px 24px;
          max-width: 600px;
          margin-bottom: 12px;
        }
        .compute-code-label {
          font-family: 'Courier New', Courier, monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8A9F52;
          margin-bottom: 10px;
        }
        .compute-code {
          font-family: 'Courier New', Courier, monospace;
          font-size: 14px;
          color: #FAF7F0;
          margin: 0;
          white-space: pre;
        }
        .compute-code-method {
          color: #8A9F52;
        }
        .compute-code-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #5C5950;
          margin: 0 0 24px;
          max-width: 600px;
          line-height: 1.6;
        }

        /* ── Quote callout ── */
        .compute-quote {
          border-left: 4px solid #8A9F52;
          margin: 0 0 28px;
          padding: 16px 24px;
          background: #F4ECDC;
          border-radius: 0 8px 8px 0;
          max-width: 640px;
        }
        .compute-quote p {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-style: italic;
          color: #3a3a30;
          line-height: 1.65;
          margin: 0;
        }

        /* ── smarter-4 dark section ── */
        .compute-s4-section {
          background-color: #2D3F1A;
          color: #FFFFFF;
          padding: 80px 0 72px;
        }
        .compute-s4-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .compute-s4-version {
          font-family: 'Courier New', Courier, monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: #62B91A;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .compute-s4-title {
          font-family: 'Public Sans', sans-serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 600;
          color: #FFFFFF;
          line-height: 1.1;
          margin: 0 0 6px;
        }
        .compute-s4-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: rgba(255,255,255,0.55);
          font-style: italic;
          margin: 0 0 40px;
        }
        .compute-s4-intro {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          line-height: 1.7;
          color: rgba(255,255,255,0.8);
          max-width: 620px;
          margin-bottom: 52px;
        }
        .compute-s4-stats {
          display: flex;
          gap: 0;
          flex-wrap: wrap;
          margin-bottom: 48px;
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .compute-s4-stat {
          flex: 1;
          min-width: 180px;
          padding: 40px 40px 40px 0;
          border-right: 1px solid rgba(255,255,255,0.12);
        }
        .compute-s4-stat:last-child {
          border-right: none;
        }
        .compute-s4-stat:not(:first-child) {
          padding-left: 40px;
        }
        .compute-s4-num {
          font-family: 'Public Sans', sans-serif;
          font-size: clamp(56px, 8vw, 96px);
          font-weight: 600;
          line-height: 1.0;
          color: #62B91A;
          display: block;
          margin-bottom: 8px;
        }
        .compute-s4-stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .compute-s4-note {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.4);
          font-style: italic;
        }

        /* ── Comparison table ── */
        .compute-table-section {
          background-color: #EDE4D3;
          padding: 72px 0;
        }
        .compute-table-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .compute-section-label {
          font-family: 'Courier New', Courier, monospace;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8A9F52;
          margin-bottom: 16px;
        }
        .compute-table-title {
          font-family: 'Public Sans', sans-serif;
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 600;
          color: #14150E;
          margin: 0 0 36px;
        }
        .compute-table {
          width: 100%;
          border-collapse: collapse;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
        }
        .compute-table thead th {
          font-family: 'Courier New', Courier, monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #5C5950;
          text-align: left;
          padding: 12px 20px;
          border-bottom: 2px solid #D8CFBB;
          white-space: nowrap;
        }
        .compute-table thead th:first-child { padding-left: 0; }
        .compute-table tbody td {
          padding: 16px 20px;
          border-bottom: 1px solid #D8CFBB;
          color: #3a3a30;
          vertical-align: top;
          line-height: 1.5;
        }
        .compute-table tbody td:first-child {
          padding-left: 0;
          font-family: 'Courier New', Courier, monospace;
          font-size: 12px;
          color: #5C5950;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          white-space: nowrap;
        }
        .compute-table tbody tr:last-child td { border-bottom: none; }
        .compute-table-highlight { color: #2D3F1A; font-weight: 600; }
        .compute-table-signal {
          color: #3a6610;
          font-weight: 700;
          font-family: 'Courier New', Courier, monospace;
        }
        .compute-table-muted { color: #A0998A; }

        /* ── CTA ── */
        .compute-cta-section {
          background-color: #FAF7F0;
          padding: 80px 0 100px;
          text-align: center;
        }
        .compute-cta-inner {
          max-width: 560px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .compute-cta-title {
          font-family: 'Public Sans', sans-serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 600;
          color: #14150E;
          margin: 0 0 16px;
          line-height: 1.15;
        }
        .compute-cta-sub {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: #5C5950;
          margin: 0 0 36px;
          line-height: 1.65;
        }
        .compute-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #2D3F1A;
          color: #FFFFFF;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 600;
          padding: 16px 32px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background-color 0.18s ease;
          letter-spacing: 0.01em;
        }
        .compute-cta-btn:hover { background-color: #3d5522; }

        /* ── Responsive ── */
        @media (max-width: 680px) {
          .compute-model { grid-template-columns: 32px 1fr; gap: 0 20px; }
          .compute-spine { left: 40px; }
          .compute-io { flex-direction: column; }
          .compute-s4-stats { flex-direction: column; }
          .compute-s4-stat {
            padding: 24px 0;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.12);
          }
          .compute-s4-stat:last-child { border-bottom: none; }
          .compute-s4-stat:not(:first-child) { padding-left: 0; }
          .compute-table tbody td, .compute-table thead th { padding: 12px 10px; }
          .compute-table { font-size: 13px; }
        }
      `}</style>

      <Navbar />

      {/* ── Hero ── */}
      <section className="compute-hero">
        <div className="compute-container">
          <div className="compute-eyebrow">S4 · Compute</div>
          <h1 className="compute-hero-headline">The models.</h1>
          <p className="compute-hero-sub">
            Every classification Sorting produces comes from a model that's been trained,
            tested, and iterated specifically for product regulatory data.
            Here's how we got here.
          </p>
        </div>
      </section>

      {/* ── Timeline: smarter-1 + smarter-3 ── */}
      <section className="compute-timeline">
        <div className="compute-timeline-inner">
          <div className="compute-spine" aria-hidden="true" />

          {/* smarter-1 */}
          <div className="compute-model">
            <div className="compute-model-node">
              <div className="compute-model-dot" />
              <div className="compute-model-line" />
            </div>
            <div>
              <div className="compute-model-version">smarter-1</div>
              <h2 className="compute-model-title">The foundation</h2>
              <p className="compute-model-subtitle">Built to prove the approach works.</p>

              <p className="compute-model-prose">
                smarter-1 is a four-step classification engine combining embeddings and
                expert-curated rules. It covers the full regulatory spectrum —
                transportation, storage, federal and state waste codes, pesticide
                classifications, product taxonomies, TSCA scope — using minimal product
                input. The goal was simple: demonstrate that accurate regulatory
                classification was achievable at scale, without a human in the loop.
              </p>

              <div className="compute-subsection-head">How it works</div>

              <ol className="compute-steps">
                <li className="compute-step">
                  <span className="compute-step-num">01</span>
                  <div>
                    <span className="compute-step-label">Nearest-neighbor match</span>
                    <p className="compute-step-desc">
                      Product embedded → compared against classified library. &gt;99% similarity → instant return. No LLM.
                    </p>
                  </div>
                </li>
                <li className="compute-step">
                  <span className="compute-step-num">02</span>
                  <div>
                    <span className="compute-step-label">Neighbor agreement</span>
                    <p className="compute-step-desc">
                      For lower-similarity products: 10 nearest neighbors checked.
                      If all agree → product inherits classification.
                    </p>
                  </div>
                </li>
                <li className="compute-step">
                  <span className="compute-step-num">03</span>
                  <div>
                    <span className="compute-step-label">Contextual rules prompting</span>
                    <p className="compute-step-desc">
                      If neighbors disagree: product attributes + most relevant JSON logic rules → LLM.
                      Only rules for the nearest neighbors' classifications are included — not the full rulebook.
                    </p>
                  </div>
                </li>
                <li className="compute-step">
                  <span className="compute-step-num">04</span>
                  <div>
                    <span className="compute-step-label">All rules prompting</span>
                    <p className="compute-step-desc">
                      For sparse product types, or when building new validated training sets from scratch.
                    </p>
                  </div>
                </li>
              </ol>

              <div className="compute-io">
                <div className="compute-io-card">
                  <div className="compute-io-label">Input</div>
                  <p className="compute-io-values">
                    Ingredients list, product name, brand, form, flash point — or any combination.
                  </p>
                </div>
                <div className="compute-io-card">
                  <div className="compute-io-label">Output</div>
                  <p className="compute-io-values">
                    Classification · Reason code (Nearest Neighbor / Neighbor Agreement /
                    Contextual Rules / All Rules) · Explanation · Nearest neighbor data
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* smarter-3 */}
          <div className="compute-model">
            <div className="compute-model-node">
              <div className="compute-model-dot" />
              <div className="compute-model-line" />
            </div>
            <div>
              <div className="compute-model-version">smarter-3</div>
              <h2 className="compute-model-title">The production engine</h2>
              <p className="compute-model-subtitle">One database. One API. Millions of products.</p>

              <p className="compute-model-prose">
                smarter-3 made two significant advances: a canonical product database that
                collapses all retailer catalog noise into a single source of truth, and a
                short-circuit pipeline that stops the moment it's confident enough —
                eliminating LLM calls for the vast majority of products.
              </p>

              <div className="compute-subsection-head">smarter-3 Canonical</div>

              <ul className="compute-steps">
                <li className="compute-step">
                  <span className="compute-step-num" style={{color:'#A0998A', fontWeight:400}}>—</span>
                  <div>
                    <span className="compute-step-label">Single BigQuery view</span>
                    <p className="compute-step-desc">
                      Always one row per product — the most recent, best record.
                      No duplicate resolution at query time.
                    </p>
                  </div>
                </li>
                <li className="compute-step">
                  <span className="compute-step-num" style={{color:'#A0998A', fontWeight:400}}>—</span>
                  <div>
                    <span className="compute-step-label">GTIN-14 identity</span>
                    <p className="compute-step-desc">
                      Products identified by GTIN-14 (or retailer:item_number).
                      Cross-retailer linking — see every catalog a product appeared in.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="compute-subsection-head">Short-circuit pipeline</div>

              <div className="compute-flow">
                <div className="compute-flow-step">
                  <div className="compute-flow-connector">
                    <div className="compute-flow-icon">1</div>
                    <div className="compute-flow-vline" />
                  </div>
                  <div className="compute-flow-body">
                    <div className="compute-flow-title">k-NN classifier</div>
                    <p className="compute-flow-desc">
                      Vector similarity against 117,000 seeded classified products.
                      Fast. Cheap. High precision for common product types.
                    </p>
                  </div>
                </div>
                <div className="compute-flow-step">
                  <div className="compute-flow-connector">
                    <div className="compute-flow-icon">2</div>
                    <div className="compute-flow-vline" />
                  </div>
                  <div className="compute-flow-body">
                    <div className="compute-flow-title">Breadcrumb classifier</div>
                    <p className="compute-flow-desc">
                      Assigns a hierarchical category first (e.g., "Bottled Water",
                      "Dog Toys", "Hair Elastics"), then runs k-NN within that category.
                      Produces high-confidence predictions where generic similarity fails.
                    </p>
                    <div className="compute-flow-highlight">
                      81% of all short-circuits in production are triggered by Breadcrumb.
                    </div>
                  </div>
                </div>
                <div className="compute-flow-step">
                  <div className="compute-flow-connector">
                    <div className="compute-flow-icon" style={{background:'#8A9F52'}}>✓</div>
                    <div className="compute-flow-vline" style={{background:'transparent'}} />
                  </div>
                  <div className="compute-flow-body">
                    <div className="compute-flow-title">Terminate</div>
                    <p className="compute-flow-desc">
                      If both classifiers agree and confidence is ≥85% voting across all
                      4 component flags → pipeline terminates. Zero LLM calls. Near-zero cost.
                    </p>
                  </div>
                </div>
              </div>

              <div className="compute-quote">
                <p>
                  "A product like Poland Spring bottled water doesn't need 35 seconds and
                  2 LLM calls to determine it's not a hazardous material."
                </p>
              </div>

              <div className="compute-subsection-head">The API</div>

              <div className="compute-code-block">
                <div className="compute-code-label">Endpoint</div>
                <pre className="compute-code">
                  <span className="compute-code-method">POST</span>  https://smarter-3-api-[...].run.app/run
                </pre>
              </div>
              <p className="compute-code-desc">
                Single endpoint. Returns shipping (DOT / IATA / IMDG), waste codes,
                fire safety ratings, and retailer-specific payloads in one response.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── smarter-4 dark section ── */}
      <section className="compute-s4-section">
        <div className="compute-s4-inner">
          <div className="compute-s4-version">smarter-4</div>
          <h2 className="compute-s4-title">The current frontier</h2>
          <p className="compute-s4-subtitle">17× faster. 57× cheaper. Just as accurate.</p>

          <p className="compute-s4-intro">
            In one month, using free Codex, we built smarter-4. Same classification
            accuracy as smarter-3 — with a fraction of the cost and latency.
          </p>

          <div className="compute-s4-stats">
            <div className="compute-s4-stat">
              <span className="compute-s4-num">17×</span>
              <div className="compute-s4-stat-label">faster</div>
            </div>
            <div className="compute-s4-stat">
              <span className="compute-s4-num">57×</span>
              <div className="compute-s4-stat-label">cheaper</div>
            </div>
            <div className="compute-s4-stat">
              <span className="compute-s4-num" style={{color:'#FFFFFF'}}>=</span>
              <div className="compute-s4-stat-label">accuracy</div>
            </div>
          </div>

          <p className="compute-s4-note">More detail to come.</p>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="compute-table-section">
        <div className="compute-table-wrap">
          <div className="compute-section-label">Model comparison</div>
          <h2 className="compute-table-title">How the generations stack up.</h2>
          <div style={{overflowX: 'auto'}}>
            <table className="compute-table">
              <thead>
                <tr>
                  <th></th>
                  <th>smarter-1</th>
                  <th>smarter-3</th>
                  <th>smarter-4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Approach</td>
                  <td>Rules + embeddings</td>
                  <td>Short-circuit + LLM</td>
                  <td className="compute-table-signal">TBD</td>
                </tr>
                <tr>
                  <td>LLM calls (typical)</td>
                  <td>0 – 2</td>
                  <td>0 – 2</td>
                  <td className="compute-table-signal">~0</td>
                </tr>
                <tr>
                  <td>Cost / product</td>
                  <td className="compute-table-muted">—</td>
                  <td>$0.0024</td>
                  <td className="compute-table-signal">~57× less</td>
                </tr>
                <tr>
                  <td>Speed</td>
                  <td className="compute-table-muted">—</td>
                  <td>15 – 20 min / batch</td>
                  <td className="compute-table-signal">17× faster</td>
                </tr>
                <tr>
                  <td>Accuracy</td>
                  <td className="compute-table-muted">Baseline</td>
                  <td className="compute-table-highlight">Production</td>
                  <td className="compute-table-signal">= smarter-3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="compute-cta-section">
        <div className="compute-cta-inner">
          <h2 className="compute-cta-title">Ready to see what your products are?</h2>
          <p className="compute-cta-sub">
            Tell us what you're working with. We'll show you what Sorting can do.
          </p>
          <button
            className="compute-cta-btn"
            data-tally-open="xXRkXr"
            data-tally-overlay="1"
            data-tally-layout="modal"
            data-tally-hide-title="1"
            data-tally-align-left="1"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
          >
            Get Sorted <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
