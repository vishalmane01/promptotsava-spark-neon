import { ArrowLeft, Clock, Trophy, Sparkles, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/ParticleBackground";

const Round3 = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <ParticleBackground />

      <div className="max-w-6xl mx-auto px-4 py-10 sm:py-16">
        {/* Back Button */}
        <Link to="/">
          <Button
            variant="outline"
            className="mb-8 sm:mb-12 border-pink-400 text-pink-400 hover:bg-pink-400/10 transition-all hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_0_25px_rgba(255,0,255,0.5)]">
            Grand Finale – Round 3: Visual Storytelling Challenge
          </h1>
          <p className="text-gray-300 text-lg mt-4 italic">
            “Where imagination becomes identity — and AI brings your story to life.”
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-gray-300 text-lg">
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
        <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/50 to-pink-900/20 border border-pink-500/40 backdrop-blur-md shadow-[0_0_40px_rgba(255,0,255,0.25)] mb-14">
          <h2 className="text-3xl font-bold mb-5 text-pink-300 flex items-center gap-2">
            <Sparkles className="text-yellow-300 w-5 h-5" /> Description
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            The <b>Grand Finale</b> challenges you to step into your own story. In this
            <b> Visual Storytelling Challenge</b>, participants will create an original story
            where <span className="text-pink-300 font-semibold">you</span> are the main character.
            Using AI tools like <b>ChatGPT</b> or <b>Gemini</b>, you’ll craft a comic-style
            storybook — one that visually narrates your journey, emotions, and imagination.
          </p>
        </div>

        {/* Task 1 */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-900/40 to-indigo-900/20 border border-cyan-500/40 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,255,0.25)] mb-14">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-pink-300 bg-clip-text text-transparent animate-gradient-x">
            🧩 Task 1: Visual Storytelling Challenge – “You Are the Story”
          </h2>

          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              You are the protagonist of your own AI-generated adventure. Use <b>ChatGPT</b> or
              <b> Gemini</b> to craft a <b>comic-style storybook</b> featuring yourself as the main character.
              Every page should advance the narrative visually and emotionally.
            </p>

            <ul className="space-y-2 ml-4 list-disc">
              <li>Develop a creative story concept centered around <b>yourself</b>.</li>
              <li>Upload or use reference images to define your <b>character’s look and personality</b>.</li>
              <li>Use <b>ChatGPT</b> or <b>Gemini</b> to generate visuals and storyline for each page.</li>
              <li>Ensure your character remains <b>consistent</b> across all pages.</li>
              <li>The storybook must contain <b>8–12 pages</b> in total.</li>
              <li>
                <b>Do not use Gemini’s “storybook” feature</b> — all story visuals and text must be created manually through prompting.
              </li>
              <li>Add audio or text for the story.</li>
              <li>Creativity, visual appeal, and narrative flow are key to success.</li>
            </ul>

            <p>
              Your challenge is to seamlessly blend creativity with AI-driven storytelling. 
              This task tests your ability to conceptualize, visualize, and narrate your own world using minimal tools.
            </p>

            <p className="text-sm text-cyan-200/80 italic">
              💡 Tip: Focus on <b>character consistency</b> and emotional depth. Let each page unfold naturally — 
              showing growth, conflict, and resolution — all through your AI-created visuals.
            </p>
          </div>
        </div>

        {/* Judging Criteria */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-900/30 to-purple-900/40 border border-pink-500/40 backdrop-blur-md shadow-[0_0_50px_rgba(255,0,255,0.3)] mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Scale className="text-pink-300 w-6 h-6" />
            <h2 className="text-3xl font-bold text-pink-300">⚖️ Judging Criteria</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "Character Consistency",
                color: "text-cyan-400",
                marks: "10 Marks",
                desc: "The main character’s appearance and personality remain uniform throughout all pages.",
              },
              {
                title: "Visual Appeal",
                color: "text-purple-400",
                marks: "10 Marks",
                desc: "Creativity and effective use of AI tools to enhance storytelling and aesthetics.",
              },
              {
                title: "Storytelling Quality",
                color: "text-pink-400",
                marks: "10 Marks",
                desc: "Originality, clarity, and engagement of the narrative from start to finish.",
              },
              {
                title: "AI Integration",
                color: "text-yellow-400",
                marks: "10 Marks",
                desc: "Skillful use of ChatGPT or Gemini to conceptualize, visualize, and refine the story.",
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

        {/* Footer */}
        <div className="text-center mt-16 text-gray-400 text-sm italic">
          ✨ “Your story is the canvas — let AI paint it vividly.” ✨
        </div>
      </div>
    </div>
  );
};

export default Round3;
