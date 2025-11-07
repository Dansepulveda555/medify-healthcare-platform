"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

export default function GrillaEspecialidades({ especialidades, autoRotateInterval = 3000 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotación
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % especialidades.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [isPaused, autoRotateInterval, especialidades.length]);

  return (
    <div 
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Grilla Principal */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {especialidades.map((especialidad, index) => {
          const isActive = index === activeIndex;
          
          return (
            <div
              key={index}
              className={`group relative aspect-square overflow-hidden rounded-2xl ring-1 cursor-pointer transition-all duration-500 ${
                isActive
                  ? "ring-blue-400 ring-2 shadow-2xl shadow-blue-500/50 scale-105 z-10"
                  : "ring-white/10 hover:ring-white/30 hover:scale-102"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Imagen */}
              <div className="relative w-full h-full">
                <Image
                  src={especialidad.imagen}
                  alt={especialidad.nombre}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className={`object-cover transition-all duration-700 ${
                    isActive ? "scale-100 brightness-100" : "scale-110 brightness-75 group-hover:brightness-90"
                  }`}
                />
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
                  isActive 
                    ? "from-blue-900/90 via-blue-900/50 to-transparent" 
                    : "from-black/80 via-black/40 to-transparent group-hover:from-black/70"
                }`} />
                
                {/* Icono - si existe */}
                {especialidad.icono && (
                  <div className={`absolute top-4 right-4 transition-all duration-500 ${
                    isActive ? "scale-110 opacity-100" : "scale-90 opacity-70 group-hover:opacity-100"
                  }`}>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center ring-1 ring-white/20">
                      <span className="text-2xl">{especialidad.icono}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <h3 className={`font-bold text-white transition-all duration-500 ${
                  isActive 
                    ? "text-lg md:text-xl lg:text-2xl translate-y-0 opacity-100" 
                    : "text-base md:text-lg translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100"
                }`}>
                  {especialidad.nombre}
                </h3>
                
                {especialidad.descripcion && (
                  <p className={`text-white/90 text-xs md:text-sm mt-1 md:mt-2 transition-all duration-500 ${
                    isActive
                      ? "opacity-100 translate-y-0 max-h-32"
                      : "opacity-0 translate-y-4 max-h-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-32"
                  }`}>
                    {especialidad.descripcion}
                  </p>
                )}
              </div>

              {/* Indicador activo */}
              {isActive && (
                <div className="absolute top-4 left-4">
                  <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse ring-4 ring-blue-400/30" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Info de especialidad activa - Detalle expandido */}
      <div className="mt-8 md:mt-12 p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 ring-1 ring-white/10 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          {/* Icono grande */}
          {especialidades[activeIndex].icono && (
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-xl">
              <span className="text-4xl md:text-5xl">{especialidades[activeIndex].icono}</span>
            </div>
          )}
          
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3">
              {especialidades[activeIndex].nombre}
            </h3>
            <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed">
              {especialidades[activeIndex].descripcionCompleta || especialidades[activeIndex].descripcion}
            </p>
            
            {/* Tecnologías/servicios */}
            {especialidades[activeIndex].tecnologias && (
              <div className="mt-4 flex flex-wrap gap-2">
                {especialidades[activeIndex].tecnologias.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs md:text-sm ring-1 ring-white/20 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Controles de navegación */}
      <div className="flex justify-center items-center gap-2 mt-6 md:mt-8">
        {especialidades.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === activeIndex
                ? "w-8 md:w-10 h-2 md:h-2.5 bg-blue-400"
                : "w-2 md:w-2.5 h-2 md:h-2.5 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Ver ${especialidades[index].nombre}`}
          />
        ))}
      </div>

      {/* Indicador de auto-rotación */}
      <div className="text-center mt-4 text-white/50 text-xs md:text-sm">
        {isPaused ? "⏸ Pausado" : "▶ Rotación automática"} • {activeIndex + 1} / {especialidades.length}
      </div>
    </div>
  );
}
