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
      // POOLS script
      (function () {
        const POOLS = {
          'c0': ["7tjudzarNVEPBjCFmbKOhpsFIZfdxDp01EYCWs003mcMc","fegD02Kvhpy4fH5018kAu8vlmRVMyQZ400mN01ImqbmReaw",null,null],
          'c1': ["eJjUQRd1bwOq1GwGidoXOcaBsdmh28BERXLPGgVbiVg","s5GQvh004FDyE4JHpGOTJ00ZpEPdNClQrjh4RC5pirgZM",null,null],
          'c3': ["JRKqhUxhkf2WyZJZofXFfkirrl302L99MbuulYMJNLCk","rHM01WMx8EkbpCjOZ3qxwvO2E3rLfWs00ByeZ02w4Te014Q",null,null],
          'c4': ["oWfeYDFAG01QeJIEii9ndgaduy4MK0202hLpzJfYwpXOAo","6ebyXilgEaBKLaUAy00zKAtA012ul00M25EEckGGmuzv6Q",null,null],
          'c5': ["01Bq8V6m00LuX9OXT5DhHyrUqcnVGusodMue1cL7J00Jyg","g1Lnlw6u3vAtYQB8Ily42XrCTQBZ3P01ca2yKM2d1saI",null,null]
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
      })();

      // Orbit engine
      (function () {
        const N = 6;
        const CARD_W = 224;
        const CARD_H = 163;
        const SPEED = 0.0007 / 16.67;
        const canvas = document.getElementById("canvas");
        if (!canvas) return;
        const cards = Array.from({ length: N }, (_, i) => document.getElementById("c" + i));
        const base = cards.map((_, i) => (i / N) * 2 * Math.PI - Math.PI / 2);
        function ellipse() {
          const W = canvas.clientWidth || 900;
          const H = canvas.clientHeight || 640;
          return { cx: W/2, cy: H/2, rx: Math.min(W*0.38,380), ry: Math.min(H*0.36,200) };
        }
        function depthOpacity(angle) { return 0.72 + 0.28 * (Math.sin(angle) + 1) / 2; }
        let globalAngle = 0;
        let lastTime = null;
        const st = cards.map(() => ({ dragging: false, snapping: false, curX: 0, curY: 0 }));
        function tick(now) {
          if (lastTime !== null) globalAngle += SPEED * (now - lastTime);
          lastTime = now;
          const e = ellipse();
          cards.forEach((card, i) => {
            if (!card) return;
            if (st[i].dragging) {
              card.style.transform = `translate(${st[i].curX - CARD_W/2}px,${st[i].curY - CARD_H/2}px)`;
              card.style.opacity = "1";
              card.style.zIndex = "50";
              return;
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
          card.addEventListener("pointerdown", e => {
            pid = e.pointerId;
            card.setPointerCapture(pid);
            card.classList.add("dragging");
            card.classList.remove("snapping");
            st[i].dragging = true;
            st[i].snapping = false;
            const cr = canvas.getBoundingClientRect();
            st[i].curX = e.clientX - cr.left;
            st[i].curY = e.clientY - cr.top;
            e.preventDefault();
          });
          card.addEventListener("pointermove", e => {
            if (!st[i].dragging || e.pointerId !== pid) return;
            const cr = canvas.getBoundingClientRect();
            st[i].curX = e.clientX - cr.left;
            st[i].curY = e.clientY - cr.top;
          });
          function end(e) {
            if (e.pointerId !== pid) return;
            st[i].dragging = false;
            card.classList.remove("dragging");
            try { card.releasePointerCapture(pid); } catch (_) {}
            pid = null;
            const ep = ellipse();
            const angle = base[i] + globalAngle;
            const tx = ep.cx + ep.rx * Math.cos(angle) - CARD_W / 2;
            const ty = ep.cy + ep.ry * Math.sin(angle) - CARD_H / 2;
            const op = depthOpacity(angle);
            st[i].snapping = true;
            card.classList.add("snapping");
            card.style.transform = `translate(${tx.toFixed(1)}px,${ty.toFixed(1)}px)`;
            card.style.opacity = (0.5 + op * 0.5).toFixed(2);
            setTimeout(() => { st[i].snapping = false; card.classList.remove("snapping"); }, 700);
          }
          card.addEventListener("pointerup", end);
          card.addEventListener("pointercancel", end);
        });
      })();

      // Terminal animation
      const SCRIPT = [
        { type: "type",  text: '<span class="prompt">$</span> <span class="cmd">classify --product="Lavender Cleaner"</span>' },
        { type: "wait",  ms: 260 },
        { type: "print", text: '<span class="dim">→ 18 components parsed</span>' },
        { type: "bar",   label: "model  ", ms: 1100 },
        { type: "print", text: '<span class="dim">hazard </span><span class="warn">Corrosive (8)</span>' },
        { type: "print", text: '<span class="dim">route  </span><span class="accent">RCRA regulated</span>' },
        { type: "print", text: '<span class="dim">conf.  </span><span class="accent">98.7%</span>' },
        { type: "print", text: '<span class="success">✓</span> <span class="dim">classified in 0.42s</span>' },
        { type: "wait",  ms: 1600 },
      ];
      const TYPE_SPEED = 30;
      const LINE_PAUSE = 160;
      const MAX_VISIBLE = 6;
      const screen = document.getElementById("screen");
      if (screen) {
        let lines = [];
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        function render(active, cursor) {
          let out = lines.join("\n");
          if (active !== null) out += (out ? "\n" : "") + active;
          if (cursor) out += '<span class="cursor"></span>';
          screen.innerHTML = out;
        }
        function push(html) { lines.push(html); if (lines.length > MAX_VISIBLE) lines.shift(); }
        function revealHTML(html, n) {
          let out = "", count = 0, inTag = false;
          for (const ch of html) {
            if (ch === "<") inTag = true;
            if (inTag) out += ch; else if (count < n) { out += ch; count++; }
            if (ch === ">") inTag = false;
          }
          return out;
        }
        async function typeLine(html) {
          const tmp = document.createElement("div"); tmp.innerHTML = html;
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
            const bar = '<span class="bar-fill">' + "█".repeat(f) + "</span>" + '<span class="bar-track">' + "░".repeat(w - f) + "</span>";
            const pct = String(Math.round(t * 100)).padStart(3, " ");
            render('<span class="dim">' + label + "</span>[" + bar + "] " + '<span class="accent">' + pct + "%</span>", false);
            if (t >= 1) { push(screen.innerHTML); break; }
            await sleep(40);
          }
          render(null, true); await sleep(LINE_PAUSE);
        }
        async function run() {
          while (true) {
            lines = []; render(null, true);
            for (const s of SCRIPT) {
              if (s.type === "type") await typeLine(s.text);
              else if (s.type === "print") await printLine(s.text);
              else if (s.type === "bar") await progressBar(s.label, s.ms);
              else if (s.type === "wait") await sleep(s.ms);
            }
          }
        }
        run();
      }
    }, 500);

    return () => {
      if (document.body.contains(s)) document.body.removeChild(s);
    };
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="banner-section"></section>
      <section className="section-2">
        <div className="w-layout-blockcontainer container-2 w-container"></div>
        <div className="code-embed w-embed w-script">
          <div className="canvas" id="canvas">
            {/* 01 · Ingest Data */}
            <div className="card tile" id="c0">
              <div className="stage-pill">01 · Ingest Data</div>
              <video className="rv" autoPlay muted loop playsInline preload="auto"></video>
              <div className="label">input: retailer-catalog.csv</div>
            </div>
            {/* 02 · Enrich */}
            <div className="card tile" id="c1">
              <div className="stage-pill">02 · Enrich</div>
              <video className="rv" autoPlay muted loop playsInline preload="auto"></video>
              <div className="label">fields: resolved</div>
            </div>
            {/* 03 · Classify */}
            <div className="card tile" id="c2">
              <div className="stage-pill">03 · Classify</div>
              <div className="term-view">
                <div className="term-body" id="screen"></div>
              </div>
              <div className="label">smarter3 — classifier</div>
            </div>
            {/* 04 · Deliver */}
            <div className="card tile" id="c3">
              <div className="stage-pill">04 · Deliver</div>
              <video className="rv" autoPlay muted loop playsInline preload="auto"></video>
              <div className="label">output: structured data</div>
            </div>
            {/* 05 · Sort in Store */}
            <div className="card tile" id="c4">
              <div className="stage-pill">05 · Sort in Store</div>
              <video className="rv" autoPlay muted loop playsInline preload="auto"></video>
              <div className="label">retail: updated</div>
            </div>
            {/* 06 · Sell */}
            <div className="card tile" id="c5">
              <div className="stage-pill">06 · Sell</div>
              <video className="rv" autoPlay muted loop playsInline preload="auto"></video>
              <div className="label">compliance: cleared</div>
            </div>
          </div>
        </div>
      </section>
      <section data-w-id="0959151a-b22d-e46c-893c-f6e75a4d9fe2" className="section-3">
        <div className="w-layout-blockcontainer container-3 w-container">
          <div className="div-block-2">
            <lottie-player src="/documents/Untitled-file-3.json" autoplay loop style={{width:"100%",height:"auto"}}></lottie-player>
          </div>
          <div className="div-block">
            <h1 className="heading-3">We <span className="text-span-2">sort</span> the <span className="text-span-3">unsortable</span>.</h1>
            <p className="paragraph">Other models stop where the hard problems start.<strong> Sorting is the only engine purpose-trained on retail regulatory data</strong>.<br /><br /><strong>No other model covers the full regulatory spectrum from a single API call.</strong> Whether it be EPR or state waste codes— we resolve it all in one response, so you can ditch the five seperate vendor relationships.</p>
          </div>
        </div>
      </section>
      <section data-w-id="be8beff6-c78f-6b11-9ee1-cf71b40c1d22" className="section-5">
        <div className="w-layout-blockcontainer container-4 w-container">
          <div className="div-block-5">
            <h1 className="heading-5">The Science Behind Every Sort</h1>
            <p className="paragraph-3">Each generation brought a new approach to the same hard problem: classifying millions of regulated products, accurately, at scale.<br /></p>
            <div className="div-block-3">
              <div className="div-block-4">
                <div data-w-id="3f57f65a-ed5c-e02e-4b2f-a2cf401444de" className="image-wrap">
                  <img src="images/1_1.png" loading="lazy" sizes="(max-width: 479px) 100vw, 354px" width="354" alt="" srcSet="images/1_1-p-500.png 500w, images/1_1-p-800.png 800w, images/1_1-p-1080.png 1080w, images/1_1-p-1600.png 1600w, images/1_1-p-2000.png 2000w, images/1_1-p-2600.png 2600w, images/1_1-p-3200.png 3200w, images/1_1.png 3750w" className="image-2" />
                  <div className="shine"></div>
                </div>
              </div>
              <div className="div-block-8">
                <div data-w-id="924ce527-a887-ded9-c617-e81275d051cd" className="image-wrap">
                  <img src="images/2_1.png" loading="lazy" sizes="(max-width: 479px) 100vw, 354px" width="354" alt="" srcSet="images/2_1-p-500.png 500w, images/2_1-p-800.png 800w, images/2_1-p-1080.png 1080w, images/2_1-p-1600.png 1600w, images/2_1-p-2000.png 2000w, images/2_1-p-2600.png 2600w, images/2_1-p-3200.png 3200w, images/2_1.png 3750w" className="image-2" />
                  <div className="shine"></div>
                </div>
              </div>
              <div className="div-block-9">
                <div data-w-id="9ef47f9f-c42c-3e38-340b-71930d4adb0e" className="image-wrap">
                  <img src="images/3.png" loading="lazy" sizes="(max-width: 479px) 100vw, 354px" width="354" alt="" srcSet="images/3-p-500.png 500w, images/3-p-800.png 800w, images/3-p-1080.png 1080w, images/3-p-1600.png 1600w, images/3-p-2000.png 2000w, images/3-p-2600.png 2600w, images/3-p-3200.png 3200w, images/3.png 3750w" className="image-2" />
                  <div className="shine"></div>
                </div>
              </div>
              <div className="div-block-10">
                <div data-w-id="180d6692-74f9-f3c4-acf5-5f51b55edd59" className="image-wrap">
                  <img src="images/4.png" loading="lazy" sizes="(max-width: 479px) 100vw, 354px" width="354" alt="" srcSet="images/4-p-500.png 500w, images/4-p-800.png 800w, images/4-p-1080.png 1080w, images/4-p-1600.png 1600w, images/4-p-2000.png 2000w, images/4-p-2600.png 2600w, images/4-p-3200.png 3200w, images/4.png 3750w" className="image-2" />
                  <div className="shine"></div>
                </div>
              </div>
              <div className="div-block-11">
                <div data-w-id="02f908b9-bafb-72ba-e5fc-0579f0137631" className="image-wrap">
                  <img src="images/5_1.png" loading="lazy" sizes="(max-width: 479px) 100vw, 354px" width="354" alt="" srcSet="images/5_1-p-500.png 500w, images/5_1-p-800.png 800w, images/5_1-p-1080.png 1080w, images/5_1-p-1600.png 1600w, images/5_1-p-2000.png 2000w, images/5_1-p-2600.png 2600w, images/5_1-p-3200.png 3200w, images/5_1.png 3750w" className="image-2" />
                  <div className="shine"></div>
                </div>
              </div>
            </div>
            <p className="paragraph-3-copy">Every edge case you bring makes the next model better. <br />The hard products — missing data, no GTIN, unlabeled hazmat — are exactly what we&#x27;re training on. <br />Bring your catalog&#x27;s worst cases. We want them.<br /></p>
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
