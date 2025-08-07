import React from "react";
import Atropos from "atropos/react";
import "atropos/css";

import {
  FaBuilding,
  FaMapPin,
  FaCalendarAlt,
  FaBriefcase,
} from "react-icons/fa";

const experience = [
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

export default function ExperienceCards() {
  return (
    <div className=" min-h-screen w-full flex flex-col items-center justify-center p-15">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          Work Experience
        </h1>
        <div className="h-1 w-24 bg-emerald-500 mx-auto mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {experience.map((job, index) => (
            <Atropos
              key={index}
              className="atropos-card"
              activeOffset={60}
              rotateXMax={20}
              rotateYMax={20}
              shadow={true}
              highlight={true}
              shadowScale={1.08}
            >
              <div className="relative  backdrop-blur-xl border border-gray-700 hover:border-emerald-500/40 rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20">
                {/* Glow blob */}
                <div
                  className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500 opacity-20 blur-3xl pointer-events-none"
                  data-atropos-offset="-10"
                />

                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="bg-gray-700/50 p-3 rounded-lg border border-gray-600"
                    data-atropos-offset="-4"
                  >
                    <FaBriefcase className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h2
                      className="text-xl font-bold text-white"
                      data-atropos-offset="6"
                    >
                      {job.role}
                    </h2>
                    <p
                      className="text-gray-300 text-sm flex items-center gap-2 mt-1"
                      data-atropos-offset="4"
                    >
                      <FaBuilding className="w-4 h-4" />
                      {job.company}
                    </p>
                  </div>
                </div>

                {/* Duration and Location */}
                <div
                  className="flex flex-wrap text-sm text-gray-400 gap-x-6 gap-y-2 mb-4"
                  data-atropos-offset="3"
                >
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="w-4 h-4 text-emerald-500" />
                    <span>{job.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapPin className="w-4 h-4 text-emerald-500" />
                    <span>{job.location}</span>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="w-full h-px bg-gray-700 mb-4"
                  data-atropos-offset="2"
                />

                {/* Highlights */}
                <ul className="space-y-3 text-gray-300 text-sm list-none flex-grow">
                  {job.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 group"
                      data-atropos-offset={8 + i * 2}
                    >
                      <div className="relative flex-shrink-0 mt-1">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform duration-200" />
                        <div className="absolute -inset-1 rounded-full bg-emerald-500 opacity-10 blur-sm pointer-events-none" />
                      </div>
                      <span className="text-slate-200 text-sm font-medium leading-relaxed group-hover:text-white transition-colors duration-200">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Atropos>
          ))}
        </div>
      </div>
    </div>
  );
}
