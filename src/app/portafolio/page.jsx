"use client"
import TextType from '@/componentes/TextType';
import FlowingMenu from "@/componentes/FlowingMenu";


export default function Portafolio() {
  const demoItems = [
    {
      link: "#",
      text: "Paginas Web",
      image: "",
    },
    {
      link: "#",
      text: "Landing Pages",
      image: "",
    },
    {
      link: "#",
      text: "Plataformas de E-Comerce",
      image: "",
    },
    {
      link: "#",
      text: "Aplicaciones Web",
      image: "",
    },
  ];
  return (
    
    <div>

      <div>
        <TextType className='titulosResponsive'
  text={["Conoce Nuestros Proyectos", " Y Sumate a la era digital", "Junto a Desarrolladores expertos"]}
  typingSpeed={50}
  pauseDuration={2500}
  showCursor={true}
  cursorCharacter="|"
/>
      </div>
      <div style={{ height: "600px", position: "relative" }}>
        <FlowingMenu items={demoItems} />
      </div>

      <div>
        
      </div>
    </div>
  );
}
