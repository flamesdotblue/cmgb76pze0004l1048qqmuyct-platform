import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/oRrPvYYzPQFRFKuU/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Futuristic overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.10),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_3px)]" />
      <div className="pointer-events-none absolute -inset-[20%] -z-0 animate-[spin_30s_linear_infinite] rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(168,85,247,0.12),rgba(56,189,248,0.12),rgba(168,85,247,0.12))]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative max-w-3xl"
        >
          {/* Glowing frame */}
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-r from-fuchsia-500/15 via-violet-500/10 to-sky-400/15 blur-2xl" />

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-300 backdrop-blur-md">
            <Rocket size={14} className="text-fuchsia-400" />
            Crafting immersive web futures
          </div>

          <h1 className="mt-4 text-[2.6rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-white via-fuchsia-200 to-sky-200 bg-clip-text text-transparent">Ana Kitty</span>
            <br />
            <span className="text-[1.05em] text-white/90">Building next‑gen 3D & AI experiences</span>
          </h1>

          <p className="mt-4 max-w-xl text-zinc-300">
            Creative developer merging real‑time 3D, motion, and systems thinking to ship beautiful, performant products.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-400 px-5 py-3 text-sm font-medium text-white shadow-[0_0_40px_-12px] shadow-fuchsia-500/60">
              Explore Work
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white backdrop-blur-xl">
              Contact
            </a>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-zinc-300 backdrop-blur-xl">
              <Sparkles size={14} className="text-sky-300" /> Available for 2025 projects
            </div>
          </div>
        </motion.div>

        {/* Floating chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="pointer-events-none absolute right-6 top-24 hidden select-none md:block"
        >
          <FloatingChip title="Spline / WebGL" hue="from-sky-400 to-cyan-300" y={0} delay={0.1} />
          <FloatingChip title="Motion Design" hue="from-fuchsia-400 to-violet-400" y={80} delay={0.2} />
          <FloatingChip title="Performance First" hue="from-emerald-400 to-teal-300" y={160} delay={0.3} />
        </motion.div>
      </div>
    </section>
  );
}

function FloatingChip({ title, hue, y = 0, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: y + 10 }}
      animate={{ opacity: 1, y }}
      transition={{ duration: 0.8, delay }}
      className={`relative mb-5 w-[220px] rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl`}
      style={{
        boxShadow:
          '0 0 0 1px rgba(255,255,255,0.05) inset, 0 10px 30px rgba(168,85,247,0.08)'
      }}
    >
      <div className={`pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-to-br ${hue} opacity-40 blur-xl`} />
      <div className="text-xs text-zinc-300">Capability</div>
      <div className="mt-1 font-medium text-white">{title}</div>
    </motion.div>
  );
}
