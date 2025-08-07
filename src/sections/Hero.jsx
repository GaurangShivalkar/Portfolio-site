import { useScramble } from "../hooks/useScramble";

const Hero = () => {
   const nameLine = useScramble("Hey, I'm Gaurang Shivalkar", 40)
  const paraLine = useScramble(
    "MCA graduate with 11 months of internship experience in backend systems, API integration, and full-stack development using Java and React.",
  6,
  400// small delay before starting this one
  )
  return (
<section className="min-h-screen text-white flex items-center px-8 sm:px-16">
      <div className="w-full max-w-none font-mono">
        {/* Faux heading with inline name */}
        <p className="text-pink-400 text-4xl sm:text-xl mb-2">
          &lt;h1&gt; <span className="text-white text-4xl font-bold">{nameLine}</span> &lt;/h1&gt;
        </p>

        {/* Paragraph */}
        <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed max-w-2xl">
          &lt;p&gt; {paraLine} &lt;/p&gt;
        </p>

        {/* Button */}
        <div className="mt-6">
          <a
            href="/GAURANG_SHIVALKAR_RESUME.pdf"
            download
            className=" relative  backdrop-blur-xl inline-block border border-emerald-600  px-5 py-2 text-white shine-hover hover:text-emerald-600 transition font-semibold"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
