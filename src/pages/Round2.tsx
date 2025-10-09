import { ArrowLeft, Clock, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/ParticleBackground";

const Round2 = () => {
  const tasks = [
    {
      title: "AI’s Existential Awakening (Video)",
      color: "text-rose-400",
      text: "Create a cinematic video exploring the moment an AI becomes self-aware, focusing on emotions like isolation and existential reflection with abstract and visually striking effects."
    },
    {
      title: "Product Ad Campaign Generation (Video)",
      color: "text-emerald-300",
      text: "Select any Star Group product and create a promotional video for an ad campaign that creatively markets the product and effectively conveys its message to the audience."
    },
    {
      title: "Hogwarts Diwali (Video)",
      color: "text-purple-300",
      text: "Generate a magical video imagining Diwali celebrations at Hogwarts, highlighting enchanting visuals, mystical charm, and immersive storytelling."
    }
  ];

  const criteria = [
    { title: "Prompt Clarity", color: "text-cyan-300", marks: "10", desc: "Is the prompt precise and well-structured?" },
    { title: "Creativity & Originality", color: "text-pink-300", marks: "10", desc: "How unique and imaginative is the concept?" },
    { title: "Theme Relevance", color: "text-purple-300", marks: "10", desc: "Does the output reflect the Diwali context?" },
    { title: "Output Engagement", color: "text-pink-300", marks: "10", desc: "Is the output fun, appealing, or impactful?" },
  ];

  const rules = [
    "Each team must complete any 2 tasks.",
    "Time limit: 45 minutes",
    "Teams must submit final outputs in given time.",
    "Use of pre-made content is not allowed — everything must be AI-generated live.",
    "Judges' decisions are final and binding.",
    "Top-performing teams will move to the Grand Finale (Round 3)."
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-6 py-10 sm:py-16">
        {/* Back Button */}
        <Link to="/">
          <Button className="mb-8 border border-secondary text-secondary hover:bg-secondary/10 transition-all hover:scale-105">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_25px_rgba(255,0,255,0.5)]">
            Round 2: Illusion of Ideas
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-gray-300">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-400" />
              <span>Time Limit: 45 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-pink-400" />
              <span>Total: 40 Marks</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/50 to-pink-900/25 border border-pink-500/40 backdrop-blur-md shadow-lg mb-14">
          <h2 className="text-3xl font-bold mb-4 text-pink-400 flex items-center gap-2">📖 Description</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            This round focuses on creativity, fun, and imagination. Teams will choose any 2 tasks from the given list and craft prompts to generate text or video outputs using Gemini. The goal is to showcase how prompt design can transform an idea into engaging AI-generated content.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This round blends non-technical creativity with a tech twist, pushing participants to think outside the box while staying true to the Diwali theme.
          </p>
        </div>

        {/* Tasks */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-900/40 to-indigo-900/20 border border-cyan-500/40 backdrop-blur-md shadow-lg mb-14">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-300 via-blue-300 to-pink-300 bg-clip-text text-transparent flex items-center gap-2">
            📝 Tasks (Choose Any 2)
          </h2>
          <div className="flex flex-col gap-8">
            {tasks.map((task, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-background/20 border border-white/10 hover:border-cyan-400/50 transition-all hover:scale-[1.02] hover:shadow-lg backdrop-blur-sm"
              >
                <h3 className={`text-2xl font-semibold mb-3 ${task.color}`}>{task.title}</h3>
                <p className="text-gray-300 leading-relaxed">{task.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Judging Criteria */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/50 to-blue-900/35 border border-purple-500/40 shadow-lg backdrop-blur-md mb-14">
          <h2 className="text-3xl font-bold mb-8 text-purple-300 flex items-center gap-2">⚖️ Judging Criteria (40 Marks)</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {criteria.map((crit, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-white/10 bg-background/20 hover:shadow-lg transition-all"
              >
                <h3 className={`text-lg font-semibold mb-1 ${crit.color}`}>{crit.title}</h3>
                <p className="text-gray-400 text-sm mb-1">{crit.marks} Marks</p>
                <p className="text-gray-300 text-sm">{crit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rules */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-800/40 to-pink-900/25 border border-purple-500/40 backdrop-blur-md shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-pink-300 flex items-center gap-2">📌 Rules</h2>
          <ul className="space-y-3 text-gray-300 list-disc list-inside">
            {rules.map((rule, i) => (
              <li key={i} className={i === rules.length - 1 ? "text-cyan-300 font-semibold" : ""}>{rule}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Round2;
