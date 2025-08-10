import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdClose, MdMinimize, MdCropSquare } from "react-icons/md";

// Main App Component
export default function Contact() {
  // Social Links Component
  const SocialLink = ({ icon: Icon, href, "aria-label": ariaLabel }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-gray-400 hover:text-emerald-400 transition-all duration-300 group"
    >
      <Icon className="w-8 h-8 md:w-10 md:h-10 transform group-hover:scale-110 group-hover:shadow-[0_0_20px_#34d399] rounded-full" />
    </a>
  );

  // Form Input Component
  const FormInput = ({ type, name, placeholder, required }) => (
    <div>
      <label htmlFor={name} className="text-emerald-400">
        ~/{name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full border border-dashed border-white/20 focus:border-emerald-500 hover:border-emerald-500 text-gray-300 placeholder-gray-500 outline-none p-2 mt-1 "
      />
    </div>
  );

  // Blinking Cursor Component
  const BlinkingCursor = () => (
    <span
      className="w-2 h-5 bg-emerald-400 animate-blink ml-2"
      aria-hidden="true"
    ></span>
  );

  return (
    <div
      id="contact"
      className="text-white p-4 sm:p-6 lg:p-8 flex items-center justify-center pt-15 scroll-mt-15"
    >
      <div className="max-w-7xl w-full flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">
          Contact
        </h1>
        <div className="h-1 w-24 bg-emerald-500 mx-auto my-8 rounded-full" />

        {/* Terminal Window */}
        <div className="w-full max-w-4xl backdrop-blur-sm rounded-lg shadow-2xl shadow-emerald-500/10 overflow-hidden border border-white/20">
          {/* ... rest of your terminal code */}

          {/* Title Bar */}
          <div className="bg-gray-800/80 flex items-center justify-between px-4 py-2 border-b border-gray-700">
            <p className="text-sm text-gray-400"></p>
            <div className="flex items-center space-x-3 text-gray-500">
              <MdMinimize />
              <MdCropSquare />
              <MdClose className="hover:text-red-500 transition-colors" />
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 md:p-8">
            <div className="flex items-center">
              <span className="text-emerald-400">
                C:/Users/Guest/Contact.jsx
              </span>

              <BlinkingCursor />
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Side: Info & Socials */}
              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl text-emerald-400">
                  [ Contact Information ]
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  I'm currently available for freelance work and open to
                  discussing new projects. Feel free to reach out via email or
                  connect with me on social media.
                </p>
                <div className="flex items-center space-x-4 text-emerald-400">
                  <FaEnvelope className="w-5 h-5" />
                  <a
                    href="mailto:your-email@example.com"
                    className="hover:underline"
                  >
                    your-email@example.com
                  </a>
                </div>
                <div className="flex items-center space-x-4 text-emerald-400">
                  <FaPhone className="w-5 h-5" />
                  <a href="tel:+1234567890" className="hover:underline">
                    +9820793511
                  </a>
                </div>

                <h3 className="text-lg text-emerald-400 pt-4">
                  [ Social Links ]
                </h3>
                <div className="flex space-x-6 items-center mt-2">
                  <SocialLink
                    icon={FaGithub}
                    href="https://github.com"
                    aria-label="GitHub Profile"
                  />
                  <SocialLink
                    icon={FaLinkedin}
                    href="https://linkedin.com"
                    aria-label="LinkedIn Profile"
                  />
                  <SocialLink
                    icon={FaTwitter}
                    href="https://twitter.com"
                    aria-label="Twitter Profile"
                  />
                </div>
              </div>

              {/* Right Side: Contact Form */}
              <form className="space-y-6" action="#" method="POST">
                <FormInput
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
                <FormInput
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <div>
                  <label htmlFor="message" className="text-emerald-400">
                    ~/message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Your message here..."
                    required
                    className="w-full  border border-dashed border-white/20 focus:border-emerald-500 hover:border-emerald-500 text-gray-300 placeholder-gray-500 outline-none p-2 mt-1 transition-colors duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center relative px-4 py-3 border border-dashed border-white/20 text-white rounded-md shine-hover 
                hover:text-emerald-500 hover:border-emerald-500 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50"
                >
                  Execute Send
                  <FiSend className="ml-3 transform group-hover:rotate-45 transition-transform duration-300" />
                </button>
              </form>
            </div>

            <div className="mt-8 text-xs text-gray-500">
              <p>Process finished with exit code 0</p>
            </div>
          </div>
        </div>
        <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        .type-effect {
            white-space: nowrap;
            overflow: hidden;
            display: inline-block;
            animation: typing 2s steps(30, end);
        }
       
    `}</style>
      </div>
    </div>
  );
}
