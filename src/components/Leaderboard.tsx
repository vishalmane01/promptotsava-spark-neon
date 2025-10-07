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
    { teamName: "Team 1", round1:0 , round2: 0, round3: 0, total: 0 },
    { teamName: "Team 2", round1:0 , round2: 0, round3: 0, total: 0 },
    { teamName: "Team 3", round1:0 , round2: 0, round3: 0, total: 0 },
    
  ];

  const sortedData = leaderboardData
    .sort((a, b) => b.total - a.total)
    .map((entry, index) => ({ ...entry, rank: index + 1 }));

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

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400/20 via-yellow-300/20 to-yellow-400/10 text-glow-gold";
      case 2:
        return "bg-gradient-to-r from-sky-400/20 via-cyan-300/20 to-sky-400/10 text-glow-cyan";
      case 3:
        return "bg-gradient-to-r from-pink-400/20 via-pink-300/20 to-pink-400/10 text-glow-pink";
      default:
        return "bg-black/20";
    }
  };

  return (
    <section
      id="leaderboard"
      className="py-12 sm:py-16 md:py-20 px-4 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
        <Trophy className="w-10 h-10 text-yellow-400 animate-glow-pulse" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-glow-cyan">
          Leaderboard
        </h2>
        <Trophy className="w-10 h-10 text-yellow-400 animate-glow-pulse" />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-3xl border border-primary/30 glass-card shadow-lg">
        <Table className="min-w-[600px]">
          <TableHeader>
            <TableRow className="bg-black/30 border-b border-primary/20">
              <TableHead className="text-left text-sm sm:text-base md:text-lg font-bold text-glow-cyan">
                Rank
              </TableHead>
              <TableHead className="text-left text-sm sm:text-base md:text-lg font-bold text-glow-cyan">
                Team Name
              </TableHead>
              <TableHead className="text-center text-sm sm:text-base md:text-lg font-bold text-glow-cyan">
                R1
              </TableHead>
              <TableHead className="text-center text-sm sm:text-base md:text-lg font-bold text-glow-cyan">
                R2
              </TableHead>
              <TableHead className="text-center text-sm sm:text-base md:text-lg font-bold text-glow-cyan">
                R3
              </TableHead>
              <TableHead className="text-center text-sm sm:text-base md:text-lg font-bold text-glow-cyan">
                Total
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((entry) => (
              <TableRow
                key={entry.rank}
                className={`transition-all hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] ${getRankStyle(
                  entry.rank
                )}`}
              >
                <TableCell className="font-bold text-sm sm:text-base md:text-lg">
                  <span className="mr-2">{getMedalEmoji(entry.rank)}</span>
                  {entry.rank}
                </TableCell>
                <TableCell className="text-sm sm:text-base md:text-lg font-semibold">
                  {entry.teamName}
                </TableCell>
                <TableCell className="text-center text-sm sm:text-base">
                  {entry.round1}
                </TableCell>
                <TableCell className="text-center text-sm sm:text-base">
                  {entry.round2}
                </TableCell>
                <TableCell className="text-center text-sm sm:text-base">
                  {entry.round3}
                </TableCell>
                <TableCell className="text-center font-bold text-sm sm:text-base md:text-lg">
                  {entry.total}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Leaderboard;
