import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Holographic UI Kit',
    desc: 'A glassmorphism design system with 3D motion and accessibility baked in.',
    tags: ['React', 'Tailwind', 'Framer'],
    href: '#',
    repo: '#',
    hue: 'from-fuchsia-500 to-violet-500',
  },
  {
    title: 'Realtime 3D Viewer',
    desc: 'WebGL/Spline powered viewer with physics and scene orchestration.',
    tags: ['Spline', 'Three.js', 'Vite'],
    href: '#',
    repo: '#',
    hue: 'from-sky-400 to-cyan-400',
  },
  {
    title: 'AI Content Studio',
    desc: 'A content generation workflow with prompt tooling and live previews.',
    tags: ['Node', 'OpenAI', 'Next.js'],
    href: '#',
    repo: '#',
    hue: 'from-emerald-400 to-teal-400',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-4 py-24">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Selected Projects</h2>
          <p className="mt-2 max-w-2xl text-zinc-400">A mix of interface experiments, production builds, and 3D explorations.</p>
        </div>
        <div className="hidden md:block text-sm text-zinc-400">Curated 2023–2025</div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${p.hue} opacity-30 blur-2xl`} />

            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{p.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-black/30 px-2 py-1 text-xs text-zinc-300">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a href={p.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/15">
                <ExternalLink size={14} /> Live
              </a>
              <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/15">
                <Github size={14} /> Code
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
