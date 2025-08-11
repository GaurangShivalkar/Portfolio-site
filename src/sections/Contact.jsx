import React, { useState, useRef, useEffect } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const PROMPT = "C:\\Users\\Gaurang>";

export default function Contact() {
  const instructionLine = `${PROMPT} Press 'a' for about, 's' for social, 'd' for details`;

  const [commandBlocks, setCommandBlocks] = useState([]);
  const [input, setInput] = useState("");
  const terminalRef = useRef(null);

  // Scroll to bottom only if scroll exists (mostly not needed here)
  useEffect(() => {
    terminalRef.current?.scrollTo?.({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [commandBlocks, input]);

  const handleAbout = () => [
    "I’m currently open to full-time developer roles, open to freelance work as well",
  ];

  const handleSocial = () => [
    <div className="flex items-center space-x-3" key="github">
      <FaGithub className="w-6 h-6 text-emerald-500 flex-shrink-0" />
      <a href="https://github.com/GaurangShivalkar" className="text-lg">: https://github.com/GaurangShivalkar</a>
    </div>,
    <div className="flex items-center space-x-3" key="linkedin">
      <FaLinkedin className="w-6 h-6 text-emerald-500 flex-shrink-0" />
      <a href="https://www.linkedin.com/in/gaurang-shivalkar" className="text-lg">: https://www.linkedin.com/in/gaurang-shivalkar</a>
    </div>,
    // <div className="flex items-center space-x-3" key="twitter">
    //   <FaTwitter className="w-6 h-6 text-emerald-500 flex-shrink-0" />
    //   <span className="text-lg">: https://twitter.com/yourusername</span>
    // </div>,
  ];

  const handleDetails = () => [
    <div className="flex items-center space-x-3" key="email">
      <HiMail className="w-6 h-6 text-emerald-500 flex-shrink-0" />
      <a href="mailto:gaurangshivalkar@gmail.com" className="text-lg">: gaurangshivalkar@gmail.com</a>
    </div>,
    <div className="flex items-center space-x-3" key="phone">
      <HiPhone className="w-6 h-6 text-emerald-500 flex-shrink-0" />
      <span className="text-lg">: +91 9820793511</span>
    </div>,
    <div className="flex items-center space-x-3" key="location">
      <HiLocationMarker className="w-6 h-6 text-emerald-500 flex-shrink-0" />
      <span className="text-lg">: Mumbai, Maharashtra, India - 400025</span>
    </div>,
  ];

  const processCommand = (cmd) => {
    const c = cmd.trim().toLowerCase();
    switch (c) {
      case "a":
        return handleAbout();
      case "s":
        return handleSocial();
      case "d":
        return handleDetails();
      case "":
        return [];
      default:
        return [`Unknown command: ${cmd}. Use a, s, or d.`];
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setCommandBlocks((prev) => [
      ...prev,
      {
        cmd: input,
        output: processCommand(input),
      },
    ]);
    setInput("");
  };

  return (
   <div className="flex items-center justify-center p-6 sm:p-12 ">
      <div
        className="max-w-7xl w-full rounded-md shadow-xl border border-white/20 hover:border-emerald-500"
        style={{ fontFamily: "'Courier New', Courier, monospace" }}
      >
        {/* Title bar */}
        <div className="bg-gray-700/30 backdrop-blur-2xl flex items-center justify-between px-6 h-12 rounded-t-md border-b border-white/20">
          <div className="text-white font-semibold text-base select-text">
            C:\Windows\System32\cmd.exe
          </div>
          <div className="flex space-x-3">
            <button
              aria-label="Minimize"
              className="w-6 h-6 flex items-center justify-center hover:bg-gray-400 rounded"
            >
              <span className="w-4 border-t-2 border-white"></span>
            </button>
            <button
              aria-label="Maximize"
              className="w-6 h-6 flex items-center justify-center hover:bg-gray-400 rounded relative"
            >
              <div className="w-4 h-4 border-2 border-white absolute top-1 left-1"></div>
              <div className="w-4 h-4 border-2 border-white"></div>
            </button>
            <button
              aria-label="Close"
              className="w-6 h-6 flex items-center justify-center hover:bg-red-600 rounded"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Terminal content */}
        <div
          ref={terminalRef}
          className="bg-black/50 backdrop-blur-2xl text-emerald-500 text-xl p-8 max-h-[600px] overflow-y-auto hide-scrollbar whitespace-pre-wrap relative rounded-b-md flex flex-col"
          style={{ lineHeight: "1.8", fontVariantLigatures: "none" }}
        >
          {/* Instruction line */}
          <div className="mb-8">
            <span>{instructionLine}</span>
          </div>

          {/* Render all previous command blocks */}
          <div className="space-y-8 flex-grow">
            {commandBlocks.map(({ cmd, output }, idx) => (
              <div key={idx}>
                <div>
                  <span>{PROMPT} {cmd}</span>
                </div>

                <div className="mt-5 space-y-4 text-lg">
                  {output.map((line, i) =>
                    typeof line === "string" ? (
                      <div key={i}>{line}</div>
                    ) : (
                      <div key={i}>{line}</div>
                    )
                  )}
                </div>

                <div className="border-2 border-dashed border-emerald-500 mt-6" />
              </div>
            ))}
          </div>

          {/* Input prompt moves after all output */}
          <form
            onSubmit={onSubmit}
            className="flex items-center pt-4 mt-4"
          >
            <span className="mr-4 text-xl">{PROMPT}</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="none"
              className=" flex-grow text-emerald-500 font-mono text-xl outline-none   caret-green-400"
              placeholder="Type command (a, s, d) and press Enter"
            />
          </form>
        </div>
      </div>
    </div>
  );


}
