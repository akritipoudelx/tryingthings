import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Platform from './pages/Platform';
import Services from './pages/Services';
import Suppliers from './pages/Suppliers';
import Company from './pages/Company';
import NotFound from './pages/NotFound';
import Terms from './pages/Terms';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/services" element={<Services />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/company" element={<Company />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
