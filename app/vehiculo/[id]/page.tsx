'use client';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react'; // Agregamos useState

// Data de especificaciones detalladas por carro
const especificacionesPorCarro: any = {
  "pulse-drive": [
    { titulo: "Motor Turbo", destaque: "1.3L", desc: "Potencia eficiente y rendimiento dinámico ideal para la ciudad y carretera." },
    { titulo: "Rines de Aleación", destaque: "17\"", desc: "Acabado diamantado exclusivo que resalta su actitud robusta y SUV." },
    { titulo: "Transmisión", destaque: "CVT", desc: "Caja automática de 7 velocidades simuladas con modo Sport." },
    { titulo: "Multimedia", destaque: "10.1\"", desc: "Pantalla táctil flotante con Apple CarPlay y Android Auto inalámbrico." },
  ],
  "fastback-audace": [
    { titulo: "Motor Turbo 270", destaque: "1.3L", desc: "Respuesta deportiva con aceleración de 0 a 100 km/h en segundos." },
    { titulo: "Capacidad", destaque: "600L", desc: "El maletero más espacioso y versátil de su categoría deportiva." },
    { titulo: "Rines", destaque: "18\"", desc: "Diseño aerodinámico premium en aleación ligera." },
    { titulo: "Seguridad", destaque: "ADAS", desc: "Sistema avanzado con frenado autónomo y mantenimiento de carril." },
  ]
};

export default function PaginaVehiculo() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const nombreCarro = id.replace('-', ' ').toUpperCase(); // Para usarlo en el mensaje
  
  const specs = especificacionesPorCarro[id] || [
    { titulo: "Motor", destaque: "Eficiente", desc: "Rendimiento óptimo." },
    { titulo: "Diseño", destaque: "Italiano", desc: "Elegancia en cada detalle." }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const clipPathValue = useTransform(scrollYProgress, [0.3, 0.6], [
    "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",   
    "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" 
  ]);

  // ESTADO PARA EL FORMULARIO
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    ciudad: ''
  });

  // FUNCIÓN PARA ENVIAR A WHATSAPP
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí pones el número de teléfono del concesionario (con código de país, sin el +)
    const numeroWhatsApp = "584149266312"; 
    
    // Armamos el mensaje dinámico
    const mensaje = `¡Hola equipo de Fiat Chacao! 👋\n\nMi nombre es *${formData.nombre}*, estoy en la ciudad de *${formData.ciudad}* y mi número de contacto es *${formData.telefono}*.\n\nEstoy muy interesado en solicitar una cotización e información sobre el modelo: *${nombreCarro}* 🚗.\n\n¡Quedo atento!`;
    
    // Codificamos el texto para que las URLs no se rompan por los espacios o saltos de línea
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    // Abrimos WhatsApp en una nueva pestaña
    window.open(url, '_blank');
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans pb-16 md:pb-20 pt-16 md:pt-20">
      
      {/* SECCIÓN 1: CABECERA */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mt-8 md:mt-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <button onClick={() => router.back()} className="mb-6 md:mb-8 text-slate-400 hover:text-red-600 transition-colors uppercase text-[10px] md:text-xs font-bold tracking-widest flex items-center justify-center gap-2 mx-auto">
            <span>←</span> Volver al Catálogo
          </button>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase italic tracking-tighter leading-none mb-4 md:mb-6">
            {nombreCarro}
          </h1>
          <p className="text-slate-400 text-base sm:text-lg md:text-2xl max-w-2xl mx-auto font-light px-4">
            Elegancia italiana diseñada para conquistar cada kilómetro.
          </p>
        </motion.div>
      </section>

      {/* SECCIÓN 2: EFECTO REVEAL DEL CARRO */}
      <section ref={containerRef} className="relative w-full h-[150vh] mt-8 md:mt-12">
        <div className="sticky top-1/4 w-full max-w-6xl mx-auto h-[300px] sm:h-[450px] md:h-[650px] overflow-hidden">
          <div className="absolute inset-0 z-10">
            <Image src={`/img/pulse2026rojo.png`} alt="Base" fill className="object-cover rounded-3xl" priority />
          </div>
          <motion.div className="absolute inset-0 z-20" style={{ clipPath: clipPathValue }}>
            <Image src={`/img/pulse2026.png`} alt="Color" fill className="object-cover rounded-3xl" />
          </motion.div>
          <motion.div 
            className="absolute bottom-2 md:bottom-5 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full text-[10px] md:text-xs font-bold tracking-widest z-40 backdrop-blur-md whitespace-nowrap"
            style={{ opacity: useTransform(scrollYProgress, [0.2, 0.3, 0.6, 0.7], [0, 1, 1, 0]) }}
          >
            HAZ SCROLL PARA REVELAR
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 3: ESPECIFICACIONES TÉCNICAS */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 mt-12 md:mt-20">
        <div className="bg-slate-900 rounded-[40px] md:rounded-[60px] p-8 md:p-16 lg:p-24 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="mb-12 md:mb-20 text-center md:text-left relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4">Ingeniería al Detalle</h2>
            <p className="text-slate-400 text-sm md:text-lg max-w-2xl">Descubre las características que hacen de este modelo una pieza de tecnología superior, pensada para el terreno y tu comodidad.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {specs.map((spec: any, index: number) => (
              <motion.div 
                key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col border-t border-slate-700 pt-6"
              >
                <span className="text-5xl md:text-6xl font-black text-red-500 mb-2 tracking-tighter">{spec.destaque}</span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 uppercase tracking-wider">{spec.titulo}</h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: FORMULARIO DE CONTACTO A WHATSAPP */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-slate-100 py-16 md:py-24 mt-16 md:mt-24 rounded-[40px] md:rounded-[60px] mx-4 md:mx-6 border border-slate-200 overflow-hidden relative"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Textos del lado izquierdo */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6 uppercase italic tracking-tighter text-slate-900">
                ¿Listo para conducir tu <span className="text-red-600">{nombreCarro}</span>?
              </h2>
              <p className="text-slate-500 text-base md:text-lg mb-6 max-w-lg mx-auto lg:mx-0">
                Déjanos tus datos y un asesor especializado de Fiat Chacao se pondrá en contacto contigo de inmediato vía WhatsApp para darte todos los detalles, precios y planes de financiamiento.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-sm font-bold text-slate-400">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Atención rápida garantizada
              </div>
            </div>

            {/* Formulario del lado derecho */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-slate-100">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Campo Nombre */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="nombre" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Tu Nombre</label>
                  <input 
                    type="text" 
                    id="nombre"
                    required
                    placeholder="Ej. Juan Pérez"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  />
                </div>

                {/* Campo Teléfono */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="telefono" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Tu Teléfono (WhatsApp)</label>
                  <input 
                    type="tel" 
                    id="telefono"
                    required
                    placeholder="Ej. 0414-1234567"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                  />
                </div>

                {/* Campo Ciudad */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="ciudad" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Ciudad</label>
                  <input 
                    type="text" 
                    id="ciudad"
                    required
                    placeholder="Ej. Caracas"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                    value={formData.ciudad}
                    onChange={(e) => setFormData({...formData, ciudad: e.target.value})}
                  />
                </div>

                {/* Botón de Enviar */}
                <button 
                  type="submit"
                  className="w-full mt-2 px-8 py-5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold uppercase tracking-widest text-sm transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-3 group"
                >
                  Continuar en WhatsApp
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </button>
              </form>
            </div>

          </div>
        </div>
      </motion.section>

    </main>
  );
}