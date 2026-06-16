import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Platform() {
  return (
    <div className="page-wrapper">
      <div className="inner-page-top-bg">
        <div className="inner-page-bg-overlay"></div>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
}
