import { ArrowLeft, Clock, Trophy, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/ParticleBackground";

const Round1 = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      
      <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
        <Link to="/">
          <Button variant="outline" className="mb-6 sm:mb-8 border-primary text-primary hover:bg-primary/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-glow-cyan mb-4">
            🪔 Round 1: Prompt Sprint
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Time Limit: 1 hour</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              <span>Total: 40 Marks</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="glass-card border-2 border-primary/50 p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-glow-purple mb-4">Description</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In this round, participants will test their prompt engineering speed and creativity. Each team will be given one image generation task and one video generation task based on the Diwali theme. Using Gemini, teams must carefully craft prompts to produce the most clear, creative, and relevant AI outputs.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This is a fast-paced elimination round designed to check how well participants can convert imagination into reality through precise prompts.
          </p>
          <div className="flex items-start gap-2 bg-destructive/10 border border-destructive/50 rounded-lg p-4">
            <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
            <p className="text-destructive font-semibold">Only the top-scoring teams will advance to the next round.</p>
          </div>
        </div>

        {/* Tasks */}
        <div className="glass-card border-2 border-secondary/50 p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-glow-purple mb-6">📝 Tasks (Choose 1 Image + 1 Video)</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Image Options (Pick Any 1):</h3>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Generate an image of Diwali in the year 2025 with futuristic eco-friendly celebrations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Generate a unique rangoli design inspired by neural networks and traditional Diwali motifs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Visualize how humans might celebrate Diwali on Mars with astronauts lighting diyas inside the space station.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Generate an image of Diwali in futuristic Ayodhya city.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-secondary mb-4">Video Options (Pick Any 1):</h3>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span className="text-muted-foreground">Animate a short clip of Lord Rama, Sita Maa, and Lakshmana entering Ayodhya – but in a futuristic flying chariot powered by AI.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span className="text-muted-foreground">Show robots and humans celebrating Diwali together in the year 2100.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span className="text-muted-foreground">Visualize astronauts celebrating Diwali on the Moon, lighting holographic diyas inside a space station.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Judging Criteria */}
        <div className="glass-card border-2 border-accent/50 p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-glow-pink mb-6">⚖️ Judging Criteria (Total: 40 Marks)</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-background/30 p-4 rounded-lg border border-primary/30">
              <h3 className="text-lg font-semibold text-primary mb-2">Prompt Clarity</h3>
              <p className="text-muted-foreground text-sm mb-2">10 Marks</p>
              <p className="text-muted-foreground text-sm">Is the prompt specific, well-structured, and easy for AI to interpret?</p>
            </div>
            <div className="bg-background/30 p-4 rounded-lg border border-secondary/30">
              <h3 className="text-lg font-semibold text-secondary mb-2">Creativity & Originality</h3>
              <p className="text-muted-foreground text-sm mb-2">10 Marks</p>
              <p className="text-muted-foreground text-sm">How unique and imaginative is the idea behind the prompt?</p>
            </div>
            <div className="bg-background/30 p-4 rounded-lg border border-accent/30">
              <h3 className="text-lg font-semibold text-accent mb-2">Relevance to Theme</h3>
              <p className="text-muted-foreground text-sm mb-2">10 Marks</p>
              <p className="text-muted-foreground text-sm">Does the output strongly connect with the Diwali + futuristic/AI theme?</p>
            </div>
            <div className="bg-background/30 p-4 rounded-lg border border-primary/30">
              <h3 className="text-lg font-semibold text-primary mb-2">Output Quality</h3>
              <p className="text-muted-foreground text-sm mb-2">10 Marks</p>
              <p className="text-muted-foreground text-sm">How well does the AI output reflect the intended vision?</p>
            </div>
          </div>
        </div>

        {/* Rules */}
        <div className="glass-card border-2 border-primary/50 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-glow-cyan mb-6">📌 Rules</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">Each team must attempt 1 image task and 1 video task only.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">Time limit: 1 hour for both tasks.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">All prompts must be executed using Google Gemini only.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">Teams must submit their final outputs (screenshots or downloaded files) within the given time.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">Plagiarism or using pre-made AI outputs is strictly prohibited – only live-generated outputs will be accepted.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">Judges' decisions will be final and binding.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-destructive mt-1">•</span>
              <span className="text-destructive font-semibold">Elimination Rule: Bottom 30% of teams (based on scores) will be eliminated.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Round1;
