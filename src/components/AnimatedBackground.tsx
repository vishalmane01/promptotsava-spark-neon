import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

const particleVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: (index: number) => ({
    opacity: [0.1, 0.7, 0.2],
    scale: [0.8, 1.1, 0.9],
    y: [0, -25, 0],
    transition: {
      duration: 6 + index * 0.35,
      repeat: Infinity,
      ease: "easeInOut",
      delay: index * 0.25,
    },
  }),
};

const glowOrbs = Array.from({ length: 14 }).map((_, index) => {
  const randomLeft = Math.random() * 100;
  const randomTop = Math.random() * 100;
  const colors = ["var(--glow-blue)", "var(--glow-purple)", "var(--glow-pink)", "var(--glow-gold)"];
  const color = colors[index % colors.length];
  const size = 160 + Math.random() * 120;

  return { id: index, left: `${randomLeft}%`, top: `${randomTop}%`, color, size };
});

export function AnimatedBackground({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("relative isolate overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(160,32,240,0.28),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(0,247,255,0.32),transparent_60%)]" />
      {glowOrbs.map((orb) => (
        <div
          key={orb.id}
          aria-hidden
          style={{ left: orb.left, top: orb.top, width: orb.size, height: orb.size, background: orb.color }}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-30"
        />
      ))}

      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 22 }).map((_, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={particleVariants}
            initial="initial"
            animate="animate"
            className="absolute text-lg text-[rgba(255,215,0,0.6)]"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 19) % 100}%`,
            }}
          >
            ✨
          </motion.span>
        ))}
      </div>

      <div className="relative">{children}</div>
    </div>
  );
}
