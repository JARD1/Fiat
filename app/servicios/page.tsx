'use client';
import { motion } from 'framer-motion';
import React from 'react';

// Data de los servicios con iconos SVG integrados
const serviciosData = [
  {
    id: 1,
    titulo: "Mantenimiento Preventivo",
    desc: "Alarga la vida útil de tu Fiat. Realizamos cambios de aceite, revisión de fluidos, filtros y chequeo de frenos bajo los estándares de la marca.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  },
  {
    id: 2,
    titulo: "Mecánica Especializada",
    desc: "Diagnóstico computarizado avanzado y reparación de motor, transmisión y suspensión por técnicos certificados.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  },
  {
    id: 3,
    titulo: "Latonería y Pintura",
    desc: "Devolvemos el brillo original a tu vehículo. Utilizamos cabinas de pintura de última tecnología y colores originales.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  },
  {
    id: 4,
    titulo: "Repuestos Originales",
    desc: "Garantiza el rendimiento de tu auto con piezas 100% genuinas Mopar, diseñadas específicamente para tu modelo.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  },
  {
    id: 5,
    titulo: "Accesorios y Personalización",
    desc: "Haz tu Fiat único. Contamos con un amplio catálogo de accesorios originales para interior y exterior.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  },
  {
    id: 6,
    titulo: "Asistencia Vial",
    desc: "Tranquilidad en cada viaje. Servicio de grúa y asistencia en ruta disponible para nuestros clientes.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  }
];

export default function ServiciosPage() {
  // Variantes para animación en cascada - SE APLICÓ EL TIPADO ANY
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20 pt-16 md:pt-24 selection:bg-red-600 selection:text-white">
      
      {/* CABECERA */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto text-center mb-16 md:mb-24 mt-8 md:mt-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-red-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">
            Servicio Postventa
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">
            Cuidamos tu <span className="text-red-600">Inversión</span>
          </h1>
          <p className="text-slate-500 text-base md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            En Fiat Chacao no solo entregamos llaves, construimos relaciones. Nuestro taller especializado cuenta con tecnología de punta y personal certificado para mantener tu vehículo en perfectas condiciones.
          </p>
        </motion.div>
      </section>

      {/* GRID DE SERVICIOS */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {serviciosData.map((servicio) => (
            <motion.div 
              key={servicio.id}
              variants={itemVariants}
              className="bg-slate-900 rounded-[2rem] p-8 md:p-10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Decoración sutil de fondo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-transform duration-500 group-hover:scale-150"></div>
              
              <div className="relative z-10">
                {/* Icono */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors duration-500">
                  <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {servicio.icon}
                  </svg>
                </div>
                
                {/* Textos */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-wide">
                  {servicio.titulo}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light">
                  {servicio.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA INFERIOR */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 md:px-6 mt-20 md:mt-32"
      >
        <div className="bg-red-600 rounded-[3rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Textura de fondo (opcional, le da un toque premium) */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6">
              ¿Es hora de tu revisión?
            </h2>
            <p className="text-red-100 text-base md:text-lg mb-10 max-w-xl mx-auto font-medium">
              Agenda tu cita en nuestro taller autorizado y deja tu vehículo en manos de los expertos.
            </p>
            <a 
              href="https://wa.me/584149266532" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 md:px-14 py-4 md:py-5 bg-white text-red-600 rounded-full text-sm md:text-lg font-bold transition-all hover:scale-105 hover:shadow-xl shadow-black/20"
            >
              AGENDAR CITA AHORA
            </a>
          </div>
        </div>
      </motion.section>

    </main>
  );
}