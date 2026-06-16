import Navbar from '../components/Navbar';

export default function NotFound() {
  return (
    <div className="page-wrapper-ground">
      <Navbar />
      <section className="inner-banner">
        <div className="container">
          <div className="_404-content-wrap">
            <div className="_404-image-wrap">
              <img src="/images/404.png" loading="lazy" alt="" className="_404-image" />
            </div>
            <a className="dark-button w-variant-3b35c6e6-bf39-22a4-81e5-2d58550c88a7 w-inline-block" href="/"
              data-wf--primary-button--variant="alice-blue">
              <div className="primary-button-flex">
                <div className="primary-button-text-wrap-copy">
                  <div className="primary-button-text">Back To Homepage</div>
                  <div className="primary-button-text-hover">Back To Homepage</div>
                </div>
                <div className="primary-button-arrow-wrapper w-variant-3b35c6e6-bf39-22a4-81e5-2d58550c88a7">
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
      </section>
    </div>
  );
}
