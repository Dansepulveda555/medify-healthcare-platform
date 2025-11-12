"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeInSection = ({ 
  children, 
  delay = 0,
  duration = 1.2,
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

    // Animación ultra impactante: fade + slide + scale + blur
    gsap.fromTo(
      childElements,
      {
        opacity: 0,
        y: y,
        scale: 0.9,
        filter: 'blur(10px)',
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: duration,
        delay: delay,
        ease: 'power3.out',
        stagger: 0.2, // Stagger más pronunciado para efecto dramático
        scrollTrigger: {
          trigger: element,
          start: 'top 90%', // Inicia antes para que sea más visible
          end: 'top 40%',
          toggleActions: 'play none none reverse',
          scrub: 0.5, // Suaviza la animación con el scroll
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
