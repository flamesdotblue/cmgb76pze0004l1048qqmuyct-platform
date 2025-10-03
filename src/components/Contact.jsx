import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-2xl"
      >
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-violet-500/30 to-sky-400/30 blur-3xl" />

        <h2 className="text-3xl font-semibold tracking-tight">Let’s build something futuristic</h2>
        <p className="mt-2 max-w-2xl text-zinc-300">Available for freelance and full-time opportunities. I can join at any stage: concept, prototype, or production.</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black">
            <Mail size={16} /> hello@example.com
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white">
            <Github size={16} /> GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Stat number="5+" label="Years Experience" />
          <Stat number="40+" label="Shipped Projects" />
          <Stat number="10×" label="Performance Gains" />
        </div>
      </motion.div>

      <footer className="mt-12 flex items-center justify-between text-xs text-zinc-500">
        <span>© {new Date().getFullYear()} Neofolio</span>
        <a href="#home" className="hover:text-zinc-300">Back to top</a>
      </footer>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="text-2xl font-semibold text-white">{number}</div>
      <div className="mt-1 text-zinc-400">{label}</div>
    </div>
  );
}
