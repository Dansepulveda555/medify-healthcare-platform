"use client";
import { Michroma } from "next/font/google";
import CardSwap, { Card } from '../../componentes/CardSwap';
import FadeInSection from '../../componentes/FadeInSection';

const michroma = Michroma({ subsets: ["latin"], weight: "400", display: "swap" });

export default function ServiciosPage() {
  return (
    <div className="min-h-screen w-full bg-[#0f172a] relative">
      {/* Blue Radial Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
        }}
      />

      {/* VIDEO DE FONDO - COMENTADO PARA USO FUTURO */}
      {/* 
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
      
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/75 to-black/90" />
      
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
                      radial-gradient(circle at 75% 75%, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>
      */}
      
      {/* Contenedor principal */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-6 py-8 md:py-12">
      
      {/* Efectos de fondo - decorativo */}
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
      <FadeInSection delay={0}>
      <div className="px-12 lg:px-24 mb-18 bg-slate-950/30 backdrop-blur-sm rounded-3xl md:rounded-[2.5rem] py-12 md:py-50 ring-1 ring-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Columna Izquierda - Texto */}
          <div className="flex flex-col items-center">
            <h2 className="text-base/20 font-semibold text-blue-100/80 mb-4">Gestión Médica Innovadora</h2>
            <h1 className={`text-center lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight ${michroma.className}`}>
            La forma de gestionar tu consulta ha cambiado.
            </h1>
            <p className="text-justify lg:text-xl text-white/90 leading-relaxed mb-8">
              Descubre nuestras soluciones tecnológicas especializadas para el sector de la salud. 
              Desde gestión básica hasta sistemas de reservas en la nube.
            </p>
          </div>

          {/* Columna Derecha - CardSwap */}
          <div className="flex items-center justify-center relative" style={{ height: '310px' }}>
        <CardSwap 
          width={670}
          height={500}
          cardDistance={65}
          verticalDistance={80}
          delay={5000}
          pauseOnHover={true}
          skewAmount={8}
          easing="bounce"
        >
          <Card customClass="bg-gradient-to-br from-blue-600/90 via-blue-700/90 to-indigo-800/90 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden border border-blue-400/30">
            <div className="p-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold text-white uppercase tracking-wide">
                    AGENDA EN LINEA
                  </span>
                  <svg className="w-12 h-12 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className={`text-4xl font-bold text-white mb-4 leading-tight ${michroma.className}`}>
                  Sistema de Gestión de Pacientes.
                </h3>
                <ul className="text-white/90 text-lg leading-relaxed mb-6 space-y-2 list-disc list-inside">
                  <li>Gestiona tu consulta médica con seguridad y de forma profesional.</li>
                  <li>Historias clínicas digitales.</li>
                  <li>Agenda inteligente.</li>
                  <li>Respaldos automáticos.</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card customClass="bg-gradient-to-br from-purple-600/90 via-purple-700/90 to-pink-800/90 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden border border-purple-400/30">
            <div className="p-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold text-white uppercase tracking-wide">
                    CONECCIÓN A CONSULTA REMOTA
                  </span>
                  <svg className="w-12 h-12 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className={`text-4xl font-bold text-white mb-4 leading-tight ${michroma.className}`}>
                  Plataforma de Telemedicina
                </h3>
                <ul className="text-white/90 text-lg leading-relaxed mb-6 space-y-2 list-disc list-inside">
                  <li>Consigue que tus pacientes lleguen a su reserva fácilmente.</li>
                  <li>Historias clínicas digitales.</li>
                  <li>Agenda inteligente.</li>
                  <li>Respaldos automáticos.</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card customClass="bg-gradient-to-br from-cyan-600/90 via-teal-700/90 to-emerald-800/90 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden border border-cyan-400/30">
            <div className="p-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold text-white uppercase tracking-wide">
                    GESTIÓN TOTAL
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
            </div>
          </Card>
        </CardSwap>
          </div>
        </div>
      </div> {/* Cierre Main Section rounded */}
      </FadeInSection>

      {/* Call to Action Section */}
      <FadeInSection delay={0.2}>
      <div className="max-w-4xl mx-auto text-center mt-24 mb-12 px-6 lg:px-12 bg-slate-950/30 backdrop-blur-sm rounded-3xl md:rounded-[2.5rem] py-12 md:py-16 ring-1 ring-white/10">
        <h3 className={`text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance mb-6 ${michroma.className}`}>
          ¿Necesitas una solución personalizada?
        </h3>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
          Nuestro equipo de expertos puede desarrollar una solución médica específicamente diseñada para las necesidades que requiera el cliente.
        </p>
      </div>
      </FadeInSection>
      
      </div>
    </div>
  );
}
