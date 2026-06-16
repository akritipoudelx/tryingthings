import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {

  /* ── Video pools + orbit + terminal ── */
  useEffect(() => {
    const s = document.createElement('script');
    s.src = '/js/webflow.js';
    document.body.appendChild(s);

    const t = document.createElement('script');
    t.src = 'https://tally.so/widgets/embed.js';
    document.body.appendChild(t);

    setTimeout(() => {
      // Video pools for orbit cards
      const POOLS = {
        'c0': ["7tjudzarNVEPBjCFmbKOhpsFIZfdxDp01EYCWs003mcMc","fegD02Kvhpy4fH5018kAu8vlmRVMyQZ400mN01ImqbmReaw",null,null],
        'c1': ["eJjUQRd1bwOq1GwGidoXOcaBsdmh28BERXLPGgVbiVg","s5GQvh004FDyE4JHpGOTJ00ZpEPdNClQrjh4RC5pirgZM",null,null],
        'c3': ["JRKqhUxhkf2WyZJZofXFfkirrl302L99MbuulYMJNLCk","rHM01WMx8EkbpCjOZ3qxwvO2E3rLfWs00ByeZ02w4Te014Q",null,null],
        'c4': ["oWfeYDFAG01QeJIEii9ndgaduy4MK0202hLpzJfYwpXOAo","6ebyXilgEaBKLaUAy00zKAtA012ul00M25EEckGGmuzv6Q",null,null],
        'c5': ["01Bq8V6m00LuX9OXT5DhHyrUqcnVGusodMue1cL7J00Jyg","g1Lnlw6u3vAtYQB8Ily42XrCTQBZ3P01ca2yKM2d1saI",null,null],
      };
      Object.entries(POOLS).forEach(([cardId, pool]) => {
        const card = document.getElementById(cardId);
        if (!card) return;
        const valid = pool.filter(Boolean);
        if (!valid.length) return;
        const id = valid[Math.floor(Math.random() * valid.length)];
        const el = card.querySelector('.rv');
        if (!el) return;
        el.poster = `https://image.mux.com/${id}/thumbnail.jpg`;
        el.innerHTML = `<source src="https://stream.mux.com/${id}/highest.mp4" type="video/mp4">`;
        el.load();
        el.play().catch(() => {});
      });

      // Orbit engine
      (function () {
        const N = 6, CARD_W = 224, CARD_H = 163;
        const SPEED = 0.0007 / 16.67;
        const canvas = document.getElementById('canvas');
        if (!canvas) return;
        const cards = Array.from({ length: N }, (_, i) => document.getElementById('c' + i));
        const base = cards.map((_, i) => (i / N) * 2 * Math.PI - Math.PI / 2);
        function ellipse() {
          const W = canvas.clientWidth || 900, H = canvas.clientHeight || 640;
          return { cx: W/2, cy: H/2, rx: Math.min(W*0.38,380), ry: Math.min(H*0.36,200) };
        }
        function depthOpacity(a) { return 0.72 + 0.28 * (Math.sin(a) + 1) / 2; }
        let globalAngle = 0, lastTime = null;
        const st = cards.map(() => ({ dragging: false, snapping: false, curX: 0, curY: 0 }));
        function tick(now) {
          if (lastTime !== null) globalAngle += SPEED * (now - lastTime);
          lastTime = now;
          const e = ellipse();
          cards.forEach((card, i) => {
            if (!card) return;
            if (st[i].dragging) {
              card.style.transform = `translate(${st[i].curX - CARD_W/2}px,${st[i].curY - CARD_H/2}px)`;
              card.style.opacity = '1'; card.style.zIndex = '50'; return;
            }
            if (st[i].snapping) return;
            const angle = base[i] + globalAngle;
            const x = e.cx + e.rx * Math.cos(angle) - CARD_W / 2;
            const y = e.cy + e.ry * Math.sin(angle) - CARD_H / 2;
            const op = depthOpacity(angle);
            card.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;
            card.style.opacity = (0.5 + op * 0.5).toFixed(2);
            card.style.zIndex = String(Math.round(op * 20));
          });
          requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        cards.forEach((card, i) => {
          if (!card) return;
          let pid = null;
          card.addEventListener('pointerdown', e => {
            pid = e.pointerId; card.setPointerCapture(pid);
            card.classList.add('dragging'); card.classList.remove('snapping');
            st[i].dragging = true; st[i].snapping = false;
            const cr = canvas.getBoundingClientRect();
            st[i].curX = e.clientX - cr.left; st[i].curY = e.clientY - cr.top;
            e.preventDefault();
          });
          card.addEventListener('pointermove', e => {
            if (!st[i].dragging || e.pointerId !== pid) return;
            const cr = canvas.getBoundingClientRect();
            st[i].curX = e.clientX - cr.left; st[i].curY = e.clientY - cr.top;
          });
          function end(e) {
            if (e.pointerId !== pid) return;
            st[i].dragging = false; card.classList.remove('dragging');
            try { card.releasePointerCapture(pid); } catch (_) {}
            pid = null;
            const ep = ellipse(), angle = base[i] + globalAngle;
            const tx = ep.cx + ep.rx * Math.cos(angle) - CARD_W / 2;
            const ty = ep.cy + ep.ry * Math.sin(angle) - CARD_H / 2;
            const op = depthOpacity(angle);
            st[i].snapping = true; card.classList.add('snapping');
            card.style.transform = `translate(${tx.toFixed(1)}px,${ty.toFixed(1)}px)`;
            card.style.opacity = (0.5 + op * 0.5).toFixed(2);
            setTimeout(() => { st[i].snapping = false; card.classList.remove('snapping'); }, 700);
          }
          card.addEventListener('pointerup', end);
          card.addEventListener('pointercancel', end);
        });
      })();

      // Terminal animation
      const SCRIPT = [
        { type: 'type',  text: '<span class="prompt">$</span> <span class="cmd">classify --product="Lavender Cleaner"</span>' },
        { type: 'wait',  ms: 260 },
        { type: 'print', text: '<span class="dim">→ 18 components parsed</span>' },
        { type: 'bar',   label: 'model  ', ms: 1100 },
        { type: 'print', text: '<span class="dim">hazard </span><span class="warn">Corrosive (8)</span>' },
        { type: 'print', text: '<span class="dim">route  </span><span class="accent">RCRA regulated</span>' },
        { type: 'print', text: '<span class="dim">conf.  </span><span class="accent">98.7%</span>' },
        { type: 'print', text: '<span class="success">✓</span> <span class="dim">classified in 0.42s</span>' },
        { type: 'wait',  ms: 1600 },
      ];
      const TYPE_SPEED = 30, LINE_PAUSE = 160, MAX_VISIBLE = 6;
      const screen = document.getElementById('screen');
      if (screen) {
        let lines = [];
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        function render(active, cursor) {
          let out = lines.join('\n');
          if (active !== null) out += (out ? '\n' : '') + active;
          if (cursor) out += '<span class="cursor"></span>';
          screen.innerHTML = out;
        }
        function push(html) { lines.push(html); if (lines.length > MAX_VISIBLE) lines.shift(); }
        function revealHTML(html, n) {
          let out = '', count = 0, inTag = false;
          for (const ch of html) {
            if (ch === '<') inTag = true;
            if (inTag) out += ch; else if (count < n) { out += ch; count++; }
            if (ch === '>') inTag = false;
          }
          return out;
        }
        async function typeLine(html) {
          const tmp = document.createElement('div'); tmp.innerHTML = html;
          const len = tmp.textContent.length;
          for (let i = 0; i <= len; i++) { render(revealHTML(html, i), true); await sleep(TYPE_SPEED); }
          push(html); render(null, true); await sleep(LINE_PAUSE);
        }
        async function printLine(html) { push(html); render(null, true); await sleep(LINE_PAUSE); }
        async function progressBar(label, ms) {
          const w = 14, t0 = performance.now();
          while (true) {
            const t = Math.min(1, (performance.now() - t0) / ms);
            const f = Math.round(t * w);
            const bar = '<span class="bar-fill">' + '█'.repeat(f) + '</span>' + '<span class="bar-track">' + '░'.repeat(w - f) + '</span>';
            const pct = String(Math.round(t * 100)).padStart(3, ' ');
            render('<span class="dim">' + label + '</span>[' + bar + '] ' + '<span class="accent">' + pct + '%</span>', false);
            if (t >= 1) { push(screen.innerHTML); break; }
            await sleep(40);
          }
          render(null, true); await sleep(LINE_PAUSE);
        }
        async function run() {
          while (true) {
            lines = []; render(null, true);
            for (const s of SCRIPT) {
              if (s.type === 'type') await typeLine(s.text);
              else if (s.type === 'print') await printLine(s.text);
              else if (s.type === 'bar') await progressBar(s.label, s.ms);
              else if (s.type === 'wait') await sleep(s.ms);
            }
          }
        }
        run();
      }

      // Dashboard KPI counter tick-up
      function animateCounter(el, target, decimals, suffix, duration) {
        const start = performance.now();
        function frame(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const val = (target * eased).toFixed(decimals);
          el.textContent = val + suffix;
          if (progress < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
      }
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          const counters = entry.target.querySelectorAll('[data-count]');
          counters.forEach(el => {
            const target = parseFloat(el.dataset.count);
            const decimals = parseInt(el.dataset.decimals || '0');
            const suffix = el.dataset.suffix || '';
            animateCounter(el, target, decimals, suffix, 1600);
          });
        });
      }, { threshold: 0.3 });
      const kpiGrid = document.querySelector('.kpi-grid');
      if (kpiGrid) observer.observe(kpiGrid);

    }, 500);

    return () => {
      if (document.body.contains(s)) document.body.removeChild(s);
    };
  }, []);

  /* ── GSAP scroll animations ── */
  useEffect(() => {
    const timer = setTimeout(() => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      const SplitText = window.SplitText;
      if (!gsap || !ScrollTrigger) return;

      gsap.registerPlugin(ScrollTrigger);

      // Hero headline word reveal
      if (SplitText) {
        const heroH = document.querySelector('.hero-headline');
        if (heroH) {
          const split = new SplitText(heroH, { type: 'words' });
          gsap.from(split.words, {
            opacity: 0, y: 30, stagger: 0.05, duration: 0.8,
            ease: 'power3.out', delay: 0.3,
          });
        }
      }

      gsap.from('.hero-sub', { opacity: 0, y: 20, duration: 1, ease: 'power2.out', delay: 0.6 });
      gsap.from('.loop-diagram', { opacity: 0, y: 40, duration: 1.2, ease: 'power2.out', delay: 0.9 });

      // Orbit canvas fade up
      gsap.from('.code-embed', { opacity: 0, y: 50, duration: 1.4, ease: 'power3.out', delay: 0.2 });

      // Section-2 (orbit) pins then section-3 slides up
      ScrollTrigger.create({
        trigger: '.section-2',
        start: 'bottom bottom',
        end: '+=280',
        pin: true,
        pinSpacing: true,
      });

      gsap.from('.section-3', {
        y: 80, ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.section-3', start: 'top 95%', end: 'top 30%', scrub: 1.4,
        },
      });

      gsap.to('.section-3', {
        boxShadow: '0 -40px 80px -20px rgba(0,0,0,0.18)',
        scrollTrigger: {
          trigger: '.section-3', start: 'top 90%', end: 'top 50%', scrub: 1,
        },
      });

      // Section-3 heading word build
      if (SplitText) {
        const h3 = document.querySelector('.section-3 .heading-3');
        if (h3) {
          const split = new SplitText(h3, { type: 'words' });
          gsap.from(split.words, {
            opacity: 0, y: 24, stagger: 0.06, ease: 'power3.out',
            scrollTrigger: { trigger: '.section-3', start: 'top 65%', end: 'top 20%', scrub: 0.6 },
          });
        }
      }

      gsap.from('.section-3 .paragraph', {
        opacity: 0, y: 20, duration: 0.9, ease: 'power2.out',
        scrollTrigger: { trigger: '.section-3 .paragraph', start: 'top 80%' },
      });

      // Pipeline cards stagger
      gsap.from('.model-card-p', {
        opacity: 0, x: 30, stagger: 0.1, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.pipeline-track', start: 'top 75%' },
      });

      // Dashboard KPIs scale up
      gsap.from('.kpi-card', {
        opacity: 0, y: 24, scale: 0.96, stagger: 0.08, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: '.kpi-grid', start: 'top 80%' },
      });

      // Tools grid cards
      gsap.from('.tool-card-new', {
        opacity: 0, y: 32, stagger: 0.1, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.tools-grid-new', start: 'top 75%' },
      });

      // Section-5 science cards
      gsap.from('.section-5 .image-wrap', {
        opacity: 0, y: 40, stagger: 0.1, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.section-5', start: 'top 70%' },
      });

      return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />

      {/* ── SECTION 1: Hero Loop ── */}
      <section className="hero-loop">
        <div className="container">
          <p className="hero-eyebrow">The sorting engine for retail</p>
          <h1 className="hero-headline">
            Piles of confusion,<br />turned into <span className="hero-accent">product truth.</span>
          </h1>
          <p className="hero-sub">
            Every product in retail makes dozens of invisible decisions before it reaches a shelf.
            Sorting makes all of them — at scale, in one API call.
          </p>

          {/* Loop diagram */}
          <div className="loop-diagram">
            <div className="loop-stages">
              <div className="loop-stage">
                <div className="loop-stage-video">📦</div>
                <div className="loop-stage-label">Intake</div>
                <div className="loop-stage-desc">Raw catalog data, no structure</div>
              </div>
              <div className="loop-arrow">→</div>
              <div className="loop-stage">
                <div className="loop-stage-video">🔍</div>
                <div className="loop-stage-label">Scan</div>
                <div className="loop-stage-desc">Barcode, image, description</div>
              </div>
              <div className="loop-arrow">→</div>
              <div className="loop-stage">
                <div className="loop-stage-video">⚡</div>
                <div className="loop-stage-label">Sort</div>
                <div className="loop-stage-desc">Classify, route, enrich</div>
              </div>
              <div className="loop-arrow">→</div>
              <div className="loop-stage">
                <div className="loop-stage-video">🖥</div>
                <div className="loop-stage-label">Compute</div>
                <div className="loop-stage-desc">Regulatory decisions at scale</div>
              </div>
              <div className="loop-arrow">→</div>
              <div className="loop-stage">
                <div className="loop-stage-video">🛒</div>
                <div className="loop-stage-label">Sell</div>
                <div className="loop-stage-desc">Shelf-ready, compliant products</div>
              </div>
            </div>
            <div className="loop-footer">
              <span className="loop-infinity">∞ &nbsp; The confusion never stops. Neither do we.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Orbit canvas ── */}
      <section className="section-2">
        <div className="w-layout-blockcontainer container-2 w-container"></div>
        <div className="code-embed w-embed w-script">
          <div className="canvas" id="canvas">
            <div className="card tile" id="c0">
              <div className="stage-pill">01 · Ingest Data</div>
              <video className="rv" autoPlay muted loop playsInline preload="auto"></video>
              <div className="label">input: retailer-catalog.csv</div>
            </div>
            <div className="card tile" id="c1">
              <div className="stage-pill">02 · Enrich</div>
              <video className="rv" autoPlay muted loop playsInline preload="auto"></video>
              <div className="label">fields: resolved</div>
            </div>
            <div className="card tile" id="c2">
              <div className="stage-pill">03 · Classify</div>
              <div className="term-view">
                <div className="term-body" id="screen"></div>
              </div>
              <div className="label">smarter3 — classifier</div>
            </div>
            <div className="card tile" id="c3">
              <div className="stage-pill">04 · Deliver</div>
              <video className="rv" autoPlay muted loop playsInline preload="auto"></video>
              <div className="label">output: structured data</div>
            </div>
            <div className="card tile" id="c4">
              <div className="stage-pill">05 · Sort in Store</div>
              <video className="rv" autoPlay muted loop playsInline preload="auto"></video>
              <div className="label">retail: updated</div>
            </div>
            <div className="card tile" id="c5">
              <div className="stage-pill">06 · Sell</div>
              <video className="rv" autoPlay muted loop playsInline preload="auto"></video>
              <div className="label">compliance: cleared</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: We sort the unsortable ── */}
      <section className="section-3">
        <div className="w-layout-blockcontainer container-3 w-container">
          <div className="div-block-2">
            <lottie-player src="/documents/Untitled-file-3.json" autoplay loop style={{width:'100%',height:'auto'}}></lottie-player>
          </div>
          <div className="div-block">
            <h1 className="heading-3">We <span className="text-span-2">sort</span> the <span className="text-span-3">unsortable</span>.</h1>
            <p className="paragraph">Other models stop where the hard problems start. <strong>Sorting is the only engine purpose-trained on retail regulatory data</strong>.<br /><br /><strong>No other model covers the full regulatory spectrum from a single API call.</strong> Whether it be EPR or state waste codes — we resolve it all in one response, so you can ditch the five separate vendor relationships.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Model Pipeline (S1 → S4) ── */}
      <section className="pipeline-section">
        <div className="pipeline-header">
          <p className="s-eyebrow">The progression</p>
          <h2 className="s-headline">Four generations of getting it right.</h2>
          <p className="s-sub">Each model solved the problems the last one couldn't. Faster. Cheaper. More accurate. Pick the one that fits — or run them all.</p>
        </div>
        <div className="pipeline-rail">
          <div className="pipeline-rail-fill" id="pipeline-fill"></div>
        </div>
        <div className="pipeline-track">
          <div className="model-card-p">
            <div className="mc-number">S1</div>
            <div className="mc-name">Identify</div>
            <div className="mc-sub">Rule-based classification. Fast, deterministic, good for known SKUs.</div>
            <div className="mc-meter">
              <div className="mc-meter-head"><span>Speed</span><span>High</span></div>
              <div className="mc-meter-track"><div className="mc-meter-fill speed" style={{width:'55%'}}></div></div>
            </div>
            <div className="mc-meter">
              <div className="mc-meter-head"><span>Cost</span><span>Low</span></div>
              <div className="mc-meter-track"><div className="mc-meter-fill cost" style={{width:'20%'}}></div></div>
            </div>
            <a href="/company" className="mc-link">
              Learn more <span className="mc-arrow">→</span>
            </a>
          </div>
          <div className="model-card-p">
            <div className="mc-number">S2</div>
            <div className="mc-name">Enrich</div>
            <div className="mc-sub">ML-assisted enrichment. Fills gaps in sparse product records.</div>
            <div className="mc-meter">
              <div className="mc-meter-head"><span>Speed</span><span>High</span></div>
              <div className="mc-meter-track"><div className="mc-meter-fill speed" style={{width:'72%'}}></div></div>
            </div>
            <div className="mc-meter">
              <div className="mc-meter-head"><span>Cost</span><span>Low–Med</span></div>
              <div className="mc-meter-track"><div className="mc-meter-fill cost" style={{width:'35%'}}></div></div>
            </div>
            <a href="/platform" className="mc-link">
              Learn more <span className="mc-arrow">→</span>
            </a>
          </div>
          <div className="model-card-p">
            <div className="mc-number">S3</div>
            <div className="mc-name">Ground</div>
            <div className="mc-sub">Regulatory grounding. Handles EPR, hazmat, state waste codes end-to-end.</div>
            <div className="mc-meter">
              <div className="mc-meter-head"><span>Speed</span><span>Med</span></div>
              <div className="mc-meter-track"><div className="mc-meter-fill speed" style={{width:'85%'}}></div></div>
            </div>
            <div className="mc-meter">
              <div className="mc-meter-head"><span>Cost</span><span>Med</span></div>
              <div className="mc-meter-track"><div className="mc-meter-fill cost" style={{width:'55%'}}></div></div>
            </div>
            <a href="/services" className="mc-link">
              Learn more <span className="mc-arrow">→</span>
            </a>
          </div>
          <div className="model-card-p featured">
            <div className="mc-number">S4</div>
            <div className="mc-name">Compute</div>
            <div className="mc-sub">Full-stack intelligence. 10M+ products/day. $0.0024 per product.</div>
            <div className="mc-meter">
              <div className="mc-meter-head"><span>Speed</span><span>Highest</span></div>
              <div className="mc-meter-track"><div className="mc-meter-fill speed" style={{width:'100%'}}></div></div>
            </div>
            <div className="mc-meter">
              <div className="mc-meter-head"><span>Cost</span><span>Lowest</span></div>
              <div className="mc-meter-track"><div className="mc-meter-fill cost" style={{width:'8%'}}></div></div>
            </div>
            <a href="/suppliers" className="mc-link">
              Learn more <span className="mc-arrow">→</span>
            </a>
          </div>
          <div className="sort-cap-p">
            <div className="sort-cap-label">Ready to run?</div>
            <button className="sort-btn-p"
              data-tally-open="xXRkXr" data-tally-overlay="1" data-tally-layout="modal"
              data-tally-hide-title="1" data-tally-align-left="1"
              data-tally-emoji-text="👋" data-tally-emoji-animation="wave">
              Sort It
            </button>
            <div className="sort-cap-note">Nathan's platform<br />coming soon</div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Dashboard (Charlie's s4.1 flywheel) ── */}
      <section className="dashboard-section">
        <div className="container">
          <p className="s-eyebrow">Live performance · s4.1</p>
          <h2 className="s-headline">The flywheel is already spinning.</h2>
          <div className="dashboard-grid">
            {/* Left: KPIs + CTA */}
            <div>
              <p className="dashboard-desc">
                Real data from Charlie's production deployment. Every edge case sharpens the model. Every sort improves the next.
              </p>
              <div className="kpi-grid">
                <div className="kpi-card">
                  <div className="kpi-val"><span data-count="87.8" data-decimals="1" data-suffix="%">0%</span></div>
                  <div className="kpi-label">UN Number match rate</div>
                </div>
                <div className="kpi-card">
                  <div className="kpi-val"><span data-count="96.3" data-decimals="1" data-suffix="%">0%</span></div>
                  <div className="kpi-label">Clean classification rate</div>
                </div>
                <div className="kpi-card">
                  <div className="kpi-val">$<span data-count="0.0024" data-decimals="4" data-suffix="">0</span></div>
                  <div className="kpi-label">Cost per product</div>
                </div>
                <div className="kpi-card">
                  <div className="kpi-val"><span data-count="10131" data-decimals="0" data-suffix="">0</span></div>
                  <div className="kpi-label">Training exemplars</div>
                </div>
              </div>
              <button className="dashboard-cta"
                data-tally-open="xXRkXr" data-tally-overlay="1" data-tally-layout="modal"
                data-tally-hide-title="1" data-tally-align-left="1"
                data-tally-emoji-text="👋" data-tally-emoji-animation="wave">
                Talk to us about s4.1 →
              </button>
            </div>

            {/* Right: Flywheel panel */}
            <div className="flywheel-panel">
              <div className="fp-head">
                <div>
                  <div className="fp-title">s4.1 · Charlie deployment</div>
                  <div className="fp-sub">Flywheel active · updating daily</div>
                </div>
                <div className="fp-badge">LIVE</div>
              </div>
              <div className="fp-rows">
                <div className="fp-row">
                  <div className="fp-row-name">UN Number accuracy</div>
                  <div className="fp-row-spark">
                    <svg viewBox="0 0 100 24" preserveAspectRatio="none">
                      <polyline points="0,18 20,16 35,14 50,12 65,10 80,8 100,6" fill="none" stroke="#62B91A" strokeWidth="1.5" opacity="0.7"/>
                    </svg>
                  </div>
                  <div className="fp-row-val">87.8%</div>
                  <div className="fp-row-delta pos">+2.1%</div>
                </div>
                <div className="fp-row">
                  <div className="fp-row-name">Clean classifications</div>
                  <div className="fp-row-spark">
                    <svg viewBox="0 0 100 24" preserveAspectRatio="none">
                      <polyline points="0,20 20,18 35,15 50,13 65,11 80,9 100,7" fill="none" stroke="#62B91A" strokeWidth="1.5" opacity="0.7"/>
                    </svg>
                  </div>
                  <div className="fp-row-val">96.3%</div>
                  <div className="fp-row-delta pos">+0.8%</div>
                </div>
                <div className="fp-row">
                  <div className="fp-row-name">Cost per product</div>
                  <div className="fp-row-spark">
                    <svg viewBox="0 0 100 24" preserveAspectRatio="none">
                      <polyline points="0,4 20,6 35,9 50,11 65,14 80,17 100,20" fill="none" stroke="#8A9F52" strokeWidth="1.5" opacity="0.7"/>
                    </svg>
                  </div>
                  <div className="fp-row-val">$0.0024</div>
                  <div className="fp-row-delta pos">↓ 31%</div>
                </div>
                <div className="fp-row">
                  <div className="fp-row-name">Training exemplars</div>
                  <div className="fp-row-spark">
                    <svg viewBox="0 0 100 24" preserveAspectRatio="none">
                      <polyline points="0,22 20,20 35,17 50,14 65,10 80,7 100,4" fill="none" stroke="#62B91A" strokeWidth="1.5" opacity="0.7"/>
                    </svg>
                  </div>
                  <div className="fp-row-val">10,131</div>
                  <div className="fp-row-delta pos">+1,204</div>
                </div>
              </div>
              <div className="fp-footer">
                <span>Last updated: today</span>
                <span>s4.1 · production</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Four Tools ── */}
      <section className="tools-section-new">
        <div className="container">
          <p className="s-eyebrow">The platform</p>
          <h2 className="s-headline">One engine. Four tools.</h2>
          <p className="s-sub">Each tool is a purpose-built interface into the same underlying model stack.</p>
          <div className="tools-grid-new">
            <a href="/company" className="tool-card-new">
              <div className="tool-icon">🔎</div>
              <div className="tool-badge">S1 · Identify</div>
              <div className="tool-name-new">Identify</div>
              <div className="tool-desc-new">Takes any product signal — barcode, name, image — and returns a clean, structured identity. The first step in every sort.</div>
              <span className="tool-tag-new">Classification API</span>
            </a>
            <a href="/platform" className="tool-card-new">
              <div className="tool-icon">✨</div>
              <div className="tool-badge">S2 · Enrich</div>
              <div className="tool-name-new">Enrich</div>
              <div className="tool-desc-new">Fills in what's missing. Sparse records become complete product profiles — ingredients, attributes, regulatory flags, and more.</div>
              <span className="tool-tag-new">Data enrichment</span>
            </a>
            <a href="/services" className="tool-card-new">
              <div className="tool-icon">⚖️</div>
              <div className="tool-badge">S3 · Ground</div>
              <div className="tool-name-new">Ground</div>
              <div className="tool-desc-new">Grounds every product in the regulatory reality — EPR programs, RCRA codes, state waste requirements. One call, all jurisdictions.</div>
              <span className="tool-tag-new">Regulatory grounding</span>
            </a>
            <a href="/suppliers" className="tool-card-new">
              <div className="tool-icon">🖥</div>
              <div className="tool-badge">S4 · Compute</div>
              <div className="tool-name-new">Compute</div>
              <div className="tool-desc-new">Full-stack intelligence at warehouse scale. 10M+ products per day. The flywheel that gets smarter with every sort.</div>
              <span className="tool-tag-new">Scale compute</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: Science behind every sort ── */}
      <section className="section-5">
        <div className="w-layout-blockcontainer container-4 w-container">
          <div className="div-block-5">
            <h1 className="heading-5">The Science Behind Every Sort</h1>
            <p className="paragraph-3">Each generation brought a new approach to the same hard problem: classifying millions of regulated products, accurately, at scale.<br /></p>
            <div className="div-block-3">
              <div className="div-block-4">
                <div className="image-wrap">
                  <img src="images/1_1.png" loading="lazy" sizes="(max-width: 479px) 100vw, 354px" width="354" alt="" srcSet="images/1_1-p-500.png 500w, images/1_1-p-800.png 800w, images/1_1-p-1080.png 1080w, images/1_1-p-1600.png 1600w, images/1_1-p-2000.png 2000w, images/1_1.png 3750w" className="image-2" />
                  <div className="shine"></div>
                </div>
              </div>
              <div className="div-block-8">
                <div className="image-wrap">
                  <img src="images/2_1.png" loading="lazy" sizes="(max-width: 479px) 100vw, 354px" width="354" alt="" srcSet="images/2_1-p-500.png 500w, images/2_1-p-800.png 800w, images/2_1-p-1080.png 1080w, images/2_1-p-1600.png 1600w, images/2_1-p-2000.png 2000w, images/2_1.png 3750w" className="image-2" />
                  <div className="shine"></div>
                </div>
              </div>
              <div className="div-block-9">
                <div className="image-wrap">
                  <img src="images/3.png" loading="lazy" sizes="(max-width: 479px) 100vw, 354px" width="354" alt="" srcSet="images/3-p-500.png 500w, images/3-p-800.png 800w, images/3-p-1080.png 1080w, images/3-p-1600.png 1600w, images/3-p-2000.png 2000w, images/3.png 3750w" className="image-2" />
                  <div className="shine"></div>
                </div>
              </div>
              <div className="div-block-10">
                <div className="image-wrap">
                  <img src="images/4.png" loading="lazy" sizes="(max-width: 479px) 100vw, 354px" width="354" alt="" srcSet="images/4-p-500.png 500w, images/4-p-800.png 800w, images/4-p-1080.png 1080w, images/4-p-1600.png 1600w, images/4-p-2000.png 2000w, images/4.png 3750w" className="image-2" />
                  <div className="shine"></div>
                </div>
              </div>
              <div className="div-block-11">
                <div className="image-wrap">
                  <img src="images/5_1.png" loading="lazy" sizes="(max-width: 479px) 100vw, 354px" width="354" alt="" srcSet="images/5_1-p-500.png 500w, images/5_1-p-800.png 800w, images/5_1-p-1080.png 1080w, images/5_1-p-1600.png 1600w, images/5_1-p-2000.png 2000w, images/5_1.png 3750w" className="image-2" />
                  <div className="shine"></div>
                </div>
              </div>
            </div>
            <p className="paragraph-3-copy">Every edge case you bring makes the next model better.<br />The hard products — missing data, no GTIN, unlabeled hazmat — are exactly what we're training on.<br />Bring your catalog's worst cases. We want them.<br /></p>
          </div>
        </div>
        <a href="#" className="button w-button"
          data-tally-open="xXRkXr" data-tally-overlay="1" data-tally-layout="modal"
          data-tally-hide-title="1" data-tally-align-left="1"
          data-tally-emoji-text="👋" data-tally-emoji-animation="wave">
          <strong className="bold-text">Talk to Us About Smarter-5</strong>
        </a>
      </section>

      <Footer />
    </div>
  );
}
