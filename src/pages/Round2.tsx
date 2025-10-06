import { ArrowLeft, Clock, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/ParticleBackground";

const Round2 = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      
      <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
        <Link to="/">
          <Button variant="outline" className="mb-6 sm:mb-8 border-secondary text-secondary hover:bg-secondary/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-glow-purple mb-4">
            🎇 Round 2: Illusion of Ideas
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Time Limit: 1 hour 15 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              <span>Total: 40 Marks</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="glass-card border-2 border-secondary/50 p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-glow-purple mb-4">📖 Description</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This round focuses on creativity, fun, and imagination. Teams will choose any 2 tasks from the given list and craft prompts to generate text or video outputs using Gemini. The goal is to showcase how prompt design can transform an idea into engaging AI-generated content.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This round blends non-technical creativity with a tech twist, pushing participants to think outside the box while staying true to the Diwali theme.
          </p>
        </div>

        {/* Tasks */}
        <div className="glass-card border-2 border-accent/50 p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-glow-pink mb-6">📝 Tasks (Choose Any 2)</h2>
          
          <div className="space-y-6">
            <div className="bg-background/30 p-4 sm:p-6 rounded-lg border border-primary/30">
              <h3 className="text-xl font-semibold text-primary mb-2">1. Ad Jingle Challenge</h3>
              <p className="text-muted-foreground">Write a catchy 4-line jingle for a Diwali sale at a smart diya startup.</p>
            </div>

            <div className="bg-background/30 p-4 sm:p-6 rounded-lg border border-secondary/30">
              <h3 className="text-xl font-semibold text-secondary mb-2">2. Festival Meme Maker</h3>
              <p className="text-muted-foreground">Generate a Diwali-themed meme about college students during exams.</p>
            </div>

            <div className="bg-background/30 p-4 sm:p-6 rounded-lg border border-accent/30">
              <h3 className="text-xl font-semibold text-accent mb-2">3. Shakespeare Meets Diwali</h3>
              <p className="text-muted-foreground">Explain why Diwali is celebrated, but in Shakespearean English.</p>
            </div>

            <div className="bg-background/30 p-4 sm:p-6 rounded-lg border border-primary/30">
              <h3 className="text-xl font-semibold text-primary mb-2">4. Future Fireworks (Video)</h3>
              <p className="text-muted-foreground">Generate a video of futuristic eco-friendly Diwali fireworks made of drones and lasers.</p>
            </div>

            <div className="bg-background/30 p-4 sm:p-6 rounded-lg border border-secondary/30">
              <h3 className="text-xl font-semibold text-secondary mb-2">5. Hogwarts Diwali (Video)</h3>
              <p className="text-muted-foreground">Imagine Diwali being celebrated at Hogwarts. Generate a video for it.</p>
            </div>
          </div>
        </div>

        {/* Judging Criteria */}
        <div className="glass-card border-2 border-primary/50 p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-glow-cyan mb-6">⚖️ Judging Criteria (Total: 40 Marks)</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-background/30 p-4 rounded-lg border border-primary/30">
              <h3 className="text-lg font-semibold text-primary mb-2">Prompt Clarity</h3>
              <p className="text-muted-foreground text-sm mb-2">10 Marks</p>
              <p className="text-muted-foreground text-sm">Is the prompt precise and well-structured?</p>
            </div>
            <div className="bg-background/30 p-4 rounded-lg border border-secondary/30">
              <h3 className="text-lg font-semibold text-secondary mb-2">Creativity & Originality</h3>
              <p className="text-muted-foreground text-sm mb-2">10 Marks</p>
              <p className="text-muted-foreground text-sm">How unique and imaginative is the concept?</p>
            </div>
            <div className="bg-background/30 p-4 rounded-lg border border-accent/30">
              <h3 className="text-lg font-semibold text-accent mb-2">Theme Relevance</h3>
              <p className="text-muted-foreground text-sm mb-2">10 Marks</p>
              <p className="text-muted-foreground text-sm">Does the output reflect the Diwali context?</p>
            </div>
            <div className="bg-background/30 p-4 rounded-lg border border-primary/30">
              <h3 className="text-lg font-semibold text-primary mb-2">Output Engagement</h3>
              <p className="text-muted-foreground text-sm mb-2">10 Marks</p>
              <p className="text-muted-foreground text-sm">Is the output fun, appealing, or impactful?</p>
            </div>
          </div>
        </div>

        {/* Rules */}
        <div className="glass-card border-2 border-secondary/50 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-glow-purple mb-6">📌 Rules</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-secondary mt-1">•</span>
              <span className="text-muted-foreground">Each team must complete any 2 tasks out of the given 5.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary mt-1">•</span>
              <span className="text-muted-foreground">Time limit: 1 hour 15 minutes.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary mt-1">•</span>
              <span className="text-muted-foreground">All prompts must be executed using Google Gemini.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary mt-1">•</span>
              <span className="text-muted-foreground">Teams must submit their final outputs (screenshots, videos, or text snippets).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary mt-1">•</span>
              <span className="text-muted-foreground">Use of pre-made memes/jingles is not allowed — all content must be AI-generated live.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary mt-1">•</span>
              <span className="text-muted-foreground">The judges' decision will be final.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span className="text-accent font-semibold">The top-performing teams will move on to the Grand Finale (Round 3).</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Round2;
