import { Zap, Sparkles, Trophy, Star } from "lucide-react";
import RoundCard from "./RoundCard";

const RoundsSection = () => {
  const rounds = [
    {
      number: 1,
      title: "Prompt Sprint",
      description:
        "Test your prompt engineering speed and creativity with image and video generation tasks.",
      color: "cyan" as const,
      icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />,
      link: "/round-1",
    },
    {
      number: 2,
      title: "Illusion of Ideas",
      description:
        "Showcase creativity through text and video outputs blending fun with imagination.",
      color: "purple" as const,
      icon: <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />,
      link: "/round-2",
    },
    {
      number: 3,
      title: "Pitch Perfect",
      description:
        "Grand Finale: Present your vision through comprehensive AI-powered pitches.",
      color: "pink" as const,
      icon: <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-pink-400" />,
      link: "/round-3",
    },
    {
      number: 4,
      title: "Next Big Reveal",
      description:
        "Stay tuned for an exciting new challenge — details coming soon!",
      color: "yellow" as const,
      icon: <Star className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" />,
      comingSoon: true,
    },
  ];

  return (
    <section
      id="rounds"
      className="py-12 sm:py-16 md:py-20 px-4 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-glow-cyan">
        Competition Rounds
      </h2>
      <p className="text-center text-muted-foreground mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg px-4">
        Click on each card to view the complete challenge details
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {rounds.map((round) => (
          <div
            key={round.number}
            className={`relative group rounded-2xl border border-white/10 p-6 sm:p-8 text-center backdrop-blur-md 
              transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${round.color}-500/20`}
          >
            <div className="flex justify-center mb-4">{round.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Round {round.number}: {round.title}
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base mb-4">
              {round.description}
            </p>

            {round.comingSoon ? (
              <span className="px-3 py-1 text-sm font-semibold rounded-full bg-yellow-500/20 text-yellow-400">
                Coming Soon
              </span>
            ) : (
              <a
                href={round.link}
                className="inline-block px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:opacity-90 transition"
              >
                View Details
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoundsSection;
