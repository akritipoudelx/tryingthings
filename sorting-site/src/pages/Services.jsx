import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const styles = `
  /* ── Reset & base ── */
  .ground-page {
    background: var(--ground, #FAF7F0);
    color: var(--ink, #14150E);
    font-family: 'Inter', sans-serif;
  }

  /* ── Hero ── */
  .ground-hero {
    background: var(--pine, #2D3F1A);
    color: #fff;
    padding: 120px 48px 96px;
    position: relative;
    overflow: hidden;
  }
  .ground-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 39px,
      rgba(255,255,255,0.03) 39px,
      rgba(255,255,255,0.03) 40px
    );
    pointer-events: none;
  }
  .ground-hero-inner {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  .ground-eyebrow {
    font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--sage, #8A9F52);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .ground-eyebrow::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--signal, #62B91A);
    box-shadow: 0 0 6px var(--signal, #62B91A);
    animation: ground-pulse 2s ease-in-out infinite;
  }
  @keyframes ground-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
  .ground-hero h1 {
    font-family: 'Public Sans', sans-serif;
    font-weight: 600;
    font-size: clamp(40px, 6vw, 72px);
    line-height: 1.05;
    margin: 0 0 24px;
    color: #fff;
  }
  .ground-hero-sub {
    font-size: 18px;
    line-height: 1.6;
    color: rgba(255,255,255,0.72);
    max-width: 560px;
    margin: 0;
  }

  /* ── Section wrapper ── */
  .ground-section {
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 48px;
  }
  .ground-section-label {
    font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--ink-muted, #5C5950);
    margin-bottom: 12px;
  }
  .ground-section-title {
    font-family: 'Public Sans', sans-serif;
    font-weight: 600;
    font-size: clamp(26px, 3.5vw, 40px);
    margin: 0 0 8px;
    color: var(--ink, #14150E);
  }
  .ground-section-desc {
    font-size: 16px;
    line-height: 1.65;
    color: var(--ink-muted, #5C5950);
    max-width: 620px;
    margin: 0 0 48px;
  }
  .ground-divider {
    border: none;
    border-top: 1px solid var(--rule, #D8CFBB);
    margin: 0;
  }

  /* ── Batch terminal ── */
  .ground-terminal {
    background: var(--ink, #14150E);
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 24px 64px rgba(0,0,0,0.28);
  }
  .ground-term-bar {
    background: #1e1f17;
    padding: 12px 18px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .ground-term-dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
  }
  .ground-term-dot:nth-child(1) { background: #ff5f57; }
  .ground-term-dot:nth-child(2) { background: #febc2e; }
  .ground-term-dot:nth-child(3) { background: #28c840; }
  .ground-term-title {
    font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
    font-size: 11px;
    color: rgba(255,255,255,0.35);
    margin-left: 8px;
  }
  .ground-term-body {
    padding: 28px 28px 24px;
  }

  /* pipeline status row */
  .ground-pipeline {
    display: flex;
    align-items: center;
    gap: 0;
    margin-bottom: 32px;
    flex-wrap: wrap;
  }
  .ground-pipe-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }
  .ground-pipe-badge {
    font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 4px;
    border: 1px solid rgba(255,255,255,0.12);
    color: rgba(255,255,255,0.5);
    background: rgba(255,255,255,0.04);
    white-space: nowrap;
  }
  .ground-pipe-badge.active {
    background: rgba(98,185,26,0.15);
    border-color: var(--signal, #62B91A);
    color: var(--signal, #62B91A);
  }
  .ground-pipe-badge.done {
    background: rgba(138,159,82,0.12);
    border-color: var(--sage, #8A9F52);
    color: var(--sage, #8A9F52);
  }
  .ground-pipe-arrow {
    font-family: monospace;
    color: rgba(255,255,255,0.2);
    font-size: 16px;
    padding: 0 6px;
    margin-top: -16px;
  }

  /* worker table */
  .ground-worker-table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
    font-size: 11.5px;
  }
  .ground-worker-table th {
    text-align: left;
    color: rgba(255,255,255,0.3);
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-size: 10px;
    padding: 6px 10px 10px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }
  .ground-worker-table td {
    color: rgba(255,255,255,0.78);
    padding: 9px 10px;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    white-space: nowrap;
  }
  .ground-worker-table tr:last-child td { border-bottom: none; }
  .ground-status-dot {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin-right: 6px;
    vertical-align: middle;
  }
  .ground-status-dot.running { background: var(--signal, #62B91A); box-shadow: 0 0 5px var(--signal, #62B91A); }
  .ground-status-dot.queued  { background: #febc2e; }
  .ground-status-dot.review  { background: #7eb3ff; }

  .ground-term-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
    padding-top: 18px;
    border-top: 1px solid rgba(255,255,255,0.07);
    flex-wrap: wrap;
    gap: 12px;
  }
  .ground-term-stat {
    font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
    font-size: 11px;
    color: rgba(255,255,255,0.38);
  }
  .ground-term-stat strong {
    color: var(--signal, #62B91A);
    font-weight: 500;
  }
  .ground-download-btn {
    font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
    font-size: 11px;
    padding: 7px 16px;
    border-radius: 5px;
    background: rgba(98,185,26,0.12);
    border: 1px solid var(--signal, #62B91A);
    color: var(--signal, #62B91A);
    cursor: default;
    letter-spacing: 0.05em;
  }

  /* retailer tags */
  .ground-retailers {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 20px;
    align-items: center;
  }
  .ground-retailers-label {
    font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
    font-size: 10px;
    color: rgba(255,255,255,0.25);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .ground-retailer-tag {
    font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    padding: 3px 10px;
    border-radius: 3px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.45);
  }

  /* ── LLM section ── */
  .ground-llm-bg {
    background: var(--surface, #EDE4D3);
  }
  .ground-llm-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  @media (max-width: 768px) {
    .ground-llm-grid { grid-template-columns: 1fr; }
    .ground-hero { padding: 80px 24px 64px; }
    .ground-section { padding: 56px 24px; }
    .ground-worker-table { font-size: 10px; }
    .ground-worker-table th,
    .ground-worker-table td { padding: 6px 6px; }
  }

  .ground-card {
    background: var(--white, #fff);
    border: 1px solid var(--rule, #D8CFBB);
    border-radius: 10px;
    padding: 28px;
  }
  .ground-card-label {
    font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--ink-muted, #5C5950);
    margin-bottom: 10px;
  }
  .ground-card h3 {
    font-family: 'Public Sans', sans-serif;
    font-weight: 600;
    font-size: 18px;
    margin: 0 0 8px;
    color: var(--ink, #14150E);
  }
  .ground-card p {
    font-size: 14px;
    line-height: 1.65;
    color: var(--ink-muted, #5C5950);
    margin: 0 0 18px;
  }

  /* playground selects */
  .ground-playground-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 12px;
  }
  .ground-select-mock {
    font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
    font-size: 11px;
    padding: 6px 12px;
    border-radius: 5px;
    background: var(--surface-soft, #F4ECDC);
    border: 1px solid var(--rule, #D8CFBB);
    color: var(--ink, #14150E);
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: default;
  }
  .ground-select-mock::after {
    content: '\25BE';
    color: var(--ink-muted, #5C5950);
    font-size: 10px;
  }
  .ground-textarea-mock {
    width: 100%;
    background: var(--surface-soft, #F4ECDC);
    border: 1px solid var(--rule, #D8CFBB);
    border-radius: 6px;
    padding: 10px 12px;
    font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
    font-size: 11px;
    color: var(--ink-muted, #5C5950);
    box-sizing: border-box;
    height: 62px;
    resize: none;
    line-height: 1.5;
    outline: none;
  }

  /* scoreboard table */
  .ground-scoreboard {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
  }
  .ground-scoreboard th {
    font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink-muted, #5C5950);
    font-weight: 400;
    text-align: left;
    padding: 6px 12px 10px;
    border-bottom: 1px solid var(--rule, #D8CFBB);
  }
  .ground-scoreboard td {
    padding: 9px 12px;
    border-bottom: 1px solid var(--rule, #D8CFBB);
    font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
    color: var(--ink, #14150E);
  }
  .ground-scoreboard tr:last-child td { border-bottom: none; }
  .ground-scoreboard tr:hover td { background: var(--surface-soft, #F4ECDC); }
  .ground-acc-pill {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
  }
  .ground-acc-green  { background: rgba(98,185,26,0.12);  color: #3a8a00; }
  .ground-acc-amber  { background: rgba(254,188,46,0.18); color: #8a6200; }
  .ground-acc-red    { background: rgba(220,60,60,0.1);   color: #b02020; }
  .ground-vol {
    color: var(--ink-muted, #5C5950);
    font-size: 11px;
  }

  /* monitor stats */
  .ground-monitor-row {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  .ground-monitor-stat {
    background: var(--surface-soft, #F4ECDC);
    border: 1px solid var(--rule, #D8CFBB);
    border-radius: 6px;
    padding: 12px 18px;
    flex: 1;
    min-width: 100px;
  }
  .ground-monitor-stat-label {
    font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
    font-size: 9.5px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ink-muted, #5C5950);
    margin-bottom: 6px;
  }
  .ground-monitor-stat-val {
    font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
    font-size: 22px;
    font-weight: 500;
    color: var(--ink, #14150E);
    line-height: 1;
  }
  .ground-monitor-stat-val.signal { color: var(--signal, #62B91A); }

  /* API code block */
  .ground-api-block {
    background: var(--ink, #14150E);
    border-radius: 8px;
    padding: 16px 20px;
    font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
    font-size: 12.5px;
    color: rgba(255,255,255,0.85);
    margin: 12px 0 14px;
    overflow-x: auto;
    white-space: nowrap;
  }
  .ground-api-method { color: var(--signal, #62B91A); margin-right: 10px; }
  .ground-api-url    { color: #7eb3ff; }

  /* ── Category cards ── */
  .ground-cats-bg {
    background: var(--ground, #FAF7F0);
  }
  .ground-cats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(192px, 1fr));
    gap: 16px;
  }
  .ground-cat-card {
    background: var(--white, #fff);
    border: 1px solid var(--rule, #D8CFBB);
    border-radius: 10px;
    padding: 24px 22px;
  }
  .ground-cat-card h4 {
    font-family: 'Public Sans', sans-serif;
    font-weight: 600;
    font-size: 15px;
    margin: 0 0 8px;
    color: var(--ink, #14150E);
  }
  .ground-cat-card p {
    font-size: 13px;
    line-height: 1.6;
    color: var(--ink-muted, #5C5950);
    margin: 0;
  }
  .ground-cat-icon {
    width: 32px;
    height: 32px;
    border-radius: 6px;
    background: var(--surface-soft, #F4ECDC);
    border: 1px solid var(--rule, #D8CFBB);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    margin-bottom: 14px;
  }

  /* ── CTA ── */
  .ground-cta {
    background: var(--pine, #2D3F1A);
    padding: 80px 48px;
    text-align: center;
  }
  .ground-cta h2 {
    font-family: 'Public Sans', sans-serif;
    font-weight: 600;
    font-size: clamp(28px, 4vw, 48px);
    color: #fff;
    margin: 0 0 16px;
  }
  .ground-cta p {
    font-size: 16px;
    color: rgba(255,255,255,0.65);
    margin: 0 0 36px;
  }
  .ground-cta-btn {
    display: inline-block;
    padding: 14px 36px;
    background: var(--signal, #62B91A);
    color: #fff;
    font-family: 'Public Sans', sans-serif;
    font-weight: 600;
    font-size: 15px;
    border-radius: 6px;
    cursor: pointer;
    border: none;
    letter-spacing: 0.01em;
    transition: opacity 0.15s;
  }
  .ground-cta-btn:hover { opacity: 0.88; }
`;

