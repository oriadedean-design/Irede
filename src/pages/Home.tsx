import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/caseStudies';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 overflow-hidden">
      {/* Hero Section */}
      <section className="py-12 md:py-24 relative min-h-[85vh] flex items-center">
        {/* Giant Background Letter */}
        <div className="absolute top-0 right-1/4 text-[30rem] md:text-[45rem] font-serif font-bold text-[var(--color-brick)] leading-none select-none z-0 opacity-90 mix-blend-multiply">
          A
        </div>

        {/* Analog Motifs */}
        <div className="absolute top-10 left-10 w-24 h-24 border-2 border-ink rounded-full flex items-center justify-center opacity-50 z-0">
          <div className="w-full h-px bg-ink absolute"></div>
          <div className="h-full w-px bg-ink absolute"></div>
          <div className="w-16 h-16 border-2 border-ink rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          
          <div className="lg:col-span-7 relative z-30">
            <div className="bg-[var(--color-paper-light)] border-2 border-ink inline-flex items-center gap-2 px-3 py-1 mb-6 hard-shadow-sm transform -rotate-2">
              <div className="w-2 h-2 bg-[var(--color-brick)] rounded-full"></div>
              <span className="font-mono text-xs uppercase tracking-wider font-bold">Senior Innovation Designer</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold uppercase leading-[0.8] tracking-tighter mb-8 mix-blend-multiply relative z-20">
              <span className="font-display relative z-10">Irede</span><br/>
              <span className="font-serif italic text-[var(--color-teal)] relative z-10 lowercase tracking-normal pr-8">Adekunle</span>
            </h1>
            
            <div className="bg-[var(--color-paper-light)] border-4 border-ink p-6 hard-shadow-brick max-w-2xl mb-8 relative z-20 rotate-1">
              <p className="font-serif text-2xl md:text-3xl leading-snug">
                I design for human agency in an age of automation.
              </p>
            </div>
            
            <p className="font-mono text-sm md:text-base max-w-xl mb-12 leading-relaxed bg-[var(--color-paper)] p-4 border-l-4 border-ink relative z-20">
              Research-Led Innovation & Product-Market Fit | Ex-Ipsos (Google, BBC, Deloitte). My work ensures that AI-powered ventures are anchored not just in data, but in the nuanced contexts of the people they serve.
            </p>
            
            <div className="flex flex-wrap gap-4 relative z-20">
              <Link to="/case-studies" className="bg-ink text-white font-display text-xl uppercase px-8 py-4 border-2 border-ink hard-shadow-mustard hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all flex items-center gap-2">
                View Work <ArrowRight size={20} />
              </Link>
              <Link to="/profile" className="bg-[var(--color-paper-light)] text-ink font-display text-xl uppercase px-8 py-4 border-2 border-ink hard-shadow-teal hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all flex items-center gap-2">
                Curriculum Vitae
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative mt-16 lg:mt-0 z-20">
            {/* Starburst Background */}
            <svg className="absolute -top-16 -left-16 w-full h-full text-[var(--color-mustard)] z-0 mix-blend-multiply scale-125" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="50,0 55,35 85,15 65,45 100,50 65,55 85,85 55,65 50,100 45,65 15,85 35,55 0,50 35,45 15,15 45,35" fill="currentColor" stroke="var(--color-ink)" strokeWidth="0.5" />
            </svg>

            {/* Hazard stripes */}
            <div className="absolute -bottom-12 -right-4 w-32 h-64 border-4 border-ink z-0 bg-[repeating-linear-gradient(45deg,var(--color-brick),var(--color-brick)_10px,var(--color-ink)_10px,var(--color-ink)_20px)]"></div>
            
            <div className="relative z-10 halftone-wrapper rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E03AQG_exJtDhNtcA/profile-displayphoto-crop_800_800/B4EZ0XECD1GwAI-/0/1774208430235?e=1777507200&v=beta&t=raJOf_2FVCL26TZlj1aIig-AvF-nVWm4h0WbaevsZog" 
                alt="Irede Portrait" 
                className="w-full h-auto border-4 border-ink hard-shadow-teal halftone-img torn-edge"
              />

              {/* Scribble Overlay */}
              <svg className="absolute top-1/4 -left-16 w-48 h-48 text-ink z-30 opacity-90 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10,50 Q20,20 40,40 T70,30 T90,60 T60,80 T30,60 T50,40 T80,50" />
                <path d="M20,60 Q10,80 30,90 T60,70 T80,90 T90,40 T60,20 T40,50" />
                <path d="M50,10 Q70,0 80,20 T50,60 T20,40 T40,20" />
                <path d="M30,30 Q50,10 70,40 T40,80 T20,50" />
              </svg>

              {/* Floating UI Window 1 */}
              <div className="absolute -right-16 top-10 bg-[var(--color-paper-light)] border-2 border-ink w-48 hard-shadow-sm z-30 rotate-6">
                <div className="border-b-2 border-ink p-1.5 flex gap-1 bg-[var(--color-paper-dark)]">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-brick)] border border-ink"></div>
                  <div className="w-2 h-2 rounded-full bg-[var(--color-mustard)] border border-ink"></div>
                  <div className="w-2 h-2 rounded-full bg-[var(--color-teal)] border border-ink"></div>
                </div>
                <div className="p-3">
                  <div className="flex justify-between text-[8px] font-mono mb-2 border-b border-ink pb-1">
                    <span>FORMAT: JPG</span>
                    <span>2026</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-1 leading-none">Visionary</h3>
                  <p className="font-mono text-[9px] leading-tight">
                    Cross-cultural lens applied to systemic problem-solving.
                  </p>
                </div>
              </div>

              {/* Floating UI Window 2 */}
              <div className="absolute -bottom-8 -left-12 bg-[var(--color-paper-light)] border-2 border-ink w-56 hard-shadow-sm z-30 -rotate-3">
                <div className="border-b-2 border-ink p-1.5 flex gap-1 bg-[var(--color-paper-dark)]">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-brick)] border border-ink"></div>
                  <div className="w-2 h-2 rounded-full bg-[var(--color-mustard)] border border-ink"></div>
                  <div className="w-2 h-2 rounded-full bg-[var(--color-teal)] border border-ink"></div>
                </div>
                <div className="p-3">
                  <h3 className="font-display text-lg font-bold mb-1 uppercase leading-none">Human Centric</h3>
                  <p className="font-mono text-[9px] leading-tight mb-2">
                    Translating deep empirical insights into tangible products.
                  </p>
                  <div className="bg-ink text-white text-center text-[10px] py-1 font-mono uppercase cursor-pointer hover:bg-[var(--color-brick)]">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Choose Your Own Adventure / Expertise */}
      <section className="py-24 relative">
        {/* Background grid lines */}
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)', backgroundSize: '100px 100px', opacity: 0.05 }}></div>
        
        <div className="mb-20 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="relative">
            <div className="absolute -inset-4 bg-[var(--color-teal)] opacity-20 -rotate-2 z-0"></div>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase relative z-10">
              Choose Your <br/>
              <span className="text-[var(--color-burnt)]">Adventure</span>
            </h2>
          </div>
          <p className="font-mono max-w-md bg-[var(--color-paper-light)] p-4 border-2 border-ink hard-shadow-sm rotate-1">
            Explore my diverse experience across different disciplines. Select an area below to filter case studies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 relative z-10">
          {categories.filter(c => c !== 'All').map((category, index) => {
            const colors = ['bg-[var(--color-mustard)]', 'bg-[var(--color-teal)]', 'bg-[var(--color-brick)]', 'bg-[var(--color-burnt)]', 'bg-[var(--color-paper-light)]'];
            const textColors = ['text-ink', 'text-white', 'text-white', 'text-white', 'text-ink'];
            const colorClass = colors[index % colors.length];
            const textClass = textColors[index % textColors.length];
            const rotations = ['rotate-2', '-rotate-3', 'rotate-1', '-rotate-2', 'rotate-3'];
            const rotation = rotations[index % rotations.length];
            const margins = ['mt-0', 'mt-12', 'mt-4', 'mt-16', 'mt-8'];
            const margin = margins[index % margins.length];
            
            return (
              <Link 
                key={category} 
                to={`/case-studies?category=${encodeURIComponent(category)}`}
                className={`block p-8 border-4 border-ink hard-shadow hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all ${colorClass} ${textClass} ${rotation} ${margin} relative group`}
              >
                {/* Tape effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/50 backdrop-blur-sm -rotate-2"></div>
                
                <div className="flex justify-between items-start mb-16">
                  <span className="font-mono text-sm font-bold border-b-2 border-current pb-1">0{index + 1}</span>
                  <ArrowRight size={24} className="transform group-hover:translate-x-2 transition-transform" />
                </div>
                <h3 className="text-3xl font-display font-bold uppercase leading-tight">
                  {category}
                </h3>
              </Link>
            );
          })}
        </div>
      </section>

      {/* About / Philosophy */}
      <section className="py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-[var(--color-teal)] translate-x-6 translate-y-6 border-4 border-ink jagged-edge"></div>
            <div className="bg-[var(--color-paper-light)] border-4 border-ink p-8 md:p-12 relative z-10 -rotate-1">
              <div className="absolute -right-4 -top-4 w-12 h-12 bg-[var(--color-mustard)] border-2 border-ink rounded-full flex items-center justify-center font-display font-bold rotate-12">!</div>
              <h3 className="text-4xl font-display font-bold uppercase mb-6 border-b-4 border-ink pb-4">The Philosophy</h3>
              <p className="font-serif text-2xl mb-6 leading-relaxed">
                One fundamental question: as technology evolves, how do we ensure it remains anchored in dignity, context, and lived experience?
              </p>
              <p className="font-mono text-sm mb-6 leading-relaxed">
                Born in Nigeria and now based in Toronto, I bring a cross-cultural lens to systemic problem-solving. My approach is rooted in a unique fusion of behavioral research - honed over seven years analyzing the 'why' behind user actions, and applied design strategy.
              </p>
              <p className="font-mono text-sm leading-relaxed bg-[var(--color-mustard)] p-3 border-2 border-ink inline-block rotate-1">
                This background allows me to translate deep empirical insights into tangible products, services, experiences and AI-powered ventures that are not only intuitive but fundamentally humane.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative z-20">
            <div className="absolute -left-8 top-0 w-32 h-32 bg-[var(--color-brick)] rounded-full mix-blend-multiply opacity-50 z-0"></div>
            <h2 className="text-6xl md:text-8xl font-display font-bold uppercase leading-none mb-12 relative z-10">
              Expertise <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--color-ink)' }}>& Growth</span>
            </h2>
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-6 bg-[var(--color-paper)] p-4 border-2 border-ink hard-shadow-sm rotate-1 hover:rotate-0 transition-transform">
                <div className="w-12 h-12 bg-[var(--color-brick)] border-2 border-ink flex-shrink-0 flex items-center justify-center font-display text-white text-xl">1</div>
                <div>
                  <h4 className="font-display text-2xl uppercase font-bold mb-1">Research-Led</h4>
                  <p className="font-mono text-sm">Translating empirical insights into tangible products.</p>
                </div>
              </div>
              <div className="flex items-start gap-6 bg-[var(--color-paper)] p-4 border-2 border-ink hard-shadow-sm -rotate-1 hover:rotate-0 transition-transform">
                <div className="w-12 h-12 bg-[var(--color-mustard)] border-2 border-ink flex-shrink-0 flex items-center justify-center font-display text-ink text-xl rounded-full">2</div>
                <div>
                  <h4 className="font-display text-2xl uppercase font-bold mb-1">Systemic Problem-Solving</h4>
                  <p className="font-mono text-sm">Applying a cross-cultural lens to complex systems.</p>
                </div>
              </div>
              <div className="flex items-start gap-6 bg-[var(--color-paper)] p-4 border-2 border-ink hard-shadow-sm rotate-2 hover:rotate-0 transition-transform">
                <div className="w-12 h-12 bg-[var(--color-teal)] border-2 border-ink flex-shrink-0 flex items-center justify-center font-display text-white text-xl jagged-edge">3</div>
                <div>
                  <h4 className="font-display text-2xl uppercase font-bold mb-1">Continuous Growth</h4>
                  <p className="font-mono text-sm">An expert always looking for opportunities to learn and evolve.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

