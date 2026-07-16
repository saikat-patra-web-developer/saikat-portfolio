import React, { useState, useEffect } from 'react';
import { User, Layers, X } from 'lucide-react';

export default function About() {
  const skills = [
    'React JS', 'Next.js', 'Laravel (API)', 'Symfony (API)', 
    'WordPress', 'Tailwind CSS', 'Bootstrap CSS', 'JavaScript', 
    'jQuery', 'HTML / CSS', 'Node.js', 'MySQL', 'APIs', 
    'UI / UX Design', 'Git & GitHub'
  ];

  // Local state to keep track of the selected skill and show/hide the clear button
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Function to handle dynamic filtering and smooth scrolling to the portfolio section
  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    
    // 1. Dispatch a custom event that your Portfolio component can listen for
    const event = new CustomEvent('filterPortfolioSkill', { detail: skill });
    window.dispatchEvent(event);

    // 2. Smoothly scroll down to the portfolio section so the client sees the filtered results
    const portfolioSection = document.getElementById('portfolio') || document.getElementById('projects');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Function to clear the active filter and restore the full portfolio
  const handleClearFilter = () => {
    setSelectedSkill(null);
    const event = new CustomEvent('filterPortfolioSkill', { detail: null });
    window.dispatchEvent(event);
  };

  return (
    <section id="about" className="relative py-20 bg-[#fafafa] overflow-hidden border-t border-b border-zinc-100">
      {/* Injecting custom keyframes for the 3D floating effect */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-orbit {
          0% {
            transform: rotate(0deg) translateY(var(--orbit-radius, 120px)) rotate(0deg) scale(0.9);
            z-index: 1;
          }
          25% {
            z-index: 5;
            transform: rotate(90deg) translateY(var(--orbit-radius, 120px)) rotate(-90deg) scale(0.95);
          }
          50% {
            transform: rotate(180deg) translateY(var(--orbit-radius, 120px)) rotate(-180deg) scale(0.9);
            z-index: 1;
          }
          75% {
            transform: rotate(270deg) translateY(var(--orbit-radius, 120px)) rotate(-270deg) scale(0.7);
            z-index: 1;
          }
          100% {
            transform: rotate(360deg) translateY(var(--orbit-radius, 120px)) rotate(-360deg) scale(0.9);
            z-index: 1;
          }
        }
        .orbiting-skill {
          animation: float-orbit var(--orbit-duration, 20s) linear infinite;
        }
        .orbiting-skill:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Dynamic Background Blurs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#4f39f6]/10 via-[#60a5fa]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-gradient-to-br from-[#ffed4a]/5 via-[#60a5fa]/10 to-[#4f39f6]/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle modern background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Column with Orbiting Skills Behind - order-1 on mobile, order-2 on desktop */}
          <div className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out order-1 md:order-2 relative flex items-center justify-center min-h-[450px] md:min-h-[500px]">
            <div className="absolute inset-0 bg-[#4f39f6]/10 rounded-[2rem] blur-2xl pointer-events-none"></div>
            
            {/* Center Portrait Image - Styled to stay on top (z-30) */}
            <div className="w-full aspect-square max-w-sm mx-auto relative z-30 pointer-events-auto">
              <img className="w-full h-full object-cover block" src="./my_image.png" alt="Saikat Patra Portfolio Portrait" loading="lazy" />
              
              {/* Floating Badge (Full Stack Developer Card) */}
              <div className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 w-[85%] sm:w-[80%] bg-white rounded-2xl p-4 shadow-xl border border-zinc-100 flex items-center gap-4 z-40">
                <div className="w-10 h-10 rounded-xl bg-[#f3effe] flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-[#8b5cf6]" />
                </div>
                <div className="text-left">
                  <h4 className="font-sans font-bold text-[14px] sm:text-[16px] text-zinc-900 leading-tight">Full Stack Developer</h4>
                  <p className="font-sans text-[11px] sm:text-[12px] text-zinc-400 font-medium">7 Years+ Experience</p>
                </div>
              </div>
            </div>

            {/* Orbiting Skills Container - Placed behind the image (z-10) */}
            <div className="absolute inset-0 pointer-events-none z-10" style={{ perspective: '1000px' }}>
              {skills.map((skill, index) => {
                const orbitRadius = 150 + (index % 3) * 35; // 140px, 175px, 210px ring depths
                const duration = 18 + (index % 4) * 4; // 18s to 30s speeds
                const delay = -(index * (duration / skills.length)); // Spread starting positions evenly
                const isSelected = selectedSkill === skill;

                return (
                  <button
                    key={skill}
                    onClick={() => handleSkillClick(skill)}
                    title={`Click to view ${skill} projects`}
                    className={`orbiting-skill pointer-events-auto absolute left-1/2 top-1/2 -ml-12 -mt-4 cursor-pointer select-none text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-xl border scale-110 shadow-lg transition-all duration-300 ${
                      isSelected 
                        ? 'bg-[#4f39f6] text-white border-[#4f39f6]' 
                        : 'bg-white border-[#4f39f6]/20 text-[#4f39f6] hover:border-[#4f39f6] hover:bg-[#4f39f6] hover:text-white'
                    }`}
                    style={{
                      '--orbit-radius': `${orbitRadius}px`,
                      '--orbit-duration': `${duration}s`,
                      animationDelay: `${delay}s`,
                    }}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Left Text/Bio Column - order-2 on mobile, order-1 on desktop */}
          <div className="order-2 md:order-1 text-left">
            <p className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out text-xs font-bold text-[#4f39f6] tracking-widest uppercase mb-3">Background</p>
            <h2 className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-75 font-sans font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-6 bg-gradient-to-tr from-[#4f39f6] via-[#38bdf8] to-[#94a3b8] bg-clip-text text-transparent">
              A bit about<br/>who I am
            </h2>
            
            <p className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-150 text-zinc-600 font-normal text-base leading-relaxed mb-4">
              With over <strong>7 years in tech</strong>, I've learned that exceptional software requires both flawless user interfaces and unstoppable backend architecture. My mission is to use my unique dual-expertise in <strong>UI/UX Design</strong> and <strong>Full-Stack Development</strong> to build digital systems that convert complex administrative problems into seamless, high-performance engines for your business.
            </p>
            
            <p className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-200 text-zinc-500 font-light leading-relaxed mb-6">
              Whether optimizing automated workflows, designing bespoke administrative applications, or engineering robust APIs, I focus strictly on speed, security, and measurable conversion metrics. I don't just write code; I build tools engineered to protect your operational efficiency and grow your bottom line.
            </p>

            {/* Filter Action Controls */}
            <div className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-250 flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                <Layers className="w-4 h-4 text-[#4f39f6]" />
                <span>
                  {selectedSkill ? (
                    <>Filtering by: <span className="text-[#4f39f6] lowercase font-bold">{selectedSkill}</span></>
                  ) : (
                    "Click a skill to instantly filter my portfolio:"
                  )}
                </span>
              </div>
              
              {selectedSkill && (
                <button
                  onClick={handleClearFilter}
                  className="flex items-center gap-1 text-xs font-bold text-red-500 hover:text-red-700 transition-colors duration-200"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Clear Filter</span>
                </button>
              )}
            </div>

            {/* Core Skills Display Layout Under Description */}
            <div className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-300 flex flex-wrap gap-2.5 max-w-xl">
              {skills.map((skill) => {
                const isSelected = selectedSkill === skill;
                return (
                  <button 
                    key={`list-${skill}`} 
                    onClick={() => handleSkillClick(skill)}
                    className={`text-xs font-medium px-3 py-1.5 rounded-xl shadow-sm transition-all duration-200 cursor-pointer border ${
                      isSelected 
                        ? 'bg-[#4f39f6] text-white border-[#4f39f6]' 
                        : 'bg-white border-zinc-200 text-zinc-700 hover:border-[#4f39f6] hover:text-[#4f39f6] hover:bg-[#4f39f6]/5'
                    }`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}