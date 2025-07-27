import Image from "next/image";
import Portada from "./portada/page";
import SobreNosotros from "./sobreNosotros/page";
import Servicios from "./servicios/page";
import proceso from "./proceso/page";
import Beneficios from "./beneficios/page";
import Accion from "./accion/page";
import Footer from "./Footer/page";
import Portafolio from "./portafolio/page";




export default function Home() {
  return (
<div className="">
  <div><Portada></Portada></div>
  <div><SobreNosotros></SobreNosotros></div>
  <div><Portafolio></Portafolio></div>
  <div><Servicios></Servicios></div>
  <div><Footer></Footer></div>
</div>
  );
}
