import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta-wrap">
        <div className="container">
          <div className="cta-text-wrapper">
            <a className="cta-text-wrap w-inline-block" href="#"
              data-tally-open="xXRkXr" data-tally-overlay="1" data-tally-layout="modal" data-tally-hide-title="1"
              data-tally-align-left="1" data-tally-emoji-text="👋" data-tally-emoji-animation="wave">
              <div className="cta-text">Ready to s </div>
              <div className="cta-button-wrap">
                <div className="cta-button-arrow-wrap">
                  <img src="/images/CTA-Arrow.svg" loading="lazy" alt="" className="cta-button-arrow" />
                  <img src="/images/CTA-Arrow.svg" loading="lazy" alt="" className="cta-button-arrow absolute" />
                </div>
              </div>
              <div className="cta-text">rt?</div>
            </a>
          </div>
          <div className="cta-links-grid">
            <a href="https://console.cloud.google.com/marketplace/product/ss-gcp-marketplace/smarter-1?project=smarterx-labs" target="_blank" rel="noopener noreferrer" className="cta-social-link-wrap w-inline-block">
              <div className="cta-social-link-flex">
                <div className="cta-social-link-icon"></div>
                <div className="cta-social-link-text">google marketplace</div>
              </div>
              <div className="cta-link-hover-bg"></div>
            </a>
            <a href="https://www.linkedin.com/in/akritipoudel/" target="_blank" rel="noopener noreferrer" className="cta-social-link-wrap w-inline-block">
              <div className="cta-social-link-flex">
                <div className="cta-social-link-icon"></div>
                <div className="cta-social-link-text">linkedin</div>
              </div>
              <div className="cta-link-hover-bg"></div>
            </a>
            <a href="https://www.youtube.com/@sortyluvs2sort" target="_blank" rel="noopener noreferrer" className="cta-social-link-wrap w-inline-block">
              <div className="cta-social-link-flex">
                <div className="cta-social-link-icon"></div>
                <div className="cta-social-link-text">youtube</div>
              </div>
              <div className="cta-link-hover-bg"></div>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-top-wrap">
        <div className="container">
          <div className="footer-flex-wrap">
            <div className="footer-content-wrap">
              <Link to="/" className="footer-logo-wrap w-inline-block">
                <img width="200" alt="" src="/images/logo.png" loading="lazy" className="footer-logo" />
              </Link>
              <p className="footer-details">Every product in retail makes dozens of invisible decisions before it reaches a shelf. Sorting makes all of them.</p>
            </div>
            <div className="footer-right-wrap">
              <div className="quick-links-flex-wrap">
                <div className="quick-links-row one">
                  <div className="single-quick-links-wrapper">
                    <h6 className="quick-links-title">Main Pages</h6>
                    <div className="footer-links-flex">
                      <div className="footer-links-row">
                        <Link to="/company" className="footer-link">Identify</Link>
                        <Link to="/platform" className="footer-link">Enrich</Link>
                      </div>
                      <div className="footer-links-row">
                        <Link to="/services" className="footer-link">Ground</Link>
                        <Link to="/suppliers" className="footer-link">Compute</Link>
                      </div>
                    </div>
                  </div>
                  <div className="single-quick-links-wrapper">
                    <h6 className="quick-links-title">Utility Pages</h6>
                    <div className="footer-links-flex">
                      <div className="footer-links-row">
                        <Link to="/terms" className="footer-link">Terms &amp; Conditions</Link>
                        <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="quick-links-row two">
                  <div className="single-quick-links-wrapper">
                    <h6 className="quick-links-title">Contact</h6>
                    <div className="contact-infos-wrap">
                      <a href="mailto:sales@smartersorting.com?subject=Support" className="contact-info-text">sales@smartersorting.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-wrap">
        <div className="container">
          <div className="footer-copyright-wrap">
            <div className="copyright-text"></div>
          </div>
        </div>
      </div>
      <div className="footer-bg-overlay"></div>
    </footer>
  );
}
