import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-white via-zinc-50/30 to-white overflow-hidden">
      <style>{`
        .perspective-container {
          perspective: 1200px;
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
          padding: 1rem;
          border-radius: 1rem; 
          width: 100%;
          height: 100%;
          transform: translateZ(0);
        }

        @media (min-width: 640px) {
          .card-front, .card-back {
            padding: 1.25rem;
          }
        }

        .card-front {
          z-index: 2;
          transform: rotateX(0deg);
        }

        .card-back {
          transform: rotateX(180deg);
          z-index: 1;
        }

        @keyframes autoFlip {
          0%, 15% {
            transform: rotateX(0deg) scale(1);
            background-color: rgba(24, 24, 27, 0.4);
            border-color: rgba(63, 63, 70, 0.4);
            box-shadow: none;
          }
          35%, 65% {
            transform: rotateX(180deg) scale(1.04);
            background-color: #0c0a14 !important;
            border-color: #6366f1 !important;
            box-shadow: 0 20px 40px -10px rgba(79, 57, 246, 0.45), 
                        0 0 25px 2px rgba(79, 57, 246, 0.25), 
                        inset 0 0 15px rgba(79, 57, 246, 0.15);
          }
          85%, 100% {
            transform: rotateX(0deg) scale(1);
            background-color: rgba(24, 24, 27, 0.4);
            border-color: rgba(63, 63, 70, 0.4);
            box-shadow: none;
          }
        }

        @keyframes autoFlipIcon {
          0%, 15%, 85%, 100% {
            background-color: rgb(24, 24, 27) !important;
            color: rgb(161, 161, 170) !important;
            border-color: rgb(39, 39, 42) !important;
            box-shadow: none;
          }
          35%, 65% {
            background-color: #4f39f6 !important;
            color: #ffffff !important;
            border-color: #818cf8 !important;
            box-shadow: 0 0 12px rgba(79, 57, 246, 0.6);
          }
        }

        .animate-flip-seq-1 { animation: autoFlip 9s infinite ease-in-out; animation-delay: 0s; }
        .animate-flip-seq-2 { animation: autoFlip 9s infinite ease-in-out; animation-delay: 1.5s; }
        .animate-flip-seq-3 { animation: autoFlip 9s infinite ease-in-out; animation-delay: 3s; }
        .animate-flip-seq-4 { animation: autoFlip 9s infinite ease-in-out; animation-delay: 4s; }
        .animate-flip-seq-5 { animation: autoFlip 9s infinite ease-in-out; animation-delay: 5.5s; }
        .animate-flip-seq-6 { animation: autoFlip 9s infinite ease-in-out; animation-delay: 7s; }

        .animate-flip-seq-1 .card-back div:first-of-type { animation: autoFlipIcon 9s infinite ease-in-out; animation-delay: 0s; }
        .animate-flip-seq-2 .card-back div:first-of-type { animation: autoFlipIcon 9s infinite ease-in-out; animation-delay: 1.5s; }
        .animate-flip-seq-3 .card-back div:first-of-type { animation: autoFlipIcon 9s infinite ease-in-out; animation-delay: 3s; }
        .animate-flip-seq-4 .card-back div:first-of-type { animation: autoFlipIcon 9s infinite ease-in-out; animation-delay: 4s; }
        .animate-flip-seq-5 .card-back div:first-of-type { animation: autoFlipIcon 9s infinite ease-in-out; animation-delay: 5.5s; }
        .animate-flip-seq-6 .card-back div:first-of-type { animation: autoFlipIcon 9s infinite ease-in-out; animation-delay: 7s; }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-950 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 md:p-16 relative overflow-hidden border border-zinc-900 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#4f39f6]/15 to-transparent rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#4f39f6]/10 to-transparent rounded-full blur-2xl pointer-events-none" aria-hidden="true"></div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            <div className="lg:col-span-5 text-left lg:sticky lg:top-8">
              <p className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out text-xs font-bold text-[#4f39f6] tracking-widest uppercase mb-3 sm:mb-4">
                Let's Build Something Great
              </p>
              <h2 className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-75 font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.15] mb-4 sm:mb-6">
                Ready to Streamline Your Business?
              </h2>
              <p className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-150 text-zinc-300 font-light text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Whether you need to scale custom administration systems, optimize complex operations, or engineer responsive, intuitive web applications from the ground up I deliver robust architecture built for business growth.
              </p>
              <p className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-150 text-zinc-400 font-light text-xs sm:text-sm leading-relaxed">
                Skip the long forms. Choose your preferred communication channel on the right to start detailing your application objectives directly with me.
              </p>
            </div>

            <div className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-200 lg:col-span-7 grid sm:grid-cols-2 gap-3 sm:gap-4 w-full perspective-container">
              
              <a href="mailto:saikatpatra300@gmail.com" className="flippable-card animate-flip-seq-1 group bg-zinc-900/40 border border-zinc-850 rounded-2xl transition-all duration-300 min-h-[130px] sm:min-h-[140px]">
                <div className="card-front">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg transition-colors">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Direct Email</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">saikatpatra300@gmail.com</span>
                  </div>
                </div>
                <div className="card-back">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg transition-colors">
                    <i className="bi bi-envelope text-white"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Direct Email</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">saikatpatra300@gmail.com</span>
                  </div>
                </div>
              </a>

              <a href="mailto:saikatpatraoffice@gmail.com" className="flippable-card animate-flip-seq-2 group bg-zinc-900/40 border border-zinc-850 rounded-2xl transition-all duration-300 min-h-[130px] sm:min-h-[140px]">
                <div className="card-front">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg transition-colors">
                    <i className="bi bi-envelope-at"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Business Enquiries</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">saikatpatraoffice@gmail.com</span>
                  </div>
                </div>
                <div className="card-back">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg transition-colors">
                    <i className="bi bi-envelope-at text-white"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Business Enquiries</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">saikatpatraoffice@gmail.com</span>
                  </div>
                </div>
              </a>

              <a href="https://wa.me/919038909382" rel="noopener noreferrer" target="_blank" className="flippable-card animate-flip-seq-5 group bg-zinc-900/40 border border-zinc-850 rounded-2xl transition-all duration-300 min-h-[130px] sm:min-h-[140px]">
                <div className="card-front">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg transition-colors">
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Instant Chat (Primary)</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">+91 90389 09382</span>
                  </div>
                </div>
                <div className="card-back">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg transition-colors">
                    <i className="bi bi-whatsapp text-white"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Instant Chat (Primary)</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">+91 90389 09382</span>
                  </div>
                </div>
              </a>

              <a href="https://wa.me/918902273136" rel="noopener noreferrer" target="_blank" className="flippable-card animate-flip-seq-6 group bg-zinc-900/40 border border-zinc-850 rounded-2xl transition-all duration-300 min-h-[130px] sm:min-h-[140px]">
                <div className="card-front">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg transition-colors">
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Instant Chat (Secondary)</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">+91 89022 73136</span>
                  </div>
                </div>
                <div className="card-back">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg transition-colors">
                    <i className="bi bi-whatsapp text-white"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Instant Chat (Secondary)</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">+91 89022 73136</span>
                  </div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/saikat-patra-web-developer" rel="noopener noreferrer" target="_blank" className="flippable-card animate-flip-seq-3 group bg-zinc-900/40 border border-zinc-850 rounded-2xl transition-all duration-300 min-h-[130px] sm:min-h-[140px]">
                <div className="card-front">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg transition-colors">
                    <i className="bi bi-linkedin"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Professional Network</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">saikat-patra-web-developer</span>
                  </div>
                </div>
                <div className="card-back">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg transition-colors">
                    <i className="bi bi-linkedin text-white"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Professional Network</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">saikat-patra-web-developer</span>
                  </div>
                </div>
              </a>

              <a href="https://github.com/saikat-patra-web-developer" rel="noopener noreferrer" target="_blank" className="flippable-card animate-flip-seq-4 group bg-zinc-900/40 border border-zinc-850 rounded-2xl transition-all duration-300 min-h-[130px] sm:min-h-[140px]">
                <div className="card-front">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg transition-colors">
                    <i className="bi bi-github"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Code Ecosystem</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">saikat-patra-web-developer</span>
                  </div>
                </div>
                <div className="card-back">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-lg transition-colors">
                    <i className="bi bi-github text-white"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Code Ecosystem</span>
                    <span className="block text-sm font-medium text-zinc-300 truncate">saikat-patra-web-developer</span>
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