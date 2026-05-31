import dynamic from "next/dynamic";
import Hero from "./Hero";

// Below-fold sections loaded lazily — not needed for initial paint
const Features = dynamic(() => import("./Features"));
const About = dynamic(() => import("./About"));
const Services = dynamic(() => import("./Services"));
const Abt = dynamic(() => import("./Abt"));

export default function LandingPage() {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <About />
      <Services />
      <Abt />
    </div>
  );
}
