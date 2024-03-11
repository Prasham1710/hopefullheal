
"use client";
import React, { useState } from "react";
import Hero from "./Hero";
import Features from "./Features";
import About from "./About";
import Abt from "./Abt";
import Services from "./Services";

const LandingPage = () => {


  return (
    <div className="w-full h-full ">
    <Hero/>
    <Features/>
    <About/>
    <Services />
    <Abt />
  </div>
  
  )
}

export default LandingPage
