import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Sparkles, Laptop } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden">
      {/* Tech 3D Backdrop */}
      <TechBackdrop />

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
            Creative Developer Portfolio
          </div>

          <h1 className="mt-4 text-[2.6rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-white via-fuchsia-200 to-sky-200 bg-clip-text text-transparent">Ana Kitty</span>
            <br />
            <span className="text-[1.05em] text-white/90">Building next‑gen 3D & AI experiences</span>
          </h1>

          <p className="mt-4 max-w-xl text-zinc-300">
            Merging real‑time 3D, motion, and systems thinking to ship beautiful, performant products.
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
          <FloatingChip title="WebGL / Spline" hue="from-sky-400 to-cyan-300" y={0} delay={0.1} />
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
      style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.05) inset, 0 10px 30px rgba(168,85,247,0.08)' }}
    >
      <div className={`pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-to-br ${hue} opacity-40 blur-xl`} />
      <div className="text-xs text-zinc-300">Capability</div>
      <div className="mt-1 font-medium text-white">{title}</div>
    </motion.div>
  );
}

function TechBackdrop() {
  return (
    <div className="absolute inset-0">
      {/* Gradient atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.10),transparent_60%)]" />
      {/* Soft grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* 3D Scene container with perspective */}
      <div className="relative h-full w-full [perspective:1200px]">
        {/* Central laptop silhouette/card */}
        <motion.div
          initial={{ rotateX: 15, rotateY: -10, y: 20, opacity: 0 }}
          animate={{ rotateX: 15, rotateY: -10, y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute left-1/2 top-1/2 h-[340px] w-[520px] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]"
          style={{ filter: 'drop-shadow(0 40px 100px rgba(168,85,247,0.25))' }}
        >
          {/* Laptop base */}
          <div className="absolute left-1/2 top-1/2 h-[18px] w-[560px] -translate-x-1/2 -translate-y-[calc(50%-170px)] rounded-[14px] bg-gradient-to-b from-white/20 to-white/5 shadow-[0_10px_60px_-10px_rgba(56,189,248,0.35)]" />

          {/* Screen */}
          <motion.div
            animate={{ rotateX: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-[16px] border border-white/15 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl [transform:translateZ(40px)] overflow-hidden"
          >
            {/* Bezel */}
            <div className="absolute inset-0 rounded-[16px] ring-1 ring-inset ring-white/10" />
            {/* Top bar */}
            <div className="flex items-center gap-2 px-3 py-2 text-[10px] text-zinc-300">
              <span className="inline-flex h-2 w-2 rounded-full bg-red-400/80" />
              <span className="inline-flex h-2 w-2 rounded-full bg-amber-300/80" />
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400/80" />
              <span className="ml-2 inline-flex items-center gap-1 text-xs text-zinc-300/90"><Laptop size={12} /> dev-session.js</span>
            </div>

            {/* Code panes */}
            <div className="grid h-full grid-cols-12 gap-2 p-3 pr-4">
              <div className="col-span-3 hidden rounded-md border border-white/10 bg-black/30 p-2 sm:block">
                <div className="mb-2 text-[10px] uppercase tracking-wide text-zinc-400">Explorer</div>
                {['src', 'components', 'utils', 'hooks', 'public'].map((f) => (
                  <div key={f} className="my-1 flex items-center gap-2 text-xs text-zinc-300/90">
                    <span className="h-1.5 w-1.5 rounded-sm bg-fuchsia-400/70" /> {f}
                  </div>
                ))}
              </div>
              <div className="col-span-12 rounded-md border border-white/10 bg-black/30 p-3 sm:col-span-9">
                <CodeLines />
              </div>
            </div>

            {/* Glow */}
            <div className="pointer-events-none absolute -bottom-8 left-1/2 h-24 w-[80%] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-2xl" />
          </motion.div>

          {/* Floating HUD chips around the laptop */}
          <HUDChip styleClass="-left-32 -top-24" title="Build: Passing" hue="from-emerald-400 to-teal-400" delay={0.2} />
          <HUDChip styleClass="-right-36 -top-4" title="FPS: 60" hue="from-sky-400 to-cyan-400" delay={0.35} />
          <HUDChip styleClass="-left-36 top-20" title="Bundle: 120KB" hue="from-fuchsia-400 to-violet-400" delay={0.5} />
        </motion.div>

        {/* Subtle particles */}
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white/70"
              style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -8, 0] }}
              transition={{ duration: 4 + (i % 5), repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function HUDChip({ title, hue, styleClass = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`absolute ${styleClass} rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs text-white backdrop-blur-xl`}
    >
      <div className={`pointer-events-none absolute -right-6 -top-6 h-14 w-14 rounded-full bg-gradient-to-br ${hue} opacity-40 blur-xl`} />
      <div className="relative">{title}</div>
    </motion.div>
  );
}

function CodeLines() {
  const lines = [
    'import { motion } from "framer-motion"',
    'import { createRoot } from "react-dom/client"',
    '',
    'export function App() {',
    '  const ready = useReady() \n',
    '  return (<Scene ready={ready} />)',
    '}',
    '',
    'function Scene({ ready }) {',
    '  return (',
    '    <motion.group',
    '      initial={{ opacity: 0 }}',
    '      animate={{ opacity: 1 }}',
    '      transition={{ duration: 0.8 }}',
    '    />',
    '  )',
    '}',
  ];

  return (
    <div className="font-mono text-[11px] leading-relaxed">
      {lines.map((l, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.02 * i, duration: 0.4 }}
          className="whitespace-pre text-zinc-300"
        >
          <span className="select-none text-zinc-500/60">{String(i + 1).padStart(2, '0')} </span>
          <span className="text-fuchsia-300/90">{highlight(l)}</span>
        </motion.div>
      ))}
    </div>
  );
}

function highlight(text) {
  // very lightweight pseudo-highlighting
  return text
    .replaceAll('import', 'import')
    .replaceAll('from', 'from')
    .replaceAll('export', 'export')
    .replaceAll('function', 'function');
}
