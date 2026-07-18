import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white via-zinc-50/30 to-white overflow-hidden">
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
          background-color: rgba(24, 24, 27, 0.95) !important;
          border-color: #4f39f6 !important;
          box-shadow: 0 10px 25px -5px rgba(79, 57, 246, 0.2);
        }

        .flippable-card:hover .card-back div:first-of-type {
          background-color: #4f39f6 !important;
          color: #ffffff !important;
          border-color: #4f39f6 !important;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-950 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden border border-zinc-900 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#4f39f6]/15 to-transparent rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#4f39f6]/10 to-transparent rounded-full blur-2xl pointer-events-none" aria-hidden="true"></div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 text-left lg:sticky lg:top-8">
              <p className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out text-xs font-bold text-[#4f39f6] tracking-widest uppercase mb-4">
                Let's Build Something Great
              </p>
              <h2 className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-75 font-sans font-extrabold text-4xl md:text-5xl text-white tracking-tight leading-[1.15] mb-6">
                Ready to Streamline Your Business?
              </h2>
              <p className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-150 text-zinc-300 font-light leading-relaxed mb-4">
                Whether you need to scale custom administration systems, optimize complex operations, or engineer responsive, intuitive web applications from the ground up I deliver robust architecture built for business growth.
              </p>
              <p className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-150 text-zinc-400 font-light text-sm leading-relaxed">
                Skip the long forms. Choose your preferred communication channel on the right to start detailing your application objectives directly with me.
              </p>
            </div>

            {/* Right Interactive Cards Column */}
            <div className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-200 lg:col-span-7 grid sm:grid-cols-2 gap-4 w-full perspective-container">
              
              {/* Personal Email */}
              <a href="mailto:saikatpatra300@gmail.com" className="flippable-card animate-flip-seq-1 group bg-zinc-900/40 border border-zinc-850 rounded-2xl hover:border-zinc-700 transition-all duration-300 min-h-[140px]">
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
                    <i className="bi bi-arrow-right-short text-white"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-[#60a5fa] font-bold uppercase tracking-wider mb-1">Send a Message</span>
                    <span className="block text-sm font-semibold text-white truncate">Open Mail Client →</span>
                  </div>
                </div>
              </a>

              {/* Office Email */}
              <a href="mailto:saikatpatraoffice@gmail.com" className="flippable-card animate-flip-seq-2 group bg-zinc-900/40 border border-zinc-850 rounded-2xl hover:border-zinc-700 transition-all duration-300 min-h-[140px]">
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
                    <i className="bi bi-arrow-right-short text-white"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-[#60a5fa] font-bold uppercase tracking-wider mb-1">Get a Proposal</span>
                    <span className="block text-sm font-semibold text-white truncate">Open Business Mail →</span>
                  </div>
                </div>
              </a>

              {/* WhatsApp Primary */}
              <a href="https://wa.me/919038909382" rel="noopener noreferrer" target="_blank" className="flippable-card animate-flip-seq-5 group bg-zinc-900/40 border border-zinc-850 rounded-2xl hover:border-zinc-700 transition-all duration-300 min-h-[140px]">
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
                    <span className="block text-xs text-emerald-400 font-bold uppercase tracking-wider mb-1">Fast Response</span>
                    <span className="block text-sm font-semibold text-white truncate">Chat on WhatsApp →</span>
                  </div>
                </div>
              </a>

              {/* WhatsApp Secondary */}
              <a href="https://wa.me/918902273136" rel="noopener noreferrer" target="_blank" className="flippable-card animate-flip-seq-6 group bg-zinc-900/40 border border-zinc-850 rounded-2xl hover:border-zinc-700 transition-all duration-300 min-h-[140px]">
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
                    <span className="block text-xs text-emerald-400 font-bold uppercase tracking-wider mb-1">Alternative Line</span>
                    <span className="block text-sm font-semibold text-white truncate">Chat on WhatsApp →</span>
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/saikat-patra-web-developer" rel="noopener noreferrer" target="_blank" className="flippable-card animate-flip-seq-3 group bg-zinc-900/40 border border-zinc-850 rounded-2xl hover:border-zinc-700 transition-all duration-300 min-h-[140px]">
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
                    <span className="block text-xs text-sky-400 font-bold uppercase tracking-wider mb-1">Vetted Profile</span>
                    <span className="block text-sm font-semibold text-white truncate">View LinkedIn Profile →</span>
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/saikat-patra-web-developer" rel="noopener noreferrer" target="_blank" className="flippable-card animate-flip-seq-4 group bg-zinc-900/40 border border-zinc-850 rounded-2xl hover:border-zinc-700 transition-all duration-300 min-h-[140px]">
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
                    <span className="block text-xs text-zinc-400 font-bold uppercase tracking-wider mb-1">Proof of Work</span>
                    <span className="block text-sm font-semibold text-white truncate">Explore Repositories →</span>
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