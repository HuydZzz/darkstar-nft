import './index.css';
import Hero from './components/Hero';
import Lore from './components/Lore';
import Gallery from './components/Gallery';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Page sections */}
      <Hero />
      <Lore />
      <Gallery />
      <Roadmap />
      <Footer />
    </div>
  );
}
