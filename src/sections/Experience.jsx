import React from "react";
import Atropos from "atropos/react";
import "atropos/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ExperienceCard from "../components/ExperienceCard";
import experienceData from "../data/ExperienceData";

const AtroposCard = ({ experience }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
      {experience.map((job, index) => (
        <Atropos
          key={job.company ?? index} // prefer a stable key if available
     
          activeOffset={60}
          rotateXMax={20}
          rotateYMax={20}
          shadow={true}
          highlight={true}
          shadowScale={1.08}
          className="backdrop-blur-2xl rounded-2xl"
        >
         
          {/* pass the single job object, not the whole array */}
          <ExperienceCard experience={job} />
        </Atropos>
      ))}
    </div>
  );
};
const FlipCard = ({ experience }) => {
  return (
    <Swiper
      effect={"flip"}
      grabCursor={true}
      pagination={true}
      loop={true}
      modules={[EffectFlip, Pagination, Navigation]}
    
    >
      {experience.map((job, index) => (
        <SwiperSlide
          key={index}
          
          // className="w-[320px] h-[420px] flex items-stretch"
        >
          <div className="h-full flex items-stretch backdrop-blur-2xl rounded-2xl">
            <div className="w-full">
              <ExperienceCard experience={job} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default function Experience({interactiveMode}) {
  // const [isFlip, setFlip] = useState(true);
  return (
    <div
      id="experience"
      className="w-full flex flex-col items-center justify-center p-15 pt-15 scroll-mt-15"
    >
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          Work Experience
        </h1>
        <div className="h-1 w-24 bg-emerald-500 mx-auto mb-12 rounded-full"></div>

        {/* <div className="mb-6 flex justify-center items-center gap-2 text-white">
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={isFlip}
              onChange={() => setFlip(!isFlip)}
            />
            <div className="peer h-5 w-10 rounded-full bg-gray-600 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all peer-checked:bg-sky-500 peer-checked:after:translate-x-5"></div>
          </label>
          <span className="text-sm">{isFlip ? "Flip" : "Atropos"}</span>
        </div> */}
        {interactiveMode ? (
          <AtroposCard experience={experienceData} />
        ) : (
          <FlipCard experience={experienceData} />
        )}
      </div>
    </div>
  );
}
