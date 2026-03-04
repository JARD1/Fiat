'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

// Mock data para la gráfica de ventas
const datosVentas = [
  { mes: 'Ago', ventas: 12 },
  { mes: 'Sep', ventas: 19 },
  { mes: 'Oct', ventas: 15 },
  { mes: 'Nov', ventas: 22 },
  { mes: 'Dic', ventas: 35 },
  { mes: 'Ene', ventas: 28 },
];
const maxVentas = Math.max(...datosVentas.map(d => d.ventas));

export default function AdminDashboard() {
  const [dragActive, setDragActive] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20 pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera del Dashboard */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">
              Panel de <span className="text-red-600">Control</span>
            </h1>
            <p className="text-slate-500 font-medium mt-2">Bienvenido, Jorge Diaz. Aquí tienes el resumen de tu concesionario.</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex gap-4">
            <button className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-xl text-sm transition-colors">
              Ver Leads
            </button>
            <button className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition-colors shadow-lg shadow-red-600/20">
              Cerrar Sesión
            </button>
          </motion.div>
        </div>

        {/* Tarjetas de Estadísticas Rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { titulo: "Vehículos en Catálogo", valor: "8", cambio: "+2 este mes", color: "text-blue-600", bg: "bg-blue-100" },
            { titulo: "Leads Generados", valor: "142", cambio: "+15% vs mes anterior", color: "text-green-600", bg: "bg-green-100" },
            { titulo: "Ventas (Últimos 30 días)", valor: "28", cambio: "Récord histórico", color: "text-red-600", bg: "bg-red-100" }
          ].map((stat, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-6"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">{stat.titulo}</p>
                <h3 className="text-3xl font-black text-slate-900">{stat.valor}</h3>
                <p className="text-xs text-slate-500 font-medium mt-1">{stat.cambio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Layout Principal: Formulario y Gráfica */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LADO IZQUIERDO: Formulario de Carga */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/40"
          >
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-8">Agregar Nuevo <span className="text-red-600">Vehículo</span></h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Modelo del Auto</label>
                  <input type="text" placeholder="Ej. Fastback Audace" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-600 outline-none transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Precio Estimado ($)</label>
                  <input type="number" placeholder="Ej. 25000" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-600 outline-none transition-all" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Motor / Transmisión</label>
                <input type="text" placeholder="Ej. Motor Turbo 270 1.3L - CVT" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-600 outline-none transition-all" />
              </div>

              {/* Área de carga de imagen (Drag & Drop UI) */}
              <div className="flex flex-col gap-2 mt-4">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Imagen Principal</label>
                <div 
                  className={`w-full border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center transition-all cursor-pointer ${dragActive ? 'border-red-600 bg-red-50' : 'border-slate-300 bg-slate-50 hover:bg-slate-100'}`}
                  onDragEnter={() => setDragActive(true)}
                  onDragLeave={() => setDragActive(false)}
                  onDrop={() => setDragActive(false)}
                >
                  <svg className={`w-10 h-10 mb-4 ${dragActive ? 'text-red-600' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm font-bold text-slate-700">Arrastra la imagen aquí o haz clic para subir</p>
                  <p className="text-xs text-slate-500 mt-2">Formato PNG sin fondo recomendado (Máx. 5MB)</p>
                </div>
              </div>

              <button className="w-full mt-4 px-8 py-5 bg-slate-900 hover:bg-black text-white rounded-xl font-bold uppercase tracking-widest text-sm transition-all shadow-xl shadow-slate-900/20">
                Guardar y Publicar Vehículo
              </button>
            </form>
          </motion.div>

          {/* LADO DERECHO: Gráfica de Ventas */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 flex flex-col shadow-xl"
          >
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-2">Rendimiento</h2>
            <p className="text-slate-400 text-sm mb-10">Ventas confirmadas últimos 6 meses.</p>

            {/* Contenedor de la gráfica construida con Tailwind */}
            <div className="flex-1 flex items-end justify-between gap-2 h-48 border-b border-slate-700 pb-0 relative mt-auto">
              
              {/* Líneas guía de fondo */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-4">
                <div className="border-t border-slate-800 w-full mt-4"></div>
                <div className="border-t border-slate-800 w-full"></div>
                <div className="border-t border-slate-800 w-full"></div>
              </div>

              {/* Barras animadas */}
              {datosVentas.map((dato, i) => (
                <div key={i} className="flex flex-col items-center w-full z-10 group h-full justify-end relative">
                  {/* Tooltip on hover */}
                  <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-slate-900 text-[10px] font-bold py-1 px-2 rounded whitespace-nowrap z-20 pointer-events-none">
                    {dato.ventas} autos
                  </div>
                  {/* Barra */}
                  <motion.div 
                    initial={{ height: "0%" }}
                    animate={{ height: `${(dato.ventas / maxVentas) * 100}%` }}
                    transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
                    className={`w-full max-w-[40px] rounded-t-lg transition-colors ${i === datosVentas.length - 1 ? 'bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]' : 'bg-slate-700 group-hover:bg-slate-500'}`}
                  ></motion.div>
                </div>
              ))}
            </div>

            {/* Etiquetas de los meses (fuera del contenedor flex de altura) */}
            <div className="flex items-center justify-between gap-2 mt-4">
              {datosVentas.map((dato, i) => (
                <span key={i} className="text-slate-400 text-xs font-bold w-full text-center uppercase">
                  {dato.mes}
                </span>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </main>
  );
}