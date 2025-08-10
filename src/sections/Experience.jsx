import React, { useState } from "react";
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
const experiences = [
  {
    company: "MResult",
    role: "Trainee Software Developer Intern",
    location: "Mumbai, Maharashtra",
    duration: "Jan 2025 – Jun 2025",
    highlights: [
      "Developed backend modules for eKYC verification and OCR-based document processing using Spring Boot, Spring Security, and PostgreSQL.",
      "Automated onboarding workflows, reducing customer processing time by 30%.",
      "Delivered demos and workshops on eKYC and linear workflow automation in OmniDocs.",
      "Integrated Digio APIs and reverse proxy tunneling to securely manage ID and face match verifications.",
      "Acted as the technical liaison between engineering and client teams to troubleshoot API integration challenges.",
    ],
  },
  {
    company: "Logixal Cloud Solution LLP",
    role: "Trainee Software Engineer Intern",
    location: "Mumbai, Maharashtra",
    duration: "Mar 2024 – Jul 2024",
    highlights: [
      "Built a full-stack banking prototype using Spring Boot, React, MySQL, and Tailwind CSS, with secure user flows and JWT-based authentication.",
      "Designed and tested REST APIs for account creation, NEFT transactions, and secure login flows.",
      "Automated core banking deployment and testing tasks to streamline demo client onboarding.",
      "Used Postman for API testing and Swagger for documentation, managing deployments on GitHub.",
      "Received positive feedback for adaptability and collaboration across cross-functional teams.",
    ],
  },
];

const AtroposCard = ({ experience }) => {
  return (
    <div className=" backdrop-blur-xl grid grid-cols-1 md:grid-cols-2 gap-10">
      {experiences.map((job, index) => (
        <Atropos
          key={job.company ?? index} // prefer a stable key if available
          className="atropos-card"
          activeOffset={60}
          rotateXMax={20}
          rotateYMax={20}
          shadow={true}
          highlight={true}
          shadowScale={1.08}
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
      className="backdrop-blur-xl"
    >
      {experiences.map((job, index) => (
        <SwiperSlide
          key={index}
          
          // className="w-[320px] h-[420px] flex items-stretch"
        >
          <div className="h-full flex items-stretch">
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
          <AtroposCard experience={experiences} />
        ) : (
          <FlipCard experience={experiences} />
        )}
      </div>
    </div>
  );
}
