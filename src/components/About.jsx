import React, { useState } from 'react';
import { User, Layers, X, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function About() {
  const skills = [
    'React JS', 'Next.js', 'Laravel (API)', 'Symfony (API)', 
    'WordPress', 'Tailwind CSS', 'Bootstrap CSS', 'JavaScript', 
    'jQuery', 'HTML / CSS', 'Node.js', 'MySQL', 'APIs', 
    'UI / UX Design', 'Git & GitHub'
  ];

  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    const event = new CustomEvent('filterPortfolioSkill', { detail: skill });
    window.dispatchEvent(event);

    const portfolioSection = document.getElementById('portfolio') || document.getElementById('projects');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleClearFilter = () => {
    setSelectedSkill(null);
    const event = new CustomEvent('filterPortfolioSkill', { detail: null });
    window.dispatchEvent(event);
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="relative py-20 bg-[#fafafa] overflow-hidden border-t border-b border-zinc-100">
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

      {/* Background Blurs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#4f39f6]/10 via-[#60a5fa]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-gradient-to-br from-[#ffed4a]/5 via-[#60a5fa]/10 to-[#4f39f6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image & Interactive Orbit Column */}
          <div className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out order-1 md:order-2 relative flex items-center justify-center min-h-[450px] md:min-h-[500px]">
            <div className="absolute inset-0 bg-[#4f39f6]/10 rounded-[2rem] blur-2xl pointer-events-none"></div>
            
            <div className="w-full aspect-square max-w-sm mx-auto relative z-30 pointer-events-auto">
              <img className="w-full h-full object-cover block rounded-2xl" src="./my_image.png" alt="Saikat Patra Portfolio Portrait" loading="lazy" />
              
              {/* Trust Badge */}
              <div className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 w-[85%] sm:w-[80%] bg-white rounded-2xl p-4 shadow-xl border border-zinc-100 flex items-center gap-4 z-40">
                <div className="w-10 h-10 rounded-xl bg-[#f3effe] flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-[#8b5cf6]" />
                </div>
                <div className="text-left">
                  <h4 className="font-sans font-bold text-[14px] sm:text-[16px] text-zinc-900 leading-tight">Full Stack Architect</h4>
                  <p className="font-sans text-[11px] sm:text-[12px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                    Available for Projects
                  </p>
                </div>
              </div>
            </div>

            {/* Behind the Image Orbiting Tech Stack */}
            <div className="absolute inset-0 pointer-events-none z-10" style={{ perspective: '1000px' }}>
              {skills.map((skill, index) => {
                const orbitRadius = 155 + (index % 3) * 35;
                const duration = 22 + (index % 4) * 4;
                const delay = -(index * (duration / skills.length));
                const isSelected = selectedSkill === skill;

                return (
                  <button
                    key={skill}
                    onClick={() => handleSkillClick(skill)}
                    title={`Click to see my ${skill} case studies`}
                    className={`orbiting-skill pointer-events-auto absolute left-1/2 top-1/2 -ml-12 -mt-4 cursor-pointer select-none text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-xl border scale-110 shadow-lg transition-all duration-300 ${
                      isSelected 
                        ? 'bg-[#4f39f6] text-white border-[#4f39f6]' 
                        : 'bg-white border-[#4f39f6]/10 text-zinc-700 hover:border-[#4f39f6] hover:bg-[#4f39f6] hover:text-white'
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

          {/* Business Value & Bio Column */}
          <div className="order-2 md:order-1 text-left">
            <p className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out text-xs font-bold text-[#4f39f6] tracking-widest uppercase mb-3">
              Engineering Value & ROI
            </p>
            <h2 className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-75 font-sans font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-6 bg-gradient-to-tr from-[#4f39f6] via-[#38bdf8] to-[#60a5fa] bg-clip-text text-transparent">
              Turning complex business logic into high-performing web systems.
            </h2>
            
            <p className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-150 text-zinc-600 font-normal text-base leading-relaxed mb-4">
              With over <strong>7 years of enterprise-level engineering experience</strong>, I specialize in translating manual business operations into highly automated digital architecture. My core objective is to design custom administrative systems, bespoke CRMs, and streamlined quote-to-invoice portals that directly optimize your business workflows, cut operational overhead, and accelerate conversion metrics.
            </p>
            
            <p className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-200 text-zinc-500 font-light leading-relaxed mb-6">
              I bridges the gap between clean UI/UX and uncompromisingly secure, rapid-deployment backend engines. Whether managing heavy API integrations, custom database architectures, or scalable frontends, I engineer every system with clear performance metrics in mind. 
            </p>

            {/* Strategic Value Proposition Bullets */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8 text-sm text-zinc-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Custom Built CRMs & Admin Portals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Automated Operational Workflows</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>High-Speed API Integrations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Clean UI/UX Built to Convert</span>
              </div>
            </div>

            {/* Direct Conversion CTA Button */}
            <div className="mb-10">
              <button 
                onClick={handleContactClick}
                className="group flex items-center gap-2 bg-[#4f39f6] hover:bg-[#3b27d4] text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer"
              >
                <span>Let's Build Your System</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Portfolio Filter Action Controls */}
            <div className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-250 flex flex-wrap items-center justify-between gap-3 mb-4 border-t border-zinc-200/60 pt-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                <Layers className="w-4 h-4 text-[#4f39f6]" />
                <span>
                  {selectedSkill ? (
                    <>Showing work for: <span className="text-[#4f39f6] lowercase font-bold">{selectedSkill}</span></>
                  ) : (
                    "Select a stack below to instantly filter my live case studies:"
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