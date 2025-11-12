"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeInSection = ({ 
  children, 
  delay = 0,
  duration = 1,
  y = 50,
  className = ""
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    // Animar solo los hijos directos (títulos, párrafos, etc.), NO la sección completa
    const childElements = element.children;
    
    if (childElements.length === 0) return;

    // Animación de fade-in + slide-up al hacer scroll SOLO para los elementos hijos
    gsap.fromTo(
      childElements,
      {
        opacity: 0,
        y: y,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        ease: 'power2.out',
        stagger: 0.15, // Los elementos van apareciendo uno tras otro
        scrollTrigger: {
          trigger: element,
          start: 'top 85%', // Comienza cuando el top del elemento está al 85% del viewport
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay, duration, y]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default FadeInSection;
