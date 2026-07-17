import React from 'react';

export default function Blog() {
  return (
    <section id="HowWeWork" className="py-28 bg-zinc-50 border-t border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out text-xs font-bold text-[#4f39f6] tracking-widest uppercase mb-3">Publications</p>
            <h2 className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-75 font-sans font-extrabold text-4xl md:text-5xl text-zinc-900 tracking-tight">From the blog</h2>
          </div>
          <a href="blog.html" className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-75 text-sm font-bold text-zinc-800 hover:text-[#4f39f6] transition-colors flex items-center gap-1 group">
            All articles 
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <article className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform,border-color] duration-700 ease-out delay-75 group bg-white rounded-2xl overflow-hidden border border-zinc-200/60 hover:border-[#4f39f6] hover:shadow-lg transition-all duration-300">
            <div className="overflow-hidden bg-zinc-200 w-full h-48 relative">
              <img className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80" alt="Why I ditched CSS frameworks" loading="lazy" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-bold bg-indigo-50 text-[#4f39f6] px-2.5 py-0.5 rounded-md">Design</span>
                <span className="text-xs text-zinc-400 font-medium">Mar 8, 2025</span>
              </div>
              <a href="blog-article.html">
                <h3 className="font-sans font-bold text-lg text-zinc-900 mb-2 group-hover:text-[#4f39f6] transition-colors duration-200">Why I ditched heavy CSS frameworks for Tailwind</h3>
              </a>
              <p className="text-sm text-zinc-500 font-light leading-relaxed mb-4">Navigating the balance between clean abstraction parameters and local visual specificity workflows.</p>
              <a href="blog-article.html" className="inline-flex items-center gap-1 text-sm font-bold text-zinc-950 hover:text-[#4f39f6] transition-colors duration-200">Read more →</a>
            </div>
          </article>

          <article className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform,border-color] duration-700 ease-out delay-150 group bg-white rounded-2xl overflow-hidden border border-zinc-200/60 hover:border-[#4f39f6] hover:shadow-lg transition-all duration-300">
            <div className="overflow-hidden bg-zinc-200 w-full h-48 relative">
              <img className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=700&q=80" alt="Design systems" loading="lazy" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-bold bg-indigo-50 text-[#4f39f6] px-2.5 py-0.5 rounded-md">Development</span>
                <span className="text-xs text-zinc-400 font-medium">Feb 21, 2025</span>
              </div>
              <a href="blog-article.html">
                <h3 className="font-sans font-bold text-lg text-zinc-900 mb-2 group-hover:text-[#4f39f6] transition-colors duration-200">Building a design system from scratch in a weekend</h3>
              </a>
              <p className="text-sm text-zinc-500 font-light leading-relaxed mb-4">Mapping design tokens, unified component boundaries, and simple tracking structures quickly.</p>
              <a href="blog-article.html" className="inline-flex items-center gap-1 text-sm font-bold text-zinc-950 hover:text-[#4f39f6] transition-colors duration-200">Read more →</a>
            </div>
          </article>

          <article className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform,border-color] duration-700 ease-out delay-200 group bg-white rounded-2xl overflow-hidden border border-zinc-200/60 hover:border-[#4f39f6] hover:shadow-lg transition-all duration-300">
            <div className="overflow-hidden bg-zinc-200 w-full h-48 relative">
              <img className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80" alt="Freelance lessons" loading="lazy" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-bold bg-indigo-50 text-[#4f39f6] px-2.5 py-0.5 rounded-md">Freelance</span>
                <span className="text-xs text-zinc-400 font-medium">Jan 14, 2025</span>
              </div>
              <a href="blog-article.html">
                <h3 className="font-sans font-bold text-lg text-zinc-900 mb-2 group-hover:text-[#4f39f6] transition-colors duration-200">5 lessons from my first year of freelancing</h3>
              </a>
              <p className="text-sm text-zinc-500 font-light leading-relaxed mb-4">Managing project statements, pricing models, and scope constraints systematically.</p>
              <a href="blog-article.html" className="inline-flex items-center gap-1 text-sm font-bold text-zinc-950 hover:text-[#4f39f6] transition-colors duration-200">Read more →</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}