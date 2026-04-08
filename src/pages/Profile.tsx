import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 relative">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[var(--color-mustard)] rounded-full mix-blend-multiply opacity-20 z-0 blur-xl"></div>
      <div className="absolute top-1/3 left-0 w-48 h-48 bg-[var(--color-teal)] rounded-full mix-blend-multiply opacity-20 z-0 blur-xl"></div>
      
      <div className="mb-24 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <div className="inline-block bg-[var(--color-brick)] text-white px-4 py-1 mb-6 border-2 border-ink hard-shadow-sm transform -rotate-2">
            <span className="font-mono text-sm uppercase tracking-wider">Profile</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-display font-bold uppercase leading-[0.85] tracking-tighter mb-8 relative">
            Irede <br/>
            <span className="text-[var(--color-teal)] relative z-10">Adekunle</span>
            <div className="absolute bottom-0 left-0 w-1/2 h-4 bg-[var(--color-burnt)] z-0 rotate-1"></div>
          </h1>
          
          <div className="bg-[var(--color-paper-light)] border-4 border-ink p-8 hard-shadow-mustard max-w-2xl rotate-1 relative z-10">
            {/* Tape effect */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/60 backdrop-blur-sm rotate-2 z-20"></div>
            
            <p className="font-serif text-2xl leading-relaxed mb-6">
              I am a Senior Innovation Designer and Product-Market Fit strategist who helps teams design, test, and scale services that actually work - fast enough to win in competitive markets.
            </p>
            <p className="font-mono text-sm leading-relaxed border-t-2 border-ink pt-6">
              Over the past 7 years, I've partnered with Google, BBC, and several Fortune 500 companies, leading multi-country research initiatives that uncovered $50M+ in market opportunities, contributed to a company acquisition, and helped teams compress months of uncertainty into weeks of confident product and service decisions.
            </p>
            <p className="font-mono text-sm leading-relaxed mt-4">
              <strong>My edge:</strong> while most teams optimize for viability, feasibility, and desirability, I add a fourth dimension - <em>novelty</em> - shaping solutions that are not only functional but distinct enough to dominate in crowded markets.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative z-10 halftone-wrapper rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://framerusercontent.com/images/Di1KDGVlMKnZJfQwytwYRnprk.jpg" 
              alt="Irede Portrait" 
              className="w-full h-auto border-4 border-ink hard-shadow-teal halftone-img torn-edge grayscale"
            />
            
            {/* Floating UI Window */}
            <div className="absolute -bottom-8 -left-8 bg-[var(--color-paper-light)] border-2 border-ink w-48 hard-shadow-sm z-30 -rotate-3">
              <div className="border-b-2 border-ink p-1.5 flex gap-1 bg-[var(--color-paper-dark)]">
                <div className="w-2 h-2 rounded-full bg-[var(--color-brick)] border border-ink"></div>
                <div className="w-2 h-2 rounded-full bg-[var(--color-mustard)] border border-ink"></div>
                <div className="w-2 h-2 rounded-full bg-[var(--color-teal)] border border-ink"></div>
              </div>
              <div className="p-3">
                <h3 className="font-display text-sm font-bold mb-1 uppercase leading-none">Top Skills</h3>
                <ul className="font-mono text-[10px] leading-tight list-disc pl-3 space-y-1">
                  <li>User Experience (UX)</li>
                  <li>Journey Mapping</li>
                  <li>B2B Product Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        <div className="lg:col-span-8 space-y-16">
          <section>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-8 flex items-center gap-4">
              Experience
              <div className="h-1 flex-grow bg-ink"></div>
            </h2>
            
            <div className="space-y-12">
              <div className="relative pl-8 border-l-4 border-ink">
                <div className="absolute -left-3 top-0 w-5 h-5 bg-[var(--color-brick)] border-2 border-ink rounded-full"></div>
                <h3 className="text-2xl font-display font-bold uppercase">Senior Innovation Designer</h3>
                <p className="font-mono text-sm font-bold mb-2">TwoHeads Co-Lab • Mar 2023 - Present</p>
                <p className="font-serif text-lg">Leading a multidisciplinary team of designers, researchers, and developers to build human-centered experiences for clients including Walmart, Jollibee, Transit App, and Eaton Centre. Operating at every layer - from hands-on UX work to executive workshops.</p>
              </div>

              <div className="relative pl-8 border-l-4 border-ink">
                <div className="absolute -left-3 top-0 w-5 h-5 bg-[var(--color-mustard)] border-2 border-ink rounded-full"></div>
                <h3 className="text-2xl font-display font-bold uppercase">Lead UX Designer</h3>
                <p className="font-mono text-sm font-bold mb-2">Pactima • Sep 2024 - Jul 2025</p>
                <p className="font-serif text-lg">Defined the UX vision and product strategy that directly contributed to Pactima's acquisition. Reduced onboarding time by 35% and built Pactima Academy as a self-serve learning hub, reducing support tickets by 30%.</p>
              </div>

              <div className="relative pl-8 border-l-4 border-ink">
                <div className="absolute -left-3 top-0 w-5 h-5 bg-[var(--color-teal)] border-2 border-ink rounded-full"></div>
                <h3 className="text-2xl font-display font-bold uppercase">Senior UX Designer</h3>
                <p className="font-mono text-sm font-bold mb-2">Cartolinks Solutions Limited • Oct 2023 - Apr 2025</p>
                <p className="font-serif text-lg">Led product and design strategy across UX, brand, product management, and operations. Designed a national tax (IGR) system that simplified complex government workflows for millions of citizens.</p>
              </div>

              <div className="relative pl-8 border-l-4 border-ink">
                <div className="absolute -left-3 top-0 w-5 h-5 bg-[var(--color-burnt)] border-2 border-ink rounded-full"></div>
                <h3 className="text-2xl font-display font-bold uppercase">Creative Strategist</h3>
                <p className="font-mono text-sm font-bold mb-2">Kle Design Studio • Jan 2024 - Jan 2025</p>
                <p className="font-serif text-lg">Led in-house creative strategy and direction for a global brand consultancy, overseeing campaigns and brand systems for American Express, Zenith Bank, and others.</p>
              </div>
              
              <div className="relative pl-8 border-l-4 border-ink">
                <div className="absolute -left-3 top-0 w-5 h-5 bg-[var(--color-paper-dark)] border-2 border-ink rounded-full"></div>
                <h3 className="text-2xl font-display font-bold uppercase">Consumer Insights Analyst</h3>
                <p className="font-mono text-sm font-bold mb-2">Ipsos • Jul 2019 - Apr 2022</p>
                <p className="font-serif text-lg">Conducted deep consumer research and analysis to uncover market trends and actionable insights for global brands.</p>
              </div>
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 space-y-12">
          <div className="bg-[var(--color-paper-dark)] border-4 border-ink p-6 hard-shadow rotate-1">
            <h2 className="text-2xl font-display font-bold uppercase mb-6 border-b-2 border-ink pb-2">Education</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold font-serif text-lg leading-tight">Humber College</h3>
                <p className="font-mono text-xs">Postgraduate Degree, User Experience Design</p>
                <p className="font-mono text-xs text-gray-600">Sep 2024 - Sep 2025</p>
              </div>
              <div>
                <h3 className="font-bold font-serif text-lg leading-tight">IxDF</h3>
                <p className="font-mono text-xs">Service Design, Human Computer Interaction</p>
                <p className="font-mono text-xs text-gray-600">Sep 2021</p>
              </div>
              <div>
                <h3 className="font-bold font-serif text-lg leading-tight">University of Ibadan</h3>
                <p className="font-mono text-xs">Bachelor's degree, Library and Information Science</p>
                <p className="font-mono text-xs text-gray-600">2014 - 2018</p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-mustard)] border-4 border-ink p-6 hard-shadow-brick -rotate-1">
            <h2 className="text-2xl font-display font-bold uppercase mb-6 border-b-2 border-ink pb-2">Honors & Awards</h2>
            <ul className="font-mono text-sm space-y-3 list-disc pl-4">
              <li>Dean's Honour List</li>
              <li>Employability Experience Fund</li>
            </ul>
          </div>
          
          <div className="bg-[var(--color-teal)] text-white border-4 border-ink p-6 hard-shadow rotate-2">
            <h2 className="text-2xl font-display font-bold uppercase mb-4 border-b-2 border-ink pb-2">Let's Talk</h2>
            <p className="font-mono text-sm mb-6">Available for Senior Service Design leadership, research-driven product strategy, and early-stage validation projects.</p>
            <a href="https://cal.com/irede" target="_blank" rel="noopener noreferrer" className="bg-ink text-white font-display text-lg uppercase px-4 py-2 border-2 border-ink hover:bg-[var(--color-brick)] transition-colors inline-flex items-center gap-2 w-full justify-center">
              Book a Time <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
