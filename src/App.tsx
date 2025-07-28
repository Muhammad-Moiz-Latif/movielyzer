"use client"

import './App.css';
import Features from './components/Features';
import { Hero } from './components/Hero';
import HowItWorks from './components/HowItWorks';
import { Navbar } from './components/navbar';
import { Pricing } from './components/pricing';
import { Stats } from './components/stats';
import { JoinUs } from './components/JoinUs';
import { Footer } from './components/footer';
import { motion , type Variants} from 'framer-motion';

// Animation variant for navbar
const fadeInDown : Variants = {
  hidden: { 
    opacity: 0, 
    y: -20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInDown}
        transition={{ delay: 0.9 }}
        className="relative z-50"
      >
        <Navbar />
      </motion.div>
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Pricing />
      <JoinUs />
      <Footer />
    </div>
  );
}