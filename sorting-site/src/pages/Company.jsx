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

    const l = document.createElement('script');
    l.src = 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs';
    l.type = 'module';
    document.body.appendChild(l);

    return () => {
      if (document.body.contains(s)) document.body.removeChild(s);
    };
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="inner-page-top-bg">
        <div className="inner-page-bg-overlay"></div>
      </div>
      <section className="section-4">
        <div className="w-layout-blockcontainer w-container">
          <div className="div-block-6">
            <div className="div-block-7">
              <h1 className="heading-4">Meet <span className="text-span-5">Sordex</span>.</h1>
              <p className="paragraph-2">The agent that takes whatever you send—CSV, JSONL, a spreadsheet from 2019—and figures out what it means.</p>
            </div>
            <div className="lottie-animation-2" data-w-id="ec7a7207-b491-327b-1e1c-80ee63b7dac0" data-animation-type="lottie" data-src="documents/Untitled-file.json" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="0" data-duration="2.8" data-loading="lazy"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
