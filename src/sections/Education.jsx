import React, { useState, useRef, useEffect } from "react";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import { EducationCard, CertificationCard } from "../components/CardComponent";
import {
  TimelineEducation,
  TimelineCertification,
} from "../components/TimelineCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/pagination";
import {
  educationItems,
  certificationItems,
} from "../components/EducationData";
import { motion, useScroll } from "framer-motion";

// Parallax swiper with equal height sync
const ParallaxSwiper = ({ items, CardComponent }) => {
  const swiperRef = useRef(null);

  const adjustHeights = () => {
    if (!swiperRef.current) return;
    const slides = swiperRef.current.querySelectorAll(".swiper-slide");
    let maxHeight = 0;
    slides.forEach(slide => {
      slide.style.height = "auto"; // reset first
      maxHeight = Math.max(maxHeight, slide.offsetHeight);
    });
    slides.forEach(slide => {
      slide.style.height = `${maxHeight}px`;
    });
  };

  useEffect(() => {
    adjustHeights();
    window.addEventListener("resize", adjustHeights);
    return () => window.removeEventListener("resize", adjustHeights);
  }, [items]);

  return (
    <Swiper
      modules={[Parallax, Pagination, Autoplay]}
      parallax={true}
      speed={600}
      spaceBetween={24}
      pagination={{ clickable: true }}
      autoplay={false}
      className="h-[20rem] md:h-[28rem]"
      onSwiper={(swiper) => {
        swiperRef.current = swiper.el;
        adjustHeights();
      }}
      onSlideChange={adjustHeights}
    >
      {items.map((item, idx) => (
        <SwiperSlide
          key={item.credential_id ?? `${item.name ?? "item"}-${idx}`}
        >
          <div className="h-full flex items-stretch">
            <div className="w-full">
              <CardComponent item={item} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const TimelineView = ({ items, CardComponent }) => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: timelineRef,
  });

  return (
    <div className="relative h-[20rem] md:h-[28rem] ">
      <div
        className="absolute left-5 top-0 h-full w-[2px] bg-neutral-800
                   [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
      />
      <motion.div
        className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-emerald-500"
        style={{
          scaleY: scrollYProgress,
          transformOrigin: "top",
        }}
      />
      <div
        ref={timelineRef}
        className="h-full hide-scrollbar overflow-y-auto p-4 pl-12"
      >
        <div className="space-y-8">
          {items.map((item, idx) => (
            <CardComponent
              key={item.credential_id ?? `${item.name ?? item.title}-${idx}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Education({interactiveMode}) {
  // const [isParallaxMode, setIsParallaxMode] = useState(true);

  return (
    <div id="education" className="text-white p-4 sm:p-6 lg:p-10 pt-15 scroll-mt-15">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">
          Learning & Achievements
        </h1>
        <div className="h-1 w-24 bg-emerald-500 mx-auto my-8 rounded-full" />

        {/* <div className="mb-6 flex justify-center items-center gap-2 text-white">
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={isParallaxMode}
              onChange={() => setIsParallaxMode(!isParallaxMode)}
            />
            <div className="peer h-5 w-10 rounded-full bg-gray-600 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all peer-checked:bg-sky-500 peer-checked:after:translate-x-5"></div>
          </label>
          <span className="text-sm">
            {isParallaxMode ? "Parallax" : "Timeline"}
          </span>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <section aria-labelledby="education-heading">
            <h2
              id="education-heading"
              className="text-2xl md:text-3xl font-semibold mb-4 flex items-center justify-center gap-3"
            >
              <FaGraduationCap className="text-emerald-500" /> Education
            </h2>
            {interactiveMode ? (
              <ParallaxSwiper
                items={educationItems}
                CardComponent={EducationCard}
              />
            ) : (
              <TimelineView
                items={educationItems}
                CardComponent={TimelineEducation}
              />
            )}
          </section>

          <section aria-labelledby="certification-heading">
            <h2
              id="certification-heading"
              className="text-2xl md:text-3xl font-semibold mb-4 flex items-center justify-center gap-3"
            >
              <FaCertificate className="text-emerald-500" /> Certifications
            </h2>
            {interactiveMode ? (
              <ParallaxSwiper
                items={certificationItems}
                CardComponent={CertificationCard}
              />
            ) : (
              <TimelineView
                items={certificationItems}
                CardComponent={TimelineCertification}
              />
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
