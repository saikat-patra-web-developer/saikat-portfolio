import React from 'react';

export default function Work() {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out text-xs font-bold text-[#4f39f6] tracking-widest uppercase mb-3">
              Portfolio
            </p>
            <h2 className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-75 font-sans font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-2 bg-gradient-to-tr from-[#4f39f6] via-[#38bdf8] to-[#94a3b8] bg-clip-text text-transparent !opacity-100 !translate-y-0">
              Selected Work
            </h2>
            <p className="text-sm text-zinc-500 max-w-xl font-light">
              Real-world engineering solutions transforming operational bottlenecks into automated, high-performing systems.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 items-start">
          
          {/* Project 1: Quote My Blinds */}
          <article className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform,border-color] duration-700 ease-out delay-75 group rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-200/60 hover:border-[#4f39f6] hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="overflow-hidden bg-zinc-200 aspect-video relative w-full">
              {/* Image with Video Play Icon Overlay on Hover to "Show, Don't Just Tell" */}
              <img className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="./qmb.png" alt="Quote My Blinds Custom CRM" loading="lazy" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-semibold bg-indigo-50 text-[#4f39f6] border border-indigo-200/60 px-3 py-1 rounded-md">React.js</span>
                <span className="text-xs font-semibold bg-zinc-200/60 text-zinc-600 px-3 py-1 rounded-md">Laravel API</span>
                <span className="text-xs font-semibold bg-zinc-200/60 text-zinc-600 px-3 py-1 rounded-md">Tailwind CSS</span>
              </div>
              
              <a href="https://quotemyblinds.com/" target="_blank" rel="noopener noreferrer" className="inline-block group/title mb-4">
                <h3 className="font-sans font-bold text-xl text-zinc-900 group-hover/title:text-[#4f39f6] transition-colors duration-200">Quote My Blinds</h3>
              </a>

              {/* Case Study Block */}
              <div className="space-y-3 text-xs text-zinc-600 mb-6 flex-grow">
                <p><strong>Problem:</strong> Fragmented lead distribution and slow, manual tracking pipelines resulting in missed sales opportunities.</p>
                <p><strong>Solution:</strong> Engineered a <strong>Custom CRM and pipeline orchestration platform</strong> utilizing a centralized API structure for highly optimized data fetching and state handling.</p>
                <p className="pt-2 border-t border-zinc-200/60 text-[#4f39f6]">
                  <strong>Result:</strong> Accelerated internal workflows, <strong>saving over 10 hours/week</strong> in pipeline updates.
                </p>
              </div>

              <a href="https://quotemyblinds.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-zinc-900 hover:text-[#4f39f6] transition-colors duration-200 group/link mt-auto">
                View Project 
                <svg className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>
          </article>

          {/* Project 2: Purge Blinds */}
          <article className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform,border-color] duration-700 ease-out delay-150 group rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-200/60 hover:border-[#4f39f6] hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="overflow-hidden bg-zinc-200 aspect-video relative w-full">
              <img className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="./purge.png" alt="Purge Blinds Quote Portal" loading="lazy" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-semibold bg-indigo-50 text-[#4f39f6] border border-indigo-200/60 px-3 py-1 rounded-md">WordPress CMS</span>
                <span className="text-xs font-semibold bg-zinc-200/60 text-zinc-600 px-3 py-1 rounded-md">Bootstrap</span>
              </div>
              
              <a href="https://www.purge.co.nz/" target="_blank" rel="noopener noreferrer" className="inline-block group/title mb-4">
                <h3 className="font-sans font-bold text-xl text-zinc-900 group-hover/title:text-[#4f39f6] transition-colors duration-200">Purge Blinds</h3>
              </a>

              {/* Case Study Block */}
              <div className="space-y-3 text-xs text-zinc-600 mb-6 flex-grow">
                <p><strong>Problem:</strong> Complex blind configuration rules caused severe bottlenecks during customer quotes and pricing generation.</p>
                <p><strong>Solution:</strong> Built a <strong>custom blind manufacturing portal</strong> with dynamic pricing logic and automated hardware/fabric data-grouping dependencies.</p>
                <p className="pt-2 border-t border-zinc-200/60 text-[#4f39f6]">
                  <strong>Result:</strong> Reduced administrative overhead by <strong>streamlining customized pricing configurations</strong>.
                </p>
              </div>

              <a href="https://www.purge.co.nz/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-zinc-900 hover:text-[#4f39f6] transition-colors duration-200 group/link mt-auto">
                View Project →
              </a>
            </div>
          </article>

          {/* Project 3: Dream Big Group */}
          <article className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform,border-color] duration-700 ease-out delay-200 group rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-200/60 hover:border-[#4f39f6] hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="overflow-hidden bg-zinc-200 aspect-video relative w-full">
              <img className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="./db.png" alt="Dream Big Group Portal" loading="lazy" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-semibold bg-indigo-50 text-[#4f39f6] border border-indigo-200/60 px-3 py-1 rounded-md">WordPress CMS</span>
                <span className="text-xs font-semibold bg-zinc-200/60 text-zinc-600 px-3 py-1 rounded-md">Tailwind CSS</span>
              </div>
              
              <a href="https://dreambiggroup.in/" target="_blank" rel="noopener noreferrer" className="inline-block group/title mb-4">
                <h3 className="font-sans font-bold text-xl text-zinc-900 group-hover/title:text-[#4f39f6] transition-colors duration-200">Dream Big Group</h3>
              </a>

              {/* Case Study Block */}
              <div className="space-y-3 text-xs text-zinc-600 mb-6 flex-grow">
                <p><strong>Problem:</strong> Slow content loading speeds and poor UI architecture drove high user bounce rates on premium property pages.</p>
                <p><strong>Solution:</strong> Developed a high-fidelity real estate platform backed by <strong>clean database custom queries</strong> and optimized media rendering configurations.</p>
                <p className="pt-2 border-t border-zinc-200/60 text-[#4f39f6]">
                  <strong>Result:</strong> Drastically **reduced average page load times by ~50%** across heavy listings pages.
                </p>
              </div>

              <a href="https://dreambiggroup.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-zinc-900 hover:text-[#4f39f6] transition-colors duration-200 group/link mt-auto">
                View Project →
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}