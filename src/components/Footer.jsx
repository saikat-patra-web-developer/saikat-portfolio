import React from 'react';

export default function Footer({ currentYear }) {
  return (
    <footer className="border-t border-zinc-200/60 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-zinc-400 text-center sm:text-left leading-relaxed">
          © <span>{currentYear}</span> Saikat Patra Web Developer. All rights reserved.
        </p>
        <p className="text-xs font-medium text-zinc-400">
          Design by Saikat
        </p>
      </div>
    </footer>
  );
}