'use client'

import Navbar from "./components/Navbar";
import './globals.css'
import Landingpage from "./components/Landingpage";
import MArqueee from "./components/MArqueee";
import About from "./components/About";


// import Eyes from "./components/Eyes";
import dynamic from "next/dynamic"
import FeaturedProj from "./components/FeaturedProj";
import Casestudies from "./components/Casestudies";
import { useEffect } from "react";

const DynamicEyes = dynamic(() => import('./components/Eyes'),{ ssr:false});







export default function Home() {

    useEffect(()=>{
        (

          async () =>{

            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();


          } 




        )()


    },[])




  return (
   <div id="main">
   <Navbar/>
   <Landingpage/>
   <MArqueee/>
   <About/>
   {/* <Eyes/> */}
   <DynamicEyes/>
   <FeaturedProj/>
   <Casestudies/>
  


   </div>
  );
}
