import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Global noise texture overlay is handled in CSS */}
      
      <header className="p-6 md:p-12 flex justify-between items-center relative z-50">
        <Link to="/" className="text-3xl font-display font-bold tracking-tighter uppercase bg-[var(--color-mustard)] px-3 py-1 hard-shadow-sm border-4 border-ink -rotate-2 hover:rotate-0 transition-transform">
          Irede.
        </Link>
        
        <button 
          className="md:hidden bg-[var(--color-brick)] text-white p-2 border-4 border-ink hard-shadow-sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 w-full md:w-auto bg-[var(--color-paper-light)] md:bg-transparent flex-col md:flex-row p-6 md:p-0 gap-6 border-b-4 border-ink md:border-none z-40 hard-shadow md:shadow-none rotate-1 md:rotate-0`}>
          <Link to="/profile" className="font-display text-xl uppercase hover:bg-[var(--color-brick)] hover:text-white px-2 py-1 transition-colors border-2 border-transparent hover:border-ink hover:hard-shadow-sm">
            Profile
          </Link>
          <Link to="/case-studies" className="font-display text-xl uppercase hover:bg-[var(--color-teal)] hover:text-white px-2 py-1 transition-colors border-2 border-transparent hover:border-ink hover:hard-shadow-sm">
            Case Studies
          </Link>
          <Link to="/journal" className="font-display text-xl uppercase hover:bg-[var(--color-burnt)] hover:text-white px-2 py-1 transition-colors border-2 border-transparent hover:border-ink hover:hard-shadow-sm">
            Journal
          </Link>
          <a href="#newsletter" className="font-display text-xl uppercase bg-[var(--color-brick)] text-white px-4 py-1 border-2 border-ink hard-shadow-sm hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all rotate-2 hover:rotate-0">
            Newsletter
          </a>
        </nav>
      </header>

      <main className="flex-grow relative z-10">
        {children}
      </main>

      <footer className="border-t-4 border-ink p-6 md:p-12 mt-24 bg-[var(--color-paper-dark)] relative z-10">
        {/* Analog motifs */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-ink opacity-20"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-ink opacity-20"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-16 h-16 bg-[var(--color-teal)] rounded-full mix-blend-multiply opacity-50 z-0"></div>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase mb-8 leading-[0.9] relative z-10">
              Let's get to <br/>
              <span className="text-[var(--color-brick)]">know each other.</span>
            </h2>
            <a href="mailto:joseph.iree@email.com" className="inline-block bg-[var(--color-teal)] text-white text-2xl font-display uppercase px-8 py-4 border-4 border-ink hard-shadow hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all rotate-1">
              Get in touch.
            </a>
          </div>
          
          <div id="newsletter" className="bg-[var(--color-mustard)] p-8 md:p-12 border-4 border-ink hard-shadow-brick -rotate-1 relative">
            {/* Tape effect */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/60 backdrop-blur-sm rotate-2 z-20"></div>
            
            <h3 className="text-3xl font-display font-bold uppercase mb-4">Join the Newsletter</h3>
            <p className="mb-8 font-mono text-base bg-[var(--color-paper-light)] p-3 border-2 border-ink">Thoughts on design, research, and innovation delivered to your inbox.</p>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="bg-[var(--color-paper)] border-4 border-ink p-4 font-mono text-lg focus:outline-none focus:ring-4 focus:ring-[var(--color-brick)]"
              />
              <button className="bg-ink text-white font-display text-xl uppercase py-4 border-4 border-ink hover:bg-[var(--color-brick)] transition-colors hard-shadow-sm hover:translate-y-1 hover:translate-x-1 hover:shadow-none">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t-4 border-ink flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-sm relative z-10">
          <div className="flex items-center gap-4">
            <p className="bg-ink text-white px-3 py-1 border-2 border-ink">© {new Date().getFullYear()} Irede Adekunle. All rights reserved.</p>
            {/* Barcode motif */}
            <div className="hidden md:flex gap-1 h-8 items-end opacity-50">
              <div className="w-1 h-full bg-ink"></div>
              <div className="w-2 h-full bg-ink"></div>
              <div className="w-1 h-full bg-ink"></div>
              <div className="w-0.5 h-full bg-ink"></div>
              <div className="w-3 h-full bg-ink"></div>
              <div className="w-1 h-full bg-ink"></div>
              <div className="w-2 h-full bg-ink"></div>
              <div className="w-0.5 h-full bg-ink"></div>
              <div className="w-1 h-full bg-ink"></div>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--color-brick)] hover:underline decoration-2 underline-offset-4 font-bold">LinkedIn</a>
            <a href="#" className="hover:text-[var(--color-teal)] hover:underline decoration-2 underline-offset-4 font-bold">Twitter</a>
            <a href="#" className="hover:text-[var(--color-burnt)] hover:underline decoration-2 underline-offset-4 font-bold">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

