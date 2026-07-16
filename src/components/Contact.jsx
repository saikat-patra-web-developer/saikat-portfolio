import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-[#fafafa] overflow-hidden border-t border-b border-zinc-100">
      <style>{`
        .perspective-container {
          perspective: 1000px;
        }
        
        .flippable-card {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s, background-color 0.3s;
          will-change: transform;
          transform: translateZ(0);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .card-front, .card-back {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.25rem; 
          border-radius: 1rem; 
          width: 100%;
          height: 100%;
          transform: translateZ(0);
        }

        .card-front {
          z-index: 2;
          transform: rotateX(0deg);
        }

        .card-back {
          transform: rotateX(180deg);
          z-index: 1;
        }

        .animate-flip-seq-1,
        .animate-flip-seq-2,
        .animate-flip-seq-3,
        .animate-flip-seq-4,
        .animate-flip-seq-5,
        .animate-flip-seq-6 { 
          animation: none !important; 
        }

        .flippable-card:hover {
          transform: rotateX(180deg) scale(1.02);
          background-color: rgba(24, 24, 27, 0.8) !important;
          border-color: #3f3f46 !important;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s, background-color 0.3s;
        }

        .flippable-card * {
          pointer-events: none;
        }

        .flippable-card:hover .card-back div:first-of-type {
          background-color: #4f39f6 !important;
          color: #ffffff !important;
        }

        .flippable-card:hover .card-back span:last-of-type {
          color: #ffffff !important;
        }
      `}</style>

      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#4f39f6]/10 via-[#60a5fa]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-gradient-to-br from-[#ffed4a]/5 via-[#60a5fa]/10 to-[#4f39f6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-950 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden border border-zinc-900 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#4f39f6]/15 to-transparent rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#4f39f6]/10 to-transparent rounded-full blur-2xl pointer-events-none" aria-hidden="true"></div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 text-left lg:sticky lg:top-8">
              <p className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out text-xs font-bold text-[#4f39f6] tracking-widest uppercase mb-4">
                Contact
              </p>
              <h2 className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-75 font-sans font-extrabold text-4xl md:text-5xl text-white tracking-tight leading-[1.15] mb-6">
                Let's work<br/>together
              </h2>
              <p className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-150 text-zinc-400 font-light leading-relaxed mb-4">
                Open to strategic UI/UX contracts, modern frontend roles, and full-stack engineering opportunities. Whether you need a highly scalable web application engineered from scratch, an intuitive user workflow, or performance optimizations for an existing product, I'm ready to help execute your vision.
              </p>
              <p className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-150 text-zinc-500 font-light text-sm leading-relaxed">
                Let's explore your product goals, map out technical strategies, and build exceptional web experiences that drive results. Reach out via any of the channels below to start the conversation.
              </p>
            </div>

            <div className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-200 lg:col-span-7 grid sm:grid-cols-2 gap-4 w-full perspective-container">
              
              <a href="mailto:saikatpatra300@gmail.com" className="flippable-card animate-flip-seq-1 group bg-zinc-900/40 border border-zinc-850 rounded-2xl hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 min-h-[140px]">
                <div className="card-front">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Personal Email</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">saikatpatra300@gmail.com</span>
                  </div>
                </div>
                <div className="card-back">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Personal Email</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">saikatpatra300@gmail.com</span>
                  </div>
                </div>
              </a>

              <a href="mailto:saikatpatraoffice@gmail.com" className="flippable-card animate-flip-seq-2 group bg-zinc-900/40 border border-zinc-850 rounded-2xl hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 min-h-[140px]">
                <div className="card-front">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg">
                    <i className="bi bi-envelope-at"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Office Email</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">saikatpatraoffice@gmail.com</span>
                  </div>
                </div>
                <div className="card-back">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg">
                    <i className="bi bi-envelope-at"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Office Email</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">saikatpatraoffice@gmail.com</span>
                  </div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/saikat-patra-web-developer" rel="noopener noreferrer" target="_blank" className="flippable-card animate-flip-seq-3 group bg-zinc-900/40 border border-zinc-850 rounded-2xl hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 min-h-[140px]">
                <div className="card-front">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg">
                    <i className="bi bi-linkedin"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Connect</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">saikat-patra-web-developer</span>
                  </div>
                </div>
                <div className="card-back">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg">
                    <i className="bi bi-linkedin"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Connect</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">saikat-patra-web-developer</span>
                  </div>
                </div>
              </a>

              <a href="https://github.com/saikat-patra-web-developer" rel="noopener noreferrer" target="_blank" className="flippable-card animate-flip-seq-4 group bg-zinc-900/40 border border-zinc-850 rounded-2xl hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 min-h-[140px]">
                <div className="card-front">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg">
                    <i className="bi bi-github"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Repositories</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">saikat-patra-web-developer</span>
                  </div>
                </div>
                <div className="card-back">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg">
                    <i className="bi bi-github"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Repositories</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">saikat-patra-web-developer</span>
                  </div>
                </div>
              </a>

              <a href="https://wa.me/919038909382" rel="noopener noreferrer" target="_blank" className="flippable-card animate-flip-seq-5 group bg-zinc-900/40 border border-zinc-850 rounded-2xl hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 min-h-[140px]">
                <div className="card-front">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg">
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Primary Chat</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">+91 90389 09382</span>
                  </div>
                </div>
                <div className="card-back">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg">
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Primary Chat</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">+91 90389 09382</span>
                  </div>
                </div>
              </a>

              <a href="https://wa.me/918902273136" rel="noopener noreferrer" target="_blank" className="flippable-card animate-flip-seq-6 group bg-zinc-900/40 border border-zinc-850 rounded-2xl hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 min-h-[140px]">
                <div className="card-front">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg">
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Secondary Chat</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">+91 89022 73136</span>
                  </div>
                </div>
                <div className="card-back">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg">
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Secondary Chat</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">+91 89022 73136</span>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}