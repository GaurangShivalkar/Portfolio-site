import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Project from "./sections/Project";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div className="container mx-auto max-w-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Education />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
