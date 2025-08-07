import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Hero", id: "hero" },
    { name: "About Me", id: "about" },
    { name: "Education", id: "education" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (

<div className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-sm shadow-2xl dark:bg-black/30 shine-hover">

      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-4 sm:py-3">
          <a
            href="/"
            className="text-xl font-bold transition-colors duration-300 text-white hover:text-emerald-600 active:text-emerald-600"
          >
            Gaurang Shivalkar
          </a>

          {/* Desktop Nav */}
          <ul className="hidden sm:flex space-x-6">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-white hover:text-emerald-600"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-white focus:outline-none active:text-emerald-600 sm:hidden"
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="sm:hidden px-4 pb-4 space-y-2">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="block text-center text-white hover:text-emerald-600 active:text-emerald-600 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
