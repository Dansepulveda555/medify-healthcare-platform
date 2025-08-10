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

      <div>
                  <div className="flex justify-center ">
            <h6
              className={`${michroma.className} text-2xl md:text-4xl text-center`}
            >
              Your Next Intelligence Online
            </h6>
          </div><br />
        <div
          style={{
            width: "100%",
            height: "600px",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
          <h1
            className={michroma.className}
            style={{
              position: "absolute",
              color: "#fff",
              fontSize: "clamp(1.5rem, 5vw, 3rem)",
              fontWeight: "bold",
            }}
          >
            NEX.IO
          </h1>
        </div>
        
      </div>

      <div className="w-full">
        <NavbarTai></NavbarTai>
      </div>

      <div>
        <div>
          <div className="flex justify-center w-full">
            <GradientText
              colors={["#5227FF", "#40E0D0", "#5227FF"]}
              animationSpeed={3}
              showBorder={false}
              className=""
            >
              <h3 className="text-2xl md:text-3xl font-black text-center">
                Desarrollo web premium para negocios de alto nivel
              </h3>
            </GradientText>
            <br />
            <br />
            <br />
            <br />
          </div>

          <div className="">
          <ScrollVelocity
            texts={[
           "Soporte Dedicado - E Commerce - Atención Personalizada - Paginas Web premium - Desarrollo a Medida - Carga Ultra Rápida -",
]}
            velocity={30}
            className="custom-scroll-text h-[3vh]"
          />
          </div>


          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
