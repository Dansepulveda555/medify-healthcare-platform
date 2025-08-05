"use client"
import TextType from '@/componentes/TextType';
import FlowingMenu from "@/componentes/FlowingMenu";


export default function Portafolio() {
  const demoItems = [
    {
      link: "/paginasWeb",
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
      <br /><br /><br /><br /><br />

      <div className='block md:hidden'>
          <h1 className="text text-4xl md:text-5xl lg:text-7xl font-black justify-center px-8 mb-8">
        Nuestros Proyectos
      </h1>
      </div>

      <div className='hidden sm:block'>
        <TextType className='text text-2xl md:text-7xl font-black px-16 mb-16'
  text={["Conoce Nuestros Proyectos", "Y Trabaja con", "Expertos en Desarrollo de Software"]}
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
