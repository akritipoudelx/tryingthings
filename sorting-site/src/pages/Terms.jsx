import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Terms() {
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
      <div className="inner-banner pp w-password-page w-form">
        <form action="/.wf_auth" method="post" id="email-form" name="email-form" data-name="Email Form" className="container w-password-page">
          <div className="inner-banner-content-wrap pp">
            <div className="inner-banner-subtitle-wrap">
              <div className="subtitle-wrap">
                <div className="subtitle-flex-wrap">
                  <img src="images/Subtitle-Icon.svg" loading="lazy" alt="Subtitle Icon" className="subtitle-icon" />
                  <div className="subtitle-text">Password Protected</div>
                </div>
              </div>
            </div>
            <h1 className="inner-banner-title">Security <span className="inner-banner-title-mark">Page.</span></h1>
            <p className="inner-banner-details">At Arooth, we offer a full range of creative and digital services designed to help brands stand out and succeed in a fast-evolving digital world.</p>
          </div>
          <div className="pp-container">
            <div className="pp-wrapper">
              <div className="pp-icon-wrap">
                <img src="images/PP-Icon.svg" alt="" className="pp-icon" />
              </div>
              <div className="pp-content-wrap">
                <div>
                  <div className="pp-title-wrap">
                    <h4 className="pp-title">Password Protected</h4>
                    <p className="pp-details">This page is password protected. If you are the website admin, or have access to this page, please type your password below.</p>
                  </div>
                  <label htmlFor="pass" className="display-none w-password-page">Password</label>
                  <input className="pp-field w-password-page w-input" autoFocus={true} maxLength={256} name="pass" data-name="field" placeholder="Enter your password" type="password" id="pass" />
                  <input type="submit" data-wait="Please wait..." className="submit-button _w-100 w-password-page w-button" value="Submit Now" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-password-page w-form-fail">
            <div>Incorrect password. Please try again.</div>
          </div>
        </form>
        <div className="section-divider"></div>
      </div>
      <Footer />
    </div>
  );
}