const workers = [
  { status: 'running', product: "Rust-Oleum 12oz Flat Black Spray Paint",   batch: 'B-0041', attempt: 1, age: '2m 14s', hb: '3s ago',  user: 'macy.sync',  file: 'lowes_q2_upload.csv' },
  { status: 'running', product: "Energizer CR2032 Lithium Battery 2-pk",    batch: 'B-0041', attempt: 1, age: '1m 58s', hb: '1s ago',  user: 'macy.sync',  file: 'lowes_q2_upload.csv' },
  { status: 'running', product: "Great Stuff 12oz Gaps & Cracks Foam",      batch: 'B-0042', attempt: 2, age: '4m 02s', hb: '5s ago',  user: 'ops.costco', file: 'costco_haz_batch.jsonl' },
  { status: 'queued',  product: "Clorox Toilet Bowl Cleaner 24oz",           batch: 'B-0043', attempt: 1, age: '0m 31s', hb: '—',      user: 'ops.costco', file: 'costco_haz_batch.jsonl' },
  { status: 'review',  product: "Duracell AA 8-count Alkaline Battery",      batch: 'B-0040', attempt: 1, age: '6m 47s', hb: '12s ago', user: 'nord.cat',  file: 'nordstrom_electronics.csv' },
];

const scoreboardData = [
  { task: 'propellant_form_check',  accuracy: 100.0, volume: '19 items' },
  { task: 'component_flags',        accuracy: 98.5,  volume: '13,669 items' },
  { task: 'shipping_schema',        accuracy: 89.8,  volume: '7,570 items' },
  { task: 'shipping',               accuracy: 88.2,  volume: '7,216 items' },
  { task: 'aerosol_classification', accuracy: 63.0,  volume: '254 items' },
  { task: 'ifc_nfpa_validation',    accuracy: 52.3,  volume: '11,575 items' },
  { task: 'rcra_toxic',             accuracy: 51.2,  volume: '990 items' },
  { task: 'state_waste',            accuracy: 7.6,   volume: '5,509 items' },
];

