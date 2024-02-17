'use client'

import Navbar from "./components/Navbar";
import './globals.css'
import Landingpage from "./components/Landingpage";
import MArqueee from "./components/MArqueee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import LocomotiveScroll from 'locomotive-scroll';







export default function Home() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
   <div id="main">
   <Navbar/>
   <Landingpage/>
   <MArqueee/>
   <About/>
   <Eyes/>

   </div>
  );
}
