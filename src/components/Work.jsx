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
          <article className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform,border-color] duration-700 ease-out delay-75 group/card rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-200/60 hover:border-[#4f39f6] hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="overflow-hidden bg-zinc-200 aspect-video relative w-full">
              <img className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover/card:scale-[1.03]" src="./qmb.png" alt="Quote My Blinds Custom CRM" loading="lazy" />
              {/* Overlay Link */}
              <a href="https://quotemyblinds.com/" target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-[#4f39f6]/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white px-6 py-2 rounded-full font-bold text-zinc-900 shadow-lg translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">View Project →</span>
              </a>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-semibold bg-indigo-50 text-[#4f39f6] border border-indigo-200/60 px-3 py-1 rounded-md">React.js</span>
                <span className="text-xs font-semibold bg-zinc-200/60 text-zinc-600 px-3 py-1 rounded-md">Laravel API</span>
                <span className="text-xs font-semibold bg-zinc-200/60 text-zinc-600 px-3 py-1 rounded-md">Tailwind CSS</span>
              </div>
              <h3 className="font-sans font-bold text-xl text-zinc-900 mb-4">Quote My Blinds</h3>
              <div className="space-y-3 text-xs text-zinc-600 mb-6 flex-grow">
                <p>Engineered a custom CRM and sales pipeline orchestration platform to replace manual tracking, saving the team over 10 hours/week.</p>
              </div>
            </div>
          </article>

          {/* Project 2: Purge Blinds */}
          <article className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform,border-color] duration-700 ease-out delay-150 group/card rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-200/60 hover:border-[#4f39f6] hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="overflow-hidden bg-zinc-200 aspect-video relative w-full">
              <img className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover/card:scale-[1.03]" src="./purge.png" alt="Purge Blinds Quote Portal" loading="lazy" />
              <a href="https://www.purge.co.nz/" target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-[#4f39f6]/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white px-6 py-2 rounded-full font-bold text-zinc-900 shadow-lg translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">View Project →</span>
              </a>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-semibold bg-indigo-50 text-[#4f39f6] border border-indigo-200/60 px-3 py-1 rounded-md">WordPress CMS</span>
                <span className="text-xs font-semibold bg-zinc-200/60 text-zinc-600 px-3 py-1 rounded-md">Bootstrap</span>
              </div>
              <h3 className="font-sans font-bold text-xl text-zinc-900 mb-4">Purge Blinds</h3>
              <div className="space-y-3 text-xs text-zinc-600 mb-6 flex-grow">
                <p>Built a custom manufacturing portal with dynamic pricing logic, reducing administrative overhead through automated configuration.</p>
              </div>
            </div>
          </article>

          {/* Project 3: Dream Big Group */}
          <article className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform,border-color] duration-700 ease-out delay-200 group/card rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-200/60 hover:border-[#4f39f6] hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="overflow-hidden bg-zinc-200 aspect-video relative w-full">
              <img className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover/card:scale-[1.03]" src="./db.png" alt="Dream Big Group Portal" loading="lazy" />
              <a href="https://dreambiggroup.in/" target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-[#4f39f6]/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white px-6 py-2 rounded-full font-bold text-zinc-900 shadow-lg translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">View Project →</span>
              </a>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-semibold bg-indigo-50 text-[#4f39f6] border border-indigo-200/60 px-3 py-1 rounded-md">WordPress CMS</span>
                <span className="text-xs font-semibold bg-zinc-200/60 text-zinc-600 px-3 py-1 rounded-md">Tailwind CSS</span>
              </div>
              <h3 className="font-sans font-bold text-xl text-zinc-900 mb-4">Dream Big Group</h3>
              <div className="space-y-3 text-xs text-zinc-600 mb-6 flex-grow">
                <p>Architected a high-fidelity real estate platform, reducing average page load times by ~50% through optimized database and media handling.</p>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}