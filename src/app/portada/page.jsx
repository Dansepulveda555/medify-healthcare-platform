"use client"
import Divider from '@mui/material/Divider';
import { Michroma } from "next/font/google";
import GradientText from "@/componentes/GradientText";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });

import Navbar from "@/componentes/navbar";
import Orb from "@/componentes/orbe";
import SplashCursor from "@/componentes/Splash";
import GooeyNav from '@/componentes/GooeyNav';

export default function Portada(){

  // update with your own items
const items = [
  { label: "Contratacion", href: "#" },
  { label: "Cotizar", href: "#" },
  { label: "Nuestro Método", href: "#" },
];


  return(
<div>

  <Navbar></Navbar>
  

  <div>
    <div style={{ width: '100%', height: '600px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false}/>
      <h1 className={michroma.className} style={{ position: 'absolute', color: '#fff', fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 'bold' }}>NEX.IO</h1>
    </div>
  </div>


<div style={{ height: '60px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <GooeyNav
    items={items}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    initialActiveIndex={0}
    animationTime={600}
    timeVariance={300}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
  />
</div>
 

  

  <div className="">

  </div>

</div>
  )
}