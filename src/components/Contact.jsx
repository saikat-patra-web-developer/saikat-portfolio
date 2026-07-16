import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-[#fafafa] overflow-hidden border-t border-b border-zinc-100">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#4f39f6]/10 via-[#60a5fa]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-gradient-to-br from-[#ffed4a]/5 via-[#60a5fa]/10 to-[#4f39f6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-950 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden border border-zinc-900 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#4f39f6]/15 to-transparent rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#4f39f6]/10 to-transparent rounded-full blur-2xl pointer-events-none" aria-hidden="true"></div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Content Column */}
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

            {/* Right Links Column */}
            <div className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-200 lg:col-span-7 grid sm:grid-cols-2 gap-4 w-full">
              
              {/* Personal Email */}
              <a href="mailto:saikatpatra300@gmail.com" className="group flex flex-col justify-between p-5 bg-zinc-900/40 border border-zinc-850 rounded-2xl hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 min-h-[140px]">
                <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl group-hover:bg-[#4f39f6] group-hover:text-white transition-colors duration-300 text-zinc-400 text-lg">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Personal Email</span>
                  <span className="block text-sm font-medium text-zinc-300 group-hover:text-white transition-colors truncate">saikatpatra300@gmail.com</span>
                </div>
              </a>

              {/* Office Email */}
              <a href="mailto:saikatpatraoffice@gmail.com" className="group flex flex-col justify-between p-5 bg-zinc-900/40 border border-zinc-850 rounded-2xl hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 min-h-[140px]">
                <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl group-hover:bg-[#4f39f6] group-hover:text-white transition-colors duration-300 text-zinc-400 text-lg">
                  <i className="bi bi-envelope-at"></i>
                </div>
                <div>
                  <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Office Email</span>
                  <span className="block text-sm font-medium text-zinc-300 group-hover:text-white transition-colors truncate">saikatpatraoffice@gmail.com</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/saikat-patra-web-developer" rel="noopener noreferrer" target="_blank" className="group flex flex-col justify-between p-5 bg-zinc-900/40 border border-zinc-850 rounded-2xl hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 min-h-[140px]">
                <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl group-hover:bg-[#4f39f6] group-hover:text-white transition-colors duration-300 text-zinc-400 text-lg">
                  <i className="bi bi-linkedin"></i>
                </div>
                <div>
                  <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Connect</span>
                  <span className="block text-sm font-medium text-zinc-300 group-hover:text-white transition-colors truncate">saikat-patra-web-developer</span>
                </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/saikat-patra-web-developer" rel="noopener noreferrer" target="_blank" className="group flex flex-col justify-between p-5 bg-zinc-900/40 border border-zinc-850 rounded-2xl hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 min-h-[140px]">
                <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl group-hover:bg-[#4f39f6] group-hover:text-white transition-colors duration-300 text-zinc-400 text-lg">
                  <i className="bi bi-github"></i>
                </div>
                <div>
                  <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Repositories</span>
                  <span className="block text-sm font-medium text-zinc-300 group-hover:text-white transition-colors truncate">saikat-patra-web-developer</span>
                </div>
              </a>

              {/* WhatsApp Primary */}
              <a href="https://wa.me/919038909382" rel="noopener noreferrer" target="_blank" className="group flex flex-col justify-between p-5 bg-zinc-900/40 border border-zinc-850 rounded-2xl hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 min-h-[140px]">
                <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl group-hover:bg-[#4f39f6] group-hover:text-white transition-colors duration-300 text-zinc-400 text-lg">
                  <i className="bi bi-whatsapp"></i>
                </div>
                <div>
                  <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Primary Chat</span>
                  <span className="block text-sm font-medium text-zinc-300 group-hover:text-white transition-colors truncate">+91 90389 09382</span>
                </div>
              </a>

              {/* WhatsApp Secondary */}
              <a href="https://wa.me/918902273136" rel="noopener noreferrer" target="_blank" className="group flex flex-col justify-between p-5 bg-zinc-900/40 border border-zinc-850 rounded-2xl hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 min-h-[140px]">
                <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl group-hover:bg-[#4f39f6] group-hover:text-white transition-colors duration-300 text-zinc-400 text-lg">
                  <i className="bi bi-whatsapp"></i>
                </div>
                <div>
                  <span className="block text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Secondary Chat</span>
                  <span className="block text-sm font-medium text-zinc-300 group-hover:text-white transition-colors truncate">+91 89022 73136</span>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}