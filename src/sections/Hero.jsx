import { useScramble } from "../hooks/useScramble";
import Spline from "@splinetool/react-spline";

const Hero = ({ interactiveMode }) => {
  const nameLine = useScramble("Hey, I'm Gaurang Shivalkar", 40);
  const paraLine = useScramble(
    "MCA graduate with 11 months of internship experience in backend systems, API integration, and full-stack development using Java and React.",
    6,
    400
  );

  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 font-mono"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left column - text */}
        <div className="flex flex-col justify-center">
          <p className="text-pink-400 text-4xl sm:text-xl mb-2">
            &lt;h1&gt;{" "}
            <span className="text-white text-4xl font-bold">{nameLine}</span>{" "}
            &lt;/h1&gt;
          </p>
          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed max-w-2xl">
            &lt;p&gt; {paraLine} &lt;/p&gt;
          </p>
          <div className="mt-6">
            <a
              href="/GAURANG_SHIVALKAR_RESUME.pdf"
              download
              className="relative backdrop-blur-xl inline-block border border-emerald-600 px-5 py-2 text-white shine-hover hover:text-emerald-600 transition font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right column - Spline */}
        <div className="flex justify-center items-center w-full">
          {interactiveMode && (
            <Spline scene="https://prod.spline.design/Jb1UfHqqnPZyVZqQ/scene.splinecode" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
