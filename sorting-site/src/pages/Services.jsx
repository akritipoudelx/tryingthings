import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
    };
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="inner-page-top-bg">
        <div className="inner-page-bg-overlay"></div>
      </div>
      <section className="inner-banner">
        <div className="container">
          <div className="inner-banner-content-wrap margin-bottom">
            <div className="inner-banner-subtitle-wrap">
              <div data-wf--subtitle--variant="base" className="subtitle-wrap">
                <div className="subtitle-flex-wrap">
                  <img src="images/Untitled-design---2026-04-16T202450.993.png" loading="lazy" alt="" className="subtitle-icon" />
                  <div className="subtitle-text">Retailers</div>
                </div>
              </div>
            </div>
            <h1 className="inner-banner-title">Your Shelves Are Already <span className="inner-banner-title-mark">Sorted.</span></h1>
            <p className="inner-banner-details">Sorting gives retailers real-time compliance across every product, every aisle, and every regulatory domain — from fire code storage limits to hazmat shelf tags to waste bin routing. No manual lookups. No compliance gaps.</p>
          </div>
        </div>
        <div data-w-id="a931cefa-32a9-657c-ed22-03caa07e7ad1" className="service-banner-ticker-wrap">
          <div className="service-banner-ticker-flex">
            <div className="service-banner-ticker-item">
              <img src="images/Service-Banner-Shape-1.png" loading="lazy" alt="Service Shape" className="service-banner-ticker-shape" />
              <img src="images/Service-Banner-Image-1.png" loading="lazy" alt="Service Image" className="service-banner-ticker-image" />
              <img src="images/Service-Banner-Shape-3.png" loading="lazy" alt="Service Shape" className="service-banner-ticker-shape" />
              <img src="images/Service-Banner-Image-2.png" loading="lazy" alt="Service Image" className="service-banner-ticker-image" />
              <img src="images/Service-Banner-Shape-4.png" loading="lazy" alt="Service Shape" className="service-banner-ticker-shape" />
              <img src="images/Service-Banner-Image-3.png" loading="lazy" alt="Service Image" className="service-banner-ticker-image" />
              <img src="images/Service-Banner-Shape-2.png" loading="lazy" alt="Service Shape" className="service-banner-ticker-shape" />
            </div>
            <div className="service-banner-ticker-item">
              <img src="images/Service-Banner-Shape-1.png" loading="lazy" alt="Service Shape" className="service-banner-ticker-shape" />
              <img src="images/Service-Banner-Image-1.png" loading="lazy" alt="Service Image" className="service-banner-ticker-image" />
              <img src="images/Service-Banner-Shape-3.png" loading="lazy" alt="Service Shape" className="service-banner-ticker-shape" />
              <img src="images/Service-Banner-Image-2.png" loading="lazy" alt="Service Image" className="service-banner-ticker-image" />
              <img src="images/Service-Banner-Shape-4.png" loading="lazy" alt="Service Shape" className="service-banner-ticker-shape" />
              <img src="images/Service-Banner-Image-3.png" loading="lazy" alt="Service Image" className="service-banner-ticker-image" />
              <img src="images/Service-Banner-Shape-2.png" loading="lazy" alt="Service Shape" className="service-banner-ticker-shape" />
            </div>
            <div className="service-banner-ticker-item">
              <img src="images/Service-Banner-Shape-1.png" loading="lazy" alt="Service Shape" className="service-banner-ticker-shape" />
              <img src="images/Service-Banner-Image-1.png" loading="lazy" alt="Service Image" className="service-banner-ticker-image" />
              <img src="images/Service-Banner-Shape-3.png" loading="lazy" alt="Service Shape" className="service-banner-ticker-shape" />
              <img src="images/Service-Banner-Image-2.png" loading="lazy" alt="Service Image" className="service-banner-ticker-image" />
              <img src="images/Service-Banner-Shape-4.png" loading="lazy" alt="Service Shape" className="service-banner-ticker-shape" />
              <img src="images/Service-Banner-Image-3.png" loading="lazy" alt="Service Image" className="service-banner-ticker-image" />
              <img src="images/Service-Banner-Shape-2.png" loading="lazy" alt="Service Shape" className="service-banner-ticker-shape" />
            </div>
          </div>
        </div>
      </section>
      <section className="section service">
        <div className="container">
          <div className="services-title-wrap">
            <h2 className="services-title">" We prioritize trust and believe in honesty, transparency, and reliability. We consistently deliver and maintain open communication to build trust with our clients. "</h2>
          </div>
          <div className="all-services-wrap">
            <div className="w-dyn-list">
              <div role="list" className="services-grid-wrap w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <div className="single-service-wrap">
                    <div className="service-contents">
                      <div className="single-service-icon-wrap">
                        <img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" alt="" className="single-service-icon w-dyn-bind-empty" />
                      </div>
                      <div className="service-details-wrapper">
                        <div className="single-service-name-wrap">
                          <a href="#" className="single-service-name"></a>
                        </div>
                        <p className="single-service-details w-dyn-bind-empty"></p>
                      </div>
                      <div className="service-more-buttons-wrap">
                        <div className="service-more-button">
                          <a data-wf--more-button--variant="base" data-w-id="c0a1755c-9c82-135a-a1d7-2cda7e09bd2e" href="#" className="more-button w-inline-block">
                            <div className="more-button-flex">
                              <div className="more-button-text">View Details</div>
                              <div className="more-button-arrow-wrap">
                                <img src="images/More-Button-Arrow.svg" loading="lazy" alt="" className="more-button-arrow" />
                                <img src="images/More-Button-Arrow.svg" loading="lazy" alt="" className="more-button-arrow-hover" />
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="service-more-button absolute">
                          <a data-wf--more-button--variant="white" data-w-id="c0a1755c-9c82-135a-a1d7-2cda7e09bd2e" href="#" className="more-button w-inline-block">
                            <div className="more-button-flex">
                              <div className="more-button-text w-variant-0c325bc6-e049-52af-d0fe-85d5b21ce01c">View Details</div>
                              <div className="more-button-arrow-wrap w-variant-0c325bc6-e049-52af-d0fe-85d5b21ce01c">
                                <img src="images/Button-Arrow-Blue.svg" loading="lazy" alt="Arrow" className="more-button-arrow" />
                                <img src="images/Button-Arrow-Blue.svg" loading="lazy" alt="Arrow" className="more-button-arrow-hover" />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-service-hover-bg"></div>
                  </div>
                </div>
              </div>
              <div className="w-dyn-empty">
                <div>No items found.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-divider"></div>
      </section>
      <section className="section faq">
        <div className="container">
          <div className="section-title-wrapper margin-bottom">
            <div className="section-subtile-wrap">
              <div data-wf--subtitle--variant="borders" className="subtitle-wrap w-variant-89dd2e21-7faa-27ca-a536-110057684450">
                <div className="subtitle-flex-wrap">
                  <img src="images/Untitled-design---2026-04-16T205855.021.png" loading="lazy" alt="" className="subtitle-icon" />
                  <div className="subtitle-text w-variant-89dd2e21-7faa-27ca-a536-110057684450">FAQ</div>
                </div>
              </div>
            </div>
            <h2 className="section-title">Frequently Asked <span className="section-title-mark">Questions.</span></h2>
          </div>
          <div data-w-id="9b4c1208-9cd5-655e-7d5e-b78a33b093ca" className="faqs-wrapper">
            <div className="faq-flex-wrap">
              <div data-w-id="6526e32c-12d0-b77a-c990-ae5c0e8c25eb" className="single-faq-wrapper _01">
                <div className="faq-content-wrap">
                  <div className="faq-top-wrap">
                    <div className="faq-question-serial _01">question 01</div>
                    <div className="faq-icon-wrap">
                      <img src="images/FAQ-Plus.png" loading="lazy" alt="Plus" className="faq-plus _01" />
                      <img src="images/FAQ-Minus.svg" loading="lazy" alt="Minus" className="faq-minus _01" />
                    </div>
                  </div>
                  <div className="faq-bottom-wrap">
                    <div className="faq-question-wrap _01">
                      <div className="faq-question">What regulations does Sorting cover?</div>
                    </div>
                    <div className="faq-ans-wrap _01">
                      <div className="faq-ans-content">
                        <h4 className="faq-ans-title">Question Answer:</h4>
                        <div className="faq-ans-divider"></div>
                        <p className="faq-details">Sorting covers 8 regulatory domains: DOT, IATA, IMDG, RCRA, IFC, NFPA, FDA, and EPA — plus state-specific waste codes for California, Massachusetts, Minnesota, Washington, New Hampshire, Rhode Island, and Vermont, and custom retailer codes for major retail partners.</p>
                        <div className="faq-button-wrap">
                          <a className="dark-button w-inline-block" href="/platform" data-tally-open="xXRkXr" data-tally-layout="modal" data-tally-hide-title="1" data-tally-align-left="1" data-wf--primary-button--variant="white" data-tally-emoji-text="👋" data-tally-emoji-animation="wave">
                            <div className="primary-button-flex">
                              <div className="primary-button-text-wrap-copy">
                                <div className="primary-button-text">More About Us</div>
                                <div className="primary-button-text-hover">More About Us</div>
                              </div>
                              <div className="primary-button-arrow-wrapper">
                                <div className="primary-button-arrow-wrap">
                                  <img src="images/Button-Arrow.svg" loading="lazy" alt="Arrow" className="primary-button-arrow" />
                                  <img src="images/Button-Arrow.svg" loading="lazy" alt="Arrow" className="primary-button-arrow-hover" />
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
                <div className="faq-bg-shape _01"></div>
              </div>
              <div data-w-id="9b4c1208-9cd5-655e-7d5e-b78a33b093e3" className="single-faq-wrapper _02">
                <div className="faq-content-wrap">
                  <div className="faq-top-wrap">
                    <div className="faq-question-serial _02">Question 02</div>
                    <div className="faq-icon-wrap">
                      <img src="images/FAQ-Plus.png" loading="lazy" width="12" alt="Plus" className="faq-plus _02" />
                      <img src="images/FAQ-Minus.svg" loading="lazy" alt="Minus" className="faq-minus _02" />
                    </div>
                  </div>
                  <div className="faq-bottom-wrap">
                    <div className="faq-question-wrap _02">
                      <div className="faq-question">How does Sorting classify a product?</div>
                    </div>
                    <div className="faq-ans-wrap _02">
                      <div className="faq-ans-content">
                        <h4 className="faq-ans-title">Question Answer:</h4>
                        <div className="faq-ans-divider"></div>
                        <p className="faq-details">Sorting uses a cascade of 6 methods — from deterministic rules to machine learning to large language models — starting with the fastest and cheapest, escalating only when needed. 97%+ of products are fully classified without ever reaching the LLM stage.</p>
                        <div className="faq-button-wrap">
                          <a className="dark-button w-inline-block" href="/platform" data-tally-open="xXRkXr" data-tally-layout="modal" data-tally-hide-title="1" data-tally-align-left="1" data-wf--primary-button--variant="white" data-tally-emoji-text="👋" data-tally-emoji-animation="wave">
                            <div className="primary-button-flex">
                              <div className="primary-button-text-wrap-copy">
                                <div className="primary-button-text">More About Us</div>
                                <div className="primary-button-text-hover">More About Us</div>
                              </div>
                              <div className="primary-button-arrow-wrapper">
                                <div className="primary-button-arrow-wrap">
                                  <img src="images/Button-Arrow.svg" loading="lazy" alt="Arrow" className="primary-button-arrow" />
                                  <img src="images/Button-Arrow.svg" loading="lazy" alt="Arrow" className="primary-button-arrow-hover" />
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
                <div className="faq-bg-shape _02"></div>
              </div>
              <div data-w-id="9b4c1208-9cd5-655e-7d5e-b78a33b093fa" className="single-faq-wrapper _03">
                <div className="faq-content-wrap">
                  <div className="faq-top-wrap">
                    <div className="faq-question-serial _03">question 03</div>
                    <div className="faq-icon-wrap">
                      <img src="images/FAQ-Plus.png" loading="lazy" width="12" alt="Plus" className="faq-plus _03" />
                      <img src="images/FAQ-Minus.svg" loading="lazy" alt="Minus" className="faq-minus _03" />
                    </div>
                  </div>
                  <div className="faq-bottom-wrap">
                    <div className="faq-question-wrap _03">
                      <div className="faq-question">How long does classification take?</div>
                    </div>
                    <div className="faq-ans-wrap _03">
                      <div className="faq-ans-content">
                        <h4 className="faq-ans-title">Question Answer:</h4>
                        <div className="faq-ans-divider"></div>
                        <p className="faq-details">Most products are classified in under one second. The deterministic rules layer runs in under 1 millisecond. Only the most complex or ambiguous products require longer processing.</p>
                        <div className="faq-button-wrap">
                          <a className="dark-button w-inline-block" href="/platform" data-tally-open="xXRkXr" data-tally-layout="modal" data-tally-hide-title="1" data-tally-align-left="1" data-wf--primary-button--variant="white" data-tally-emoji-text="👋" data-tally-emoji-animation="wave">
                            <div className="primary-button-flex">
                              <div className="primary-button-text-wrap-copy">
                                <div className="primary-button-text">More About Us</div>
                                <div className="primary-button-text-hover">More About Us</div>
                              </div>
                              <div className="primary-button-arrow-wrapper">
                                <div className="primary-button-arrow-wrap">
                                  <img src="images/Button-Arrow.svg" loading="lazy" alt="Arrow" className="primary-button-arrow" />
                                  <img src="images/Button-Arrow.svg" loading="lazy" alt="Arrow" className="primary-button-arrow-hover" />
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
                <div className="faq-bg-shape _03"></div>
              </div>
              <div data-w-id="9b4c1208-9cd5-655e-7d5e-b78a33b09411" className="single-faq-wrapper _04">
                <div className="faq-content-wrap">
                  <div className="faq-top-wrap">
                    <div className="faq-question-serial _04">question 04</div>
                    <div className="faq-icon-wrap">
                      <img src="images/FAQ-Plus.png" loading="lazy" alt="Plus" className="faq-plus _04" />
                      <img src="images/FAQ-Minus.svg" loading="lazy" alt="Minus" className="faq-minus _04" />
                    </div>
                  </div>
                  <div className="faq-bottom-wrap">
                    <div className="faq-question-wrap _04">
                      <div className="faq-question">Who is Sorting for?</div>
                    </div>
                    <div className="faq-ans-wrap _04">
                      <div className="faq-ans-content">
                        <h4 className="faq-ans-title">Question Answer:</h4>
                        <div className="faq-ans-divider"></div>
                        <p className="faq-details">Sorting serves two primary audiences — retailers who need compliant shelving, storage, and waste routing across their stores, and suppliers who need their products classified before they can ship, shelf, or register with retail partners.</p>
                        <div className="faq-button-wrap">
                          <a className="dark-button w-inline-block" href="/platform" data-tally-open="xXRkXr" data-tally-layout="modal" data-tally-hide-title="1" data-tally-align-left="1" data-wf--primary-button--variant="white" data-tally-emoji-text="👋" data-tally-emoji-animation="wave">
                            <div className="primary-button-flex">
                              <div className="primary-button-text-wrap-copy">
                                <div className="primary-button-text">More About Us</div>
                                <div className="primary-button-text-hover">More About Us</div>
                              </div>
                              <div className="primary-button-arrow-wrapper">
                                <div className="primary-button-arrow-wrap">
                                  <img src="images/Button-Arrow.svg" loading="lazy" alt="Arrow" className="primary-button-arrow" />
                                  <img src="images/Button-Arrow.svg" loading="lazy" alt="Arrow" className="primary-button-arrow-hover" />
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
                <div className="faq-bg-shape _04"></div>
              </div>
              <div data-w-id="9b4c1208-9cd5-655e-7d5e-b78a33b09428" className="single-faq-wrapper _05">
                <div className="faq-content-wrap">
                  <div className="faq-top-wrap">
                    <div className="faq-question-serial _05">question 05</div>
                    <div className="faq-icon-wrap">
                      <img src="images/FAQ-Plus.png" loading="lazy" alt="Plus" className="faq-plus _05" />
                      <img src="images/FAQ-Minus.svg" loading="lazy" alt="Minus" className="faq-minus _05" />
                    </div>
                  </div>
                  <div className="faq-bottom-wrap">
                    <div className="faq-question-wrap _05">
                      <div className="faq-question">What is &quot;product truth&quot; and why does it matter?</div>
                    </div>
                    <div className="faq-ans-wrap _05">
                      <div className="faq-ans-content">
                        <h4 className="faq-ans-title">Question Answer:</h4>
                        <div className="faq-ans-divider"></div>
                        <p className="faq-details">Arooth provides end-to-end digital solutions, including web design, development, branding, digital marketing, UI/UX strategy, and SEO optimization — all tailored to help your business grow online.</p>
                        <div className="faq-button-wrap">
                          <a className="dark-button w-inline-block" href="/platform" data-tally-open="xXRkXr" data-tally-layout="modal" data-tally-hide-title="1" data-tally-align-left="1" data-wf--primary-button--variant="white" data-tally-emoji-text="👋" data-tally-emoji-animation="wave">
                            <div className="primary-button-flex">
                              <div className="primary-button-text-wrap-copy">
                                <div className="primary-button-text">More About Us</div>
                                <div className="primary-button-text-hover">More About Us</div>
                              </div>
                              <div className="primary-button-arrow-wrapper">
                                <div className="primary-button-arrow-wrap">
                                  <img src="images/Button-Arrow.svg" loading="lazy" alt="Arrow" className="primary-button-arrow" />
                                  <img src="images/Button-Arrow.svg" loading="lazy" alt="Arrow" className="primary-button-arrow-hover" />
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
                <div className="faq-bg-shape _05"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
