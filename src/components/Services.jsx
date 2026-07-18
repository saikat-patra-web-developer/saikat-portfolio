import React from 'react';

export default function Services() {
  const serviceGroups = [
    {
      groupTitle: "Custom Applications & Platforms",
      groupSubtitle: "Engineered to automate your daily operations, eliminate overhead, and drive predictable revenue.",
      items: [
        {
          title: "SaaS & Product Development",
          description: "Turn your software idea into a recurring revenue engine. I build production-ready cloud platforms with secure multi-tenant architectures, intuitive user dashboards, and automated subscription billing designed to scale seamlessly.",
          icon: <i className="bi bi-layers" style={{ fontSize: '1.25rem' }}></i>,
          tag: "SaaS",
          isPopular: true,
          ctaText: "Validate Your Idea",
          projectLink: "#contact",
          metric: "Built for scale"
        },
        {
          title: "Custom CRM That Eliminates Manual Work",
          description: "Eliminate operational bottlenecks and manual spreadsheets. I build tailored administrative portals, custom booking engines, and interactive internal management hubs engineered to map perfectly to your business rules.",
          icon: <i className="bi bi-cpu" style={{ fontSize: '1.25rem' }}></i>,
          tag: "Operations",
          isPopular: true,
          ctaText: "Automate Workflows",
          projectLink: "#portfolio",
          metric: "Proven logic architectures"
        },
        {
          title: "E-commerce Engineering",
          description: "Maximize checkout conversions and stop losing customers. High-performance storefronts featuring fluid user journeys, lightning-fast catalog systems, and secure global payment integrations that turn casual browsers into buyers.",
          icon: <i className="bi bi-bag" style={{ fontSize: '1.25rem' }}></i>,
          tag: "E-com",
          isPopular: true,
          ctaText: "Maximize Conversions",
          projectLink: "#portfolio",
          metric: "Optimized checkout flows"
        }
      ]
    },
    {
      groupTitle: "High-Performance Integrations",
      groupSubtitle: "Connecting business infrastructure to multiply team efficiency and leverage intelligence.",
      items: [
        {
          title: "Connect All Your Business Tools Automatically",
          description: "Streamline communication, eradicate manual data entry, and unify fragmented business applications by securely connecting your internal CRM, payment workflows, and external third-party tools.",
          icon: <i className="bi bi-link-45deg" style={{ fontSize: '1.25rem' }}></i>,
          tag: "Integration",
          isPopular: false,
          ctaText: "Connect Systems",
          projectLink: "#contact",
          metric: "Zero manual friction"
        },
        {
          title: "AI Integration & Automation",
          description: "Inject intelligent capabilities straight into your software stack. Deploy tailored internal search tools, context-aware AI assistants, and smart data processing models that save hundreds of hours of human labor.",
          icon: <i className="bi bi-cpu-fill" style={{ fontSize: '1.25rem' }}></i>,
          tag: "AI & Data",
          isPopular: false,
          ctaText: "Deploy Smart Tools",
          projectLink: "#contact",
          metric: "Drastically reduce hours"
        },
        {
          title: "Mobile App Development",
          description: "Expand your market reach onto customer home screens. Build fluid, reliable cross-platform mobile apps for iOS and Android optimized for user accounts, real-time scheduling, and on-the-go utility.",
          icon: <i className="bi bi-phone" style={{ fontSize: '1.25rem' }}></i>,
          tag: "Mobile",
          isPopular: false,
          ctaText: "Launch Your App",
          projectLink: "#contact",
          metric: "iOS & Android ready"
        }
      ]
    },
    {
      groupTitle: "Digital Frontends & Growth",
      groupSubtitle: "Ultra-fast, beautifully designed web interfaces engineered to systematically capture high-intent leads.",
      items: [
        {
          title: "Growth-Driven Web Development",
          description: "Transform your brand's digital first impression. Fast, secure, and fully responsive web experiences custom-designed to tell your story, build immediate authority, and capture inbound client leads flawlessly.",
          icon: <i className="bi bi-globe" style={{ fontSize: '1.25rem' }}></i>,
          tag: "Websites",
          isPopular: false,
          ctaText: "Capture More Leads",
          projectLink: "#contact",
          metric: "Built to convert"
        },
        {
          title: "Interactive User Interfaces",
          description: "Deliver ultra-smooth, lightning-fast interactive dynamics. Utilizing modular, reusable frontend systems to construct modern components that maximize user retention and keep clients deeply engaged.",
          icon: <i className="bi bi-filetype-jsx" style={{ fontSize: '1.25rem' }}></i>,
          tag: "Frontend",
          isPopular: false,
          ctaText: "Upgrade UX",
          projectLink: "#contact",
          metric: "Lightning-fast performance"
        },
        {
          title: "Fast Websites Built to Rank Higher on Google",
          description: "Outrank your competition out of the box. Deploying production-grade server-rendered architectures that deliver blazing speed performance metrics and structural layouts that search engine algorithms reward.",
          icon: <i className="bi bi-boxes" style={{ fontSize: '1.25rem' }}></i>,
          tag: "Fullstack",
          isPopular: false,
          ctaText: "Dominate Search",
          projectLink: "#contact",
          metric: "Core Web Vitals optimized"
        }
      ]
    },
    {
      groupTitle: "Infrastructure & Continuous Support",
      groupSubtitle: "Keeping your business operations secure, online, and completely stress-free.",
      items: [
        {
          title: "Managed Cloud & DevOps",
          description: "Rest easy knowing your critical business operations are safe. Architecting secure, production-grade cloud environments featuring continuous monitoring, automated backups, and heavy-duty data encryption.",
          icon: <i className="bi bi-cloud-lightning" style={{ fontSize: '1.25rem' }}></i>,
          tag: "DevOps",
          isPopular: false,
          ctaText: "Secure Infrastructure",
          projectLink: "#contact",
          metric: "99.9% Uptime focus"
        },
        {
          title: "Proactive Site Maintenance",
          description: "Protect your software investment. Ongoing system performance audits, targeted bug patches, critical platform upgrades, and immediate support to keep your business operating without interruption.",
          icon: <i className="bi bi-wrench-adjustable" style={{ fontSize: '1.25rem' }}></i>,
          tag: "Management",
          isPopular: false,
          ctaText: "Protect Your Stack",
          projectLink: "#contact",
          metric: "Zero operational downtime"
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
    <section id="services" className="relative py-20 bg-zinc-50 border-t border-b border-zinc-100 overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      <div className="absolute top-0 left-1/4 w-[260px] sm:w-[300px] md:w-[500px] h-[260px] sm:h-[300px] md:h-[500px] bg-gradient-to-tr from-[#4f39f6]/10 via-[#60a5fa]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[320px] sm:w-[400px] md:w-[600px] h-[320px] sm:h-[400px] md:h-[600px] bg-gradient-to-br from-[#ffed4a]/5 via-[#60a5fa]/10 to-[#4f39f6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 md:gap-6 mb-10 sm:mb-14 md:mb-16">
          <div>
            <p className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#4f39f6] mb-3 sm:mb-4">
              Capabilities
            </p>
            <h2 className="reveal-trigger opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out delay-75 font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4 bg-gradient-to-tr from-[#4f39f6] via-[#38bdf8] to-[#94a3b8] bg-clip-text text-transparent !opacity-100 !translate-y-0">
              Engineered for Business Growth
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 max-w-2xl font-normal leading-relaxed">
              I deliver <span className="text-[#4f39f6] font-bold">high-impact digital infrastructure</span> designed natively to optimize manual workflows, scale securely, and turn technical challenges into measurable <span className="bg-gradient-to-r from-[#4f39f6] to-[#60a5fa] bg-clip-text text-transparent font-extrabold tracking-tight">business revenue.</span>
            </p>
          </div>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {serviceGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-5 sm:space-y-6 md:space-y-8">
              
              <div className="border-l-4 border-[#4f39f6] pl-3 sm:pl-4 max-w-2xl">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-zinc-900 tracking-tight">{group.groupTitle}</h3>
                <p className="text-xs sm:text-sm text-zinc-500 mt-1 font-normal">{group.groupSubtitle}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
                          if (window.innerWidth < 768) return;
                          const card = e.currentTarget;
                          const box = card.getBoundingClientRect();
                          const x = e.clientX - box.left - box.width / 2;
                          const y = e.clientY - box.top - box.height / 2;
                          const rotateX = -(y / (box.height / 2)) * 6; 
                          const rotateY = (x / (box.width / 2)) * 6;
                          
                          card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
                          card.style.transition = 'transform 0.08s ease-out';
                        }}
                        onMouseLeave={(e) => {
                          const card = e.currentTarget;
                          card.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                          card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
                        }}
                        className={`h-full bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border relative flex flex-col justify-between overflow-hidden transition-all duration-300 ease-out hover:bg-gradient-to-br hover:from-blue-50/30 hover:to-indigo-50/30 hover:shadow-2xl ${
                          service.isPopular 
                            ? 'border-[#4f39f6]/40 shadow-xl shadow-indigo-500/5 ring-1 ring-[#4f39f6]/10' 
                            : 'border-[#60a5fa]/20 shadow-lg shadow-zinc-500/5 hover:border-blue-400/60'
                        }`}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        
                        <div 
                          className="absolute top-0 right-0 w-28 h-28 sm:w-36 sm:h-36 rounded-full blur-xl pointer-events-none" 
                          style={{ 
                            backgroundImage: `radial-gradient(circle at top right, ${gradientColors})`,
                            transform: 'translateZ(15px)'
                          }}
                        />
                        
                        <div style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }} className="flex flex-col h-full justify-between">
                          <div>
                            
                            <div className="flex items-start sm:items-center justify-between gap-4 mb-5 sm:mb-6">
                              <div className="w-10 h-10 sm:w-11 sm:h-11 relative flex items-center justify-center text-white scale-105 sm:scale-110 flex-shrink-0 drop-shadow-[0_6px_12px_rgba(79,57,246,0.25)]">
                                <div className={`absolute inset-0 rounded-[30%_70%_70%_30%_/_50%_40%_60%_50%] animate-[spin_12s_linear_infinite] bg-gradient-to-tr ${
                                  service.isPopular ? 'from-[#4f39f6] via-[#8b5cf6] to-[#ffed4a]' : 'from-[#4f39f6] via-[#60a5fa] to-[#cbd5e1]'
                                }`}></div>
                                <div className="relative z-10 flex items-center justify-center">
                                  {service.icon}
                                </div>
                              </div>
                              
                              <div className="flex flex-wrap items-center justify-end gap-1.5 sm:gap-2">
                                {service.isPopular && (
                                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-1.5 sm:px-2 py-0.5 rounded bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm whitespace-nowrap">
                                    High ROI
                                  </span>
                                )}
                                <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md whitespace-nowrap ${
                                  service.isPopular ? 'bg-[#4f39f6] text-white' : 'bg-[#4f39f6]/10 text-[#4f39f6]'
                                }`}>
                                  {service.tag}
                                </span>
                              </div>
                            </div>

                            <h4 className="font-sans font-extrabold text-base sm:text-[18px] md:text-[19px] text-zinc-900 mb-2 sm:mb-3 tracking-tight">
                              {service.title}
                            </h4>

                            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-5 sm:mb-6">
                              {service.description}
                            </p>
                          </div>

                          <div className="pt-3 sm:pt-4 border-t border-zinc-100 mt-auto flex items-center justify-between">
                            <span className="text-[11px] sm:text-xs text-zinc-400 font-medium tracking-tight">
                              {service.metric}
                            </span>
                          </div>
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