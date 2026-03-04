'use client';
import { motion } from 'framer-motion';
import React from 'react';

export default function UbicacionPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans pb-20 pt-24 md:pt-32">
      <section className="px-4 md:px-6 max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block"
          >
            Encuéntranos en Caracas
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-6"
          >
            Nuestra <span className="text-red-600">Sede</span>
          </motion.h1>
        </div>

        {/* Contenedor Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch h-full">
          
          {/* Información de Contacto */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-center shadow-2xl shadow-slate-900/20"
          >
            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <h4 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2">Dirección</h4>
                  <p className="text-slate-300 text-lg leading-snug">Av. Francisco de Miranda, Sector Chacao, Caracas, Venezuela.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">🕒</span>
                <div>
                  <h4 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2">Horario Showroom</h4>
                  <p className="text-slate-300">Lun - Vie: 8:00 AM - 5:00 PM<br/>Sábados: 9:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">📞</span>
                <div>
                  <h4 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2">Contacto Directo</h4>
                  <p className="text-slate-300">+58 (212) 000-0000</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google Maps Interactivo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 min-h-[450px] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15692.65152845667!2d-66.858482!3d10.487922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a590000000000%3A0x0!2sChacao%2C%20Caracas!5e0!3m2!1ses!2sve!4v1700000000000!5m2!1ses!2sve" 
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </main>
  );
}