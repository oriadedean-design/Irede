import React from 'react';

export default function Journal() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 relative">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--color-teal)] rounded-full mix-blend-multiply opacity-20 z-0 blur-xl"></div>
      
      <div className="mb-24 relative z-10">
        <div className="inline-block bg-[var(--color-burnt)] text-white px-4 py-1 mb-6 border-2 border-ink hard-shadow-sm transform -rotate-2">
          <span className="font-mono text-sm uppercase tracking-wider">Writing</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-display font-bold uppercase leading-[0.85] tracking-tighter mb-8 relative">
          Journal & <br/>
          <span className="text-[var(--color-teal)] relative z-10">Reflections</span>
          <div className="absolute bottom-0 left-0 w-1/2 h-4 bg-[var(--color-brick)] z-0 rotate-1"></div>
        </h1>
        
        <div className="bg-[var(--color-paper-light)] border-4 border-ink p-6 hard-shadow-mustard max-w-2xl rotate-1">
          <p className="font-mono text-lg">
            Thoughts, fieldnotes, and observations on design, research, and the human experience.
          </p>
        </div>
      </div>

      <div className="space-y-16 relative z-10">
        {[
          {
            title: "Fieldnotes As a Social Practice",
            date: "Oct 12, 2023",
            category: "Ethnography",
            excerpt: "An ethnographic study note on how observing people in their natural environment reveals truths that surveys often miss."
          },
          {
            title: "The Ethics of Automation in Public Services",
            date: "Sep 05, 2023",
            category: "Service Design",
            excerpt: "When we automate civic processes, who gets left behind? A reflection on designing for the margins."
          },
          {
            title: "Why 'User-Centric' Isn't Enough Anymore",
            date: "Aug 18, 2023",
            category: "Design Philosophy",
            excerpt: "Moving from user-centric to humanity-centric design. How to consider the broader systemic impact of our digital products."
          }
        ].map((post, index) => {
          const rotations = ['rotate-1', '-rotate-1', 'rotate-2'];
          const rotation = rotations[index % rotations.length];
          const margins = ['ml-0', 'md:ml-24', 'ml-0'];
          const margin = margins[index % margins.length];
          
          return (
            <article key={index} className={`border-4 border-ink p-8 md:p-12 bg-[var(--color-paper-light)] hard-shadow hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all group relative max-w-4xl ${rotation} ${margin}`}>
              {/* Tape effect */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/60 backdrop-blur-sm rotate-2 z-20"></div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="font-mono text-sm font-bold border-b-2 border-ink pb-1">{post.date}</span>
                <span className="bg-[var(--color-mustard)] border-2 border-ink px-3 py-1 font-mono text-xs font-bold hard-shadow-sm -rotate-2">{post.category}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6 group-hover:text-[var(--color-burnt)] transition-colors leading-tight">
                {post.title}
              </h2>
              <p className="font-serif text-xl md:text-2xl mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              <button className="font-mono text-sm font-bold uppercase border-b-2 border-ink pb-1 group-hover:text-[var(--color-teal)] group-hover:border-[var(--color-teal)] transition-colors flex items-center gap-2">
                Read Entry <span className="text-[var(--color-brick)]">→</span>
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
}

