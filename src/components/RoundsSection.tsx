import { Zap, Sparkles, Trophy, Star } from "lucide-react";
import RoundCard from "./RoundCard";

const RoundsSection = () => {
  const rounds = [
    {
      number: 1,
      title: "Prompt Sprint",
      description: "Test your prompt engineering speed and creativity with image and video generation tasks.",
      color: "cyan" as const,
      icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
      link: "/round-1",
    },
    {
      number: 2,
      title: "Illusion of Ideas",
      description: "Showcase creativity through text and video outputs blending fun with imagination.",
      color: "purple" as const,
      icon: <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />,
      link: "/round-2",
      comingSoon: true,
    },
    {
      number: 3,
      title: "Pitch Perfect",
      description: "Grand Finale: Present your vision through comprehensive AI-powered pitches.",
      color: "pink" as const,
      icon: <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />,
      link: "/round-3",
      comingSoon: true,
    },
    {
      number: 4,
      title: "Mystery Round",
      description: "An exciting surprise challenge awaits! Stay tuned for more details.",
      color: "gold" as const,
      icon: <Star className="w-8 h-8 sm:w-10 sm:h-10 text-[hsl(var(--neon-gold))]" />,
      comingSoon: true,
    },
  ];

  return (
    <section id="rounds" className="py-12 sm:py-16 md:py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-glow-cyan">
        Competition Rounds
      </h2>
      <p className="text-center text-muted-foreground mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg px-4">
        Click on each card to view the complete challenge details
      </p>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {rounds.map((round) => (
          <RoundCard key={round.number} {...round} />
        ))}
      </div>
    </section>
  );
};

export default RoundsSection;
