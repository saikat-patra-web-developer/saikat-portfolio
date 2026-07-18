import React from 'react';

export default function Footer({ currentYear }) {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-200/60 bg-[#fafafa]">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-orbit {
          0% { transform: rotate(0deg) translateY(var(--orbit-radius, 120px)) rotate(0deg) scale(0.9); z-index: 1; }
          25% { z-index: 5; transform: rotate(90deg) translateY(var(--orbit-radius, 120px)) rotate(-90deg) scale(0.95); }
          50% { transform: rotate(180deg) translateY(var(--orbit-radius, 120px)) rotate(-180deg) scale(0.9); z-index: 1; }
          75% { transform: rotate(270deg) translateY(var(--orbit-radius, 120px)) rotate(-270deg) scale(0.7); z-index: 1; }
          100% { transform: rotate(360deg) translateY(var(--orbit-radius, 120px)) rotate(-360deg) scale(0.9); z-index: 1; }
        }
        .orbiting-skill { animation: float-orbit var(--orbit-duration, 25s) linear infinite; }
        .orbiting-skill:hover { animation-play-state: paused; }
      `}} />

      {/* Background Blurs transferred from About */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#4f39f6]/10 via-[#60a5fa]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-gradient-to-br from-[#ffed4a]/5 via-[#60a5fa]/10 to-[#4f39f6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-12 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-zinc-200/60 pb-8 mb-8">
          {/* Pitch / Positioning */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-zinc-900">
              Ready to automate your business workflows?
            </h3>
            <p className="text-sm text-zinc-500 mt-1 max-w-md">
              Specializing in custom web applications, CRMs, and administrative systems built to scale.
            </p>
          </div>

          {/* High-Conversion Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href="#portfolio" 
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              See Client Success Stories
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 transition-all shadow-sm shadow-zinc-950/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              Let's Build Something
            </a>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-400 text-center sm:text-left">
            © {currentYear} Saikat Patra • Full Stack Web Developer. All rights reserved.
          </p>
          
          {/* Quick Professional Links */}
          <div className="flex gap-6 text-xs font-medium text-zinc-400">
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="hover:text-zinc-600 transition-colors">LinkedIn</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-zinc-600 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}