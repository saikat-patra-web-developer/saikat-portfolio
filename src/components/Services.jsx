import React from 'react';

export default function Services() {
  // Services organized logically by core business needs instead of loose technologies
  const serviceGroups = [
    {
      groupTitle: "Custom Applications & Platforms",
      groupSubtitle: "Scalable software engineered to automate your operations and drive revenue.",
      items: [
        {
          title: "SaaS & Product Development",
          description: "Turn your software idea into a recurring revenue engine. I build production-ready cloud platforms with secure multi-tenant architectures, intuitive user dashboards, and automated subscription billing.",
          icon: <i className="bi bi-layers" style={{ fontSize: '1.25rem' }}></i>,
          tag: "SaaS",
          isPopular: true,
          projectLink: "#portfolio"
        },
        {
          title: "Custom CRM & Admin Panels",
          description: "Eliminate operational bottlenecks. Custom-built workflows, interactive internal management hubs, and tailored administrative portals engineered specifically to map to your existing business rules.",
          icon: <i className="bi bi-cpu" style={{ fontSize: '1.25rem' }}></i>,
          tag: "Operations",
          isPopular: true,
          projectLink: "#portfolio"
        },
        {
          title: "E-commerce Engineering",
          description: "Maximize digital checkout conversions. High-performance storefronts featuring fluid user journeys, optimized catalog systems, and secure global payment integrations that turn browsers into buyers.",
          icon: <i className="bi bi-bag" style={{ fontSize: '1.25rem' }}></i>,
          tag: "E-com",
          isPopular: true,
          projectLink: "#portfolio"
        }
      ]
    },
    {
      groupTitle: "High-Performance Integrations",
      groupSubtitle: "Connecting systems and leveraging intelligence to maximize efficiency.",
      items: [
        {
          title: "API & Workflow Automation",
          description: "Streamline workflows, eradicate manual data entry, and unify your fragmented business applications by connecting your internal systems with external platforms securely.",
          icon: <i className="bi bi-link-45deg" style={{ fontSize: '1.25rem' }}></i>,
          tag: "Integration",
          isPopular: false,
          projectLink: null
        },
        {
          title: "AI Integration & Automation",
          description: "Inject intelligent capabilities straight into your software stack. Deploy tailored internal search tools, context-aware AI assistants, and smart data processing models that save hours of human labor.",
          icon: <i className="bi bi-cpu-fill" style={{ fontSize: '1.25rem' }}></i>,
          tag: "AI & Data",
          isPopular: false,
          projectLink: null
        },
        {
          title: "Mobile App Development",
          description: "Expand your market reach onto customer home screens. Build fluid, reliable cross-platform mobile apps for iOS and Android optimized for user accounts, scheduling, and on-the-go utility.",
          icon: <i className="bi bi-phone" style={{ fontSize: '1.25rem' }}></i>,
          tag: "Mobile",
          isPopular: false,
          projectLink: null
        }
      ]
    },
    {
      groupTitle: "Digital Frontends & Growth",
      groupSubtitle: "Ultra-fast, beautifully designed web interfaces optimized to capture leads.",
      items: [
        {
          title: "Growth-Driven Web Development",
          description: "Transform your first impression. Fast, secure, and fully responsive web experiences custom-designed to tell your story, capture high-intent leads, and convert traffic seamlessly.",
          icon: <i className="bi bi-globe" style={{ fontSize: '1.25rem' }}></i>,
          tag: "Websites",
          isPopular: false,
          projectLink: null
        },
        {
          title: "Interactive User Interfaces",
          description: "Deliver smooth, lightning-fast application dynamics. Utilizing reusable modern frontend systems to construct lightning-quick interfaces that keep users deeply engaged.",
          icon: <i className="bi bi-filetype-jsx" style={{ fontSize: '1.25rem' }}></i>,
          tag: "Frontend",
          isPopular: false,
          projectLink: null
        },
        {
          title: "SEO-Optimized Platforms",
          description: "Outrank your competition out of the box. Deploying server-rendered architectures that deliver blazing speed performance metrics and structural layouts Google algorithms favor.",
          icon: <i className="bi bi-boxes" style={{ fontSize: '1.25rem' }}></i>,
          tag: "Fullstack",
          isPopular: false,
          projectLink: null
        }
      ]
    },
    {
      groupTitle: "Infrastructure & Continuous Support",
      groupSubtitle: "Keeping your business operations secure, online, and completely stress-free.",
      items: [
        {
          title: "Managed Cloud & DevOps",
          description: "Rest easy knowing your critical systems are safe. Architecting secure, production-grade cloud environments featuring continuous monitoring, automated snapshots, and heavy-duty SSL protection.",
          icon: <i className="bi bi-cloud-lightning" style={{ fontSize: '1.25rem' }}></i>,
          tag: "DevOps",
          isPopular: false,
          projectLink: null
        },
        {
          title: "Proactive Site Maintenance",
          description: "Protect your software investment. Ongoing system audits, targeted bug patches, critical platform upgrades, and immediate fire-fighting support to keep your business operating continuously.",
          icon: <i className="bi bi-wrench-adjustable" style={{ fontSize: '1.25rem' }}></i>,
          tag: "Management",
          isPopular: false,
          projectLink: null
        }
      ]
    }
  ];

  const itemGradients = [
    "rgba(79, 57, 246, 0.12), rgba(139, 92, 246, 0.04), transparent",
    "rgba(59, 130, 246, 0.12), rgba(6, 182, 212, 0.04), transparent",
    "rgba(16, 185, 129, 0.12), rgba(20, 184, 166, 0.04), transparent",
    "rgba(139, 92, 246, 0.12), rgba(217, 70, 239, 0.04), transparent"
  ];

  return (
    <section id="services" className="relative py-20 bg-[#fafafa] overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      {/* Dynamic Background Blurs */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-tr from-[#4f39f6]/10 via-[#60a5fa]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-br from-[#ffed4a]/5 via-[#60a5fa]/10 to-[#4f39f6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#4f39f6] mb-4">
              Solutions
            </p>
            <h2 className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-75 font-sans font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-2 bg-gradient-to-tr from-[#4f39f6] via-[#38bdf8] to-[#94a3b8] bg-clip-text text-transparent !opacity-100 !translate-y-0">
              Expertise & Solutions
            </h2>
            <p className="text-sm text-zinc-500 max-w-xl font-light">
              I deliver <span className="text-[#4f39f6] font-bold">high-impact</span> business solutions engineered natively to optimize workflows, scale infrastructure, and help your enterprise <span className="bg-gradient-to-r from-[#4f39f6] to-[#60a5fa] bg-clip-text text-transparent font-extrabold tracking-tight">grow predictably.</span>
            </p>
          </div>
        </div>

        {/* Grouped Service Display */}
        <div className="space-y-16 md:space-y-20">
          {serviceGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-6 md:space-y-8">
              {/* Group Title Area */}
              <div className="border-l-4 border-[#4f39f6] pl-4 max-w-xl">
                <h3 className="text-lg md:text-2xl font-black text-zinc-900 tracking-tight">{group.groupTitle}</h3>
                <p className="text-xs md:text-sm text-zinc-500 mt-1">{group.groupSubtitle}</p>
              </div>

              {/* Mobile-First Grid System */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {group.items.map((service, index) => {
                  const gradientColors = itemGradients[(index + groupIndex) % itemGradients.length];

                  return (
                    <div
                      key={index}
                      className="opacity-0 animate-fade-in-up h-full"
                      style={{ 
                        animationDelay: `${(index % 3) * 100}ms`,
                        perspective: '1000px'
                      }}
                    >
                      <article 
                        onMouseMove={(e) => {
                          // Only execute 3D tilt mechanics on desktop screens to prevent mobile scroll stuttering
                          if (window.innerWidth < 768) return;
                          const card = e.currentTarget;
                          const box = card.getBoundingClientRect();
                          const x = e.clientX - box.left - box.width / 2;
                          const y = e.clientY - box.top - box.height / 2;
                          const rotateX = -(y / (box.height / 2)) * 10; 
                          const rotateY = (x / (box.width / 2)) * 10;
                          
                          card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                          card.style.transition = 'transform 0.08s ease-out';
                        }}
                        onMouseLeave={(e) => {
                          const card = e.currentTarget;
                          card.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                          card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
                        }}
                        className={`h-full bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border relative flex flex-col justify-between overflow-hidden transition-all duration-300 ease-out hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-indigo-50/50 hover:shadow-2xl ${
                          service.isPopular 
                            ? 'border-[#4f39f6]/40 shadow-xl shadow-indigo-500/10 ring-1 ring-[#4f39f6]/20' 
                            : 'border-[#60a5fa]/20 shadow-lg shadow-zinc-500/5 hover:border-blue-400'
                        }`}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        {/* Unique Glow Layer */}
                        <div 
                          className="absolute top-0 right-0 w-36 h-36 rounded-full blur-xl pointer-events-none" 
                          style={{ 
                            backgroundImage: `radial-gradient(circle at top right, ${gradientColors})`,
                            transform: 'translateZ(15px)'
                          }}
                        />
                        
                        <div style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }} className="flex flex-col h-full justify-between">
                          <div>
                            {/* Upper Badge & Icon Row */}
                            <div className="flex items-center justify-between mb-6">
                              <div className="w-11 h-11 relative flex items-center justify-center text-white scale-110 drop-shadow-[0_8px_16px_rgba(79,57,246,0.25)]">
                                <div className={`absolute inset-0 rounded-[30%_70%_70%_30%_/_50%_40%_60%_50%] animate-[spin_12s_linear_infinite] bg-gradient-to-tr ${
                                  service.isPopular ? 'from-[#4f39f6] via-[#8b5cf6] to-[#ffed4a]' : 'from-[#4f39f6] via-[#60a5fa] to-[#cbd5e1]'
                                }`}></div>
                                <div className="relative z-10 flex items-center justify-center">
                                  {service.icon}
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                {service.isPopular && (
                                  <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm">
                                    In Demand
                                  </span>
                                )}
                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                                  service.isPopular ? 'bg-[#4f39f6] text-white' : 'bg-[#4f39f6]/10 text-[#4f39f6]'
                                }`}>
                                  {service.tag}
                                </span>
                              </div>
                            </div>

                            {/* Service Title */}
                            <h4 className="font-sans font-extrabold text-[18px] md:text-[19px] text-zinc-900 mb-3 tracking-tight">
                              {service.title}
                            </h4>

                            {/* Service Description */}
                            <p className="text-sm text-zinc-600 leading-relaxed font-normal mb-6">
                              {service.description}
                            </p>
                          </div>

                          {/* Related Project Inline Link Integration for High Ticket Items */}
                          {service.projectLink && (
                            <div className="pt-4 border-t border-zinc-100 mt-auto flex items-center justify-between">
                              <span className="text-xs text-zinc-400 font-medium">Proven execution</span>
                            </div>
                          )}
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}