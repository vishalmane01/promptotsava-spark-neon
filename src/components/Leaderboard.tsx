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
  rank: number;
  teamName: string;
  round1: number;
  round2: number;
  round3: number;
  total: number;
}

const Leaderboard = () => {
  const leaderboardData: LeaderboardEntry[] = [
    { rank: 1, teamName: "Team SparkAI", round1: 10, round2: 9, round3: 10, total: 29 },
    { rank: 2, teamName: "LightCoders", round1: 9, round2: 10, round3: 8, total: 27 },
    { rank: 3, teamName: "NeuralDiya", round1: 8, round2: 8, round3: 9, total: 25 },
    { rank: 4, teamName: "AI Illuminators", round1: 7, round2: 9, round3: 8, total: 24 },
    { rank: 5, teamName: "Cyber Celebrators", round1: 8, round2: 7, round3: 7, total: 22 },
  ];

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
    <section id="leaderboard" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-center gap-4 mb-12">
        <Trophy className="w-12 h-12 text-primary animate-glow-pulse" />
        <h2 className="text-5xl font-bold text-glow-cyan">Leaderboard</h2>
        <Trophy className="w-12 h-12 text-primary animate-glow-pulse" />
      </div>

      <div className="glass-card border-2 border-primary/50 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-primary/30 hover:bg-transparent">
              <TableHead className="text-primary font-bold text-lg text-glow-cyan">Rank</TableHead>
              <TableHead className="text-primary font-bold text-lg text-glow-cyan">Team Name</TableHead>
              <TableHead className="text-center text-primary font-bold text-lg text-glow-cyan">R1</TableHead>
              <TableHead className="text-center text-primary font-bold text-lg text-glow-cyan">R2</TableHead>
              <TableHead className="text-center text-primary font-bold text-lg text-glow-cyan">R3</TableHead>
              <TableHead className="text-center text-primary font-bold text-lg text-glow-cyan">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.map((entry) => (
              <TableRow
                key={entry.rank}
                className={`border-b border-border/20 hover:bg-foreground/5 transition-colors ${getRankClass(
                  entry.rank
                )}`}
              >
                <TableCell className="font-semibold text-lg">
                  <span className="mr-2">{getMedalEmoji(entry.rank)}</span>
                  {entry.rank}
                </TableCell>
                <TableCell className="font-semibold">{entry.teamName}</TableCell>
                <TableCell className="text-center">{entry.round1}</TableCell>
                <TableCell className="text-center">{entry.round2}</TableCell>
                <TableCell className="text-center">{entry.round3}</TableCell>
                <TableCell className="text-center font-bold text-lg">{entry.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Leaderboard;
