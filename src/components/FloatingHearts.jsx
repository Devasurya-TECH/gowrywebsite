import React, { useMemo } from "react";
import { motion } from "framer-motion";

const HEARTS = ["❤️", "💕", "💗", "💖", "🌸", "✨", "💫", "🌹"];

const FloatingHearts = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        symbol: HEARTS[i % HEARTS.length],
        left: Math.random() * 100,
        size: 0.6 + Math.random() * 1.4,
        duration: 8 + Math.random() * 14,
        delay: Math.random() * 10,
        drift: (Math.random() - 0.5) * 80,
      })),
    [],
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bottom-0 select-none"
          style={{ left: `${p.left}%`, fontSize: `${p.size}rem` }}
          initial={{ y: "100vh", opacity: 0, x: 0 }}
          animate={{
            y: "-110vh",
            opacity: [0, 0.7, 0.7, 0],
            x: [0, p.drift, -p.drift / 2, p.drift / 3],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {p.symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
