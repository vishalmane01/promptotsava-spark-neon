import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface RoundCardProps {
  number: number;
  title: string;
  description: string;
  color: "cyan" | "purple" | "pink";
  icon: React.ReactNode;
  link: string;
}

const RoundCard = ({ number, title, description, color, icon, link }: RoundCardProps) => {
  const colorClasses = {
    cyan: "border-primary text-glow-cyan hover:border-glow-cyan hover:scale-105",
    purple: "border-secondary text-glow-purple hover:border-glow-purple hover:scale-105",
    pink: "border-accent text-glow-pink hover:border-glow-pink hover:scale-105",
  };

  return (
    <Link to={link}>
      <Card
        className={`glass-card border-2 ${colorClasses[color]} transition-all duration-300 cursor-pointer h-full`}
      >
        <div className="p-4 sm:p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4 gap-2">
            <div className="flex items-start gap-3 sm:gap-4 flex-1">
              <div className="text-3xl sm:text-4xl flex-shrink-0">{icon}</div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground font-mono">Round {number}</p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold break-words">{title}</h3>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1" />
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
        </div>
      </Card>
    </Link>
  );
};

export default RoundCard;
