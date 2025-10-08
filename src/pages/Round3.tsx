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
            Grand Finale – Round 3: Prompted Realities
          </h1>
          <p className="text-gray-300 text-lg mt-4 italic">
            “Where imagination becomes intelligence, and creativity takes form.”
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
            The <b>Grand Finale</b> where brilliance, vision, and artistry collide ⚡. 
            In <b>Round 3: Prompted Realities</b>, teams will unleash their full potential — 
            combining technical mastery with boundless creativity. Participants must complete 
            <span className="text-pink-300 font-semibold"> both tasks</span> to finish the round successfully. 
            Each task tests your creative depth, clarity, and ability to evolve prompts into meaningful AI outputs.
          </p>
        </div>

        {/* Task 1 */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-900/40 to-indigo-900/20 border border-cyan-500/40 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,255,0.25)] mb-14">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-pink-300 bg-clip-text text-transparent animate-gradient-x">
            🧩 Task 1: Visual Storytelling Challenge – “Pixels that Speak”
          </h2>

          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Welcome to the <span className="text-cyan-300 font-semibold">Grand Finale</span> of the competition! 
              In this round, you will step into the shoes of a <b>visual director</b> and bring your story to life 
              using <b>AI-generated imagery</b>. Your challenge is to narrate a full story using 
              <b> only images</b> — no captions, no manual edits, and no text overlays. Every frame must naturally 
              flow into the next, creating a cohesive and emotionally engaging narrative.
            </p>

            <ul className="space-y-2 ml-4 list-disc">
              <li>Generate <b>exactly 10 images</b> to tell your story — covering <b>introduction, rising action, climax, and resolution</b>.</li>
              <li>Maintain <b>consistent characters, lighting, perspective, and art style</b> throughout all images.</li>
              <li>No external editing, Photoshop, or post-processing is allowed.</li>
              <li>Creativity is key! Use composition, color palettes, and visual storytelling techniques to evoke emotion and convey plot.</li>
              <li>Focus on clarity — judges should be able to understand the story without any words or captions.</li>
            </ul>

            <p>
              Think of each image as a <b>frame in a cinematic sequence</b>. Use consistent prompt parameters, 
              camera angles, character design, and color schemes to ensure a smooth visual flow. Judges will evaluate 
              <b> narrative coherence, creativity, emotional impact, and visual consistency</b>. 
              This is your chance to make your “pixels speak” and show your mastery in AI-driven storytelling.
            </p>

            <p className="text-sm text-cyan-200/80 italic">
              💡 Tip: Plan your story first — sketch the sequence, define character traits and settings, 
              and then design prompts that maintain style and tone across all frames.
            </p>
          </div>
        </div>

        {/* Task 2 */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/40 to-pink-900/30 border border-purple-500/40 backdrop-blur-md shadow-[0_0_40px_rgba(255,0,255,0.3)] mb-14">
          <h2 className="text-3xl font-bold mb-6 text-pink-300">
            🧠 Task 2: The “One Word” Prompt Challenge
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            In this ultimate test of prompt craftsmanship, participants will begin with just <b>one word</b> — 
            their chosen seed — and transform it into a complete AI-generated creation through intelligent prompting.
          </p>

          <ul className="space-y-2 ml-4 list-disc text-gray-300">
            <li>Choose one single word as your base prompt (e.g., <i>Echo, Glass, Rebirth, Chaos, Dream, Silence</i>).</li>
            <li>Start generating using that single word — no phrases or compound words allowed.</li>
            <li>Refine the AI’s outputs through progressive prompts — each new prompt should expand, clarify, or enhance the concept while staying true to the original word’s essence.</li>
            <li>Present your final output (text, image, or both) along with a prompt chain summary showing how your idea evolved.</li>
          </ul>

          <p className="text-sm text-pink-200/80 italic mt-3">
            💡 Both Task 1 and Task 2 must be completed to finish Round 3.
          </p>
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
                title: "Narrative Coherence",
                color: "text-cyan-400",
                marks: "10 Marks",
                desc: "How clearly and smoothly the story or idea flows from start to end.",
              },
              {
                title: "Creativity & Originality",
                color: "text-purple-400",
                marks: "10 Marks",
                desc: "How innovative, artistic, and imaginative the overall work is.",
              },
              {
                title: "Prompt Evolution",
                color: "text-pink-400",
                marks: "10 Marks",
                desc: "How intelligently and logically prompts evolve from minimal input to a complete idea.",
              },
              {
                title: "Visual Consistency & Aesthetic",
                color: "text-yellow-400",
                marks: "10 Marks",
                desc: "Consistency in characters, lighting, color, and visual tone across frames.",
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
          ✨ “This is where creativity meets mastery — let your prompts paint worlds.” ✨
        </div>
      </div>
    </div>
  );
};

export default Round3;
