import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function FaqItem({ num, question, answer }) {
  return (
    <div className={`single-faq-wrapper _0${num}`}>
      <div className="faq-content-wrap">
        <div className="faq-top-wrap">
          <div className={`faq-question-serial _0${num}`}>question 0{num}</div>
          <div className="faq-icon-wrap">
            <img src="/images/FAQ-Plus.png" loading="lazy" alt="Plus" className={`faq-plus _0${num}`} />
            <img src="/images/FAQ-Minus.svg" loading="lazy" alt="Minus" className={`faq-minus _0${num}`} />
          </div>
        </div>
        <div className="faq-bottom-wrap">
          <div className={`faq-question-wrap _0${num}`}>
            <div className="faq-question">{question}</div>
          </div>
          <div className={`faq-ans-wrap _0${num}`}>
            <div className="faq-ans-content">
              <h4 className="faq-ans-title">Question Answer:</h4>
              <div className="faq-ans-divider"></div>
              <p className="faq-details">{answer}</p>
              <div className="faq-button-wrap">
                <a className="dark-button w-inline-block" href="/platform"
                  data-tally-open="xXRkXr" data-tally-layout="modal" data-tally-hide-title="1"
                  data-tally-align-left="1" data-wf--primary-button--variant="white"
                  data-tally-emoji-text="👋" data-tally-emoji-animation="wave">
                  <div className="primary-button-flex">
                    <div className="primary-button-text-wrap-copy">
                      <div className="primary-button-text">More About Us</div>
                      <div className="primary-button-text-hover">More About Us</div>
                    </div>
                    <div className="primary-button-arrow-wrapper">
                      <div className="primary-button-arrow-wrap">
                        <img src="/images/Button-Arrow.svg" loading="lazy" alt="Arrow" className="primary-button-arrow" />
                        <img src="/images/Button-Arrow.svg" loading="lazy" alt="Arrow" className="primary-button-arrow-hover" />
                      </div>
                    </div>
                  </div>
                  <div className="primary-button-hover-bg"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`faq-bg-shape _0${num}`}></div>
    </div>
  );
}

const FAQS = [
  { q: 'What regulations does Sorting cover?', a: 'Sorting covers 8 regulatory domains: DOT, IATA, IMDG, RCRA, IFC, NFPA, FDA, and EPA — plus state-specific waste codes for California, Massachusetts, Minnesota, Washington, New Hampshire, Rhode Island, and Vermont, and custom retailer codes for major retail partners.' },
  { q: 'How does Sorting classify a product?', a: 'Sorting uses a cascade of 6 methods — from deterministic rules to machine learning to large language models — starting with the fastest and cheapest, escalating only when needed. 97%+ of products are fully classified without ever reaching the LLM stage.' },
  { q: 'How long does classification take?', a: 'Most products are classified in under one second. The deterministic rules layer runs in under 1 millisecond. Only the most complex or ambiguous products require longer processing.' },
  { q: 'Who is Sorting for?', a: 'Sorting serves two primary audiences — retailers who need compliant shelving, storage, and waste routing across their stores, and suppliers who need their products classified before they can ship, shelf, or register with retail partners.' },
  { q: 'What is "product truth" and why does it matter?', a: 'Product truth is the verified, complete set of regulatory attributes for a product — the ground truth that all compliance decisions flow from. Without it, every downstream decision (shelving, labeling, waste routing, shipping) is guesswork.' },
];

export default function Suppliers() {
  return (
    <div className="page-wrapper">
      <div className="inner-page-top-bg">
        <div className="inner-page-bg-overlay"></div>
      </div>
      <Navbar />
      <section className="inner-banner">
        <div className="container">
          <div className="inner-banner-content-wrap margin-bottom">
            <div className="inner-banner-subtitle-wrap">
              <div className="subtitle-wrap">
                <div className="subtitle-flex-wrap">
                  <img src="/images/Untitled-design---2026-04-16T202450.993.png" loading="lazy" alt="" className="subtitle-icon" />
                  <div className="subtitle-text">Suppliers</div>
                </div>
              </div>
            </div>
            <h1 className="inner-banner-title">Submit Your Product. Ship <span className="inner-banner-title-mark">Tomorrow.</span></h1>
            <p className="inner-banner-details">Sorting classifies your products across every regulatory dimension your retail partners require — DOT, IATA, NFPA, RCRA, and more. Submit once. Get every classification you need to ship, shelf, and register instantly.</p>
          </div>
        </div>
        <div className="section-divider"></div>
        <section>
          <div className="w-layout-blockcontainer w-container">
            <img src="/images/AI-That-Understands-Compliance.png" loading="lazy" alt="" />
            <p>will basically put this on here.</p>
          </div>
        </section>
      </section>
      <section className="section faq">
        <div className="container">
          <div className="section-title-wrapper margin-bottom">
            <div className="section-subtile-wrap">
              <div className="subtitle-wrap w-variant-89dd2e21-7faa-27ca-a536-110057684450">
                <div className="subtitle-flex-wrap">
                  <img src="/images/Untitled-design---2026-04-16T205855.021.png" loading="lazy" alt="" className="subtitle-icon" />
                  <div className="subtitle-text w-variant-89dd2e21-7faa-27ca-a536-110057684450">FAQ</div>
                </div>
              </div>
            </div>
            <h2 className="section-title">Frequently Asked <span className="section-title-mark">Questions.</span></h2>
          </div>
          <div className="faqs-wrapper">
            <div className="faq-flex-wrap">
              {FAQS.map((faq, i) => (
                <FaqItem key={i} num={i+1} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
