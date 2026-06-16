import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div style={{minHeight:'60vh',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'12px',padding:'80px 24px',textAlign:'center'}}>
        <p style={{fontFamily:'Inter,sans-serif',fontSize:'12px',fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:'#8A9F52',marginBottom:'8px'}}>Utility</p>
        <h1 style={{fontFamily:'Public Sans,sans-serif',fontSize:'clamp(32px,5vw,56px)',fontWeight:600,color:'#14150E',letterSpacing:'-0.03em',margin:0}}>Privacy Policy</h1>
        <p style={{fontFamily:'Inter,sans-serif',fontSize:'16px',color:'#5C5950',marginTop:'12px'}}>Coming soon.</p>
      </div>
      <Footer />
    </div>
  );
}