function accClass(pct) {
  if (pct >= 90) return 'ground-acc-green';
  if (pct >= 70) return 'ground-acc-amber';
  return 'ground-acc-red';
}

const categories = [
  { icon: '🚢', title: 'Shipping',     desc: 'DOT/IATA/IMDG restrictions, UN numbers, hazard class assignment.' },
  { icon: '⚗️', title: 'Hazmat',       desc: 'Propellants, aerosols, flammables, corrosives — flagged at the ingredient level.' },
  { icon: '🔋', title: 'Electronic',   desc: 'Lithium battery chemistry, watt-hours, state e-waste eligibility.' },
  { icon: '🧪', title: 'Formulated',   desc: 'Active ingredient analysis, RCRA toxicity, NFPA/IFC compliance.' },
  { icon: '♻️', title: 'State Waste',  desc: 'State-specific disposal rules, labeling requirements, take-back programs.' },
];

const pipelineSteps = ['queued', 'mapped', 'classified', 'reviewed', 'complete'];

export default function Services() {
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
    <div className="ground-page">
      <style>{styles}</style>
      <Navbar />

      {/* ── Hero ── */}
      <section className="ground-hero">
        <div className="ground-hero-inner">
          <div className="ground-eyebrow">S3 · Ground</div>
          <h1>Ground station.</h1>
          <p className="ground-hero-sub">
            This is where classification actually happens. Real batches. Real products. Real time.
          </p>
        </div>
      </section>

      {/* ── 01 Batch ── */}
      <div className="ground-cats-bg">
        <div className="ground-section">
          <div className="ground-section-label">01 · Batch</div>
          <h2 className="ground-section-title">Upload. Queue. Classify. Done.</h2>
          <p className="ground-section-desc">
            Drop a product file and watch it move through the pipeline. Up to 80 parallel workers run simultaneously — each one tracked, retried, and heartbeat-monitored.
          </p>

          <div className="ground-terminal">
            {/* macOS-style titlebar */}
            <div className="ground-term-bar">
              <div className="ground-term-dot" />
              <div className="ground-term-dot" />
              <div className="ground-term-dot" />
              <span className="ground-term-title">
                ground · batch · B-0041..B-0043 — 5 workers active / 80 max
              </span>
            </div>

            <div className="ground-term-body">
              {/* pipeline stages */}
              <div className="ground-pipeline">
                {pipelineSteps.map((step, i) => (
                  <span key={step} style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="ground-pipe-step">
                      <span
                        className={
                          'ground-pipe-badge' +
                          (step === 'classified' ? ' active' : i < 2 ? ' done' : '')
                        }
                      >
                        {step}
                      </span>
                    </div>
                    {i < pipelineSteps.length - 1 && (
                      <span className="ground-pipe-arrow">→</span>
                    )}
                  </span>
                ))}
              </div>

              {/* worker status table */}
              <div style={{ overflowX: 'auto' }}>
                <table className="ground-worker-table">
                  <thead>
                    <tr>
                      <th>status</th>
                      <th>product</th>
                      <th>batch</th>
                      <th>attempt</th>
                      <th>age</th>
                      <th>heartbeat</th>
                      <th>user</th>
                      <th>file</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workers.map((w, i) => (
                      <tr key={i}>
                        <td>
                          <span className={`ground-status-dot ${w.status}`} />
                          {w.status}
                        </td>
                        <td style={{ maxWidth: 240, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {w.product}
                        </td>
                        <td>{w.batch}</td>
                        <td style={{ textAlign: 'center' }}>{w.attempt}</td>
                        <td>{w.age}</td>
                        <td style={{ color: 'rgba(255,255,255,0.42)' }}>{w.hb}</td>
                        <td style={{ color: 'rgba(255,255,255,0.5)' }}>{w.user}</td>
                        <td style={{ color: 'rgba(255,255,255,0.38)' }}>{w.file}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="ground-term-footer">
                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                  <span className="ground-term-stat"><strong>3</strong> running</span>
                  <span className="ground-term-stat"><strong>1</strong> queued</span>
                  <span className="ground-term-stat"><strong>1</strong> in review</span>
                  <span className="ground-term-stat">workers: <strong>5 / 80</strong></span>
                </div>
                <span className="ground-download-btn">&#8659; download output.jsonl</span>
              </div>

              <div className="ground-retailers">
                <span className="ground-retailers-label">active retailers</span>
                {["Macy's", "Lowe's", "Costco", "Wegmans", "Nordstrom"].map(r => (
                  <span key={r} className="ground-retailer-tag">{r}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="ground-divider" />

      {/* ── 02 Smarter LLM ── */}
      <div className="ground-llm-bg">
        <div className="ground-section">
          <div className="ground-section-label">02 · Smarter LLM</div>
          <h2 className="ground-section-title">The model layer.</h2>
          <p className="ground-section-desc">
            smarter-llm-1.0 powers every classification task. Four interfaces — Playground, Scoreboard, Monitor, and API — give full visibility into what the model is doing and how well.
          </p>

          <div className="ground-llm-grid">

            {/* Playground */}
            <div className="ground-card">
              <div className="ground-card-label">Playground</div>
              <h3>Direct interface</h3>
              <p>Run prompts against smarter-llm-1.0. Select model variant, prompt key, and reasoning mode.</p>
              <div className="ground-playground-row">
                <div className="ground-select-mock">smarter-llm-1.0</div>
                <div className="ground-select-mock">shipping_schema</div>
                <div className="ground-select-mock">reasoning: on</div>
              </div>
              <textarea
                className="ground-textarea-mock"
                readOnly
                value={"// Enter product name or paste raw catalog data\n// Shift+Enter to run"}
              />
            </div>

            {/* Scoreboard */}
            <div className="ground-card">
              <div className="ground-card-label">Smarter-3 Scoreboard</div>
              <h3>Live accuracy</h3>
              <p>Accuracy against held-out test sets, updated with each model revision.</p>
              <table className="ground-scoreboard">
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Accuracy</th>
                    <th>Volume</th>
                  </tr>
                </thead>
                <tbody>
                  {scoreboardData.map(row => (
                    <tr key={row.task}>
                      <td>{row.task}</td>
                      <td>
                        <span className={`ground-acc-pill ${accClass(row.accuracy)}`}>
                          {row.accuracy}%
                        </span>
                      </td>
                      <td className="ground-vol">{row.volume}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Monitor */}
            <div className="ground-card">
              <div className="ground-card-label">Monitor</div>
              <h3>Proxy health</h3>
              <p>Real-time stats from the LLM proxy layer.</p>
              <div className="ground-monitor-row">
                <div className="ground-monitor-stat">
                  <div className="ground-monitor-stat-label">Proxy latency p50</div>
                  <div className="ground-monitor-stat-val signal">11.5s</div>
                </div>
                <div className="ground-monitor-stat">
                  <div className="ground-monitor-stat-label">Error rate</div>
                  <div className="ground-monitor-stat-val">0/3</div>
                </div>
                <div className="ground-monitor-stat">
                  <div className="ground-monitor-stat-label">Recent requests</div>
                  <div className="ground-monitor-stat-val">247</div>
                </div>
              </div>
            </div>

            {/* API */}
            <div className="ground-card">
              <div className="ground-card-label">API</div>
              <h3>Programmatic access</h3>
              <p>A single endpoint. Runs enrichment, document search, and classification. Returns all customer payloads in one response.</p>
              <div className="ground-api-block">
                <span className="ground-api-method">POST</span>
                <span className="ground-api-url">https://smarter-3-api-[...].run.app/run</span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--ink-muted)', margin: 0 }}>
                Pass a product array. Get back structured hazmat, shipping, and compliance data — all at once.
              </p>
            </div>

          </div>
        </div>
      </div>

      <hr className="ground-divider" />

      {/* ── 03 Coverage ── */}
      <div className="ground-cats-bg">
        <div className="ground-section">
          <div className="ground-section-label">03 · Coverage</div>
          <h2 className="ground-section-title">What actually gets classified.</h2>
          <p className="ground-section-desc">
            Five classification domains. Every product is checked against all of them on every run.
          </p>
          <div className="ground-cats-grid">
            {categories.map(cat => (
              <div key={cat.title} className="ground-cat-card">
                <div className="ground-cat-icon">{cat.icon}</div>
                <h4>{cat.title}</h4>
                <p>{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="ground-cta">
        <h2>Ready to run a batch?</h2>
        <p>Talk to us about getting your catalog into Ground.</p>
        <button
          className="ground-cta-btn"
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
      </section>

      <Footer />
    </div>
  );
}
