import React, { useState, useEffect } from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, EffectCube } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import ProjectCard from "../components/ProjectCard";

import projectData from "../components/ProjectData";

const adjustHeights = () => {
  const cards = document.querySelectorAll(".project-card");
  if (!cards.length) return;

  // Reset heights
  cards.forEach(c => (c.style.height = "auto"));

  let maxHeight = 0;
  cards.forEach(c => {
    maxHeight = Math.max(maxHeight, c.offsetHeight);
  });

  cards.forEach(c => (c.style.height = `${maxHeight}px`));
};

const Creative = ({ projects }) => {
  useEffect(() => {
    adjustHeights();
    window.addEventListener("resize", adjustHeights);
    return () => window.removeEventListener("resize", adjustHeights);
  }, [projects]);
  return (
 <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        onSwiper={() => setTimeout(adjustHeights, 0)}
      onResize={adjustHeights}
      onSlideChange={adjustHeights}
      className="backdrop-blur-xl"
      >
      {projects.map((project, i) => (
        <SwiperSlide
          key={i}
          // className="w-[320px] h-[420px] flex items-stretch"
        >
          <div className="h-full flex items-stretch">
            <div className="w-full">
              <ProjectCard project={project} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Cube = ({ projects }) => {
  useEffect(() => {
    adjustHeights();
    window.addEventListener("resize", adjustHeights);
    return () => window.removeEventListener("resize", adjustHeights);
  }, [projects]);
  return (
<Swiper
        effect={'cube'}
          loop={true}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        onSwiper={() => setTimeout(adjustHeights, 0)}
      onResize={adjustHeights}
      onSlideChange={adjustHeights}
     className="backdrop-blur-xl"
      >
      {projects.map((project, i) => (
        <SwiperSlide
          key={i}
          // className="w-[320px] h-[420px] flex items-stretch"
        >
          
            <div className="w-full">
              <ProjectCard project={project} />
            </div>
        
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default function Project({interactiveMode}) {
  // const [isCreative, setCreative] = useState(true);
  return (
    <div id="project" className="w-full flex flex-col items-center p-4 sm:p-8 font-sans pt-15 scroll-mt-15">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">
          My Projects
        </h1>
        <div className="h-1 w-24 bg-emerald-500 mx-auto my-8 rounded-full" />

        {/* Toggle button 
        <div className="mb-6 flex justify-center items-center gap-2 text-white">
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={isCreative}
              onChange={() => setCreative(!isCreative)}
            />
            <div className="peer h-5 w-10 rounded-full bg-gray-600 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all peer-checked:bg-sky-500 peer-checked:after:translate-x-5"></div>
           </label>
           <span className="text-sm">{isCreative ? "Creative" : "Cube"}</span>
         </div>*/}

        {interactiveMode ? (
          <Cube projects={projectData} />
        ) : (
           <Creative projects={projectData} />
        )}
      </div>
    </div>
  );
}
