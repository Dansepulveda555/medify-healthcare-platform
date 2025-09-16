"use client";
import Divider from "@mui/material/Divider";
import { Michroma } from "next/font/google";
import GradientText from "@/componentes/GradientText";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });

import Navbar from "@/componentes/Navbar";
import Orb from "@/componentes/Orbe";
import SplashCursor from "@/componentes/Splash";
import GooeyNav from "@/componentes/GooeyNav";
import ScrollVelocity from "@/componentes/InfiniteScroll";
import NavbarTai from "@/componentes/NavbarTai";
import Aurora from "@/componentes/Aurora";

export default function Portada() {
  return (
    <div>
      <div>
        <Aurora></Aurora>
      </div>



                  <GradientText
              colors={["#5227FF", "#40E0D0", "#5227FF"]}
              animationSpeed={3}
              showBorder={false}
              className=""
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug text-center px-4">
                Desarrollo web premium para negocios de alto nivel
              </h3>
            </GradientText><br />




      <div className="mt-[-50px]">

        <div className="w-full h-[600px] relative flex justify-center items-center mt-[-50px]">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
            size={100}
          />
          <h1
            className={`${michroma.className} text-2xl md:text-4xl absolute text-white font-bold`}
          >
            NativeCode
          </h1>
        </div>
        
      </div>

    
        <NavbarTai></NavbarTai>
   

      <div>
        <div>
          <div className="flex justify-center w-full">

     
            <br />
          </div>

          <div className="">
          <ScrollVelocity
            texts={[
           "Soporte Dedicado - E Commerce - Atención Personalizada - Paginas Web premium - Desarrollo a Medida - Carga Ultra Rápida -",
]}
            velocity={30}
            className="custom-scroll-text h-[7vh] text-base md:text-2xl"
          />
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
