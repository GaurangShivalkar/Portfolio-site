import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import {
  EducationCardContent,
  CertificationCardContent,
} from "../components/CardComponent";

import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/pagination";

const educationItems = [
  {
    title: "Master in Computer Application (MCA)",
    institute: "MET Institute of Computer Science",
    duration: "November 2022 – July 2024",
    cgpa: "8.86",
    details: [
      "Published a research paper",
      "Secured internship with placement",
    ],
  },
  {
    title: "Bachelor of Science in Information Technology (B. Sc. IT)",
    institute: "Kirti M. Doongursee College",
    duration: "June 2019 – June 2022",
    cgpa: "9.27",
    details: ["Secured 1st place in college"],
  },
  {
    title: "HSC – Science",
    institute: "D. G. Ruparel College",
    duration: "June 2018 – May 2019",
    cgpa: "64.31%",
    details: ["Bifocal vocational in Computer Science"],
  },
];

const certificationItems = [

  {
    name: "Data Analyst Certification",
    issuer: "OneRoadmap",
    issued: "April 2025",
    credential_id: "CERT-907937FE",
    skills: ["Data Analysis"],
  },
  {
    name: "Electronic Arts - Software Engineering Job Simulation",
    issuer: "Forage",
    issued: "April 2025",
    credential_id: "sHjhhAqfp9zJNqnFa",
    skills: ["Software Engineering Practices"],
  },
  {
    name: "Master Microservices with Spring Boot and Spring Cloud",
    issuer: "Udemy",
    issued: "February 2025",
    credential_id: "",
    skills: ["Spring Boot", "Java", "Kubernetes", "Docker", "Microservices"],
  },
  {
    name: "Career Essentials in Data Analysis",
    issuer: "Microsoft and LinkedIn",
    issued: "October 2024",
    credential_id: null,
    skills: ["Data Visualization", "Data Analytics", "Data Analysis"],
  },
  {
    name: "J.P. Morgan - Software Engineering Job Simulation",
    issuer: "Forage",
    issued: "February 2024",
    credential_id: "Fdy2ajvNbEQY8GMav",
    skills: ["Software Engineering Practices"],
  },
  {
    name: "Building Scalable Java Microservices with Spring Boot and Spring Cloud",
    issuer: "Google Cloud Training",
    issued: "January 2024",
    credential_id: "4CKUPQXLYFE6",
    skills: ["Java", "Spring Boot"],
  },
  {
    name: "Java Programming Fundamentals",
    issuer: "Infosys Springboard",
    issued: "January 2024",
    credential_id: null,
    skills: ["Java"],
  },
  {
    name: "AWS Academy Graduate - Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    issued: "December 2023",
    credential_id: null,
    skills: ["Cloud Basics", "AWS"],
  },
  {
    name: "Java (Basics)",
    issuer: "HackerRank",
    issued: "September 2023",
    credential_id: null,
    skills: ["Java"],
  },
  {
    name: "MongoDB Basics - ICT Academy Learnathon",
    issuer: "MongoDB",
    issued: "August 2023",
    credential_id: "MDB0y81y957w4",
    skills: ["MongoDB"],
  },
  {
    name: "AWS Academy Graduate - Machine Learning Foundations",
    issuer: "Amazon Web Services (AWS)",
    issued: "June 2023",
    credential_id: null,
    skills: ["Machine Learning", "AWS"],
  },
];

export default function Education() {
  // No more useState needed! We are just displaying a static list.

  return (
    <div className="min-h-screen text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto ">
        {/* Main page title */}
        <h1 className="text-5xl font-bold text-center mb-12 text-cyan-400">
          My Journey
        </h1>
        <div className="lg:flex lg:gap-10 ">
          {/* --- Education Section --- */}
          <section className="mb-7 flex-1">
            <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
              <FaGraduationCap className="text-cyan-400" />
              Education
            </h2>
         
              <Swiper
                speed={600}
                spaceBetween={30}
                parallax={true}
                // autoplay={{ delay: 3000, disableOnInteraction: false}}
                modules={[Parallax, Autoplay, Pagination]}
                className="w-full md:w-2xl"
              >
                {educationItems.map((item) => (
                  <SwiperSlide key={item.title}>
                    <EducationCardContent item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
           
          </section>

          {/* --- Certifications Section --- */}
          <section className="flex-1">
            <h2 className="text-3xl w-full font-semibold mb-8 flex items-center gap-3">
              <FaCertificate className="text-cyan-400" />
              Certifications
            </h2>
              <Swiper
                speed={600}
                spaceBetween={50}
                parallax={true}
                // autoplay={{ delay: 3000, disableOnInteraction: false}}
                modules={[Parallax, Autoplay, Pagination]}
                className="w-full md:w-2xl"
              >
                {certificationItems.map((item, i) => (
                  <SwiperSlide key={item.credential_id || `${item.name}-${i}`}>
                    <CertificationCardContent item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
          </section>
        </div>
      </div>
    </div>
  );
}
