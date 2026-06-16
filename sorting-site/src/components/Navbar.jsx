import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <div data-animation="default" data-collapse="all" data-duration="0" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
      <div className="container navbar-container">
        <div className="navbar-wrap">
          <div className="navbar-flex-wrap">
            <div className="nav-flex-left">
              <Link to="/" className="main-logo-wrap w-nav-brand">
                <img src="/images/logo.png" loading="lazy" alt="" className="main-logo" />
              </Link>
              <div className="nav-links-wrapper">
                <div className="nav-links-flex">
                  <Link to="/company" className="single-nav-link w-inline-block">
                    <div>Agent</div>
                  </Link>
                  <Link to="/platform" className={"single-nav-link w-inline-block" + (location.pathname === '/platform' ? ' w--current' : '')}>
                    <div>Rich</div>
                  </Link>
                  <Link to="/services" className={"single-nav-link w-inline-block" + (location.pathname === '/services' ? ' w--current' : '')}>
                    <div>Ground</div>
                  </Link>
                  <Link to="/suppliers" className={"single-nav-link w-inline-block" + (location.pathname === '/suppliers' ? ' w--current' : '')}>
                    <div>S</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="nav-flex-right">
              <div className="nav-right-flex">
                <div className="nav-button-wrap">
                  <a className="dark-button w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66 w-inline-block" href="#"
                    data-tally-open="xXRkXr" data-tally-overlay="1" data-tally-layout="modal" data-tally-hide-title="1"
                    data-tally-align-left="1" data-wf--primary-button--variant="blue"
                    data-tally-emoji-text="👋" data-tally-emoji-animation="wave">
                    <div className="primary-button-flex">
                      <div className="primary-button-text-wrap-copy">
                        <div className="primary-button-text w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66">Get Sorted</div>
                        <div className="primary-button-text-hover w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66">Get Sorted</div>
                      </div>
                      <div className="primary-button-arrow-wrapper w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66">
                        <div className="primary-button-arrow-wrap w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66">
                          <img src="/images/Untitled-design---2026-04-16T122225.997.png" loading="lazy" alt="" className="primary-button-arrow" />
                          <img src="/images/Untitled-design---2026-04-16T122225.997.png" loading="lazy" alt="" className="primary-button-arrow-hover" />
                        </div>
                      </div>
                    </div>
                    <div className="primary-button-hover-bg"></div>
                  </a>
                </div>
                <div className="navigations-wrapper">
                  <nav role="navigation" className="navigation w-nav-menu">
                    <div className="container navigation-container">
                      <div className="hamburger-wrapper">
                        <div className="navigation-content-wrap">
                          <div className="navigation-content-block">
                            <div className="navigation-content-wrapper">
                              <div className="navigation-contents">
                                <div className="navigation-links-flex">
                                  <Link to="/" className="single-navigation-links w-inline-block">
                                    <div className="navigation-inline-wrap">
                                      <div className="navigation-text-flex">
                                        <div className="navigation-link-text">Home</div>
                                        <div className="navigation-link-count">(01)</div>
                                      </div>
                                    </div>
                                    <div className="navigation-link-border"><div className="navigation-link-border-inner"></div></div>
                                  </Link>
                                  <Link to="/platform" className="single-navigation-links w-inline-block">
                                    <div className="navigation-inline-wrap">
                                      <div className="navigation-text-flex">
                                        <div className="navigation-link-text">About</div>
                                        <div className="navigation-link-count">(01)</div>
                                      </div>
                                    </div>
                                    <div className="navigation-link-border"><div className="navigation-link-border-inner"></div></div>
                                  </Link>
                                  <Link to="/services" className="single-navigation-links w-inline-block">
                                    <div className="navigation-inline-wrap">
                                      <div className="navigation-text-flex">
                                        <div className="navigation-link-text">Services</div>
                                        <div className="navigation-link-count">(04)</div>
                                      </div>
                                    </div>
                                    <div className="navigation-link-border"><div className="navigation-link-border-inner"></div></div>
                                  </Link>
                                  <Link to="/suppliers" className="single-navigation-links w-inline-block">
                                    <div className="navigation-inline-wrap">
                                      <div className="navigation-text-flex">
                                        <div className="navigation-link-text">Works</div>
                                        <div className="navigation-link-count">(05)</div>
                                      </div>
                                    </div>
                                    <div className="navigation-link-border"><div className="navigation-link-border-inner"></div></div>
                                  </Link>
                                </div>
                                <div className="navigation-button-wrapper">
                                  <Link to="/company" className="navigation-button w-inline-block">
                                    <div className="navigation-button-text-wrap">
                                      <div className="navigation-button-text">Get In Touch</div>
                                      <div className="navigation-button-text absolute">Get In Touch</div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="navigation-bg-wrap">
                              <div className="navigation-bg-top"></div>
                              <div className="navigation-bg-bottom"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                  <div className="hamburger-button w-nav-button">
                    <div className="hamburger-wrap">
                      <div className="hamburger-bars-wrap">
                        <div className="hamburger-bar _01"></div>
                        <div className="hamburger-bar _02"></div>
                        <div className="hamburger-bar _03"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
