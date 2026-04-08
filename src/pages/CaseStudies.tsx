import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { caseStudies, categories, years } from '../data/caseStudies';

export default function CaseStudies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');
  const [activeYear, setActiveYear] = useState('All');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && categories.includes(cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const filteredStudies = caseStudies.filter(study => {
    const matchCategory = activeCategory === 'All' || study.category === activeCategory;
    const matchYear = activeYear === 'All' || study.year === activeYear;
    return matchCategory && matchYear;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 relative">
      {/* Background elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-[var(--color-mustard)] rounded-full mix-blend-multiply opacity-30 z-0 blur-xl"></div>
      
      <div className="mb-24 relative z-10">
        <div className="inline-block bg-[var(--color-teal)] text-white px-4 py-1 mb-6 border-2 border-ink hard-shadow-sm transform rotate-2">
          <span className="font-mono text-sm uppercase tracking-wider">Portfolio</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-display font-bold uppercase leading-[0.85] tracking-tighter mb-12 relative">
          Case <br/>
          <span className="text-[var(--color-brick)] relative z-10">Studies</span>
          <div className="absolute top-1/2 left-0 w-1/2 h-4 bg-[var(--color-mustard)] z-0 -rotate-2"></div>
        </h1>

        {/* Scribble Overlay */}
        <svg className="absolute -top-10 left-1/4 w-32 h-32 text-ink z-0 opacity-40 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10,50 Q20,20 40,40 T70,30 T90,60 T60,80 T30,60 T50,40 T80,50" />
          <path d="M20,60 Q10,80 30,90 T60,70 T80,90 T90,40 T60,20 T40,50" />
        </svg>
        
        {/* Filters */}
        <div className="bg-[var(--color-paper-light)] border-4 border-ink p-8 hard-shadow-brick relative z-20 -rotate-1">
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-ink rounded-full"></div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h3 className="font-mono text-sm font-bold uppercase mb-4 border-b-2 border-ink pb-2">Filter by Discipline</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`font-display uppercase px-4 py-2 border-2 border-ink text-sm transition-all ${
                      activeCategory === category 
                        ? 'bg-ink text-white hard-shadow-sm translate-x-[-2px] translate-y-[-2px]' 
                        : 'bg-[var(--color-paper)] hover:bg-[var(--color-mustard)]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-64">
              <h3 className="font-mono text-sm font-bold uppercase mb-4 border-b-2 border-ink pb-2">Timeline</h3>
              <div className="flex flex-wrap gap-3">
                {years.map(year => (
                  <button
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className={`font-mono text-sm px-4 py-2 border-2 border-ink transition-all ${
                      activeYear === year 
                        ? 'bg-[var(--color-teal)] text-white hard-shadow-sm translate-x-[-2px] translate-y-[-2px]' 
                        : 'bg-[var(--color-paper)] hover:bg-[var(--color-paper-dark)]'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative z-10">
        {filteredStudies.map((study, index) => {
          const isEven = index % 2 === 0;
          const rotations = ['rotate-1', '-rotate-2', 'rotate-2', '-rotate-1'];
          const rotation = rotations[index % rotations.length];
          
          return (
            <Link 
              key={study.id} 
              to={`/case-studies/${study.id}`}
              className={`group block relative ${isEven ? 'md:mt-0' : 'md:mt-32'}`}
            >
              <div className={`relative mb-8 halftone-wrapper border-4 border-ink hard-shadow transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:hard-shadow-brick ${rotation}`}>
                {/* Tape effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/50 backdrop-blur-sm -rotate-3 z-20"></div>
                
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full aspect-[4/3] object-cover halftone-img"
                />
                <div className="absolute top-4 right-4 bg-[var(--color-mustard)] border-2 border-ink px-3 py-1 font-mono text-xs font-bold hard-shadow-sm z-10">
                  {study.year}
                </div>
                <div className="absolute -bottom-4 -left-4 bg-ink text-white border-2 border-ink px-4 py-2 font-display uppercase text-sm hard-shadow-sm z-10">
                  {study.category}
                </div>
              </div>
              
              <div className="bg-[var(--color-paper-light)] p-6 border-2 border-ink hard-shadow-sm group-hover:bg-[var(--color-paper)] transition-colors">
                <h2 className="text-3xl md:text-4xl font-display font-bold uppercase leading-tight mb-4 group-hover:text-[var(--color-brick)] transition-colors">
                  {study.title}
                </h2>
                <p className="font-serif text-lg mb-6 line-clamp-3">
                  {study.description}
                </p>
                
                <div className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase border-b-2 border-ink pb-1 group-hover:text-[var(--color-teal)] group-hover:border-[var(--color-teal)] transition-colors">
                  Read Case Study <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      
      {filteredStudies.length === 0 && (
        <div className="py-24 text-center border-4 border-ink border-dashed bg-[var(--color-paper-light)] rotate-1">
          <h3 className="text-3xl font-display uppercase mb-4">No case studies found</h3>
          <p className="font-mono">Try adjusting your filters to see more projects.</p>
          <button 
            onClick={() => { setActiveCategory('All'); setActiveYear('All'); }}
            className="mt-8 bg-[var(--color-brick)] text-white font-display uppercase px-6 py-3 border-2 border-ink hard-shadow-sm hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

