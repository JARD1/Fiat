// app/components/VehicleCard.tsx
'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function VehicleCard({ vehiculo }: { vehiculo: any }) {
  const router = useRouter();

  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-xl hover:-translate-y-2 transition-all group">
      <div className="relative h-48 w-full mb-6">
        <Image src={vehiculo.imagen} alt={vehiculo.modelo} fill className="object-contain" />
      </div>
      <span className="text-xs font-bold text-red-600 uppercase tracking-widest">{vehiculo.categoria}</span>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">{vehiculo.modelo}</h2>
      <p className="text-xl font-semibold text-slate-700 mb-6">{vehiculo.precio}</p>
      
      <button 
        onClick={() => router.push(`/vehiculo/${vehiculo.id}`)}
        className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors"
      >
        Ver Detalles y Cotizar
      </button>
    </div>
  );
}