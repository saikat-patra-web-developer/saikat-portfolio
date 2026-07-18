import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Workflow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHolding, setIsHolding] = useState(false);

  const steps = [
    { number: '01', title: 'Free Consultation', tagline: 'Architecture Discovery', description: 'We dive deep into your business goals, target audience, and system requirements to map out the perfect digital architecture.', side: 'left', icon: 'bi-chat-left-dots' },
    { number: '02', title: 'Planning & Strategy', tagline: 'Wireframes & Timelines', description: 'Crafting detailed wireframes, user journeys, and project roadmaps to ensure exact alignment before a single line of code is written.', side: 'left', icon: 'bi-map' },
    { number: '03', title: 'Development', tagline: 'Production Codebase', description: 'Our team builds your high-performing web application using modern, scalable tech stacks with highly optimized, clean code patterns.', side: 'left', icon: 'bi-code-slash' },
    { number: '04', title: 'Rigorous Testing', tagline: 'Quality Assurance', description: 'End-to-end quality assurance testing across all target devices and intense edge cases to guarantee zero glitches at public launch.', side: 'right', icon: 'bi-shield-check' },
    { number: '05', title: 'Launch & Deploy', tagline: 'Live Production', description: 'Seamless deployment to production servers with optimized cloud delivery metrics, fully ready for scaling to your active user base.', side: 'right', icon: 'bi-send' },
    { number: '06', title: 'Ongoing Support', tagline: 'Scale & Monitor', description: 'Continuous server monitoring, routine modern security updates, and performance optimization to keep your system scaling smoothly.', side: 'right', icon: 'bi-lightning' },
  ];

  useEffect(() => {
    if (isHolding) return;
    
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [steps.length, isHolding]);

  useEffect(() => {
    if (!isHolding) return;

    const timeout = setTimeout(() => {
      setIsHolding(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [isHolding]);

  return (
    <section id='workflow' className="relative py-20 bg-gradient-to-b from-white via-zinc-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#4f39f6] mb-4">
              My Methodology
            </p>
            <h2 className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-75 font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4 bg-gradient-to-tr from-[#4f39f6] via-[#38bdf8] to-[#94a3b8] bg-clip-text text-transparent !opacity-100 !translate-y-0">
              How We'll Build Your Project
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 max-w-2xl font-normal leading-relaxed">
              A precision engineered <span className="bg-gradient-to-r from-[#4f39f6] to-[#60a5fa] bg-clip-text text-transparent font-extrabold tracking-tight">workflow designed</span> to take your vision from initial concept to a scalable, <span className="bg-gradient-to-r from-[#4f39f6] to-[#60a5fa] bg-clip-text text-transparent font-extrabold tracking-tight">live product</span> with zero friction.
            </p>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-12 gap-8 items-center max-w-6xl mx-auto mb-16">
          <div className="col-span-4 flex-col space-y-12 pr-6">
            {steps.filter(s => s.side === 'left').map((step) => {
              const idx = steps.findIndex(s => s.number === step.number);
              const isActive = idx === activeIndex;
              const isDone = idx < activeIndex;

              return (
                <div key={step.number} className="flex items-center justify-end gap-6">
                  <div className="text-right">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">
                      {step.tagline}
                    </span>
                    <h3 className={`font-semibold text-lg transition-colors duration-500 ${isDone ? 'text-emerald-600' : isActive ? 'text-slate-900' : 'text-slate-400'}`}>
                      {step.title}
                    </h3>
                  </div>
                  <motion.div 
                    animate={{ scale: isActive ? 1.1 : 1 }} 
                    className={`relative w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 z-10 ${
                      isDone ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-200/50' 
                      : isActive ? 'bg-black border-black text-white shadow-xl shadow-slate-300' 
                      : 'bg-white border-slate-200 text-slate-400 shadow-sm'
                    }`}
                  >
                    <i className={`bi ${isDone ? 'bi-check-lg text-2xl' : step.icon} ${!isDone && 'text-xl'}`}></i>
                  </motion.div>
                </div>
              );
            })}
          </div>

          <div className="col-span-4 relative z-20" style={{ perspective: '1400px' }}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex} 
                initial={{ opacity: 0, rotateX: -90 }} 
                animate={{ opacity: 1, rotateX: 0 }} 
                exit={{ opacity: 0, rotateX: 90 }} 
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }} 
                className="relative w-full aspect-square max-w-[340px] mx-auto rounded-[2rem] bg-black p-10 border border-white/10 border-t-0 shadow-[0_20px_60px_-10px_rgba(14,165,233,0.4)] flex flex-col items-center justify-center text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>

                <div className="flex flex-col items-center relative z-10 w-full">
                  <span className="text-8xl font-black text-white/5 mb-6 block font-sans tracking-tighter absolute -top-8 -z-10 select-none">
                    {steps[activeIndex].number}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-6 border border-sky-500/20 text-sky-400">
                    <i className={`bi ${steps[activeIndex].icon} text-xl`}></i>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">
                    {steps[activeIndex].title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-normal px-2">
                    {steps[activeIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="col-span-4 flex-col space-y-12 pl-6">
            {steps.filter(s => s.side === 'right').map((step) => {
              const idx = steps.findIndex(s => s.number === step.number);
              const isActive = idx === activeIndex;
              const isDone = idx < activeIndex;

              return (
                <div key={step.number} className="flex items-center justify-start gap-6">
                  <motion.div 
                    animate={{ scale: isActive ? 1.1 : 1 }} 
                    className={`relative w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 z-10 ${
                      isDone ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-200/50' 
                      : isActive ? 'bg-black border-black text-white shadow-xl shadow-slate-300' 
                      : 'bg-white border-slate-200 text-slate-400 shadow-sm'
                    }`}
                  >
                    <i className={`bi ${isDone ? 'bi-check-lg text-2xl' : step.icon} ${!isDone && 'text-xl'}`}></i>
                  </motion.div>
                  <div className="text-left">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">
                      {step.tagline}
                    </span>
                    <h3 className={`font-semibold text-lg transition-colors duration-500 ${isDone ? 'text-emerald-600' : isActive ? 'text-slate-900' : 'text-slate-400'}`}>
                      {step.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:hidden mt-6 w-full max-w-sm mx-auto relative z-20">
          <div className="flex justify-between items-center mb-6 gap-1.5 sm:gap-2 bg-white p-2 sm:p-3 rounded-2xl shadow-sm border border-slate-100 overflow-x-auto no-scrollbar">
            {steps.map((step, idx) => {
              const isActive = idx === activeIndex;
              const isDone = idx < activeIndex;
              return (
                <button
                  key={step.number}
                  onClick={() => {
                    setActiveIndex(idx);
                    setIsHolding(true);
                  }}
                  className={`relative w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 outline-none ${
                    isActive 
                      ? 'bg-black text-white shadow-md scale-105' 
                      : 'bg-slate-100 text-slate-400 active:bg-slate-200'
                  }`}
                >
                  <i className={`bi ${step.icon} text-base sm:text-lg`}></i>
                  {isDone && (
                    <span className="absolute -top-1 -right-1 sm:top-0 sm:right-0 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[8px] sm:text-[10px] font-bold shadow-sm ring-2 ring-white z-30 animate-fade-in">
                      <i className="bi bi-check-lg"></i>
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div style={{ perspective: '1400px' }}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex} 
                initial={{ opacity: 0, rotateX: -90 }} 
                animate={{ opacity: 1, rotateX: 0 }} 
                exit={{ opacity: 0, rotateX: 90 }} 
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }} 
                className="relative w-full min-h-[320px] sm:aspect-square max-w-[340px] mx-auto rounded-[2rem] bg-black p-6 sm:p-10 border border-white/10 border-t-0 shadow-[0_20px_60px_-10px_rgba(14,165,233,0.4)] flex flex-col items-center justify-center text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>

                <div className="flex flex-col items-center relative z-10 w-full">
                  <span className="text-7xl sm:text-8xl font-black text-white/5 mb-4 sm:mb-6 block font-sans tracking-tighter absolute -top-6 sm:-top-8 -z-10 select-none">
                    {steps[activeIndex].number}
                  </span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-4 sm:mb-6 border border-sky-500/20 text-sky-400">
                    <i className={`bi ${steps[activeIndex].icon} text-lg sm:text-xl`}></i>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
                    {steps[activeIndex].title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal px-1 sm:px-2">
                    {steps[activeIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}