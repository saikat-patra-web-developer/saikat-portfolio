import React from 'react';

export default function Footer({ currentYear }) {
  return (
    <footer className="border-t border-zinc-200/60 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
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
              View Recent Work
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