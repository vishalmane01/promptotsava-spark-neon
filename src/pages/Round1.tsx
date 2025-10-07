import { ArrowLeft, Clock, Trophy, AlertCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/ParticleBackground";

const Round1 = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />

      {/* --- Container --- */}
      <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
        {/* Back Button */}
        <Link to="/">
          <Button
            variant="outline"
            className="mb-8 border-primary/70 text-primary hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-text-glow drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Round 1: Prompt Sprint
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-6 text-gray-300">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-cyan-400" />
              <span>Time Limit: 45 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span>Total: 40 Marks</span>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="relative mb-14 p-8 rounded-2xl border border-cyan-500/40 bg-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(0,255,255,0.2)]">
          <div className="absolute -top-3 left-6 bg-cyan-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <Sparkles className="w-4 h-4" /> About
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">
            In this round, participants will race to craft the most creative and
            effective AI prompts. Each team should complete all challenge based on a futuristic Diwali theme.
            Using Google Gemini, teams must translate imagination into reality —
            with precision, creativity, and AI intuition.
          </p>

          <div className="flex items-start gap-3 mt-6 bg-red-500/10 border border-red-500/40 rounded-lg p-4">
            <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />
            <p className="text-red-400 font-semibold">
              Only top-performing teams will qualify for the next round!
            </p>
          </div>
        </div>

        {/* Tasks Section */}
        <div className="relative mb-14 p-8 rounded-2xl border border-purple-500/40 bg-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(255,0,255,0.2)]">
          <div className="absolute -top-3 left-6 bg-purple-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            🧠 Tasks
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-6">
            Image Generation Challenges
          </h2>
          <ul className="space-y-4 text-gray-300 leading-relaxed">
            <li>• Diwali in 2025 with futuristic eco-friendly celebrations.</li>
            <li>• Rangoli design inspired by neural networks and AI patterns.</li>
            <li>
              • Diwali on Mars — astronauts lighting diyas in a space station.
            </li>
            <li>• Diwali celebration in a holographic Ayodhya city.</li>
          </ul>
        </div>

        {/* Judging Criteria */}
        <div className="relative mb-14 p-8 rounded-2xl border border-pink-500/40 bg-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(255,0,128,0.2)]">
          <div className="absolute -top-3 left-6 bg-pink-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            ⚖️ Judging Criteria
          </div>
          <div className="grid sm:grid-cols-2 gap-8 mt-6">
            {[
              {
                title: "Prompt Clarity",
                color: "text-cyan-400",
                marks: "10 Marks",
                desc: "How precise and easy to interpret is your prompt?",
              },
              {
                title: "Creativity & Originality",
                color: "text-purple-400",
                marks: "10 Marks",
                desc: "How imaginative and unique are your prompt ideas?",
              },
              {
                title: "Relevance to Theme",
                color: "text-pink-400",
                marks: "10 Marks",
                desc: "Does it align with Diwali and futuristic/AI themes?",
              },
              {
                title: "Output Quality",
                color: "text-yellow-400",
                marks: "10 Marks",
                desc: "How well does the AI output match your vision?",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-white/10 bg-black/20 hover:bg-black/30 transition-all duration-300"
              >
                <h3 className={`text-lg font-semibold mb-2 ${item.color}`}>
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-1">{item.marks}</p>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rules Section */}
        <div className="relative p-8 rounded-2xl border border-cyan-500/40 bg-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(0,255,255,0.2)]">
          <div className="absolute -top-3 left-6 bg-cyan-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            📜 Rules
          </div>
          <ul className="space-y-4 text-gray-300 leading-relaxed mt-4">
            <li>• Time limit: 1 hour total for both tasks.</li>
            <li>• All prompts must be generated using Google Gemini.</li>
            <li>
              • Submit final outputs (screenshots or downloaded files) before
              time ends.
            </li>
            <li>
              • Strictly no plagiarism or pre-made outputs — live generation
              only.
            </li>
            <li>• Judges’ decision will be final.</li>
            <li className="text-red-400 font-semibold">
              • Elimination: Bottom 30% of teams will be disqualified.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Round1;
