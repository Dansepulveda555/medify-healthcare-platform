"use client"
import { Michroma } from "next/font/google";
import GradientText from "@/componentes/GradientText";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });

import Navbar from "@/componentes/navbar";
import Orb from "@/componentes/orbe";
import SplashCursor from "@/componentes/Splash";


export default function Portada(){
  return(
<div>
<Navbar></Navbar>
  <div>
    <div style={{ width: '100%', height: '600px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false}/>
      <h1 className={michroma.className} style={{ position: 'absolute', color: '#fff', fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 'bold' }}>NexusDev</h1>
    </div>
  </div>

  <div className="flex justify-start w-full">
<GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={3} showBorder={false} className="custom-class">
<h3 className="titulosResponsive2">Desarrollo web de alto nivel para negocios de alto nivel</h3>
</GradientText>
  </div>

</div>
  )
}