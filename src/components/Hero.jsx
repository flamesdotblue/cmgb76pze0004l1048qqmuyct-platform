import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/oRrPvYYzPQFRFKuU/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Iridescent gradient veil (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-300 backdrop-blur-md">
            <Rocket size={14} className="text-fuchsia-400" />
            Futuristic 3D Portfolio
          </div>

          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-white via-fuchsia-200 to-sky-200 bg-clip-text text-transparent">Hi, I’m your next creative developer</span>
          </h1>
          <p className="mt-4 max-w-xl text-zinc-300">
            I build immersive, performant web experiences blending design, code, and 3D. Explore selected work and let’s craft something remarkable.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-400 px-5 py-3 text-sm font-medium text-white shadow-[0_0_40px_-12px] shadow-fuchsia-500/60">
              View Projects
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white backdrop-blur-xl">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
