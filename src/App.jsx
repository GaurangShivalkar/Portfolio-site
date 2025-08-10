import React, { useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import ParticlesContainer from "./components/ParticlesContainer";
import Skills from "./sections/Skills";
import VantaBackground from "./components/VantaBackground";
import VantaBirds from "./components/VantaBirds";
const App = () => {
  const [interactiveMode, setInteractiveMode] = useState(false);
  const [backgroundMode, setBackgroundMode] = useState("particles"); // 'particles' | 'clouds' | 'birds'
const toggleBackground = () => {
    setBackgroundMode((prev) => {
      if (prev === "particles") return "clouds";
      if (prev === "clouds") return "birds";
      return "particles";
    });
  };
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden ">
     <div className="absolute inset-0 -z-10 pointer-events-none">
        {backgroundMode === "particles" && <ParticlesContainer />}
        {backgroundMode === "clouds" && <VantaBackground />}
        {backgroundMode === "birds" && <VantaBirds />}
      </div>

      {/* Actual content on top of particles */}
      <div className="container mx-auto max-w-screen px-4">
        <Navbar
                    interactiveMode={interactiveMode}
          setInteractiveMode={setInteractiveMode}
          backgroundMode={backgroundMode}
          toggleBackground={toggleBackground}
        />
        <Hero interactiveMode={interactiveMode} />
        {/* <AboutMe /> */}
        <Education interactiveMode={interactiveMode} />
        <Skills interactiveMode={interactiveMode} />
        <Experience interactiveMode={interactiveMode} />
        <Project interactiveMode={interactiveMode} />
        <Contact interactiveMode={interactiveMode} />
      </div>
    </div>
  );
};

export default App;
