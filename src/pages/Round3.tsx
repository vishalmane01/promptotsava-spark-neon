import { ArrowLeft, Clock, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/ParticleBackground";

const Round3 = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <ParticleBackground />

      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        {/* Back Button */}
        <Link to="/">
          <Button
            variant="outline"
            className="mb-6 sm:mb-10 border-pink-400 text-pink-400 hover:bg-pink-400/10 transition-all hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_25px_rgba(255,0,255,0.6)]">
            🏆 Round 3: Prompted Realities
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-gray-300">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-cyan-400" />
              <span>Duration: 1 Hour</span>
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
              The grand finale where creativity meets intelligence ⚡. In <span className="text-pink-300 font-semibold">Round 3: Prompted Realities</span>, 
              teams will push the boundaries of imagination and technology through AI-driven storytelling and design.  
              Participants must create a compelling visual or narrative experience that reflects originality, innovation, and prompt mastery.  
              This round tests how well teams can transform simple ideas into powerful, AI-generated realities that captivate and inspire. 🌐
            </p>
        </div>

        {/* Task Section */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-indigo-900/10 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_25px_rgba(0,255,255,0.2)] mb-12">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-300 via-blue-300 to-pink-300 bg-clip-text text-transparent">
            🧠 Task: Visual Storytelling Challenge – “Pixels that Speak”
          </h2>

          <div className="space-y-4 text-gray-300">
            <p>
              You are a <span className="text-cyan-300 font-semibold">visual narrator</span> in the age of AI.
              Your challenge is to tell a complete story purely through <b>AI-generated images</b> — no edits, no captions,
              just prompts.
            </p>
            <ul className="space-y-2 ml-4">
              <li>• Generate <b>exactly 10 images</b> forming a clear narrative (intro → climax → resolution).</li>
              <li>• Maintain identical characters, style, and environment throughout.</li>
              <li>• Use prompt design only — no Photoshop or post-editing allowed.</li>
            </ul>
          </div>
        </div>

        {/* Rules & Guidelines */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-800/30 to-pink-900/20 border border-purple-500/30 backdrop-blur-md shadow-[0_0_25px_rgba(255,0,255,0.3)] mb-12">
          <h2 className="text-3xl font-bold mb-6 text-pink-300">📌 Rules & Guidelines</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Story must have emotional and visual continuity.</li>
            <li>• Lighting, color, and mood should evolve naturally with the story.</li>
            <li>• Consistent style is mandatory (e.g., cyberpunk, watercolor, cinematic).</li>
            <li>• No textual overlays or manual edits are allowed.</li>
            <li>• Only Gemini or other AI prompt tools can be used.</li>
            <li>• Team must submit all 10 frames as a cohesive sequence.</li>
          </ul>
        </div>

        {/* Judging Criteria */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/40 to-blue-900/30 border border-purple-500/30 shadow-[0_0_25px_rgba(150,0,255,0.3)] backdrop-blur-md mb-12">
          <h2 className="text-3xl font-bold mb-8 text-purple-300">⚖️ Judging Criteria (40 Marks)</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Prompt Precision",
                color: "text-cyan-300",
                marks: "10",
                desc: "Well-structured prompts ensuring visual coherence and clarity."
              },
              {
                title: "Visual Consistency",
                color: "text-pink-300",
                marks: "10",
                desc: "Continuity in character design, lighting, and art style."
              },
              {
                title: "Narrative Depth",
                color: "text-purple-300",
                marks: "10",
                desc: "Story flow and emotion through visuals alone."
              },
              {
                title: "Creativity & Originality",
                color: "text-pink-300",
                marks: "10",
                desc: "Innovative concept and imaginative storytelling."
              },
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
      </div>
    </div>
  );
};

export default Round3;
