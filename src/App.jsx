import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import ParticlesContainer from './components/ParticlesContainer'
import Skills from "./sections/Skills";

const App = () => {
  return (
 <div className="relative w-full min-h-screen overflow-x-hidden ">
      {/* Background particles behind everything */}
      <div className="absolute inset-0 -z-10 pointer-events-auto">
        <ParticlesContainer />
      </div>

      {/* Actual content on top of particles */}
      <div className="container mx-auto max-w-screen px-4">
        <Navbar />
        <Hero />
        {/* <AboutMe /> */}
        <Education />
        <Skills />
        <Experience />
        <Project />
         <Contact />
      </div>
    </div>
  );
};

export default App;
