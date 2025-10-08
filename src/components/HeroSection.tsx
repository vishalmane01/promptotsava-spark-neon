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
        <div className="w-full flex items-center justify-between px-2 sm:px-6 max-w-7xl mx-auto">
          {/* Left Logo */}
          <img
            src="https://res.cloudinary.com/dcbdnrlft/image/upload/v1759816077/leftLogo_fxysex.png"
            alt="Left Logo"
            className="w-14 sm:w-20 md:w-24 lg:w-28 xl:w-32 object-contain transition-transform duration-300 hover:scale-105"
          />

          {/* Department Name */}
          <div className="flex-1 text-center px-2">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight drop-shadow-md">
              Department of Artificial Intelligence <br className="hidden sm:block" />
              and Machine Learning
            </h2>
          </div>

          {/* Right Logo */}
          <img
            src="https://res.cloudinary.com/dcbdnrlft/image/upload/v1759816008/rightLogo_w9h0jn.png"
            alt="Right Logo"
            className="w-16 sm:w-24 md:w-28 lg:w-36 xl:w-44 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* --- Hero Content --- */}
      <div className="mt-[10rem] sm:mt-[12rem] md:mt-[13rem] lg:mt-[15rem] flex flex-col items-center justify-center px-4">
        {/* Event Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-glow-cyan mb-4 tracking-wide sm:tracking-widest leading-tight">
          PROMPT UTSAV
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-glow-purple mb-10 sm:mb-12 font-light tracking-wide max-w-3xl sm:max-w-4xl mx-auto leading-relaxed">
          Where Diwali Sparks Meet AI Futures
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-4 w-full sm:w-auto">
          <Button
            onClick={() => scrollToSection("rounds")}
            className="w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold bg-primary text-primary-foreground border-2 border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 border-glow-cyan"
          >
            Explore Rounds
          </Button>

          <Button
            onClick={() => scrollToSection("leaderboard")}
            className="w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold bg-secondary text-secondary-foreground border-2 border-secondary hover:bg-secondary/10 hover:text-secondary transition-all duration-300 border-glow-purple"
          >
            View Leaderboard
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
