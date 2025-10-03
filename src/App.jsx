import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const onClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href');
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-fuchsia-500/30 selection:text-white">
      {/* Subtle starry background */}
      <div className="pointer-events-none fixed inset-0 -z-0 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
