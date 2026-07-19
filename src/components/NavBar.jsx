import React from 'react';

export default function NavBar({ mobileMenuOpen, setMobileMenuOpen, scrolled, activeSection }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500 py-2 bg-transparent border-none">

      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between md:justify-center" aria-label="Main navigation">
        
        <div className="hidden md:flex items-center gap-3 p-1.5 pl-3 rounded-full transition-all duration-500 bg-[#0c232c]/90 backdrop-blur-xl border border-zinc-800/30 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] scale-95 opacity-0 animate-premium-nav hover:border-zinc-700/50 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.6)]">
          <div className="flex items-center">
            <a href="#hero" className="w-8 h-8 bg-white rounded-xl shadow-sm relative z-10 transition-transform duration-300 hover:scale-110 active:scale-95 flex items-center justify-center overflow-hidden" aria-label="Home">
              <div className="absolute inset-1 bg-gradient-to-tr from-[#4f39f6] via-[#60a5fa] to-[#cbd5e1] rounded-[30%_70%_70%_30%_/_50%_40%_60%_50%] animate-[spin_15s_linear_infinite]"></div>
            </a>
          </div>
          <ul className="flex items-center gap-0.5 text-xs font-semibold tracking-wide uppercase" role="list">
            {['services', 'workflow', 'portfolio', 'reviews', 'about', 'contact'].map((sec) => (
              <li key={sec}>
                <a 
                  href={`#${sec}`} 
                  className={`px-4 py-2 rounded-full block nav-link-hover active:scale-95 hover:-translate-y-0.5 ${
                    activeSection === sec 
                      ? 'bg-gradient-to-tr from-[#4f39f6] via-[#60a5fa] to-[#cbd5e1] text-white shadow-[0_4px_20px_rgba(79,57,246,0.3)] scale-105' 
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {sec}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between w-full md:hidden px-5 py-1 rounded-full transition-all duration-500 bg-[#0c232c]/90 backdrop-blur-xl border border-zinc-800/30 shadow-lg opacity-0 animate-premium-mobile">
          <div className="flex items-center">
            <a href="#hero" className="w-8 h-8 bg-white rounded-xl shadow-sm relative z-10 transition-transform duration-200 active:scale-95 flex items-center justify-center overflow-hidden" aria-label="Home">
              <div className="absolute inset-1 bg-gradient-to-tr from-[#4f39f6] via-[#60a5fa] to-[#cbd5e1] rounded-[30%_70%_70%_30%_/_50%_40%_60%_50%] animate-[spin_15s_linear_infinite]"></div>
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="w-9 h-9 flex items-center justify-center rounded-xl text-zinc-300 hover:text-white transition-all duration-200" 
            aria-expanded={mobileMenuOpen} 
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-4 flex flex-col justify-between items-center">
              <span className="w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-out" />
              <span className="w-full h-0.5 bg-current rounded-full transition-all duration-200" />
              <span className="w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-out" />
            </div>
          </button>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden transition-opacity duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div 
        style={{ perspective: '1600px' }}
        className={`fixed inset-y-0 left-0 z-50 w-[85%] max-w-xs md:hidden transition-all duration-500 ease-out ${
          mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div 
          style={{ 
            transformOrigin: 'left center',
            transform: mobileMenuOpen 
              ? 'translateX(0) rotateY(0deg)' 
              : 'translateX(-100%) rotateY(-25deg)',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          className="w-full h-full bg-[#0c232c]/95 backdrop-blur-xl p-6 shadow-[30px_0_60px_-15px_rgba(0,0,0,0.7)] border-r border-zinc-800/40 flex flex-col relative overflow-y-auto"
        >
          <div className="flex items-center justify-between mt-8 mb-12 px-2">
            <div className="w-8 h-8 bg-white rounded-xl shadow-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-1 bg-gradient-to-tr from-[#4f39f6] via-[#60a5fa] to-[#cbd5e1] rounded-[30%_70%_70%_30%_/_50%_40%_60%_50%] animate-[spin_20s_linear_infinite]"></div>
            </div>
            
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-xl text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-200"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul 
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }} 
            className="flex flex-col gap-2 text-base font-semibold tracking-wide uppercase px-2 relative z-50" 
            role="list"
          >
            {['services', 'workflow', 'portfolio', 'reviews', 'about', 'contact'].map((sec, index) => (
              <li 
                key={sec}
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease',
                  transitionDelay: mobileMenuOpen ? `${(index + 1) * 50}ms` : '0ms',
                  transform: mobileMenuOpen 
                    ? 'none' 
                    : 'translateY(20px) translateZ(-40px) rotateX(-20deg)',
                  opacity: mobileMenuOpen ? 1 : 0
                }}
              >
                <a 
                  href={`#${sec}`} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`block py-3 px-4 rounded-xl transition-all duration-300 relative z-50 ${
                    activeSection === sec 
                      ? 'bg-gradient-to-r from-[#4f39f6]/20 via-[#60a5fa]/10 to-transparent text-white' 
                      : 'text-zinc-400 hover:text-white hover:bg-white/5 hover:translate-x-1.5'
                  }`}
                >
                  {sec}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}