import React, { useState } from 'react';

export default function Workflow() {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    // Left Column Steps
    {
      number: '1',
      title: 'Free Consultation',
      description: 'We dive deep into your business goals, target audience, and system requirements to map out the perfect digital architecture.',
      highlight: 'Understand objectives & scope',
      side: 'left',
      icon: (
        <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: '2',
      title: 'Planning & Strategy',
      description: 'Crafting detailed wireframes, user journeys, and project roadmaps to ensure alignment before code is written.',
      highlight: 'Interactive wireframes & flowcharts',
      side: 'left',
      icon: (
        <svg className="w-6 h-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      number: '3',
      title: 'Development',
      description: 'Our team builds your high-performing web application using modern, scalable tech stacks with clean, optimized code.',
      highlight: 'Production-ready architecture',
      side: 'left',
      icon: (
        <svg className="w-6 h-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    // Right Column Steps
    {
      number: '4',
      title: 'Rigorous Testing',
      description: 'End-to-end quality assurance testing across all devices and edge cases to guarantee zero glitches at launch.',
      highlight: 'Cross-device & automated QA',
      side: 'right',
      icon: (
        <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      number: '5',
      title: 'Launch & Deploy',
      description: 'Seamless deployment to production servers with optimized performance metrics, ready for your users.',
      highlight: 'CI/CD pipeline & live deployment',
      side: 'right',
      icon: (
        <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )
    },
    {
      number: '6',
      title: 'Ongoing Support',
      description: 'Continuous monitoring, updates, and optimization to keep your system scaling smoothly alongside your business.',
      highlight: 'Performance updates & monitoring',
      side: 'right',
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
  ];

  const leftSteps = steps.filter(s => s.side === 'left');
  const rightSteps = steps.filter(s => s.side === 'right');

  return (
    <section id="workflow" className="relative h-auto bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#4f39f6] bg-indigo-50 mb-4">
              Our Process
            </p>
            <h2 className="reveal-trigger font-sans font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-4 bg-gradient-to-tr from-[#4f39f6] via-[#38bdf8] to-[#94a3b8] bg-clip-text text-transparent">
              How We Build Your System
            </h2>
            <p className="text-base text-zinc-600 max-w-2xl font-normal leading-relaxed">
              From initial architecture strategy to final live deployment, I follow a <span className="text-[#4f39f6] font-bold">structured, agile development workflow</span> engineered to guarantee technical precision.
            </p>
          </div>
        </div>

        {/* Desktop Hub & Spoke Grid View */}
        <div className="hidden lg:grid grid-cols-12 gap-4 items-center relative min-h-[600px]">
          
          {/* Background Circuit Vector Lines */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full text-zinc-200" viewBox="0 0 1200 600" fill="none" stroke="currentColor" strokeWidth="2">
              {/* Left Side Circuits */}
              <path d="M 280 100 L 450 100 L 450 300 L 520 300" strokeDasharray="4 4" />
              <path d="M 280 300 L 520 300" />
              <path d="M 280 500 L 450 500 L 450 300 L 520 300" strokeDasharray="4 4" />
              
              {/* Right Side Circuits */}
              <path d="M 920 100 L 750 100 L 750 300 L 680 300" strokeDasharray="4 4" />
              <path d="M 920 300 L 680 300" />
              <path d="M 920 500 L 750 500 L 750 300 L 680 300" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* LEFT COLUMN: Nodes 1, 2, 3 */}
          <div className="col-span-4 space-y-16 z-10">
            {leftSteps.map((step) => {
              const globalIdx = steps.indexOf(step);
              const isActive = globalIdx === activeIndex;
              return (
                <div 
                  key={step.number} 
                  onMouseEnter={() => setActiveIndex(globalIdx)}
                  className="flex items-center justify-end gap-6 group cursor-pointer"
                >
                  <div className="text-right max-w-xs transition-all duration-300 transform group-hover:-translate-x-1">
                    <h3 className="font-bold text-zinc-900 text-lg mb-1">{step.title}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2">{step.description}</p>
                  </div>
                  <div className={`relative flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 flex items-center justify-center transition-all duration-500 ${
                    isActive ? 'border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.6)] scale-110' : 'border-zinc-100 shadow-sm'
                  }`}>
                    {step.icon}
                    <span className="absolute -top-1.5 -left-1.5 bg-zinc-900 text-white text-xs font-bold font-mono w-6 h-6 rounded-full flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CENTER ARCHITECTURE HUB WITH YOUR LOGO DESIGN */}
          <div className="col-span-4 flex justify-center items-center z-10">
            <div className="relative w-48 h-48 rounded-full bg-gradient-to-b from-slate-50 to-white shadow-xl border border-zinc-100 flex items-center justify-center group">
              <div className="absolute inset-0 rounded-full bg-sky-100/30 blur-xl group-hover:bg-indigo-100/40 transition-all duration-700" />
              
              {/* Integrated Core Animated Brand Logo Block - Removed Square Box */}
              <div className="flex items-center scale-[2.2]">
                <div className="w-9 h-9 relative z-10 transition-transform duration-200 active:scale-95 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-1 bg-gradient-to-tr from-[#4f39f6] via-[#60a5fa] to-[#cbd5e1] rounded-[30%_70%_70%_30%_/_50%_40%_60%_50%] animate-[spin_20s_linear_infinite]"></div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Nodes 4, 5, 6 */}
          <div className="col-span-4 space-y-16 z-10">
            {rightSteps.map((step) => {
              const globalIdx = steps.indexOf(step);
              const isActive = globalIdx === activeIndex;
              return (
                <div 
                  key={step.number} 
                  onMouseEnter={() => setActiveIndex(globalIdx)}
                  className="flex items-center justify-start gap-6 group cursor-pointer"
                >
                  <div className={`relative flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 flex items-center justify-center transition-all duration-500 ${
                    isActive ? 'border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.6)] scale-110' : 'border-zinc-100 shadow-sm'
                  }`}>
                    {step.icon}
                    <span className="absolute -top-1.5 -right-1.5 bg-zinc-900 text-white text-xs font-bold font-mono w-6 h-6 rounded-full flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                  <div className="text-left max-w-xs transition-all duration-300 transform group-hover:translate-x-1">
                    <h3 className="font-bold text-zinc-900 text-lg mb-1">{step.title}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Mobile View - Re-styled to display all elements cleanly on the left side */}
        <div className="lg:hidden space-y-8 mt-12 px-2">
          {steps.map((step) => {
            const globalIdx = steps.indexOf(step);
            const isActive = globalIdx === activeIndex;

            return (
              <div 
                key={step.number} 
                onClick={() => setActiveIndex(globalIdx)}
                className="flex flex-row items-center justify-start gap-5 text-left group cursor-pointer transition-all duration-300"
              >
                {/* Circle Icon and Number Badge (Locked to Left Side) */}
                <div className={`relative flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 flex items-center justify-center transition-all duration-500 ${
                  isActive ? 'border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.5)] scale-105' : 'border-zinc-200 shadow-sm'
                }`}>
                  {step.icon}
                  <span className="absolute -top-1.5 -left-1.5 bg-zinc-900 text-white text-xs font-bold font-mono w-6 h-6 rounded-full flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                {/* Text Block (Aligned Left next to Icon) */}
                <div className={`max-w-[70%] transition-all duration-300 ${
                  isActive ? 'scale-[1.02]' : 'opacity-85'
                }`}>
                  <h3 className={`font-bold text-base mb-1 transition-colors ${
                    isActive ? 'text-[#4f39f6]' : 'text-zinc-900'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-xs leading-relaxed line-clamp-3">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}