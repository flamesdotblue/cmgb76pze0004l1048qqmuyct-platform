import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClasses = scrolled
    ? 'bg-black/60 backdrop-blur-xl border-white/10'
    : 'bg-transparent border-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-30 transition-colors duration-300 border-b ${navClasses}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-sky-400 to-violet-500 shadow-[0_0_40px_-10px] shadow-fuchsia-500/40" />
          <span className="font-semibold tracking-tight">Neofolio</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a className="text-sm text-zinc-300 hover:text-white transition" href="#projects">Projects</a>
          <a className="text-sm text-zinc-300 hover:text-white transition" href="#contact">Contact</a>
          <a className="text-sm text-zinc-300 hover:text-white transition" href="#home">Top</a>
          <a href="#contact" className="rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-400 px-4 py-2 text-sm font-medium text-white shadow-[0_0_30px_-10px] shadow-fuchsia-500/50">Hire me</a>
        </nav>

        <button aria-label="Toggle Menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white backdrop-blur-xl">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4">
            <a onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-zinc-200 hover:bg-white/5" href="#projects">Projects</a>
            <a onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-zinc-200 hover:bg-white/5" href="#contact">Contact</a>
            <a onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-zinc-200 hover:bg-white/5" href="#home">Top</a>
          </nav>
        </div>
      )}
    </header>
  );
}
