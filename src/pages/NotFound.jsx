import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home } from 'lucide-react';
import Loader from '../components/Loader';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 selection:bg-[#ef4f5f]/10 selection:text-[#ef4f5f]">
      <div className="max-w-xl w-full text-center">
        
        {/* --- EXISTING CENTERING LOADER WRAPPER --- */}
        <div className="flex justify-center mb-6 md:mb-8">
          <Loader />
        </div>
        
        {/* --- EXISTING PAGE TITLE HEADER --- */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] mb-4 md:mb-6 leading-tight">
          Error <span className="text-[#ef4f5f]">404</span>
        </h1>

        {/* --- STATUS CONTENT MESSAGING --- */}
        <h2 className="text-xl sm:text-2xl font-black text-[#0f172a] tracking-tight mb-3">
          Page Not Found
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto mb-8 font-medium">
          The plate you are looking for doesn't exist or has been moved to a different menu kitchen block.
        </p>

        {/* --- DEDICATED HOME NAVIGATION ACTION --- */}
        <div className="max-w-xs mx-auto">
          <NavLink to="/" className="w-full">
            <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ef4f5f] hover:bg-[#d83f4e] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#ef4f5f]/10 cursor-pointer active:scale-95">
              <Home size={14} /> Go Back Home
            </button>
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;