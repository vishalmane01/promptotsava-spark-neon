import { ArrowLeft, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/ParticleBackground";

const Round3 = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      
      <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
        <Link to="/">
          <Button variant="outline" className="mb-6 sm:mb-8 border-accent text-accent hover:bg-accent/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-glow-pink mb-4">
            🏆 Round 3: Pitch Perfect
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Trophy className="w-5 h-5" />
            <span>Grand Finale - Total: 50 Marks</span>
          </div>
        </div>

        {/* Description */}
        <div className="glass-card border-2 border-accent/50 p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-glow-pink mb-4">Choose Any 1 Task</h2>
          <p className="text-muted-foreground leading-relaxed">
            In this grand finale, teams will showcase their creative vision through a comprehensive pitch presentation combining AI-generated content and strategic thinking.
          </p>
        </div>

        {/* Tasks */}
        <div className="space-y-6 mb-8">
          {/* Task 1 */}
          <div className="glass-card border-2 border-primary/50 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">🔹 Task 1: Smart India Diwali 2030</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg text-foreground/90 mb-2">Scenario:</h4>
                <p className="text-muted-foreground">It's 2030, and India is celebrating a tech-driven eco-friendly Diwali.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground/90 mb-2">Task:</h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">Generate an AI image of futuristic Diwali (solar diyas, AR rangolis, drone firecrackers).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">Create a short plan/pitch (5 sentences) on how AI can make Diwali sustainable.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground/90 mb-2">Pitch:</h4>
                <p className="text-muted-foreground">Present your "Smart Diwali startup" idea in 5 minutes.</p>
              </div>
            </div>
          </div>

          {/* Task 2 */}
          <div className="glass-card border-2 border-secondary/50 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-secondary mb-4">🔹 Task 2: AI as Lord Rama's Advisor</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg text-foreground/90 mb-2">Scenario:</h4>
                <p className="text-muted-foreground">Imagine AI existed in the Ramayana during Diwali.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground/90 mb-2">Task:</h4>
                <p className="text-muted-foreground mb-2">Craft prompts where Gemini gives advice to Rama on:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span className="text-muted-foreground">Strategy for war</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span className="text-muted-foreground">Communication with Ayodhya citizens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span className="text-muted-foreground">Managing the grand welcome (eco-friendly celebrations)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground/90 mb-2">Pitch:</h4>
                <p className="text-muted-foreground">Present the best "AI + Mythology" solutions as if they were real.</p>
              </div>
            </div>
          </div>

          {/* Task 3 */}
          <div className="glass-card border-2 border-accent/50 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-accent mb-4">🔹 Task 3: Global Diwali Festival</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg text-foreground/90 mb-2">Scenario:</h4>
                <p className="text-muted-foreground">The UN declares Diwali as a global festival of light and unity.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground/90 mb-2">Task:</h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-muted-foreground">Prompt Gemini to generate visuals of Diwali celebrations in New York, Tokyo, and Cairo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-muted-foreground">Write a speech (max 100 words) for a UN representative about Diwali's values.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground/90 mb-2">Pitch:</h4>
                <p className="text-muted-foreground">Deliver the speech + show visuals like a cultural ambassador.</p>
              </div>
            </div>
          </div>

          {/* Task 4 */}
          <div className="glass-card border-2 border-primary/50 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">🔹 Task 4: AI Startup for Festivals</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg text-foreground/90 mb-2">Scenario:</h4>
                <p className="text-muted-foreground">You are launching a startup called "FestAI" – an AI tool for Indian festivals.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground/90 mb-2">Task:</h4>
                <p className="text-muted-foreground mb-2">Use prompts to make Gemini:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">Generate a logo + tagline for FestAI.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">Suggest 3 features (ex: AI rangoli designer, digital shayari generator, eco-fireworks AR).</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground/90 mb-2">Pitch:</h4>
                <p className="text-muted-foreground">Present FestAI as if convincing investors.</p>
              </div>
            </div>
          </div>

          {/* Task 5 */}
          <div className="glass-card border-2 border-secondary/50 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-secondary mb-4">🔹 Task 5: Diwali for Social Good</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg text-foreground/90 mb-2">Scenario:</h4>
                <p className="text-muted-foreground">How can Diwali celebrations also solve real social issues (pollution, waste, inclusivity)?</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground/90 mb-2">Task:</h4>
                <p className="text-muted-foreground mb-2">Prompt Gemini to generate:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span className="text-muted-foreground">A poster design for "Green Diwali 2025."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span className="text-muted-foreground">A campaign slogan.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground/90 mb-2">Pitch:</h4>
                <p className="text-muted-foreground">Present it like a social awareness campaign.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Judging Criteria */}
        <div className="glass-card border-2 border-accent/50 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-glow-pink mb-6">🎇 Judging Criteria (Total: 50 Marks)</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-background/30 p-4 rounded-lg border border-primary/30">
              <h3 className="text-lg font-semibold text-primary mb-2">Prompting Skill</h3>
              <p className="text-muted-foreground text-sm mb-2">15 Marks</p>
              <p className="text-muted-foreground text-sm">Clarity and innovation in prompts</p>
            </div>
            <div className="bg-background/30 p-4 rounded-lg border border-secondary/30">
              <h3 className="text-lg font-semibold text-secondary mb-2">Creativity & Innovation</h3>
              <p className="text-muted-foreground text-sm mb-2">15 Marks</p>
              <p className="text-muted-foreground text-sm">Unique ideas and imagination</p>
            </div>
            <div className="bg-background/30 p-4 rounded-lg border border-accent/30">
              <h3 className="text-lg font-semibold text-accent mb-2">Presentation</h3>
              <p className="text-muted-foreground text-sm mb-2">10 Marks</p>
              <p className="text-muted-foreground text-sm">Confidence, flow, and engagement</p>
            </div>
            <div className="bg-background/30 p-4 rounded-lg border border-primary/30">
              <h3 className="text-lg font-semibold text-primary mb-2">Relevance to Theme</h3>
              <p className="text-muted-foreground text-sm mb-2">10 Marks</p>
              <p className="text-muted-foreground text-sm">Diwali connection and cultural context</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round3;
