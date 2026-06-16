import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    // Lottie
    const lottieSrc = document.querySelector('[data-animation-type="lottie"]');
    if (lottieSrc) {
      const s = document.createElement('script');
      s.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.js';
      s.type = 'module';
      document.body.appendChild(s);
    }

    // Orbit engine + terminal — needs DOM ready
    const timer = setTimeout(() => {
      // Video pools
      (function() {
        const POOLS = {
          'c0': ["7tjudzarNVEPBjCFmbKOhpsFIZfdxDp01EYCWs003mcMc","fegD02Kvhpy4fH5018kAu8vlmRVMyQZ400mN01ImqbmReaw"],
          'c1': ["eJjUQRd1bwOq1GwGidoXOcaBsdmh28BERXLPGgVbiVg","s5GQvh004FDyE4JHpGOTJ00ZpEPdNClQrjh4RC5pirgZM"],
          'c3': ["JRKqhUxhkf2WyZJZofXFfkirrl302L99MbuulYMJNLCk","rHM01WMx8EkbpCjOZ3qxwvO2E3rLfWs00ByeZ02w4Te014Q"],
          'c4': ["oWfeYDFAG01QeJIEii9ndgaduy4MK0202hLpzJfYwpXOAo","6ebyXilgEaBKLaUAy00zKAtA012ul00M25EEckGGmuzv6Q"],
          'c5': ["01Bq8V6m00LuX9OXT5DhHyrUqcnVGusodMue1cL7J00Jyg","g1Lnlw6u3vAtYQB8Ily42XrCTQBZ3P01ca2yKM2d1saI"]
        };
        Object.entries(POOLS).forEach(([cardId, pool]) => {
          const card = document.getElementById(cardId);
          if (!card) return;
          const id = pool[Math.floor(Math.random() * pool.length)];
          const el = card.querySelector('.rv');
          if (!el) return;
          el.poster = `https://image.mux.com/${id}/thumbnail.jpg`;
          el.innerHTML = `<source src="https://stream.mux.com/${id}/highest.mp4" type="video/mp4">`;
          el.load(); el.play().catch(() => {});
        });
      })();

      // Orbit engine
      (function() {
        const N=6, CARD_W=224, CARD_H=163, SPEED=0.0007/16.67;
        const canvas=document.getElementById("canvas");
        if (!canvas) return;
        const cards=Array.from({length:N},(_,i)=>document.getElementById("c"+i));
        const base=cards.map((_,i)=>(i/N)*2*Math.PI-Math.PI/2);
        function ellipse(){const W=canvas.clientWidth||900,H=canvas.clientHeight||640;return{cx:W/2,cy:H/2,rx:Math.min(W*0.38,380),ry:Math.min(H*0.36,200)};}
        function depthOpacity(a){return 0.72+0.28*(Math.sin(a)+1)/2;}
        let globalAngle=0,lastTime=null;
        const st=cards.map(()=>({dragging:false,snapping:false,curX:0,curY:0}));
        function tick(now){
          if(lastTime!==null)globalAngle+=SPEED*(now-lastTime);
          lastTime=now;
          const e=ellipse();
          cards.forEach((card,i)=>{
            if(!card)return;
            if(st[i].dragging){card.style.transform=`translate(${st[i].curX-CARD_W/2}px,${st[i].curY-CARD_H/2}px)`;card.style.opacity="1";card.style.zIndex="50";return;}
            if(st[i].snapping)return;
            const angle=base[i]+globalAngle;
            const x=e.cx+e.rx*Math.cos(angle)-CARD_W/2;
            const y=e.cy+e.ry*Math.sin(angle)-CARD_H/2;
            const op=depthOpacity(angle);
            card.style.transform=`translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;
            card.style.opacity=(0.5+op*0.5).toFixed(2);
            card.style.zIndex=String(Math.round(op*20));
          });
          requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        cards.forEach((card,i)=>{
          if(!card)return;
          let pid=null;
          card.addEventListener("pointerdown",e=>{
            pid=e.pointerId;card.setPointerCapture(pid);
            card.classList.add("dragging");card.classList.remove("snapping");
            st[i].dragging=true;st[i].snapping=false;
            const cr=canvas.getBoundingClientRect();
            st[i].curX=e.clientX-cr.left;st[i].curY=e.clientY-cr.top;e.preventDefault();
          });
          card.addEventListener("pointermove",e=>{
            if(!st[i].dragging||e.pointerId!==pid)return;
            const cr=canvas.getBoundingClientRect();
            st[i].curX=e.clientX-cr.left;st[i].curY=e.clientY-cr.top;
          });
          function end(e){
            if(e.pointerId!==pid)return;
            st[i].dragging=false;card.classList.remove("dragging");
            try{card.releasePointerCapture(pid);}catch(_){}pid=null;
            const ep=ellipse();const angle=base[i]+globalAngle;
            const tx=ep.cx+ep.rx*Math.cos(angle)-CARD_W/2;
            const ty=ep.cy+ep.ry*Math.sin(angle)-CARD_H/2;
            const op=depthOpacity(angle);
            st[i].snapping=true;card.classList.add("snapping");
            card.style.transform=`translate(${tx.toFixed(1)}px,${ty.toFixed(1)}px)`;
            card.style.opacity=(0.5+op*0.5).toFixed(2);
            setTimeout(()=>{st[i].snapping=false;card.classList.remove("snapping");},700);
          }
          card.addEventListener("pointerup",end);card.addEventListener("pointercancel",end);
        });
      })();

      // Terminal animation
      (function() {
        const SCRIPT=[
          {type:"type",text:'<span class="prompt">$</span> <span class="cmd">classify --product="Lavender Cleaner"</span>'},
          {type:"wait",ms:260},
          {type:"print",text:'<span class="dim">→ 18 components parsed</span>'},
          {type:"bar",label:"model  ",ms:1100},
          {type:"print",text:'<span class="dim">hazard </span><span class="warn">Corrosive (8)</span>'},
          {type:"print",text:'<span class="dim">route  </span><span class="accent">RCRA regulated</span>'},
          {type:"print",text:'<span class="dim">conf.  </span><span class="accent">98.7%</span>'},
          {type:"print",text:'<span class="success">✓</span> <span class="dim">classified in 0.42s</span>'},
          {type:"wait",ms:1600},
        ];
        const TYPE_SPEED=30,LINE_PAUSE=160,MAX_VISIBLE=6;
        const screen=document.getElementById("screen");
        if(!screen)return;
        let lines=[];
        const sleep=ms=>new Promise(r=>setTimeout(r,ms));
        function render(active,cursor){
          let out=lines.join("\n");
          if(active!==null)out+=(out?"\n":"")+active;
          if(cursor)out+='<span class="cursor"></span>';
          screen.innerHTML=out;
        }
        function push(html){lines.push(html);if(lines.length>MAX_VISIBLE)lines.shift();}
        function revealHTML(html,n){let out="",count=0,inTag=false;for(const ch of html){if(ch==="<")inTag=true;if(inTag)out+=ch;else if(count<n){out+=ch;count++;}if(ch===">")inTag=false;}return out;}
        async function typeLine(html){const tmp=document.createElement("div");tmp.innerHTML=html;const len=tmp.textContent.length;for(let i=0;i<=len;i++){render(revealHTML(html,i),true);await sleep(TYPE_SPEED);}push(html);render(null,true);await sleep(LINE_PAUSE);}
        async function printLine(html){push(html);render(null,true);await sleep(LINE_PAUSE);}
        async function progressBar(label,ms){
          const w=14,t0=performance.now();
          while(true){
            const t=Math.min(1,(performance.now()-t0)/ms);
            const f=Math.round(t*w);
            const bar='<span class="bar-fill">'+"█".repeat(f)+"</span>"+'<span class="bar-track">'+"░".repeat(w-f)+"</span>";
            const pct=String(Math.round(t*100)).padStart(3," ");
            render('<span class="dim">'+label+"</span>["+bar+"] "+'<span class="accent">'+pct+"%</span>",false);
            if(t>=1){push(screen.innerHTML);break;}
            await sleep(40);
          }
          render(null,true);await sleep(LINE_PAUSE);
        }
        async function run(){
          while(true){
            lines=[];render(null,true);
            for(const s of SCRIPT){
              if(s.type==="type")await typeLine(s.text);
              else if(s.type==="print")await printLine(s.text);
              else if(s.type==="bar")await progressBar(s.label,s.ms);
              else if(s.type==="wait")await sleep(s.ms);
            }
          }
        }
        run();
      })();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="banner-section"></section>
      <section className="section-2">
        <div className="w-layout-blockcontainer container-2 w-container"></div>
        <div className="code-embed w-embed w-script">
          <div className="canvas" id="canvas" style={{position:'relative',width:'100%',minHeight:'640px',overflow:'hidden',background:'transparent',touchAction:'none'}}>
            {/* Cards */}
            {[
              { id:'c0', stage:'01 · Ingest Data', label:'input: retailer-catalog.csv', terminal:false },
              { id:'c1', stage:'02 · Enrich', label:'fields: resolved', terminal:false },
              { id:'c2', stage:'03 · Classify', label:'smarter3 — classifier', terminal:true },
              { id:'c3', stage:'04 · Deliver', label:'output: structured data', terminal:false },
              { id:'c4', stage:'05 · Sort in Store', label:'retail: updated', terminal:false },
              { id:'c5', stage:'06 · Sell', label:'compliance: cleared', terminal:false },
            ].map(card => (
              <div key={card.id} id={card.id} className="card tile" style={{
                position:'absolute',left:0,top:0,width:'224px',opacity:0,cursor:'grab',
                borderRadius:'12px',willChange:'transform,opacity',transformOrigin:'top left',
                background:'#0d1117',border:'1px solid #2a3d50',boxShadow:'0 18px 45px -22px rgba(0,0,0,0.7)',
                overflow:'hidden',userSelect:'none',touchAction:'none'
              }}>
                <div className="stage-pill" style={{
                  position:'absolute',top:'-13px',left:'14px',fontSize:'9px',fontWeight:700,
                  letterSpacing:'0.14em',textTransform:'uppercase',color:'#8b949e',
                  background:'#161b22',border:'1px solid #1f2630',borderRadius:'20px',
                  padding:'2px 10px',pointerEvents:'none',whiteSpace:'nowrap',zIndex:2
                }}>{card.stage}</div>
                {card.terminal ? (
                  <div style={{display:'block',width:'100%',height:'136px',background:'#0d1117',overflow:'hidden',padding:'10px 12px'}}>
                    <div id="screen" style={{
                      fontSize:'9.5px',lineHeight:'1.55',color:'#c9d1d9',height:'100%',
                      overflow:'hidden',whiteSpace:'pre-wrap',wordBreak:'break-word',
                      fontFamily:'"SF Mono","JetBrains Mono","Fira Code",Menlo,Consolas,monospace'
                    }}></div>
                  </div>
                ) : (
                  <video className="rv" autoPlay muted loop playsInline preload="auto"
                    style={{display:'block',width:'100%',height:'136px',objectFit:'cover',
                    pointerEvents:'none',background:'#161b22'}} />
                )}
                <div className="label" style={{
                  padding:'7px 12px',fontSize:'13px',color:'#8b949e',background:'#161b22',
                  borderTop:'1px solid #1f2630',letterSpacing:'0.03em'
                }}>{card.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-3">
        <div className="w-layout-blockcontainer container-3 w-container">
          <div className="div-block-2">
            <div className="lottie-animation"
              data-animation-type="lottie"
              data-src="documents/Untitled-file-3.json"
              data-loop="1" data-direction="1" data-autoplay="1"
              data-renderer="svg" data-duration="5.333" data-loading="lazy">
            </div>
          </div>
          <div className="div-block">
            <h1 className="heading-3">We <span className="text-span-2">sort</span> the <span className="text-span-3">unsortable</span>.</h1>
            <p className="paragraph">Other models stop where the hard problems start.<strong> Sorting is the only engine purpose-trained on retail regulatory data</strong>.<br /><br /><strong>No other model covers the full regulatory spectrum from a single API call.</strong> Whether it be EPR or state waste codes— we resolve it all in one response, so you can ditch the five seperate vendor relationships.</p>
          </div>
        </div>
      </section>
      <section className="section-5">
        <div className="w-layout-blockcontainer container-4 w-container">
          <div className="div-block-5">
            <h1 className="heading-5">The Science Behind Every Sort</h1>
            <p className="paragraph-3">Each generation brought a new approach to the same hard problem: classifying millions of regulated products, accurately, at scale.<br /></p>
            <div className="div-block-3">
              {['1_1','2_1','3','4','5_1'].map((name,i) => (
                <div key={i} className={`div-block-${i === 0 ? 4 : 8 + i}`}>
                  <div className="image-wrap">
                    <img src={`/images/${name}.png`} loading="lazy" width="354" alt="" className="image-2" />
                    <div className="shine"></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="paragraph-3-copy">Every edge case you bring makes the next model better. <br />The hard products — missing data, no GTIN, unlabeled hazmat — are exactly what we&apos;re training on. <br />Bring your catalog&apos;s worst cases. We want them.<br /></p>
          </div>
        </div>
        <a href="https://tally.so/r/xXRkXr" target="_blank" rel="noopener noreferrer" className="button w-button"><strong className="bold-text">Talk to Us About Smarter-5</strong></a>
      </section>
      <Footer />
    </div>
  );
}
