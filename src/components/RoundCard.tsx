import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";

interface RoundCardProps {
  number: number;
  title: string;
  description: string;
  rules: string[];
  task: string;
  color: "cyan" | "purple" | "pink";
  icon: React.ReactNode;
}

const RoundCard = ({ number, title, description, rules, task, color, icon }: RoundCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colorClasses = {
    cyan: "border-primary text-glow-cyan hover:border-glow-cyan",
    purple: "border-secondary text-glow-purple hover:border-glow-purple",
    pink: "border-accent text-glow-pink hover:border-glow-pink",
  };

  return (
    <Card
      className={`glass-card border-2 ${colorClasses[color]} transition-all duration-500 cursor-pointer overflow-hidden ${
        isExpanded ? "scale-105" : ""
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="text-4xl">{icon}</div>
            <div>
              <p className="text-sm text-muted-foreground font-mono">Round {number}</p>
              <h3 className="text-2xl font-bold">{title}</h3>
            </div>
          </div>
          <ChevronDown
            className={`w-6 h-6 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Description (always visible) */}
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Expanded Content */}
        <div
          className={`transition-all duration-500 ${
            isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="pt-4 border-t border-border/50 space-y-4">
            {/* Rules */}
            <div>
              <h4 className="font-semibold text-lg mb-2 text-foreground/90">Rules:</h4>
              <ul className="space-y-1 text-muted-foreground">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Task */}
            <div>
              <h4 className="font-semibold text-lg mb-2 text-foreground/90">Task:</h4>
              <p className="text-muted-foreground italic">{task}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RoundCard;
