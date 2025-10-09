import HeroSection from "@/components/HeroSection";
import ParticleBackground from "@/components/ParticleBackground";
import RoundsSection from "@/components/RoundsSection";
import Leaderboard from "@/components/Leaderboard";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />

      <HeroSection />
      <RoundsSection />
      {/* <Leaderboard /> */}
    </div>
  );
};

export default Index;
