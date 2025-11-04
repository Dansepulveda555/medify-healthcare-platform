"use client";
import { Michroma } from "next/font/google";
import CardSwap, { Card } from '../../componentes/CardSwap';

const michroma = Michroma({ subsets: ["latin"], weight: "400", display: "swap" });

export default function ServiciosPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      {/* Imagen de fondo médica */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{backgroundImage: 'url("/medical.jpg")'}}
      />
      
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
      
      {/* Contenedor principal con padding y z-index */}
      <div className="relative z-10 px-6 py-24 sm:py-32 lg:px-8">
      
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

      {/* Header Section */}

      {/* Main Content - Layout Lado a Lado */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Columna Izquierda - Texto */}
        <div className="space-y-8 pl-8 lg:pl-12 pr-4 lg:pr-8 mt-16 lg:mt-35">
          <div>
            <h2 className="text-base/7 font-semibold text-blue-400 mb-6">Gestión Médica Innovadora</h2>

            <h1 className={`text-4xl lg:text-5xl font-semibold tracking-tight text-white ${michroma.className}`}>
              Tecnología que Transforma la Salud
            </h1>
          </div>
          <p className="text-justify font-medium text-white/90 text-base lg:text-400 lg:text-xl leading-relaxed lg:leading-relaxed">
            Descubre nuestras tres soluciones tecnológicas especializadas para el sector salud. 
            Desde gestión básica hasta sistemas hospitalarios completos, todas con máxima seguridad y cumplimiento HIPAA.
            Nuestras plataformas están diseñadas para optimizar cada aspecto de la atención médica moderna.
          </p>
          
        </div>

        {/* Columna Derecha - CardSwap */}
        <div className="relative h-[800px] overflow-hidden w-full">
          <CardSwap
            width={500}
            height={650}
            cardDistance={70}
            verticalDistance={80}
            delay={6000}
            pauseOnHover={true}
            easing="elastic"
          >
            {/* Card 1 - Sistema Básico */}
            <Card className="medical-basic">
              <h3>Sistema de Gestión de Pacientes</h3>
              <p>Gestiona tu consulta médica con seguridad y eficiencia profesional.</p>
              
              <ul className="card-features">
                <li>Historias clínicas en la nube</li>
                <li>Agenda con recordatorios automáticos</li>
                <li>Gestión avanzada de pacientes</li>
                <li>Respaldos automáticos en la nube</li>
                <li>Soporte técnico especializado 24/7</li>
              </ul>
              
              
            </Card>

            {/* Card 2 - Telemedicina Premium */}
            <Card className="medical-premium">
              <h3>Plataforma de Telemedicina Avanzada</h3>
              <p>Consultas virtuales seguras con todas las herramientas médicas necesarias.</p>

              
              <ul className="card-features">
                <li>Prescripción electrónica integrada</li>
                <li>Sala de espera virtual inteligente</li>
                <li>Grabación segura de consultas</li>
                <li>Dashboard analítico avanzado</li>
                <li>Cumplimiento regulaciones telemedicina</li>
              </ul>
              
            </Card>

            {/* Card 3 - Hospital Enterprise */}
            <Card className="medical-enterprise">
              <h3>Gestión de agenda</h3>
              <p>Sistema completo para gestión integral de reservas médicas.</p>

              
              <ul className="card-features">
                <li>Gestión de reservas en vivo</li>
                <li>Control de pacientes en línea</li>
                <li>Reportes médicos y estadísticas</li>
                <li>Auditorías y cumplimiento normativo</li>
              </ul>
            </Card>
        </CardSwap>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mx-auto max-w-2xl text-center mt-16">
        <h3 className="text-2xl font-bold text-white mb-8">
          ¿Necesitas una solución personalizada?
        </h3>
        <p className="text-white/90 text-base lg:text-400 mb-8">
          Nuestro equipo de expertos puede desarrollar una solución médica específicamente diseñada para las necesidades de tu institución de salud.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Contactar Especialista
          </button>
          <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
            Ver Casos de Éxito
          </button>
        </div>
      </div>
      
      </div>
    </div>
  );
}
