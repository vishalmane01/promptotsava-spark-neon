import { Zap, Sparkles, Trophy } from "lucide-react";
import RoundCard from "./RoundCard";
import { Link } from "react-router-dom";

const RoundsSection = () => {
  const rounds = [
    {
      number: 1,
      title: "Prompt Sprint",
      description:
        "Test your prompt engineering speed and creativity with image and video generation tasks.",
      color: "cyan" as const,
      icon: <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />,
      link: "/round-1",
      locked: false,
    },
    {
      number: 2,
      title: "Illusion of Ideas",
      description:
        "Showcase creativity through text and video outputs blending fun with imagination.",
      color: "purple" as const,
      icon: <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400" />,
      link: "/round-2",
      locked: true,
    },
    {
      number: 3,
      title: "Pitch Perfect",
      description:
        "Grand Finale: Present your vision through comprehensive AI-powered pitches.",
      color: "pink" as const,
      icon: <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-pink-400" />,
      link: "/round-3",
      locked: true,
    },
  ];

  return (
    <section
      id="rounds"
      className="py-12 sm:py-16 md:py-20 px-4 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-6 sm:mb-10 text-glow-cyan">
        Competition Rounds
      </h2>
      <p className="text-center text-muted-foreground mb-12 sm:mb-16 text-base sm:text-lg px-4 max-w-2xl mx-auto">
        Click on each card to view the complete challenge details
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {rounds.map((round) => (
          <div
            key={round.number}
            className="relative group flex flex-col justify-between rounded-3xl border border-white/10 p-6 sm:p-8 text-center backdrop-blur-md bg-gradient-to-br from-black/20 to-black/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex justify-center mb-4">{round.icon}</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Round {round.number}: {round.title}
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base mb-6">
              {round.description}
            </p>

            {round.locked ? (
              <span className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-yellow-500/20 text-yellow-400">
                Locked
              </span>
            ) : (
              <Link
                to={round.link}
                className="inline-block px-6 py-3 text-sm sm:text-base font-medium rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:opacity-90 transition"
              >
                View Details
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoundsSection;
