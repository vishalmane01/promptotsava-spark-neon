import { Trophy } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface LeaderboardEntry {
  teamName: string;
  round1: number;
  round2: number;
  round3: number;
  total: number;
}

const Leaderboard = () => {
  const leaderboardData: LeaderboardEntry[] = [
    { teamName: "Team SparkAI", round1: 10, round2: 9, round3: 10, total: 29 },
    { teamName: "LightCoders", round1: 9, round2: 10, round3: 8, total: 27 },
    { teamName: "NeuralDiya", round1: 8, round2: 8, round3: 9, total: 75 },
    { teamName: "AI Illuminators", round1: 7, round2: 9, round3: 8, total: 14 },
    { teamName: "Cyber Celebrators", round1: 8, round2: 7, round3: 7, total: 22 },
    { teamName: "AIMLSA", round1: 8, round2: 7, round3: 7, total: 55 },
  ];

  // ✅ Sort by total (descending) and assign ranks dynamically
  const sortedData = leaderboardData
    .sort((a, b) => b.total - a.total)
    .map((entry, index) => ({
      ...entry,
      rank: index + 1,
    }));

  const getMedalEmoji = (rank: number) => {
    switch (rank) {
      case 1:
        return "🥇";
      case 2:
        return "🥈";
      case 3:
        return "🥉";
      default:
        return "";
    }
  };

  const getRankClass = (rank: number) => {
    switch (rank) {
      case 1:
        return "text-glow-gold bg-gradient-to-r from-yellow-500/20 to-transparent";
      case 2:
        return "text-glow-cyan bg-gradient-to-r from-gray-300/20 to-transparent";
      case 3:
        return "text-glow-pink bg-gradient-to-r from-orange-400/20 to-transparent";
      default:
        return "";
    }
  };

  return (
    <section id="leaderboard" className="py-12 sm:py-16 md:py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
        <Trophy className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary animate-glow-pulse" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-glow-cyan">Leaderboard</h2>
        <Trophy className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary animate-glow-pulse" />
      </div>

      <div className="glass-card border-2 border-primary/50 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-primary/30 hover:bg-transparent">
              <TableHead className="text-primary font-bold text-sm sm:text-base md:text-lg text-glow-cyan whitespace-nowrap">Rank</TableHead>
              <TableHead className="text-primary font-bold text-sm sm:text-base md:text-lg text-glow-cyan whitespace-nowrap">Team Name</TableHead>
              <TableHead className="text-center text-primary font-bold text-sm sm:text-base md:text-lg text-glow-cyan">R1</TableHead>
              <TableHead className="text-center text-primary font-bold text-sm sm:text-base md:text-lg text-glow-cyan">R2</TableHead>
              <TableHead className="text-center text-primary font-bold text-sm sm:text-base md:text-lg text-glow-cyan">R3</TableHead>
              <TableHead className="text-center text-primary font-bold text-sm sm:text-base md:text-lg text-glow-cyan">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((entry) => (
              <TableRow
                key={entry.rank}
                className={`border-b border-border/20 hover:bg-foreground/5 transition-colors ${getRankClass(
                  entry.rank
                )}`}
              >
                <TableCell className="font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap">
                  <span className="mr-1 sm:mr-2">{getMedalEmoji(entry.rank)}</span>
                  {entry.rank}
                </TableCell>
                <TableCell className="font-semibold text-sm sm:text-base whitespace-nowrap">{entry.teamName}</TableCell>
                <TableCell className="text-center text-sm sm:text-base">{entry.round1}</TableCell>
                <TableCell className="text-center text-sm sm:text-base">{entry.round2}</TableCell>
                <TableCell className="text-center text-sm sm:text-base">{entry.round3}</TableCell>
                <TableCell className="text-center font-bold text-sm sm:text-base md:text-lg">{entry.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Leaderboard;
