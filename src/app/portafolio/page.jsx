"use client"
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
    
    <div className="">

      <div>
        <h1 className="titulosResponsive" >Nuestros Proyectos</h1><br /><br />
      </div>

      <div style={{ height: "600px", position: "relative" }}>
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
}
