import React from 'react';
import { FileText, Star, User } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-10 sm:pt-28 sm:pb-16 lg:py-16 xl:py-24 overflow-hidden bg-white selection:bg-indigo-500/30">
      <div className="absolute top-10 right-[-10%] w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-tr from-indigo-50/30 to-purple-500/0 rounded-full blur-[60px] sm:blur-[120px] pointer-events-none animate-[pulse_8s_infinite_ease-in-out]" aria-hidden="true"></div>
      <div className="absolute bottom-10 left-[-10%] w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-zinc-100 rounded-full blur-[50px] sm:blur-[100px] pointer-events-none animate-[pulse_10s_infinite_ease-in-out_1s]" aria-hidden="true"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xs:gap-10 lg:gap-6 xl:gap-16 items-center">
          
          <div className="lg:col-span-7 xl:col-span-6 text-left flex flex-col justify-center order-2 lg:order-1 mt-4 xs:mt-6 lg:mt-0">
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-zinc-100 text-zinc-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Hi, I'm Saikat Patra
              </span>
            </div>

            <h1 className="font-sans font-black text-2xl xs:text-4xl sm:text-5xl lg:text-4xl xl:text-5xl min-[1440px]:text-6xl leading-[1.2] xs:leading-[1.15] sm:leading-[1.1] tracking-tight text-zinc-900 mb-4 sm:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f39f6] via-[#38bdf8] to-[#9333ea]">Save 10+</span> Hours Every Week with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f39f6] via-[#38bdf8] to-[#9333ea]">Custom CRM Built</span> for Your Business
            </h1>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-zinc-600 font-normal leading-relaxed max-w-xl mb-6 sm:mb-8">
              Still tracking leads, projects, or inventory in spreadsheets? I build <strong className="font-semibold text-zinc-900">Custom CRM Systems & Eliminate Repetitive Manual Work</strong> that eliminate <strong className="font-semibold text-zinc-900">repetitive work, reduce errors,</strong> and help your team <strong className="font-semibold text-zinc-900">scale with confidence.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#4f39f6] to-[#7c3aed] text-white font-bold px-6 xs:px-8 py-3.5 sm:py-4 rounded-xl hover:opacity-95 transition-all duration-300 text-sm shadow-[0_4px_20px_rgba(79,57,246,0.35)] hover:shadow-[0_8px_30px_rgba(79,57,246,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 group relative overflow-hidden text-center order-1"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                Get in touch
                <svg 
                  className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="#work" 
                className="inline-flex items-center justify-center gap-2 border-2 border-zinc-200 bg-white hover:border-[#4f39f6]/30 hover:bg-zinc-50 hover:text-[#4f39f6] text-zinc-800 font-bold px-6 xs:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300 text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 backdrop-blur-sm text-center group order-2"
              >
                Explore my work
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-16 pt-6 sm:pt-8 border-t border-zinc-100">
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes continuousCardFlip {
                  0%, 40% {
                    transform: rotateY(0deg);
                  }
                  50%, 90% {
                    transform: rotateY(180deg);
                  }
                  100% {
                    transform: rotateY(360deg);
                  }
                }
                .flip-container {
                  perspective: 1200px;
                  height: 84px;
                }
                @media (min-width: 360px) {
                  .flip-container {
                    height: 90px;
                  }
                }
                @media (min-width: 375px) {
                  .flip-container {
                    height: 94px;
                  }
                }
                @media (min-width: 640px) {
                  .flip-container {
                    height: 104px;
                  }
                }
                .flip-card-inner {
                  position: relative;
                  width: 100%;
                  height: 100%;
                  text-align: center;
                  transform-style: preserve-3d;
                  animation: continuousCardFlip 8s infinite cubic-bezier(0.4, 0, 0.2, 1);
                }
                .flip-card-front, .flip-card-back {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  -webkit-backface-visibility: hidden;
                  backface-visibility: hidden;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  border-radius: 1rem;
                  padding: 0.4rem;
                }
                .flip-card-front * {
                  transform: translateZ(30px);
                  transform-style: preserve-3d;
                }
                .flip-card-back * {
                  transform: translateZ(30px) rotateY(180deg);
                  transform-style: preserve-3d;
                }
                .flip-card-back {
                  transform: rotateY(180deg);
                }
                @media (max-width: 359px) {
                  .avatar-badge {
                    transform: scale(0.78) !important;
                  }
                }
                @media (min-width: 360px) and (max-width: 399px) {
                  .avatar-badge {
                    transform: scale(0.88) !important;
                  }
                }
              `}} />

              <div className="flip-container">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-gradient-to-br from-indigo-50/90 via-white to-indigo-50/40 border border-indigo-100 shadow-[0_10px_20px_-5px_rgba(79,57,246,0.1)]">
                    <p className="font-sans font-black text-xl xs:text-2xl sm:text-3xl text-[#4f39f6] tracking-tight">34+</p>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs font-bold text-zinc-500 mt-0.5 leading-tight">Projects Delivered</p>
                  </div>
                  <div className="flip-card-back bg-gradient-to-br from-[#4f39f6] to-[#3724db] text-white shadow-[0_10px_20px_-5px_rgba(79,57,246,0.3)]">
                    <div>
                      <p className="font-sans font-black text-xs xs:text-sm sm:text-base leading-tight">100% Done</p>
                      <p className="text-[8px] xs:text-[9px] sm:text-[10px] font-medium text-indigo-100 mt-0.5 leading-tight">On-Time Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flip-container">
                <div className="flip-card-inner" style={{ animationDelay: '0.8s' }}>
                  <div className="flip-card-front bg-gradient-to-br from-emerald-50/90 via-white to-emerald-50/40 border border-emerald-100 shadow-[0_10px_20px_-5px_rgba(16,185,129,0.1)]">
                    <p className="font-sans font-black text-xl xs:text-2xl sm:text-3xl text-emerald-600 tracking-tight">21+</p>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs font-bold text-zinc-500 mt-0.5 leading-tight">Happy Clients</p>
                  </div>
                  <div className="flip-card-back bg-gradient-to-br from-emerald-600 to-emerald-800 text-white shadow-[0_10px_20px_-5px_rgba(16,185,129,0.3)]">
                    <div>
                      <p className="font-sans font-black text-xs xs:text-sm sm:text-base leading-tight">Global Trust</p>
                      <p className="text-[8px] xs:text-[9px] sm:text-[10px] font-medium text-emerald-100 mt-0.5 leading-tight">Worldwide Retention</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flip-container">
                <div className="flip-card-inner" style={{ animationDelay: '1.6s' }}>
                  <div className="flip-card-front bg-gradient-to-br from-purple-50/90 via-white to-purple-50/40 border border-purple-100 shadow-[0_10px_20px_-5px_rgba(147,51,234,0.1)]">
                    <p className="font-sans font-black text-xl xs:text-2xl sm:text-3xl text-purple-600 tracking-tight">7+</p>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs font-bold text-zinc-500 mt-0.5 leading-tight">Years Experience</p>
                  </div>
                  <div className="flip-card-back bg-gradient-to-br from-purple-600 to-purple-800 text-white shadow-[0_10px_20px_-5px_rgba(147,51,234,0.3)]">
                    <div>
                      <p className="font-sans font-black text-xs xs:text-sm sm:text-base leading-tight">Full Stack</p>
                      <p className="text-[8px] xs:text-[9px] sm:text-[10px] font-medium text-purple-100 mt-0.5 leading-tight">Expert Engineering</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flip-container">
                <div className="flip-card-inner" style={{ animationDelay: '2.4s' }}>
                  <div className="flip-card-front bg-gradient-to-br from-amber-50/90 via-white to-amber-50/40 border border-amber-100 shadow-[0_10px_20px_-5px_rgba(245,158,11,0.1)]">
                    <p className="font-sans font-black text-xl xs:text-2xl sm:text-3xl text-amber-600 tracking-tight flex items-center gap-0.5 xs:gap-1">
                      4.9
                      <Star className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 fill-amber-500 text-amber-500 inline" />
                    </p>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs font-bold text-zinc-500 mt-0.5 leading-tight">Google Review</p>
                  </div>
                  <div className="flip-card-back bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-[0_10px_20px_-5px_rgba(245,158,11,0.3)]">
                    <div>
                      <p className="font-sans font-black text-xs xs:text-sm sm:text-base leading-tight flex items-center justify-center gap-0.5">
                        4.9/5.0 <Star className="w-2.5 h-2.5 xs:w-3 xs:h-3 fill-white text-white inline" />
                      </p>
                      <p className="text-[8px] xs:text-[9px] sm:text-[10px] font-medium text-amber-50 mt-0.5 leading-tight">Top Rated Quality</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 xl:col-span-6 flex justify-center items-center order-1 lg:order-2 relative select-none px-2 xs:px-4 sm:px-0">
            <div className="absolute top-4 right-8 lg:right-12 opacity-30 pointer-events-none hidden sm:grid grid-cols-6 gap-2" aria-hidden="true">
              {[...Array(24)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>)}
            </div>
            <div className="absolute bottom-12 left-4 opacity-30 pointer-events-none hidden sm:grid grid-cols-4 gap-2" aria-hidden="true">
              {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>)}
            </div>

            <div className="relative w-full max-w-[240px] xs:max-w-[280px] aspect-square sm:max-w-[360px] md:max-w-[400px] lg:max-w-full lg:w-[420px] lg:h-[420px] flex items-center justify-center mb-6 xs:mb-8 sm:mb-6 lg:mb-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4f39f6] via-[#38bdf8] to-[#94a3b8] rounded-[50%_50%_30%_70%_/_40%_60%_40%_60%] mix-blend-multiply opacity-20 scale-105 animate-[spin_30s_linear_infinite_reverse]"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4f39f6] via-[#60a5fa] to-[#cbd5e1] rounded-[30%_70%_70%_30%_/_50%_40%_60%_50%] animate-[spin_10s_linear_infinite]"></div>
              
              <div className="absolute inset-1 overflow-hidden flex items-center justify-center">
                <img 
                  className="w-full h-full object-contain transform scale-95" 
                  src="./my_image.png" 
                  alt="Saikat Patra UI/UX Designer & Full Stack Developer" 
                  loading="eager" 
                />
              </div>

              <div className="avatar-badge absolute top-0 -left-2 xs:-left-4 sm:-left-6 bg-white border border-zinc-100/80 p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-[0_15px_30px_rgba(79,57,246,0.12)] scale-90 sm:scale-100 transition-all duration-300 flex items-center gap-1.5 sm:gap-2.5 animate-[bounce_3s_infinite_ease-in-out]">
                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-lg bg-[#4f39f6]/10 flex items-center justify-center text-[#4f39f6]">
                  <FileText className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs sm:text-base font-black text-zinc-900 leading-none">34+</p>
                  <p className="text-[7px] sm:text-[9px] font-bold text-zinc-400 uppercase tracking-wider mt-0.5">Projects</p>
                </div>
              </div>

              <div className="avatar-badge absolute top-1/4 -right-2 xs:-right-4 sm:-right-8 bg-white border border-zinc-100/80 p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-[0_15px_30px_rgba(245,158,11,0.12)] scale-90 sm:scale-100 transition-all duration-300 flex items-center gap-1.5 sm:gap-2.5 animate-[bounce_3s_infinite_ease-in-out_1s]">
                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <Star className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 fill-current" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs sm:text-base font-black text-zinc-900 leading-none">4.9/5.0</p>
                  <p className="text-[7px] sm:text-[9px] font-bold text-zinc-400 uppercase tracking-wider mt-0.5">Satisfaction</p>
                </div>
              </div>

              <div className="avatar-badge absolute -bottom-2 sm:-bottom-4 bg-white border border-zinc-100/85 p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-[0_20px_40px_rgba(147,51,234,0.15)] scale-90 sm:scale-100 transition-all duration-300 flex items-center gap-2 sm:gap-3 min-w-[125px] xs:min-w-[140px] sm:min-w-[190px] animate-[bounce_3s_infinite_ease-in-out_0.5s]">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                  <User className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[9px] xs:text-[10px] sm:text-xs font-black text-zinc-900 leading-tight">Full Stack Developer</p>
                  <p className="text-[7px] xs:text-[8px] sm:text-[10px] font-medium text-zinc-400 mt-0.5">7 Years+ Experience</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}