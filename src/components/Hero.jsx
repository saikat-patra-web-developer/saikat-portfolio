import React from 'react';
import { FileText, Star, User } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white selection:bg-indigo-500/30">
      {/* Background Blobs */}
      <div className="absolute top-10 right-[-10%] w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-tr from-indigo-50/20 to-purple-500/0 rounded-full blur-[60px] sm:blur-[120px] pointer-events-none animate-[pulse_8s_infinite_ease-in-out]" aria-hidden="true"></div>
      <div className="absolute bottom-10 left-[-10%] w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-zinc-200/50 rounded-full blur-[50px] sm:blur-[100px] pointer-events-none animate-[pulse_10s_infinite_ease-in-out_1s]" aria-hidden="true"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 xl:col-span-6 text-left flex flex-col justify-center order-2 lg:order-1 mt-2 lg:mt-0">
            {/* Friendly Identifier Badge */}
            <div className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-75 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-zinc-100 text-zinc-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Hi, I'm Saikat Patra
              </span>
            </div>

            {/* Value-Driven Headline */}
            <h1 className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-75 font-sans font-black text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl leading-[1.15] sm:leading-[1.05] tracking-tight text-zinc-900 mb-5 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#4f39f6] via-[#38bdf8] to-[#94a3b8] bg-[size:200%_auto] animate-[shine_5s_linear_infinite]">Custom Software</span> That Helps Your Business Grow
            </h1>

            {/* Clear & Condensed Benefit Sub-Headline */}
            <p className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-150 text-sm sm:text-lg md:text-xl text-zinc-600 font-normal leading-relaxed max-w-xl mb-6 sm:mb-10">
            Modern <strong className="font-semibold text-zinc-900">web applications, CRM systems, and automation solutions</strong> built to improve efficiency and support <strong className="font-semibold text-zinc-900">business growth</strong>.
            </p>

            {/* Conversion Optimised CTAs */}
            <div className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-200 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#4f39f6] text-white font-bold px-8 py-3.5 sm:py-4 rounded-xl hover:bg-[#6352f7] transition-all duration-300 text-sm shadow-[0_4px_20px_rgba(79,57,246,0.3)] hover:shadow-[0_8px_25px_rgba(79,57,246,0.45)] active:scale-95 group relative overflow-hidden text-center order-1 sm:order-2">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                Get in touch
              </a>
              <a href="#work" className="inline-flex items-center justify-center gap-2 border border-zinc-200 bg-white hover:bg-zinc-50 hover:text-[#4f39f6] text-zinc-800 font-bold px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300 text-sm shadow-sm active:scale-95 backdrop-blur-sm text-center group order-2 sm:order-1">
                Explore my work
              </a>
            </div>

            {/* Prominent Trust Section (Fixed Text Mirroring Bug) */}
            <div className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-300 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mt-10 sm:mt-16 pt-6 sm:pt-10 border-t border-zinc-100">
              {/* Injected Style Block for HD 3D Flipping Animation */}
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes continuousFlip3D {
                  0%, 15% {
                    transform: rotateY(0deg);
                  }
                  40%, 60% {
                    transform: rotateY(180deg);
                  }
                  85%, 100% {
                    transform: rotateY(360deg);
                  }
                }
                .flip-container {
                  perspective: 1600px;
                  height: 90px;
                }
                @media (min-width: 640px) {
                  .flip-container {
                    height: 110px;
                  }
                }
                .flip-card-inner {
                  position: relative;
                  width: 100%;
                  height: 100%;
                  text-align: center;
                  transform-style: preserve-3d;
                  animation: continuousFlip3D 6s infinite cubic-bezier(0.7, 0, 0.2, 1);
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
                  border-radius: 1.25rem;
                  padding: 0.75rem;
                }
                /* Deep Cinematic Popout Effect */
                .flip-card-front * {
                  transform: translateZ(45px);
                  transform-style: preserve-3d;
                }
                /* Fixed Mirroring: Content inside back face is rotated 180deg to compensate for the card container's flip */
                .flip-card-back * {
                  transform: translateZ(45px) rotateY(180deg);
                  transform-style: preserve-3d;
                }
                .flip-card-back {
                  transform: rotateY(180deg);
                }
              `}} />

              {/* Card 1 */}
              <div className="flip-container">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-gradient-to-br from-indigo-50/90 via-white to-indigo-50/40 border-[1.5px] border-indigo-200/50 shadow-[0_20px_40px_-10px_rgba(79,57,246,0.18),0_10px_20px_-8px_rgba(79,57,246,0.1),inset_0_1px_2px_rgba(255,255,255,0.8)]">
                    <p className="font-sans font-black text-2xl sm:text-3xl md:text-4xl text-[#4f39f6] tracking-tight drop-shadow-[0_2px_4px_rgba(79,57,246,0.1)]">34+</p>
                    <p className="text-[10px] sm:text-xs font-bold text-zinc-600 mt-0.5 sm:mt-1 leading-tight">Completed Projects</p>
                  </div>
                  <div className="flip-card-back bg-gradient-to-br from-[#4f39f6] via-[#432ff2] to-[#2c1cb8] border-[1.5px] border-[#3724db] shadow-[0_20px_45px_-10px_rgba(79,57,246,0.45),inset_0_1px_3px_rgba(255,255,255,0.3)] text-white">
                    <div>
                      <p className="font-sans font-black text-base sm:text-lg leading-tight tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">100% Done</p>
                      <p className="text-[9px] sm:text-[10px] font-medium text-indigo-100 mt-1 leading-tight">On-Time Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="flip-container">
                <div className="flip-card-inner" style={{ animationDelay: '0.5s' }}>
                  <div className="flip-card-front bg-gradient-to-br from-emerald-50/90 via-white to-emerald-50/40 border-[1.5px] border-emerald-200/50 shadow-[0_20px_40px_-10px_rgba(16,185,129,0.18),0_10px_20px_-8px_rgba(16,185,129,0.1),inset_0_1px_2px_rgba(255,255,255,0.8)]">
                    <p className="font-sans font-black text-2xl sm:text-3xl md:text-4xl text-emerald-600 tracking-tight drop-shadow-[0_2px_4px_rgba(16,185,129,0.1)]">21+</p>
                    <p className="text-[10px] sm:text-xs font-bold text-zinc-600 mt-0.5 sm:mt-1 leading-tight">Happy Clients</p>
                  </div>
                  <div className="flip-card-back bg-gradient-to-br from-emerald-600 via-emerald-600 to-emerald-800 border-[1.5px] border-emerald-700 shadow-[0_20px_45px_-10px_rgba(16,185,129,0.45),inset_0_1px_3px_rgba(255,255,255,0.3)] text-white">
                    <div>
                      <p className="font-sans font-black text-base sm:text-lg leading-tight tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">Global Trust</p>
                      <p className="text-[9px] sm:text-[10px] font-medium text-emerald-100 mt-1 leading-tight">Worldwide Retention</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="flip-container">
                <div className="flip-card-inner" style={{ animationDelay: '1s' }}>
                  <div className="flip-card-front bg-gradient-to-br from-purple-50/90 via-white to-purple-50/40 border-[1.5px] border-purple-200/50 shadow-[0_20px_40px_-10px_rgba(147,51,234,0.18),0_10px_20px_-8px_rgba(147,51,234,0.1),inset_0_1px_2px_rgba(255,255,255,0.8)]">
                    <p className="font-sans font-black text-2xl sm:text-3xl md:text-4xl text-purple-600 tracking-tight drop-shadow-[0_2px_4px_rgba(147,51,234,0.1)]">7+</p>
                    <p className="text-[10px] sm:text-xs font-bold text-zinc-600 mt-0.5 sm:mt-1 leading-tight">Years Experience</p>
                  </div>
                  <div className="flip-card-back bg-gradient-to-br from-purple-600 via-purple-600 to-purple-800 border-[1.5px] border-purple-700 shadow-[0_20px_45px_-10px_rgba(147,51,234,0.45),inset_0_1px_3px_rgba(255,255,255,0.3)] text-white">
                    <div>
                      <p className="font-sans font-black text-base sm:text-lg leading-tight tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">Full Stack</p>
                      <p className="text-[9px] sm:text-[10px] font-medium text-purple-100 mt-1 leading-tight">Expert Engineering</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flip-container">
                <div className="flip-card-inner" style={{ animationDelay: '1.5s' }}>
                  <div className="flip-card-front bg-gradient-to-br from-amber-50/90 via-white to-amber-50/40 border-[1.5px] border-amber-200/50 shadow-[0_20px_40px_-10px_rgba(245,158,11,0.18),0_10px_20px_-8px_rgba(245,158,11,0.1),inset_0_1px_2px_rgba(255,255,255,0.8)]">
                    <p className="font-sans font-black text-2xl sm:text-3xl md:text-4xl text-amber-600 tracking-tight flex items-center gap-1 drop-shadow-[0_2px_4px_rgba(245,158,11,0.1)]">
                      4.9
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-500 text-amber-500 inline" />
                    </p>
                    <p className="text-[10px] sm:text-xs font-bold text-zinc-600 mt-0.5 sm:mt-1 leading-tight">Google Review</p>
                  </div>
                  <div className="flip-card-back bg-gradient-to-br from-amber-500 via-amber-500 to-amber-600 border-[1.5px] border-amber-600 shadow-[0_20px_45px_-10px_rgba(245,158,11,0.45),inset_0_1px_3px_rgba(255,255,255,0.3)] text-white">
                    <div>
                      <p className="font-sans font-black text-base sm:text-lg leading-tight tracking-wide flex items-center justify-center gap-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
                        5.0 <Star className="w-3.5 h-3.5 fill-white text-white inline" />
                      </p>
                      <p className="text-[9px] sm:text-[10px] font-medium text-amber-50 mt-1 leading-tight">Top Rated Quality</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Avatar Graphic */}
          <div className="lg:col-span-5 xl:col-span-6 flex justify-center items-center order-1 lg:order-2 relative select-none px-2 sm:px-0">
            {/* Dots Decorations */}
            <div className="absolute top-4 right-8 lg:right-12 opacity-30 pointer-events-none hidden sm:grid grid-cols-6 gap-2" aria-hidden="true">
              {[...Array(24)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>)}
            </div>
            <div className="absolute bottom-12 left-4 opacity-30 pointer-events-none hidden sm:grid grid-cols-4 gap-2" aria-hidden="true">
              {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>)}
            </div>

            {/* Avatar Frame Box */}
            <div className="relative w-full max-w-[240px] aspect-square sm:max-w-[360px] md:max-w-[400px] lg:max-w-full lg:w-[420px] lg:h-[420px] flex items-center justify-center mb-4 sm:mb-6 lg:mb-0">
              {/* Graphical Circular Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4f39f6] via-[#38bdf8] to-[#94a3b8] rounded-[50%_50%_30%_70%_/_40%_60%_40%_60%] mix-blend-multiply opacity-20 scale-105 animate-[spin_30s_linear_infinite_reverse]"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4f39f6] via-[#60a5fa] to-[#cbd5e1] rounded-[30%_70%_70%_30%_/_50%_40%_60%_50%] animate-[spin_10s_linear_infinite]"></div>
              
              <div className="absolute inset-1 overflow-hidden flex items-center justify-center">
                <img 
                  className="w-full h-full object-contain transform" 
                  src="./my_image.png" 
                  alt="Saikat Patra — UI/UX Designer & Full Stack Developer" 
                  loading="eager" 
                />
              </div>

              {/* Floating Badges (With Added HD Cinematic 3D Shadow & Border Highlights) */}
              
              {/* Badge 1: Completed Projects */}
              <div className="absolute -top-2 -left-2 sm:-left-6 bg-white border border-zinc-100/80 p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_20px_50px_rgba(79,57,246,0.15),0_10px_20px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-[0_30px_60px_rgba(79,57,246,0.25),0_12px_24px_rgba(0,0,0,0.08)] [transform:perspective(800px)_translateZ(20px)] transition-all duration-300 flex items-center gap-1.5 sm:gap-3 animate-[bounce_2s_infinite_ease-in-out]">
                <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#4f39f6]/10 flex items-center justify-center text-[#4f39f6] shadow-[inset_0_1px_2px_rgba(79,57,246,0.15)]">
                  <FileText className="w-3.5 h-3.5 sm:w-5 sm:h-5" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs sm:text-lg font-black text-zinc-900 leading-none">34+</p>
                  <p className="text-[7px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-wider mt-0.5 sm:mt-1">Projects</p>
                </div>
              </div>

              {/* Badge 2: Satisfaction */}
              <div className="absolute top-1/4 -right-2 sm:-right-8 bg-white border border-zinc-100/80 p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_20px_50px_rgba(245,158,11,0.15),0_10px_20px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-[0_30px_60px_rgba(245,158,11,0.25),0_12px_24px_rgba(0,0,0,0.08)] [transform:perspective(800px)_translateZ(20px)] transition-all duration-300 flex items-center gap-1.5 sm:gap-3 animate-[bounce_2s_infinite_ease-in-out_1s]">
                <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shadow-[inset_0_1px_2px_rgba(245,158,11,0.15)]">
                  <Star className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-current" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs sm:text-lg font-black text-zinc-900 leading-none">4.9</p>
                  <p className="text-[7px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-wider mt-0.5 sm:mt-1">Satisfaction</p>
                </div>
              </div>

              {/* Badge 3: Full Stack Developer */}
              <div className="absolute -bottom-4 bg-white border border-zinc-100/85 p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_25px_55px_rgba(147,51,234,0.18),0_12px_24px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.95)] hover:shadow-[0_35px_65px_rgba(147,51,234,0.28),0_15px_28px_rgba(0,0,0,0.09)] [transform:perspective(800px)_translateZ(30px)] transition-all duration-300 flex items-center gap-2 sm:gap-4 min-w-[140px] sm:min-w-[220px] animate-[bounce_2s_infinite_ease-in-out_0.5s]">
                <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 shrink-0 shadow-[inset_0_1px_2px_rgba(147,51,234,0.15)]">
                  <User className="w-3.5 h-3.5 sm:w-5 sm:h-5" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[10px] sm:text-sm font-black text-zinc-900 leading-tight">Full Stack Developer</p>
                  <p className="text-[8px] sm:text-[11px] font-medium text-zinc-400 mt-0.5">7 Years+ Experience</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}