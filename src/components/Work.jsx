import React from 'react';

export default function Work() {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="reveal-trigger text-xs font-bold text-[#4f39f6] tracking-widest uppercase mb-3">
              Case Studies
            </p>
            <h2 className="reveal-trigger font-sans font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-4 bg-gradient-to-tr from-[#4f39f6] via-[#38bdf8] to-[#94a3b8] bg-clip-text text-transparent">
              Proven Business Outcomes
            </h2>
            <p className="text-sm text-zinc-500 max-w-xl font-light leading-relaxed">
              I don't just write clean code. I design custom internal systems, complex pricing engines, and automated workflows that eliminate operational bottlenecks and scale revenue.
            </p>
          </div>
          {/* Top Level Quick CTA */}
          <div>
            <a 
              href="#contact" 
              className="inline-block text-xs font-bold text-[#4f39f6] hover:text-zinc-900 border-b-2 border-[#4f39f6] hover:border-zinc-900 pb-1 transition-colors duration-200"
            >
              Have a custom project in mind? Let's talk →
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 items-start mb-16">
          
          {/* Project 1: Quote My Blinds */}
          <article className="group/card rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-200/60 hover:border-[#4f39f6] hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="overflow-hidden bg-zinc-200 aspect-video relative w-full">
              <img className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover/card:scale-[1.03]" src="./qmb.png" alt="Quote My Blinds Custom CRM" loading="lazy" />
              <a href="https://quotemyblinds.com/" target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-[#4f39f6]/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white px-6 py-2 rounded-full font-bold text-zinc-900 shadow-lg translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">Live Website →</span>
              </a>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded">Saved 10+ Hours/Wk</span>
              </div>
              <h3 className="font-sans font-bold text-xl text-zinc-900 mb-2">Quote My Blinds CRM</h3>
              <p className="text-xs font-semibold text-zinc-400 mb-4">React.js · Laravel API · CRM Architecture</p>
              <div className="space-y-3 text-xs text-zinc-600 mb-6 flex-grow leading-relaxed">
                <p><strong>The Challenge:</strong> The sales team wasted hours juggling manual spreadsheets, causing slow follow-ups and lost leads.</p>
                <p><strong>The Solution:</strong> Engineered a bespoke CRM and multi-step automated pipeline system that completely digitized their lead-to-sale workflows.</p>
              </div>
            </div>
          </article>

          {/* Project 2: Purge Blinds */}
          <article className="group/card rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-200/60 hover:border-[#4f39f6] hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="overflow-hidden bg-zinc-200 aspect-video relative w-full">
              <img className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover/card:scale-[1.03]" src="./purge.png" alt="Purge Blinds Quote Portal" loading="lazy" />
              <a href="https://www.purge.co.nz/" target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-[#4f39f6]/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white px-6 py-2 rounded-full font-bold text-zinc-900 shadow-lg translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">Live Website →</span>
              </a>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded">Automated Operations</span>
              </div>
              <h3 className="font-sans font-bold text-xl text-zinc-900 mb-2">Purge Blinds Portal</h3>
              <p className="text-xs font-semibold text-zinc-400 mb-4">WordPress CMS · Custom Dynamic Pricing · System Logic</p>
              <div className="space-y-3 text-xs text-zinc-600 mb-6 flex-grow leading-relaxed">
                <p><strong>The Challenge:</strong> Processing quotes for multi-variable, custom-manufactured window treatments required tedious manual calculations.</p>
                <p><strong>The Solution:</strong> Built a comprehensive manufacturing and quoting application with complex, real-time pricing matrix rules to instantly automate overhead billing.</p>
              </div>
            </div>
          </article>

          {/* Project 3: Dream Big Group */}
          <article className="group/card rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-200/60 hover:border-[#4f39f6] hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="overflow-hidden bg-zinc-200 aspect-video relative w-full">
              <img className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover/card:scale-[1.03]" src="./db.png" alt="Dream Big Group Portal" loading="lazy" />
              <a href="https://dreambiggroup.in/" target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-[#4f39f6]/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white px-6 py-2 rounded-full font-bold text-zinc-900 shadow-lg translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">Live Website →</span>
              </a>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded">50% Speed Optimization</span>
              </div>
              <h3 className="font-sans font-bold text-xl text-zinc-900 mb-2">Dream Big Real Estate</h3>
              <p className="text-xs font-semibold text-zinc-400 mb-4">WordPress · Tailwind CSS · Database Tuning</p>
              <div className="space-y-3 text-xs text-zinc-600 mb-6 flex-grow leading-relaxed">
                <p><strong>The Challenge:</strong> High bounce rates on a premium real estate platform due to sluggish database loading times and unoptimized media assets.</p>
                <p><strong>The Solution:</strong> Restructured database query performance and streamlined heavy property listings, shaving page loads by ~50% to salvage user retention.</p>
              </div>
            </div>
          </article>

        </div>

        {/* Closing Inbound Lead Block */}
        <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-200/60 text-center max-w-3xl mx-auto">
          <h4 className="font-sans font-bold text-xl text-zinc-900 mb-2">Need a high-performing backend system or custom CRM?</h4>
          <p className="text-xs text-zinc-500 mb-6 max-w-lg mx-auto">
            Whether it's complex business rules, automation logic, or dynamic database architecture—I can engineer the exact system your workflow needs to grow.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-[#4f39f6] hover:bg-zinc-900 text-white font-bold text-xs px-6 py-3 rounded-xl transition-colors duration-200 shadow-md"
          >
            Let's Discuss Your Project →
          </a>
        </div>

      </div>
    </section>
  );
}