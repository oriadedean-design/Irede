import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudyDetail() {
  const { id } = useParams();
  const study = caseStudies.find(s => s.id === id);

  if (!study) {
    return (
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 text-center">
        <h1 className="text-6xl font-display font-bold uppercase mb-8">Case Study Not Found</h1>
        <Link to="/case-studies" className="inline-block bg-ink text-white font-display uppercase px-6 py-3 border-2 border-ink hard-shadow hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all">
          Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-24 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.03 }}></div>
      
      <Link to="/case-studies" className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase mb-12 hover:text-[var(--color-brick)] transition-colors relative z-10 bg-[var(--color-paper)] pr-4">
        <ArrowLeft size={16} /> Back to Case Studies
      </Link>

      <header className="mb-20 relative z-10">
        <div className="flex flex-wrap gap-4 mb-8">
          <span className="bg-[var(--color-mustard)] border-2 border-ink px-4 py-1 font-mono text-sm font-bold hard-shadow-sm -rotate-2">
            {study.year}
          </span>
          <span className="bg-ink text-white border-2 border-ink px-4 py-1 font-display uppercase text-sm hard-shadow-sm rotate-1">
            {study.category}
          </span>
        </div>
        
        <div className="relative">
          <div className="absolute -left-6 -top-6 w-24 h-24 bg-[var(--color-teal)] rounded-full mix-blend-multiply opacity-50 z-0"></div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase leading-[0.9] tracking-tighter mb-12 relative z-10">
            {study.title}
          </h1>
        </div>
        
        <div className="bg-[var(--color-paper-light)] border-4 border-ink p-8 hard-shadow-brick max-w-3xl rotate-1">
          <p className="font-serif text-2xl md:text-3xl leading-snug">
            {study.description}
          </p>
        </div>
      </header>

      <div className="relative mb-24 z-10">
        <div className="absolute -inset-4 bg-[var(--color-burnt)] opacity-20 -rotate-1 z-0"></div>
        <div className="relative halftone-wrapper border-4 border-ink hard-shadow-teal rotate-1 hover:rotate-0 transition-transform duration-500 z-10">
          {/* Tape effect */}
          <div className="absolute -top-4 right-12 w-20 h-8 bg-white/60 backdrop-blur-sm rotate-6 z-20"></div>
          <div className="absolute -bottom-4 left-12 w-20 h-8 bg-white/60 backdrop-blur-sm -rotate-3 z-20"></div>
          
          <img 
            src={study.image} 
            alt={study.title} 
            className="w-full h-auto halftone-img torn-edge"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        <div className="md:col-span-3">
          <div className="sticky top-8 bg-[var(--color-paper)] border-2 border-ink p-6 hard-shadow-sm -rotate-1">
            <h3 className="font-display font-bold uppercase text-xl mb-4 border-b-2 border-ink pb-2">Project Details</h3>
            <ul className="space-y-4 font-mono text-sm">
              <li>
                <span className="block text-gray-500 mb-1">Role</span>
                <strong>Lead Designer</strong>
              </li>
              <li>
                <span className="block text-gray-500 mb-1">Timeline</span>
                <strong>12 Weeks</strong>
              </li>
              <li>
                <span className="block text-gray-500 mb-1">Tools</span>
                <strong>Figma, FigJam</strong>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="md:col-span-9 prose prose-lg max-w-none font-serif leading-relaxed">
          {study.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('- ')) {
              return (
                <div key={index} className="bg-[var(--color-paper-light)] border-2 border-ink p-6 my-8 hard-shadow-sm rotate-1">
                  <ul className="list-none pl-0 font-mono text-base m-0">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} className="mb-3 flex items-start gap-3">
                        <span className="text-[var(--color-brick)] mt-1">■</span>
                        <span>{item.replace('- ', '')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            return (
              <p key={index} className="mb-8 text-xl">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
      
      <div className="mt-32 pt-16 border-t-4 border-ink relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-paper)] px-4">
          <div className="w-8 h-8 border-4 border-ink rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-ink rounded-full"></div>
          </div>
        </div>
        
        <div className="bg-[var(--color-mustard)] border-4 border-ink p-8 md:p-16 hard-shadow flex flex-col md:flex-row justify-between items-center gap-8 -rotate-1">
          <h3 className="text-4xl md:text-5xl font-display font-bold uppercase leading-none">Ready to start <br/>a project?</h3>
          <a href="mailto:joseph.iree@email.com" className="bg-ink text-white font-display text-xl uppercase px-8 py-4 border-2 border-ink hard-shadow-brick hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all whitespace-nowrap">
            Get in touch
          </a>
        </div>
      </div>
    </article>
  );
}

