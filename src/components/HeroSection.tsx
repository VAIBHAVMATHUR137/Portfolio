import { ArrowDown, Download } from "lucide-react";
import { details } from "../PersonalDetails";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#010b1d] px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile Image  */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full border-2 border-[#3b82f6] glow-blue"></div>
              <div className="absolute inset-1 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="/Photograph.jpg"
                  alt="Vaibhav Mathur"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content - Show second on mobile */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                Hi, I'm{" "}
              </span>
              <br className="sm:hidden" />
              <span className="text-[#3b82f6] drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                {details.map((name) => name.name)}
              </span>
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mb-6">
              {details.map((profession) => profession.profession)}
            </h2>

            <p className="text-gray-300 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-8 lg:mb-10 leading-relaxed">
              {details.map((summary) => summary.summary)}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-transparent border border-white text-white rounded-md hover:bg-white/10 transition-all flex items-center justify-center gap-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              >
                Get in Touch
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-6 py-3 bg-transparent border border-white text-white rounded-md hover:bg-white/10 transition-all flex items-center justify-center gap-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12 lg:mt-16">
          <a
            href="#about"
            className="text-white animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
