import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function MarketingShowcase() {
  const googleBusinessProfileUrl = "https://g.page/r/CQnFt9EqwoOrEAE/review";
  const reviewsData = [
    {
      name: "Aarohi",
      role: "Client",
      rating: 5,
      text: "Excellent work on our real estate website. The project was completed on time with great attention to detail. Communication was smooth, and the final result exceeded our expectations. Highly recommended!",
      verified: true
    },
    {
      name: "Avijit Koiri",
      role: "Client",
      rating: 5,
      text: "Very polite And quick service and best work/design in reasonable price",
      verified: true
    },
    {
      name: "Purge",
      role: "Client",
      rating: 5,
      text: "Saikat is a reliable and talented web developer. He created a modern, responsive website for Purge.co.nz that looks great on all devices. He was easy to work with, completed the project on schedule, and provided excellent support. We are very happy with the results..",
      verified: true
    },
    {
      name: "Krishnendu Roy",
      role: "Client",
      rating: 5,
      text: "Very knowledgeable in custom web development. The final product is secure, responsive, and easy to maintain.",
      verified: true
    },
    {
      name: "Ayan Das",
      role: "Client",
      rating: 5,
      text: "Saikat Patra is a skilled and dedicated web developer who delivers clean, responsive, and user-friendly websites. He has strong technical knowledge and pays great attention to detail. His problem-solving skills and commitment to meeting deadlines make him reliable and professional. Highly recommended for quality web development work.",
      verified: true
    },
    {
      name: "Ranjan Baag",
      role: "Client",
      rating: 5,
      text: "Anyone can Build a Website By Him. He is brilliant in it. If you and yours Friends needs a website urgent basis then just contact him and your website will be built within a month or few weeks.",
      verified: true
    },
    {
      name: "Subrata Bhowmik",
      role: "Client",
      rating: 5,
      text: "His professionalism, responsiveness, and commitment to delivering high-quality work on time make him a pleasure to work with. I highly recommend Saikat to anyone looking for a skilled and reliable web designer who combines creativity with technical expertise.",
      verified: true
    },
    {
      name: "Anwit Khara",
      role: "Client",
      rating: 5,
      text: "Professional developer with excellent communication. Every feature we requested was implemented perfectly.",
      verified: true
    },
    {
      name: "Christoph Gawenda",
      role: "Client",
      rating: 5,
      text: "Outstanding development service! The custom CRM is packed with useful features, and the admin panel is clean, fast, and easy to navigate. Highly recommended for businesses looking for a tailored solution.",
      verified: true
    }
  ];

  const collageData = {
    front: {
      topLeftName: "Christoph Gawenda",
      topLeftText: "Outstanding development service! The custom CRM is packed with useful features, and the admin panel is clean, fast, and easy to navigate. Highly recommended for businesses looking for a tailored solution.",
      bottomLeftImg: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=300&auto=format&fit=crop",
      bottomLeftTitle: "Gawenda Studio",
      bottomLeftSub: "Germans + Gawenda Studio",
      centerAvatar: "./review-1.png",
      badgeTitle: "Gawenda Studio",
      badgeMessage:"Hello. I already have a CRM. Can you create a booking system and integrate it with my existing CRM?",
      badgeEmoji: "bi-whatsapp"
    },
    back: {
      topLeftName: "Purge",
      topLeftText: "Saikat is a reliable and talented web developer. He created a modern, responsive website for Purge.co.nz that looks great on all devices. He was easy to work with, completed the project on schedule, and provided excellent support. We are very happy with the results.",
      bottomLeftImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=300&auto=format&fit=crop",
      bottomLeftTitle: "Purge Wholesale Blinds",
      bottomLeftSub: "New Zealanders + Windows Blinds",
      centerAvatar: "./review-2.png",
      badgeTitle: "Windows Blinds",
      badgeMessage:"Hi, Saikat. I have a blinds business. Can you create a website for me?",
      badgeEmoji: "bi-whatsapp"
    }
  };

  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const infiniteReviews = [...reviewsData, ...reviewsData];

  return (
    <section id="reviews" className="py-20 bg-zinc-50/50 overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeVertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .scrolling-container {
          animation: marqueeVertical 12s linear infinite;
        }
        .scrolling-container:hover {
          animation-play-state: paused;
        }
        .perspective-1000 {
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(-180deg);
        }
        
        /* Smooth Transition Dynamics */
        .smooth-card-turn {
          transition: transform 0.85s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-bold text-[#4f39f6] tracking-widest uppercase">
              Testimonials
            </p>
            <h2 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight bg-gradient-to-tr from-[#4f39f6] via-[#38bdf8] to-[#94a3b8] bg-clip-text text-transparent">
              What clients say
            </h2>
            <div className="mt-4 flex items-center gap-2 text-sm text-zinc-600">
              <span className="flex items-center gap-1">
                <span className="text-emerald-600 font-semibold">4.9/5 rating</span> on
              </span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92(3.28-4.74) 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              <span className="font-medium text-zinc-800">Google Business</span>
            </div>
          </div>

          <a 
            href={googleBusinessProfileUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-zinc-100 text-zinc-800 font-semibold py-3 px-6 rounded-xl border border-zinc-200/80 shadow-sm transition-all duration-200 text-sm h-fit"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
            Write a Google Review
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* FLIP ANIMATION COLLAGE CONTAINER (Now on the left) */}
          <div className="perspective-1000 w-full aspect-[1.1/1] min-h-[480px] relative order-1 lg:order-1">
            <div className={`w-full h-full preserve-3d smooth-card-turn ${isFlipped ? 'rotate-y-180' : ''}`}>
              {/* FRONT SIDE */}
              <div className="absolute inset-0 w-full h-full backface-hidden flex items-center justify-center">
                <img 
                  src="./mobile.png" 
                  alt="Mobile Frame" 
                  className="absolute h-full object-contain z-0 pointer-events-none drop-shadow-lg" 
                />
                
                {/* User Review (Top Left Card) -> MOVED TO RIGHT (Desktop) */}
                <div className="hidden md:block absolute top-[10%] right-0 z-20 w-[200px] sm:w-[240px] bg-white rounded-2xl p-4 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] border border-slate-100/50">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="font-bold text-sm text-[#1e293b]">{collageData.front.topLeftName}</span>
                    <i className="bi bi-patch-check-fill text-[#3b82f6] shrink-0 text-sm"></i>
                  </div>
                  <p className="text-[10px] sm:text-[11px] leading-relaxed text-[#475569] font-medium mb-2.5 line-clamp-4 min-h-[55px]">
                    {collageData.front.topLeftText}
                  </p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-[#f59e0b] text-[10px]"></i>
                    ))}
                  </div>
                </div>

                {/* User Review (Top Left Card) -> MOVED TO RIGHT (Mobile) */}
                <div className="block md:hidden absolute top-[12%] right-0 z-20 w-[180px] bg-white rounded-2xl p-3 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] border border-slate-100/50">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="font-bold text-xs text-[#1e293b]">{collageData.front.topLeftName}</span>
                    <i className="bi bi-patch-check-fill text-[#3b82f6] shrink-0 text-xs"></i>
                  </div>
                  <p className="text-[9px] leading-relaxed text-[#475569] font-medium mb-1.5 line-clamp-3">
                    {collageData.front.topLeftText}
                  </p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-[#f59e0b] text-[9px]"></i>
                    ))}
                  </div>
                </div>

                {/* Location Card (Bottom Left) - Unchanged */}
                <div className="hidden md:block absolute bottom-[8%] left-[6%] z-20 w-[145px] sm:w-[165px] bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] border border-slate-100/50">
                  <div className="relative h-[110px] w-full">
                    <img src={collageData.front.bottomLeftImg} alt={collageData.front.bottomLeftTitle} className="w-full h-full object-cover" />
                    <div className="absolute top-2.5 left-2.5 w-7 h-7 bg-[#0ea5e9] rounded-lg flex items-center justify-center shadow-md">
                      <i className="bi bi-geo-alt-fill text-white text-sm"></i>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-bold text-xs text-slate-800">{collageData.front.bottomLeftTitle}</h4>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-[10px] font-semibold text-slate-500">4.5</span>
                      <div className="flex gap-[1px]">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="bi bi-star-fill text-[#f59e0b] text-[8px]"></i>
                        ))}
                      </div>
                    </div>
                    <p className="text-[9px] text-slate-400 mt-1 font-medium">{collageData.front.bottomLeftSub}</p>
                  </div>
                </div>

                {/* Location Card (Bottom Left) - Mobile - Unchanged */}
                <div className="block md:hidden absolute bottom-[2%] left-0 z-20 w-[135px] bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] border border-slate-100/50">
                  <div className="relative h-[85px] w-full">
                    <img src={collageData.front.bottomLeftImg} alt={collageData.front.bottomLeftTitle} className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 w-6 h-6 bg-[#0ea5e9] rounded-lg flex items-center justify-center shadow-md">
                      <i className="bi bi-geo-alt-fill text-white text-xs"></i>
                    </div>
                  </div>
                  <div className="p-2">
                    <h4 className="font-bold text-[11px] text-slate-800 truncate">{collageData.front.bottomLeftTitle}</h4>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-[9px] font-semibold text-slate-500">4.5</span>
                      <div className="flex gap-[1px]">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="bi bi-star-fill text-[#f59e0b] text-[7px]"></i>
                        ))}
                      </div>
                    </div>
                    <p className="text-[8px] text-slate-400 mt-0.5 font-medium truncate">{collageData.front.bottomLeftSub}</p>
                  </div>
                </div>

                <div className="absolute z-50 w-[170px] h-[170px] sm:w-[200px] sm:h-[200px] rounded-full border-4 border-[#fe9600] bg-[#E3EFFF] overflow-hidden shadow-lg flex items-center justify-center">
                  <img src={collageData.front.centerAvatar} alt="Consultant Front Avatar" className="w-full h-full object-cover" />
                </div>

                {/* Google and Shield Icon Wrapper -> MOVED TO LEFT */}
                <div className="absolute top-0 left-[-2%] z-20 flex items-end">
                  <div className="relative w-[100px] h-[110px] flex items-center justify-center">
                    <i className="bi bi-shield-fill text-[#2563eb] drop-shadow-md text-[100px] leading-none"></i>
                    <div className="absolute inset-0 flex items-center justify-center mb-2">
                      <i className="bi bi-check-lg text-white text-4xl font-extrabold"></i>
                    </div>
                  </div>
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-100/30 -ml-9 -mb-1 z-50">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>

                {/* Message Section (Bottom Right) - Unchanged */}
                <div className="absolute bottom-[10%] right-[-4%] z-20">
                  <div className="absolute -top-5 right-6 w-9 h-9 bg-[#1d9bf0] rounded-xl flex items-center justify-center shadow-md">
                    <i className="bi bi-chat-left-text-fill text-white text-sm"></i>
                  </div>
                  <div className="w-[210px] sm:w-[240px] bg-white rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">
                    <div className="bg-[#F0EDFC] px-4 py-2 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 flex items-center justify-center text-xs">
                          <i className={`bi ${collageData.front.badgeEmoji} text-[#25D366]`}></i>
                        </div>
                        <span className="text-[11px] font-bold text-slate-800">{collageData.front.badgeTitle}</span>
                      </div>
                    </div>
                    <div className="p-3 flex justify-center items-center">
                      <span className="text-slate-500 font-medium text-[11px] tracking-wide">{collageData.front.badgeMessage}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* BACK SIDE */}
              <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex items-center justify-center">
                <img 
                  src="./mobile.png" 
                  alt="Mobile Frame" 
                  className="absolute h-full object-contain z-0 pointer-events-none drop-shadow-lg" 
                />
                
                {/* User Review (Top Left Card) -> MOVED TO RIGHT (Desktop) */}
                <div className="hidden md:block absolute top-[10%] right-0 z-20 w-[200px] sm:w-[240px] bg-white rounded-2xl p-4 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] border border-slate-100/50">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="font-bold text-sm text-[#1e293b]">{collageData.back.topLeftName}</span>
                    <i className="bi bi-patch-check-fill text-[#3b82f6] shrink-0 text-sm"></i>
                  </div>
                  <p className="text-[10px] sm:text-[11px] leading-relaxed text-[#475569] font-medium mb-2.5 line-clamp-4 min-h-[55px]">
                    {collageData.back.topLeftText}
                  </p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-[#f59e0b] text-[10px]"></i>
                    ))}
                  </div>
                </div>

                {/* User Review (Top Left Card) -> MOVED TO RIGHT (Mobile) */}
                <div className="block md:hidden absolute top-[12%] right-0 z-20 w-[180px] bg-white rounded-2xl p-3 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] border border-slate-100/50">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="font-bold text-xs text-[#1e293b]">{collageData.back.topLeftName}</span>
                    <i className="bi bi-patch-check-fill text-[#3b82f6] shrink-0 text-xs"></i>
                  </div>
                  <p className="text-[9px] leading-relaxed text-[#475569] font-medium mb-1.5 line-clamp-3">
                    {collageData.back.topLeftText}
                  </p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-[#f59e0b] text-[9px]"></i>
                    ))}
                  </div>
                </div>

                {/* Location Card (Bottom Left) - Unchanged */}
                <div className="hidden md:block absolute bottom-[8%] left-[6%] z-20 w-[145px] sm:w-[165px] bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] border border-slate-100/50">
                  <div className="relative h-[110px] w-full">
                    <img src={collageData.back.bottomLeftImg} alt={collageData.back.bottomLeftTitle} className="w-full h-full object-cover" />
                    <div className="absolute top-2.5 left-2.5 w-7 h-7 bg-[#0ea5e9] rounded-lg flex items-center justify-center shadow-md">
                      <i className="bi bi-geo-alt-fill text-white text-sm"></i>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-bold text-xs text-slate-800">{collageData.back.bottomLeftTitle}</h4>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-[10px] font-semibold text-slate-500">4.5</span>
                      <div className="flex gap-[1px]">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="bi bi-star-fill text-[#f59e0b] text-[8px]"></i>
                        ))}
                      </div>
                    </div>
                    <p className="text-[9px] text-slate-400 mt-1 font-medium">{collageData.back.bottomLeftSub}</p>
                  </div>
                </div>

                {/* Location Card (Bottom Left) - Mobile - Unchanged */}
                <div className="block md:hidden absolute bottom-[2%] left-0 z-20 w-[135px] bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] border border-slate-100/50">
                  <div className="relative h-[85px] w-full">
                    <img src={collageData.back.bottomLeftImg} alt={collageData.back.bottomLeftTitle} className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 w-6 h-6 bg-[#0ea5e9] rounded-lg flex items-center justify-center shadow-md">
                      <i className="bi bi-geo-alt-fill text-white text-xs"></i>
                    </div>
                  </div>
                  <div className="p-2">
                    <h4 className="font-bold text-[11px] text-slate-800 truncate">{collageData.back.bottomLeftTitle}</h4>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-[9px] font-semibold text-slate-500">4.5</span>
                      <div className="flex gap-[1px]">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="bi bi-star-fill text-[#f59e0b] text-[7px]"></i>
                        ))}
                      </div>
                    </div>
                    <p className="text-[8px] text-slate-400 mt-0.5 font-medium truncate">{collageData.back.bottomLeftSub}</p>
                  </div>
                </div>

                <div className="absolute z-50 w-[170px] h-[170px] sm:w-[200px] sm:h-[200px] rounded-full border-4 border-[#fe9600] bg-[#E3EFFF] overflow-hidden shadow-lg flex items-center justify-center">
                  <img src={collageData.back.centerAvatar} alt="Consultant Back Avatar" className="w-full h-full object-cover" />
                </div>

                {/* Google and Shield Icon Wrapper -> MOVED TO LEFT */}
                <div className="absolute top-0 left-[-2%] z-20 flex items-end">
                  <div className="relative w-[100px] h-[110px] flex items-center justify-center">
                    <i className="bi bi-shield-fill text-[#2563eb] drop-shadow-md text-[100px] leading-none"></i>
                    <div className="absolute inset-0 flex items-center justify-center mb-2">
                      <i className="bi bi-check-lg text-white text-4xl font-extrabold"></i>
                    </div>
                  </div>
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-100/30 -ml-9 -mb-1 z-50">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>

                {/* Message Section (Bottom Right) - Unchanged */}
                <div className="absolute bottom-[10%] right-[-4%] z-20">
                  <div className="absolute -top-5 right-6 w-9 h-9 bg-[#1d9bf0] rounded-xl flex items-center justify-center shadow-md">
                    <i className="bi bi-chat-left-text-fill text-white text-sm"></i>
                  </div>
                  <div className="w-[210px] sm:w-[240px] bg-white rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">
                    <div className="bg-[#F0EDFC] px-4 py-2 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 flex items-center justify-center text-xs">
                          <i className={`bi ${collageData.back.badgeEmoji} text-[#25D366]`}></i>
                        </div>
                        <span className="text-[11px] font-bold text-slate-800">{collageData.back.badgeTitle}</span>
                      </div>
                    </div>
                    <div className="p-3 flex justify-center items-center">
                      <span className="text-slate-500 font-medium text-[11px] tracking-wide">{collageData.back.badgeMessage}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SCROLLING REVIEWS CONTAINER (Now on the right) */}
          <div className="h-[390px] overflow-hidden relative order-2 lg:order-2">
            <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-zinc-50/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-zinc-50/50 to-transparent z-10 pointer-events-none" />
            <div className="scrolling-container flex flex-col gap-5">
              {infiniteReviews.map((review, idx) => (
                <blockquote 
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between h-[185px] shrink-0"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-0.5" aria-label={`${review.rating} stars`}>
                        {[...Array(review.rating)].map((_, i) => (
                          <i key={i} className="bi bi-star-fill text-amber-400 text-xs" aria-hidden="true"></i>
                        ))}
                      </div>
                      {review.verified && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                          <i className="bi bi-check-lg text-xs leading-none"></i>
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed mb-3 font-normal line-clamp-3">
                      "{review.text}"
                    </p>
                  </div>                  
                  <footer className="flex items-center gap-3 pt-3 border-t border-zinc-100">
                    <div className="flex items-center justify-center bg-zinc-50 w-9 h-9 rounded-full shrink-0 border border-zinc-200/80 p-2">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <p className="font-bold text-xs text-zinc-900">{review.name}</p>
                      </div>
                      <p className="text-[10px] text-zinc-500 font-medium">{review.role}</p>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}