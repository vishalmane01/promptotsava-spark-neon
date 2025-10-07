import { ArrowLeft, Clock, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/ParticleBackground";

const Round2 = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <ParticleBackground />

      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        {/* Back Button */}
        <Link to="/">
          <Button
            variant="outline"
            className="mb-6 sm:mb-10 border-secondary text-secondary hover:bg-secondary/10 transition-all hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_25px_rgba(255,0,255,0.5)]">
            Round 2: Illusion of Ideas
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-gray-300">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-400" />
              <span>Time Limit: 1 hour 15 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-pink-400" />
              <span>Total: 40 Marks</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/40 to-pink-900/20 border border-pink-500/30 backdrop-blur-md shadow-[0_0_25px_rgba(255,0,255,0.3)] mb-12">
          <h2 className="text-3xl font-bold mb-4 text-pink-400">📖 Description</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            This round focuses on creativity, fun, and imagination. Teams will choose any 2 tasks from the given list and craft prompts to generate text or video outputs using Gemini. The goal is to showcase how prompt design can transform an idea into engaging AI-generated content.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This round blends non-technical creativity with a tech twist, pushing participants to think outside the box while staying true to the Diwali theme.
          </p>
        </div>

        {/* Tasks */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-indigo-900/10 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_25px_rgba(0,255,255,0.2)] mb-12">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-300 via-blue-300 to-pink-300 bg-clip-text text-transparent">
            📝 Tasks (Choose Any 2)
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Ad Jingle Challenge", color: "text-cyan-300", text: "Write a catchy 4-line jingle for a Diwali sale at a smart diya startup." },
              { title: "Festival Meme Maker", color: "text-pink-300", text: "Generate a Diwali-themed meme about college students during exams." },
              { title: "Shakespeare Meets Diwali", color: "text-purple-300", text: "Explain why Diwali is celebrated, but in Shakespearean English." },
              { title: "Future Fireworks (Video)", color: "text-blue-300", text: "Generate a video of futuristic eco-friendly Diwali fireworks made of drones and lasers." },
              { title: "Hogwarts Diwali (Video)", color: "text-purple-300", text: "Imagine Diwali being celebrated at Hogwarts. Generate a video for it." },
            ].map((task, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-background/20 border border-white/10 hover:border-cyan-400/40 transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
              >
                <h3 className={`text-xl font-semibold ${task.color} mb-2`}>{task.title}</h3>
                <p className="text-gray-300">{task.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Judging Criteria */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/40 to-blue-900/30 border border-purple-500/30 shadow-[0_0_25px_rgba(150,0,255,0.3)] backdrop-blur-md mb-12">
          <h2 className="text-3xl font-bold mb-8 text-purple-300">⚖️ Judging Criteria (40 Marks)</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Prompt Clarity", color: "text-cyan-300", marks: "10", desc: "Is the prompt precise and well-structured?" },
              { title: "Creativity & Originality", color: "text-pink-300", marks: "10", desc: "How unique and imaginative is the concept?" },
              { title: "Theme Relevance", color: "text-purple-300", marks: "10", desc: "Does the output reflect the Diwali context?" },
              { title: "Output Engagement", color: "text-pink-300", marks: "10", desc: "Is the output fun, appealing, or impactful?" },
            ].map((crit, i) => (
              <div
                key={i}
                className="p-4 rounded-lg border border-white/10 bg-background/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all"
              >
                <h3 className={`text-lg font-semibold ${crit.color} mb-1`}>{crit.title}</h3>
                <p className="text-gray-400 text-sm mb-1">{crit.marks} Marks</p>
                <p className="text-gray-300 text-sm">{crit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rules */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-800/30 to-pink-900/20 border border-purple-500/30 backdrop-blur-md shadow-[0_0_25px_rgba(255,0,255,0.3)]">
          <h2 className="text-3xl font-bold mb-6 text-pink-300">📌 Rules</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Each team must complete any 2 tasks.</li>
            <li>• Time limit: 1 hour 15 minutes.</li>
            <li>• All prompts must be executed using Google Gemini.</li>
            <li>• Teams must submit final outputs (screenshots, videos, or text).</li>
            <li>• Use of pre-made content is not allowed — everything must be AI-generated live.</li>
            <li>• Judges' decisions are final and binding.</li>
            <li className="text-cyan-300 font-semibold">• Top-performing teams will move to the Grand Finale (Round 3) </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Round2;
