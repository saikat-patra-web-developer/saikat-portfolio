import React from 'react';

export default function Workflow() {
  const steps = [
    {
      number: '01',
      title: 'Free Consultation',
      description: 'We dive deep into your business goals, target audience, and system requirements to map out the perfect digital architecture.',
    },
    {
      number: '02',
      title: 'Planning & Strategy',
      description: 'Crafting detailed wireframes, user journeys, and project roadmaps to ensure alignment before a single line of code is written.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Our team builds your high-performing web application using modern, scalable tech stacks with clean, optimized code.',
    },
    {
      number: '04',
      title: 'Rigorous Testing',
      description: 'End-to-end quality assurance testing across all devices and edge cases to guarantee zero glitches at launch.',
    },
    {
      number: '05',
      title: 'Launch & Deploy',
      description: 'Seamless deployment to production servers with optimized performance metrics, ready for your users.',
    },
    {
      number: '06',
      title: 'Ongoing Support',
      description: 'Continuous monitoring, updates, and optimization to keep your system scaling smoothly alongside your business.',
    },
  ];

  return (
    <section id="workflow" className="py-20 bg-white">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full">
            Our Process
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-none">
            From Blueprint to Reality:<br />
            <span className="text-indigo-600 bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
              How We Build Your System
            </span>
          </h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl">
            A structured, transparent workflow engineered to minimize risk, maximize velocity, and deliver pixel-perfect results.
          </p>
        </div>

        {/* Workflow Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative bg-zinc-50 p-8 rounded-2xl border border-zinc-200/80 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-200 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-zinc-200 transition-colors duration-300 group-hover:text-indigo-100 font-mono select-none">
                    {step.number}
                  </span>
                  {/* Small decorative line/connector style indicator */}
                  <div className="h-1 w-8 rounded-full bg-zinc-200 group-hover:bg-indigo-500 transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500 group-hover:text-zinc-600 transition-colors duration-300">
                  {step.description}
                </p>
              </div>

              {/* Bottom Subtle Interactive Hint */}
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center text-xs font-medium text-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                Phase Details 
                <svg className="w-3 h-3 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}