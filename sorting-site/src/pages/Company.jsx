import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Company() {
  useEffect(() => {
    // Load Lottie player
    const s = document.createElement('script');
    s.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.js';
    s.type = 'module';
    document.body.appendChild(s);
    // Init Webflow lottie data attributes
    const els = document.querySelectorAll('[data-animation-type="lottie"]');
    els.forEach(el => {
      const src = el.getAttribute('data-src');
      if (src) {
        const player = document.createElement('dotlottie-player');
        player.setAttribute('src', '/' + src);
        player.setAttribute('autoplay', '');
        player.setAttribute('loop', '');
        player.style.width = '100%';
        player.style.height = '100%';
        el.appendChild(player);
      }
    });
    return () => { try { document.body.removeChild(s); } catch(_) {} };
  }, []);

  return (
    <div className="page-wrapper">
      <div className="inner-page-top-bg">
        <div className="inner-page-bg-overlay"></div>
      </div>
      <Navbar />
      <section className="section-4">
        <div className="w-layout-blockcontainer w-container">
          <div className="div-block-6">
            <div className="div-block-7">
              <h1 className="heading-4">Meet <span className="text-span-5">Sordex</span>.</h1>
              <p className="paragraph-2">The agent that takes whatever you send—CSV, JSONL, a spreadsheet from 2019—and figures out what it means.</p>
            </div>
            <div className="lottie-animation-2"
              data-animation-type="lottie"
              data-src="documents/Untitled-file.json"
              data-loop="1" data-direction="1" data-autoplay="1"
              data-renderer="svg" data-duration="2.8" data-loading="lazy">
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
