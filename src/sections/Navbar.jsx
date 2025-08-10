import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";


const ToggleSwitch = ({ checked, onChange, onLabel, offLabel }) => {
  return (
    <div className="flex items-center gap-2 text-white">
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          onChange={onChange}
        />
        <div className="peer h-5 w-10 rounded-full bg-gray-600
          after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4
          after:rounded-full after:bg-white after:transition-all
          peer-checked:bg-sky-500 peer-checked:after:translate-x-5"
        ></div>
      </label>
      <span className="text-sm">{checked ? onLabel : offLabel}</span>
    </div>
  );
}
const Navbar = ({ interactiveMode, setInteractiveMode, backgroundMode, toggleBackground }) => {
  const [isOpen, setIsOpen] = useState(false);
const buttonLabel = {
    particles: "Switch to Clouds",
    clouds: "Switch to Birds",
    birds: "Switch to Particles",
  };
  const links = [
    { name: "Hero", id: "hero" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "project" },
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
<div className="hidden sm:flex items-center gap-6">
  {/* Desktop: toggle + button visible here */}
  <ToggleSwitch
    checked={interactiveMode}
    onChange={() => setInteractiveMode(!interactiveMode)}
    onLabel="Interactive"
    offLabel="Normal"
  />
  <button
    onClick={toggleBackground}
    className="text-white border border-white/20 hover:text-emerald-500 hover:border-emerald-500"
  >
    {buttonLabel[backgroundMode]}
  </button>
</div>  {/* Desktop Nav */}
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
            <li className="flex flex-col items-center gap-3 mt-4">
      <ToggleSwitch
        checked={interactiveMode}
        onChange={() => setInteractiveMode(!interactiveMode)}
        onLabel="Interactive"
        offLabel="Normal"
      />
      <button
        onClick={toggleBackground}
        className="text-white border border-white/20 hover:text-emerald-500 hover:border-emerald-500"
      >
        {buttonLabel[backgroundMode]}
      </button>
    </li>
        </ul>
        
      )}
    </div>
  );
};

export default Navbar;
