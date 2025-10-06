import { Megaphone, Smile, Scroll } from "lucide-react";
import RoundCard from "./RoundCard";

const RoundsSection = () => {
  const rounds = [
    {
      number: 1,
      title: "Ad Jingle Challenge",
      description: "Participants write a short Diwali-themed ad jingle for an AI startup.",
      rules: [
        "Only 4 lines.",
        "Must mix Diwali & AI themes.",
        "Submit text only.",
      ],
      task: "Write a 4-line jingle for a Smart Diya Startup.",
      color: "cyan" as const,
      icon: <Megaphone className="w-10 h-10 text-primary" />,
    },
    {
      number: 2,
      title: "Festival Meme Maker",
      description: "Humor + creativity = success. Participants create AI + Diwali crossover memes.",
      rules: [
        "Memes must be original.",
        "Format: text or image.",
        "Must blend AI + Diwali context.",
      ],
      task: 'Create 2 Diwali-AI memes (e.g., "When ChatGPT tries to explain diyas to Alexa").',
      color: "purple" as const,
      icon: <Smile className="w-10 h-10 text-secondary" />,
    },
    {
      number: 3,
      title: "Shakespeare Meets Diwali",
      description: "A creative twist: explaining Diwali in Shakespearean English.",
      rules: [
        "Less than 150 words.",
        "Must sound poetic.",
        "Must explain Diwali's meaning.",
      ],
      task: "Write a poetic piece explaining Diwali in Shakespearean style.",
      color: "pink" as const,
      icon: <Scroll className="w-10 h-10 text-accent" />,
    },
  ];

  return (
    <section id="rounds" className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-4 text-glow-cyan">
        Competition Rounds
      </h2>
      <p className="text-center text-muted-foreground mb-12 text-lg">
        Click on each card to reveal the challenge details
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rounds.map((round) => (
          <RoundCard key={round.number} {...round} />
        ))}
      </div>
    </section>
  );
};

export default RoundsSection;
