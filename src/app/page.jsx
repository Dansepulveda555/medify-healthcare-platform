import Portada from "./portada/page";
import SobreNosotros from "./sobreNosotros/page";
import Servicios from "./servicios/page";
import Footer from "./Footer/page";
import Portafolio from "./portafolio/page";

export default function Home() {
  return (
    <div className="">
      <div>
        <Portada></Portada>
      </div>
      <div>
        <Servicios></Servicios>
      </div>
      <div>
        <Portafolio></Portafolio>
      </div>
      <div>
        <SobreNosotros></SobreNosotros>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
