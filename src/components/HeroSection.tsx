import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative px-4 py-12 sm:py-16">
      {/* Animated Diya Icon (optional) */}
      {/* <Flame className="w-10 h-10 sm:w-12 sm:h-12 text-primary animate-glow-pulse mb-6" /> */}

      {/* Event Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-glow-cyan mb-3 sm:mb-4 tracking-wider px-2">
        PROMPTOTSAVA
      </h1>

      {/* Tagline */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-glow-purple mb-8 sm:mb-10 md:mb-12 font-light tracking-wide px-4 max-w-3xl">
        Where Diwali Sparks Meet AI Futures
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4 w-full">
        <Button
          onClick={() => scrollToSection("rounds")}
          className="px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-semibold bg-primary text-primary-foreground border-2 border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 border-glow-cyan w-full sm:w-auto"
        >
          Explore Rounds
        </Button>
        <Button
          onClick={() => scrollToSection("leaderboard")}
          className="px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-semibold bg-secondary text-secondary-foreground border-2 border-secondary hover:bg-secondary/10 hover:text-secondary transition-all duration-300 border-glow-purple w-full sm:w-auto"
        >
          View Leaderboard
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
