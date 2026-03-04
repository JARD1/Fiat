// app/page.tsx
import VehicleCard from './components/VehicleCard';
import HeroSlider from './components/HeroSlider';

export default function Home() {
  const vehiculos = [
    { 
      id: "pulse-audace", // Actualizado para coincidir con la data de detalles
      modelo: "Pulse Audace", // Nombre real basado en las especificaciones (Rines 17", Pantalla 10.1")
      categoria: "SUV", 
      precio: "Ref. $22,500", // Ajusté el precio referencial por ser una versión superior (puedes cambiarlo)
      imagen: "/img/pulse2026.png",
      descripcion: "El SUV que combina potencia turbo y tecnología avanzada para la ciudad."
    },
    // ... agrega el resto siguiendo este formato de 'id'
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16">
      <HeroSlider />
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Nuestro Inventario</h2>
          <p className="text-slate-500">Encuentra el modelo ideal para ti</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehiculos.map((auto) => (
            <VehicleCard key={auto.id} vehiculo={auto} />
          ))}
        </div>
      </div>
    </main>
  );
}