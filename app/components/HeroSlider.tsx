'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'; // Importamos el optimizador de Next.js

export default function HeroSlider() {
  // Actualizamos el arreglo para incluir las rutas de tus JPGs
  const slides = [
    {
      id: 1,
      titulo: "Oferta Especial Toro",
      subtitulo: "Lleva tu pickup hoy con financiamiento exclusivo.",
      imagen: "/img/OfertaToro.png" // Asegúrate de que el nombre coincida con tu archivo
    },
    {
      id: 2,
      titulo: "Nuevo Fastback",
      subtitulo: "El SUV Coupé que desafía las reglas del diseño.",
      imagen: "/img/NuevoFastBack.png"
    },
    {
      id: 3,
      titulo: "Descubre el Pulse",
      subtitulo: "Conectividad y tecnología en cada viaje.",
      imagen: "/img/DescubrePulse.png"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Ajustamos el tiempo a 5 segundos para que la foto se pueda apreciar
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); 

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    // AQUÍ ESTÁ EL CAMBIO PRINCIPAL: Pantalla completa, sin bordes curvos y más alto (500px)
    <div className="relative w-full h-[500px] overflow-hidden mb-12 shadow-2xl bg-black">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        >
          {/* 1. La Imagen de Fondo */}
          <Image
            src={slide.imagen}
            alt={slide.titulo}
            fill // Ocupa todo el contenedor
            priority={index === 0} // Le dice a Next.js que cargue la primera imagen de inmediato
            className="object-cover object-center" 
            // object-cover: recorta inteligentemente la foto para que llene el espacio sin deformarse
          />

          {/* 2. El Overlay (Filtro Oscuro) */}
          {/* Esto crea un degradado negro semi-transparente para que el texto resalte */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 flex flex-col items-center justify-end text-center p-12">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
              {slide.titulo}
            </h2>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl drop-shadow-md">
              {slide.subtitulo}
            </p>
          </div>
          
        </div>
      ))}

      {/* Indicadores (Punticos) */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            // Agregamos un onClick para que el usuario pueda cambiar la foto manualmente si quiere
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-red-600" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}