import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Work from '../components/Work';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [currentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const atBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 60;
      if (atBottom) {
        setActiveSection('contact');
        return;
      }
      const sections = ['contact', 'blog', 'reviews', 'about', 'work', 'services', 'hero'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActiveSection(id);
          return;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('!opacity-100', '!translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal-trigger').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-zinc-50 text-zinc-900 antialiased min-h-screen relative font-sans selection:bg-[#4f39f6] selection:text-white scroll-smooth [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#4f39f6]/80 [&::-webkit-scrollbar-thumb]:rounded-full">
      <div className="before:content-[''] before:fixed before:inset-0 before:pointer-events-none before:z-0 before:opacity-[0.02] before:bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_viewBox=%220 0 200 200%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%22.9%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23n)%22/%3E%3C/svg%3E')]">
        <NavBar 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen} 
          scrolled={scrolled} 
          activeSection={activeSection} 
        />
        <main>
          <Hero />
          <Services />
          <Work />
          <About />
          <Reviews />
          {/* <Blog /> */}
          <Contact />
        </main>
        <Footer currentYear={currentYear} />
      </div>
    </div>
  );
}