import React from 'react';
import { GoCheckCircleFill } from "react-icons/go";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// The original, untrimmed project data
const projects = [
  {
    title: "eKYC and Customer Onboarding Solution",
    description: "Enterprise-grade onboarding platform integrating OCR and ID verification workflows.",
    techStack: ["Spring Boot", "REST APIs", "Spring Security", "Redis", "PostgreSQL", "OmniDocs"],
    bullets: [
      "Integrated Digio APIs for comprehensive ID and face match verification as part of the eKYC process.",
      "Built OTP-based email verification system leveraging Redis for enhanced user onboarding security.",
      "Designed and optimized PostgreSQL schemas to streamline KYC workflows and document management.",
      "Automated document verification with OCR and created linear eKYC workflows using OmniDocs DMS.",
      "Implemented webhooks for status updates and used reverse proxy tunneling to secure external API interactions."
    ],
    date: "Jun 2025",
    github: "",
    live: "",
    source: "MResult"
  },
  {
    title: "Banking System Prototype",
    description: "Full-stack banking app featuring user authentication, transactions, and data dashboards.",
    techStack: ["Spring Boot", "React JS", "Tailwind CSS", "MySQL", "Spring Security", "JWT", "Chart.js"],
    bullets: [
      "Developed full-stack banking application featuring user authentication and transaction management.",
      "Applied JWT for secure session handling and created modular React components for UI efficiency.",
      "Designed RESTful APIs for transaction processing and implemented interactive dashboards using Chart.js.",
      "Transitioned from legacy Servlets/JSP to a modern architecture with Spring Boot and React.",
      "Engaged in agile development, used Postman for testing, Swagger for documentation, GitHub for deployment."
    ],
    date: "Jul 2024",
    github: "https://github.com/example/banking-prototype",
    live: "https://example.com/banking-demo",
    source: "Logixal Cloud Solution LLP"
  },
  {
    title: "NewsNexus – News Forum Site",
    description: "News aggregation platform with categorized APIs, dark mode, and commenting.",
    techStack: ["Java", "HTML", "CSS", "JavaScript"],
    bullets: [
      "Created a news aggregation site with dynamic filtering and categorized news updates using APIs.",
      "Enhanced user experience with features like Dark Mode and comment section.",
      "Improved responsiveness to ensure seamless interaction across devices."
    ],
    date: "Jul 2023",
    github: "https://github.com/example/newsnexus",
    live: "",
    source: "Personal Project"
  },
  {
    title: "ProConnect – Professional Networking Site",
    description: "Networking platform for job seekers, employers, and placement teams.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    bullets: [
      "Developed a professional networking platform using the MERN stack.",
      "Implemented features like profile creation, job posting, and user networking.",
      "Focused on backend development to ensure secure data storage and efficient handling of user requests.",
      "Built authentication strategies and modular backend for managing a large user base."
    ],
    date: "Mar 2022",
    github: "https://github.com/example/proconnect",
    live: "https://example.com/proconnect-demo",
    source: "Personal Project"
  }
];



export default function Project() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">My Projects</h1>
        <div className="h-1 w-24 bg-emerald-500 mx-auto my-8 rounded-full" />

        <div className="flex flex-col gap-10">
          {projects.map(({ title, date, source, description, bullets, techStack, github, live }, i) => (
            <div key={i} className=" p-6 sm:p-8 rounded-2xl border backdrop-blur-xl border-white/20 flex flex-col transition-all duration-300 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-900/20">
              
              {/* Header */}
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <span className="text-sm font-medium text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full whitespace-nowrap">{date}</span>
              </div>

              <p className="text-sm font-semibold text-emerald-400 mb-4">{source}</p>
              <p className="text-gray-300 mb-6">{description}</p>

              {/* Bullets */}
              <ul className="space-y-3 text-gray-300 mb-6">
                {bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <GoCheckCircleFill className="w-4 h-4 text-emerald-500 mt-1" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="mt-auto pt-4 border-t border-gray-700/50 flex flex-wrap gap-4 justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, idx) => (
                    <span key={idx} className="bg-emerald-500/10 text-emerald-300 text-xs font-medium px-3 py-1 rounded-full border border-emerald-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors">
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {live && (
                    <a href={live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/20 hover:border-emerald-500/40">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
