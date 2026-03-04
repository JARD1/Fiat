'use client'; 
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
      isScrolled 
        ? 'bg-slate-900/90 backdrop-blur-md border-white/10 shadow-lg py-0' 
        : 'bg-white border-transparent shadow-sm py-1 md:py-2'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          <Link href="/" className="flex items-center gap-2 md:gap-4 cursor-pointer group">
            <div className="flex gap-[3px] md:gap-[4px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-3 h-7 md:w-4 md:h-10 bg-green-600 transform -skew-x-[24deg] rounded-[1px]"></div>
              <div className={`w-3 h-7 md:w-4 md:h-10 transform -skew-x-[24deg] rounded-[1px] transition-colors duration-500 ${isScrolled ? 'bg-white' : 'bg-slate-200'}`}></div>
              <div className={`w-3 h-7 md:w-4 md:h-10 transform -skew-x-[24deg] rounded-[1px] transition-colors duration-500 ${isScrolled ? 'bg-white' : 'bg-slate-200'}`}></div>
              <div className="w-3 h-7 md:w-4 md:h-10 bg-red-600 transform -skew-x-[24deg] rounded-[1px]"></div>
            </div>
            <div className="mt-1 md:mt-0">
              <span className={`text-xl md:text-3xl font-extrabold tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-white' : 'text-slate-900'}`}>
                FIAT <span className="text-red-600 text-[9px] md:text-sm align-top font-bold ml-0.5 md:ml-1">CHACAO</span>
              </span>
            </div>
          </Link>

          {/* Menú derecho con Ubicación y Servicios */}
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/ubicacion" className={`font-medium text-sm md:text-base transition-colors duration-500 ${isScrolled ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-black'}`}>
              Ubicación
            </Link>
            <Link href="/servicios" className={`font-medium text-sm md:text-base transition-colors duration-500 ${isScrolled ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-black'}`}>
              Servicios
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}