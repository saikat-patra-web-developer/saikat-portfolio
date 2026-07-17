import React from 'react';

export default function NavBar({ mobileMenuOpen, setMobileMenuOpen, scrolled, activeSection }) {
  return (
    // Updated 'absolute md:fixed' to 'fixed' so the mobile menu container remains fixed at the top of the page
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b bg-transparent border-transparent`}>
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between md:justify-center" aria-label="Main navigation">
        
        {/* DESKTOP MENU (Kept exactly as it is) */}
        <div className="hidden md:flex items-center gap-3 bg-[#0c232c] p-1.5 pl-3 rounded-full border border-zinc-800/40 backdrop-blur-md">
          <div className="flex items-center">
            <a href="#hero" className="w-9 h-9 bg-white rounded-xl shadow-sm font-sans font-extrabold text-2xl tracking-tight relative z-10 transition-transform duration-200 active:scale-95 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-1 bg-gradient-to-tr from-[#4f39f6] via-[#60a5fa] to-[#cbd5e1] rounded-[30%_70%_70%_30%_/_50%_40%_60%_50%] animate-[spin_20s_linear_infinite]"></div>
            </a>
          </div>
          <ul className="flex items-center gap-1 text-sm" role="list">
            {['services', 'HowWeWork', 'portfolio', 'reviews', 'about', 'contact'].map((sec) => (
              <li key={sec}>
                <a 
                  href={`#${sec}`} 
                  className={`px-4 py-2 rounded-xl block font-medium transition-all duration-300 capitalize text-white active:scale-95 ${
                    activeSection === sec 
                      ? 'bg-gradient-to-tr from-[#4f39f6] via-[#60a5fa] to-[#cbd5e1] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.5),_0_10px_10px_-5px_rgba(79,57,246,0.3)]' 
                      : 'hover:text-zinc-500 hover:bg-[#0c232c]'
                  }`}
                >
                  {sec}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE MENU CAPSULE CONTAINER */}
        <div className="flex items-center justify-between w-full md:hidden bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-sm">
          {/* Brand Logo inside Capsule */}
          <div className="flex items-center">
            <a href="#hero" className="w-9 h-9 bg-white rounded-xl shadow-sm font-sans font-extrabold text-2xl tracking-tight relative z-10 transition-transform duration-200 active:scale-95 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-1 bg-gradient-to-tr from-[#4f39f6] via-[#60a5fa] to-[#cbd5e1] rounded-[30%_70%_70%_30%_/_50%_40%_60%_50%] animate-[spin_20s_linear_infinite]"></div>
            </a>
          </div>

          {/* Trigger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="w-10 h-10 flex items-center justify-center rounded-xl text-zinc-600 transition-colors" 
            aria-expanded={mobileMenuOpen} 
            aria-label="Toggle menu"
          >
            {!mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE 3D DRAWER WRAPPER */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* 3D sliding drawer container */}
      <div 
        style={{ perspective: '1200px' }}
        className={`fixed inset-y-0 left-0 z-50 w-[80%] max-w-xs md:hidden transition-all duration-500 ease-out ${
          mobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div 
          style={{ 
            transformOrigin: 'left center',
            transform: mobileMenuOpen 
              ? 'translateX(0) rotateY(0deg)' 
              : 'translateX(-100%) rotateY(-35deg)',
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          className="w-full h-full bg-gradient-to-b from-[#8c76ff] to-[#3b82f6] p-6 shadow-[10px_0_40px_rgba(0,0,0,0.2)] flex flex-col relative pointer-events-auto overflow-y-auto"
        >
          {/* Close Icon inside drawer */}
          <button 
            onClick={() => setMobileMenuOpen(false)} 
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-50 pointer-events-auto"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* White Brand Box Icon */}
          <div className="flex justify-center mt-12 mb-12">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-2 bg-gradient-to-tr from-[#4f39f6] via-[#60a5fa] to-[#cbd5e1] rounded-[30%_70%_70%_30%_/_50%_40%_60%_50%]"></div>
            </div>
          </div>

          {/* 3D Juggling Staggered Items List */}
          <ul 
            style={{ transformStyle: 'preserve-3d', perspective: '800px' }} 
            className="flex flex-col gap-6 text-xl font-semibold text-white px-4 relative z-50 pointer-events-auto" 
            role="list"
          >
            {['services', 'HowWeWork', 'portfolio', 'reviews', 'about', 'contact'].map((sec, index) => (
              <li 
                key={sec}
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease',
                  transitionDelay: mobileMenuOpen ? `${(index + 1) * 90}ms` : '0ms',
                  transform: mobileMenuOpen 
                    ? 'none' 
                    : 'translateY(40px) translateZ(-150px) rotateX(-75deg) scale(0.8)',
                  opacity: mobileMenuOpen ? 1 : 0
                }}
                className="pointer-events-auto"
              >
                <a 
                  href={`#${sec}`} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`block py-2 transition-all duration-200 capitalize border-b border-white/10 relative z-50 pointer-events-auto ${
                    activeSection === sec 
                      ? 'text-white font-bold translate-x-2 scale-105' 
                      : 'text-white/80 hover:text-white hover:translate-x-2'
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