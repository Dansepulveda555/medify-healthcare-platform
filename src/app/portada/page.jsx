"use client"
import Divider from '@mui/material/Divider';
import { Michroma } from "next/font/google";
import GradientText from "@/componentes/GradientText";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });

import Navbar from '@/componentes/Navbar'
import Orb from '@/componentes/Orbe'
import SplashCursor from "@/componentes/Splash";
import GooeyNav from '@/componentes/GooeyNav';
import ScrollVelocity from "@/componentes/InfiniteScroll";

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
</div><br />
 

  

  <div>
        <div>

            <div className="flex justify-center w-full">
<GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={3} showBorder={false} className="">
<h3 className="text-3xl font-black">Desarrollo web de alto nivel para negocios de alto nivel</h3>
</GradientText><br /><br /><br /><br />
  </div>


<ScrollVelocity
  texts={['JavaScript - React - Taildwind - Bootstrap - CSS - HTML5 - C# - Java - Python - NextJS -']} 
  velocity={30} 
  className="custom-scroll-text"

/>
<br /><br />
  </div>

  </div>

</div>
  )
}