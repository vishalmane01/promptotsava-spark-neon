import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative px-4 py-12 sm:py-16 overflow-hidden">
      {/* --- Top Header (Logos + Department Info) --- */}
      <div className="absolute top-0 left-0 w-full flex flex-col items-center mt-4 sm:mt-6 px-4">
        {/* Row: Left Logo | Department Name | Right Logo */}
        <div className="w-full flex items-center justify-between px-2 sm:px-6">
          {/* Left Logo */}
          <img
            src="https://res.cloudinary.com/dcbdnrlft/image/upload/v1759816077/leftLogo_fxysex.png"
            alt="Left Logo"
            className="w-16 sm:w-24 md:w-28 lg:w-32 object-contain"
          />

          {/* Department Name */}
          <div className="flex-1 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Department of Artificial Intelligence <br className="hidden sm:block" />
              and Machine Learning
            </h2>
          </div>

          {/* Right Logo */}
          <img
            src="https://res.cloudinary.com/dcbdnrlft/image/upload/v1759816008/rightLogo_w9h0jn.png"
            alt="Right Logo"
            className="w-20 sm:w-28 md:w-36 lg:w-44 object-contain"
          />
        </div>
      </div>

      {/* --- Hero Content (Below Header) --- */}
      <div className="mt-[10rem] sm:mt-[12rem] md:mt-[14rem] flex flex-col items-center justify-center">
        {/* Event Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-glow-cyan mb-4 tracking-widest px-2">
          PROMPT UTSAV
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-glow-purple mb-12 font-light tracking-wide px-4 max-w-4xl">
          Where Diwali Sparks Meet AI Futures
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-8 px-4 w-full">
          <Button
            onClick={() => scrollToSection("rounds")}
            className="px-10 py-5 sm:px-12 sm:py-6 text-lg sm:text-xl font-semibold bg-primary text-primary-foreground border-2 border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 border-glow-cyan w-full sm:w-auto"
          >
            Explore Rounds
          </Button>

          <Button
            onClick={() => scrollToSection("leaderboard")}
            className="px-10 py-5 sm:px-12 sm:py-6 text-lg sm:text-xl font-semibold bg-secondary text-secondary-foreground border-2 border-secondary hover:bg-secondary/10 hover:text-secondary transition-all duration-300 border-glow-purple w-full sm:w-auto"
          >
            View Leaderboard
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
