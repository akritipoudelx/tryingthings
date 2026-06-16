import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="page-wrapper">
      <div className="inner-page-top-bg">
        <div className="inner-page-bg-overlay"></div>
      </div>
      <Navbar />
      <section className="inner-banner">
        <div className="container">
          <div className="inner-banner-content-wrap">
            <h1 className="inner-banner-title">Terms &amp; Conditions</h1>
            <p className="inner-banner-details">Terms and conditions content coming soon.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
