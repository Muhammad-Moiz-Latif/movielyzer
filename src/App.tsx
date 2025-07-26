import './App.css';
import Features from './components/Features';
import { Hero } from './components/Hero';
import HowItWorks from './components/HowItWorks';
import { Navbar } from './components/navbar';
import Pricing from './components/pricing';

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
    
    
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
    </div>
  );
}
