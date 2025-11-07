"use client";
import { Michroma } from "next/font/google";
import CardSwap, { Card } from '../../componentes/CardSwap';

const michroma = Michroma({ subsets: ["latin"], weight: "400", display: "swap" });

export default function ServiciosPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      {/* Imagen de fondo médica */}
      {/* Video de fondo médico */}
<video 
  autoPlay 
  muted 
  loop 
  playsInline 
  preload="metadata"
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videoondas.mp4" type="video/mp4" />
</video>
      
      {/* Overlay gradiente profesional para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/75 to-black/90" />
      
      {/* Patrón sutil médico */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
                      radial-gradient(circle at 75% 75%, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>
      
      {/* Contenedor principal sin padding horizontal para full-width */}
      <div className="relative z-10 py-16 sm:py-20 lg:py-24">
      
      {/* Efectos de fondo */}
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
        />
      </div>

      {/* Main Section - Texto y Tarjetas lado a lado */}
      <div className="px-6 lg:px-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Columna Izquierda - Texto */}
          <div className="flex flex-col justify-center">
            <h2 className="text-base/7 font-semibold text-blue-400 mb-4">Gestión Médica Innovadora</h2>
            <h1 className={`text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight ${michroma.className}`}>
              Tecnología que Transforma la Salud
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Descubre nuestras tres soluciones tecnológicas especializadas para el sector salud. 
              Desde gestión básica hasta sistemas hospitalarios completos.
            </p>
          </div>

          {/* Columna Derecha - CardSwap */}
          <div className="flex items-center justify-center relative" style={{ height: '550px' }}>
        <CardSwap 
          width={650}
          height={520}
          cardDistance={70}
          verticalDistance={80}
          delay={5000}
          pauseOnHover={true}
          skewAmount={8}
          easing="elastic"
        >
          <Card customClass="bg-gradient-to-br from-blue-600/90 via-blue-700/90 to-indigo-800/90 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden border border-blue-400/30">
            <div className="p-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold text-white uppercase tracking-wide">
                    Agenda en linea
                  </span>
                  <svg className="w-12 h-12 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className={`text-4xl font-bold text-white mb-4 leading-tight ${michroma.className}`}>
                  Sistema de Gestión de Pacientes
                </h3>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Gestiona tu consulta médica con seguridad y eficiencia profesional. Historias clínicas digitales, agenda inteligente y respaldos automáticos.
                </p>
              </div>
              <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border border-white/30 hover:border-white/50">
                Conocer Más →
              </button>
            </div>
          </Card>

          <Card customClass="bg-gradient-to-br from-purple-600/90 via-purple-700/90 to-pink-800/90 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden border border-purple-400/30">
            <div className="p-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold text-white uppercase tracking-wide">
                    Conección a video conferencia
                  </span>
                  <svg className="w-12 h-12 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className={`text-4xl font-bold text-white mb-4 leading-tight ${michroma.className}`}>
                  Plataforma de Telemedicina Avanzada
                </h3>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Consultas virtuales seguras con videollamadas HD, prescripción electrónica y sala de espera virtual. Todo en cumplimiento con normativas de telemedicina.
                </p>
              </div>
              <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border border-white/30 hover:border-white/50">
                Conocer Más →
              </button>
            </div>
          </Card>

          <Card customClass="bg-gradient-to-br from-cyan-600/90 via-teal-700/90 to-emerald-800/90 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden border border-cyan-400/30">
            <div className="p-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold text-white uppercase tracking-wide">
                    Gestión total
                  </span>
                  <svg className="w-12 h-12 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className={`text-4xl font-bold text-white mb-4 leading-tight ${michroma.className}`}>
                  Gestión de agenda avanzada
                </h3>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Sistema completo para consultas. Gestión de reservas, ingreso de pacientes, analítica avanzada en tiempo real.
                </p>
              </div>
              <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border border-white/30 hover:border-white/50">
                Conocer Más →
              </button>
            </div>
          </Card>
        </CardSwap>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-4xl mx-auto text-center mt-24 mb-12 px-6 lg:px-12">
        <h3 className={`text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance mb-6 ${michroma.className}`}>
          ¿Necesitas una solución personalizada?
        </h3>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
          Nuestro equipo de expertos puede desarrollar una solución médica específicamente diseñada para las necesidades de tu institución de salud.
        </p>
      </div>
      
      </div>
    </div>
  );
}
