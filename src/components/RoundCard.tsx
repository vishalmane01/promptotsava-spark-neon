import { Link } from "react-router-dom";
import { ArrowRight, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

interface RoundCardProps {
  number: number;
  title: string;
  description: string;
  color: "cyan" | "purple" | "pink" | "gold";
  icon: React.ReactNode;
  link?: string;
  comingSoon?: boolean;
}

const RoundCard = ({ number, title, description, color, icon, link, comingSoon }: RoundCardProps) => {
  const colorClasses = {
    cyan: "border-primary text-glow-cyan hover:border-glow-cyan hover:scale-105",
    purple: "border-secondary text-glow-purple hover:border-glow-purple hover:scale-105",
    pink: "border-accent text-glow-pink hover:border-glow-pink hover:scale-105",
    gold: "border-[hsl(var(--neon-gold))] text-glow-gold hover:border-glow-gold opacity-60",
  };

  const CardContent = (
    <Card
      className={`glass-card border-2 ${colorClasses[color]} transition-all duration-300 ${!comingSoon ? 'cursor-pointer' : 'cursor-not-allowed'} h-full`}
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
          {comingSoon ? (
            <Lock className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1 text-muted-foreground" />
          ) : (
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1" />
          )}
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
        
        {comingSoon && (
          <div className="mt-4 inline-block px-3 py-1 bg-muted/50 rounded-full">
            <span className="text-xs sm:text-sm font-semibold text-foreground/70">Coming Soon</span>
          </div>
        )}
      </div>
    </Card>
  );

  if (comingSoon || !link) {
    return <div>{CardContent}</div>;
  }

  return <Link to={link}>{CardContent}</Link>;
};

export default RoundCard;
