import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {

  useEffect(() => {
    const s = document.createElement('script');
    s.src = '/js/webflow.js';
    document.body.appendChild(s);

    const t = document.createElement('script');
    t.src = 'https://tally.so/widgets/embed.js';
    document.body.appendChild(t);

    setTimeout(() => {
      // Populate loop stage videos
      const STAGE_POOLS = {
        'ls0': ["7tjudzarNVEPBjCFmbKOhpsFIZfdxDp01EYCWs003mcMc","fegD02Kvhpy4fH5018kAu8vlmRVMyQZ400mN01ImqbmReaw"],
        'ls1': ["eJjUQRd1bwOq1GwGidoXOcaBsdmh28BERXLPGgVbiVg","s5GQvh004FDyE4JHpGOTJ00ZpEPdNClQrjh4RC5pirgZM"],
        'ls2': ["JRKqhUxhkf2WyZJZofXFfkirrl302L99MbuulYMJNLCk","rHM01WMx8EkbpCjOZ3qxwvO2E3rLfWs00ByeZ02w4Te014Q"],
        'ls3': ["oWfeYDFAG01QeJIEii9ndgaduy4MK0202hLpzJfYwpXOAo","6ebyXilgEaBKLaUAy00zKAtA012ul00M25EEckGGmuzv6Q"],
        'ls4': ["01Bq8V6m00LuX9OXT5DhHyrUqcnVGusodMue1cL7J00Jyg","g1Lnlw6u3vAtYQB8Ily42XrCTQBZ3P01ca2yKM2d1saI"],
      };
      Object.entries(STAGE_POOLS).forEach(([id, pool]) => {
        const vid = document.getElementById(id);
        if (!vid) return;
        const muxId = pool[Math.floor(Math.random() * pool.length)];
        vid.poster = `https://image.mux.com/${muxId}/thumbnail.jpg`;
        vid.innerHTML = `<source src="https://stream.mux.com/${muxId}/highest.mp4" type="video/mp4">`;
        vid.load();
        vid.play().catch(() => {});
      });

      // True infinite looping carousel — clones cards so stage 1 flows after stage 5
      const track = document.querySelector('.loop-carousel-track');
      if (track && !track.dataset.initialized) {
        track.dataset.initialized = '1';
        const realStages = Array.from(track.querySelectorAll('.loop-stage'));
        const dots = document.querySelectorAll('.loop-dot');
        const N = realStages.length;
        const CARD_W = 280, GAP = 16;

        // Append clones so track = [0,1,2,3,4, 0c,1c,2c,3c,4c]
        realStages.forEach(s => {
          const clone = s.cloneNode(true);
          clone.dataset.clone = '1';
          track.appendChild(clone);
        });
        const allCards = Array.from(track.querySelectorAll('.loop-stage'));

        let current = 0;

        function getOffset(i) {
          const wrapW = track.parentElement.clientWidth || 900;
          return wrapW / 2 - (i * (CARD_W + GAP) + CARD_W / 2);
        }

        function goTo(i, instant) {
          if (instant) {
            track.style.transition = 'none';
            track.style.transform = `translateX(${getOffset(i)}px)`;
            track.offsetHeight;
            track.style.transition = '';
          } else {
            track.style.transform = `translateX(${getOffset(i)}px)`;
          }
          allCards.forEach((c, idx) => c.classList.toggle('active', idx === i));
          dots.forEach((d, idx) => d.classList.toggle('active', idx === (i % N)));
          current = i;
        }

        goTo(0);

        setInterval(() => {
          const next = current + 1;
          goTo(next);
          if (next >= N) {
            setTimeout(() => goTo(next - N, true), 660);
          }
        }, 2800);

        dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
        realStages.forEach((s, i) => s.addEventListener('click', () => goTo(i)));
        window.addEventListener('resize', () => goTo(current, true));
      }

      // Dashboard KPI counter tick-up
      function animateCounter(el, target, decimals, suffix, duration) {
        const start = performance.now();
        function frame(now) {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = (target * eased).toFixed(decimals) + suffix;
          if (t < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
      }
      const kpiObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          kpiObserver.unobserve(entry.target);
          entry.target.querySelectorAll('[data-count]').forEach(el => {
            animateCounter(el, parseFloat(el.dataset.count), parseInt(el.dataset.decimals || '0'), el.dataset.suffix || '', 1600);
          });
        });
      }, { threshold: 0.3 });
      const kpiGrid = document.querySelector('.kpi-grid');
      if (kpiGrid) kpiObserver.observe(kpiGrid);

    }, 500);

    return () => {
      if (document.body.contains(s)) document.body.removeChild(s);
    };
  }, []);

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
            opacity: 0, y: 30, stagger: 0.05, duration: 0.8, ease: 'power3.out', delay: 0.3,
          });
        }
      }
      gsap.from('.hero-sub', { opacity: 0, y: 20, duration: 1, ease: 'power2.out', delay: 0.6 });
      gsap.from('.loop-diagram', { opacity: 0, y: 40, duration: 1.2, ease: 'power2.out', delay: 0.9 });

      // Pipeline cards
      gsap.from('.model-card-p', {
        opacity: 0, x: 30, stagger: 0.1, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.pipeline-track', start: 'top 75%' },
      });

      // Dashboard KPI cards
      gsap.from('.kpi-card', {
        opacity: 0, y: 24, scale: 0.96, stagger: 0.08, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: '.kpi-grid', start: 'top 80%' },
      });

      // Tools grid
      gsap.from('.tool-card-new', {
        opacity: 0, y: 32, stagger: 0.1, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.tools-grid-new', start: 'top 75%' },
      });

      return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />

      {/* ── SECTION 1: Hero Loop with carousel ── */}
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

          <div className="loop-diagram">
            <div className="loop-carousel-wrap">
            <div className="loop-carousel-track">
              <div className="loop-stage">
                <div className="loop-stage-video">
                  <video id="ls0" autoPlay muted loop playsInline preload="auto"></video>
                </div>
                <div className="loop-stage-label">Intake</div>
                <div className="loop-stage-desc">Raw catalog data, no structure</div>
              </div>
              <div className="loop-stage">
                <div className="loop-stage-video">
                  <video id="ls1" autoPlay muted loop playsInline preload="auto"></video>
                </div>
                <div className="loop-stage-label">Scan</div>
                <div className="loop-stage-desc">Barcode, image, description</div>
              </div>
              <div className="loop-stage">
                <div className="loop-stage-video">
                  <video id="ls2" autoPlay muted loop playsInline preload="auto"></video>
                </div>
                <div className="loop-stage-label">Sort</div>
                <div className="loop-stage-desc">Classify, route, enrich</div>
              </div>
              <div className="loop-stage">
                <div className="loop-stage-video">
                  <video id="ls3" autoPlay muted loop playsInline preload="auto"></video>
                </div>
                <div className="loop-stage-label">Compute</div>
                <div className="loop-stage-desc">Regulatory decisions at scale</div>
              </div>
              <div className="loop-stage">
                <div className="loop-stage-video">
                  <video id="ls4" autoPlay muted loop playsInline preload="auto"></video>
                </div>
                <div className="loop-stage-label">Sell</div>
                <div className="loop-stage-desc">Shelf-ready, compliant products</div>
              </div>
            </div>
            </div>
            <div className="loop-footer">
              <span className="loop-infinity">∞ &nbsp; The confusion never stops. Neither do we.</span>
            </div>
          </div>

          <div className="loop-dots">
            <div className="loop-dot active"></div>
            <div className="loop-dot"></div>
            <div className="loop-dot"></div>
            <div className="loop-dot"></div>
            <div className="loop-dot"></div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Model Pipeline (S1 → S4) ── */}
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
            <a href="/company" className="mc-link">Learn more <span className="mc-arrow"></span></a>
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
            <a href="/platform" className="mc-link">Learn more <span className="mc-arrow"></span></a>
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
            <a href="/services" className="mc-link">Learn more <span className="mc-arrow"></span></a>
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
            <a href="/suppliers" className="mc-link">Learn more <span className="mc-arrow"></span></a>
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

      {/* ── SECTION 4: Dashboard (Charlie's s4.1 flywheel) ── */}
      <section className="dashboard-section">
        <div className="container">
          <p className="s-eyebrow">Live performance · s4.1</p>
          <h2 className="s-headline">The flywheel is already spinning.</h2>
          <div className="dashboard-grid">
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

      {/* ── SECTION 5: Four Tools ── */}
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

      {/* ── Lottie before footer ── */}
      <section className="lottie-cta-section">
        <div className="lottie-cta-inner">
          <lottie-player src="/documents/Untitled-file-3.json" autoplay loop style={{width:'100%',height:'auto'}}></lottie-player>
        </div>
      </section>

      <Footer />
    </div>
  );
}
