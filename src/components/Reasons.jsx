import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Star,
  Sun,
  Moon,
  Cloud,
  Zap,
  Music,
  Flower,
} from "lucide-react";
import Monkey from "./Monkey";

const reasons = [
  {
    text: "Your beautiful contagious smile that lights up every room",
    Icon: Sun,
    color: "#FBBF24",
    glow: "rgba(251,191,36,0.3)",
    emoji: "☀️",
  },
  {
    text: "The way you care deeply for everyone around you",
    Icon: Heart,
    color: "#F33A6A",
    glow: "rgba(243,58,106,0.3)",
    emoji: "💕",
  },
  {
    text: "How your eyes shine when you look at me",
    Icon: Star,
    color: "#818CF8",
    glow: "rgba(129,140,248,0.3)",
    emoji: "⭐",
  },
  {
    text: "Your incredible strength & gentle kindness",
    Icon: Zap,
    color: "#A78BFA",
    glow: "rgba(167,139,250,0.3)",
    emoji: "💫",
  },
  {
    text: "Your playful and joyful spirit",
    Icon: Cloud,
    color: "#FB923C",
    glow: "rgba(251,146,60,0.3)",
    emoji: "🌈",
  },
  {
    text: "Your adorable love for monkeys!",
    Icon: Moon,
    color: "#34D399",
    glow: "rgba(52,211,153,0.3)",
    emoji: "🐒",
  },
];

const Reasons = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-40 px-4 md:px-8 relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Cinematic Blurred Background */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-30 blur-xl"
        style={{
          backgroundImage: `url("/couple photos/IMG_20251102_165228640.jpg.jpeg")`,
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-[5] bg-black/60" />

      {/* Top fade out to transparent */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-[6] pointer-events-none" />

      {/* Decorative background blobs - Optimized */}
      <div className="absolute inset-0 pointer-events-none z-[6]">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-premium-rose/30 to-transparent rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-premium-deep/30 to-transparent rounded-full" />
      </div>

      {/* Header */}
      <div className="text-center mb-24 relative z-10">
        <motion.span
          className="font-sans uppercase tracking-[0.5em] text-premium-rose text-sm font-semibold mb-4 block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          💖 &nbsp; Just for You &nbsp; 💖
        </motion.span>
        <motion.h2
          className="font-display text-6xl md:text-9xl text-white"
          style={{ textShadow: "0 0 40px rgba(243,58,106,0.4)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Reasons I{" "}
          <span className="text-premium-rose font-script italic">Love You</span>
        </motion.h2>
        <motion.p
          className="text-white/40 font-sans text-lg mt-4 tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          There are a million more, but here are just a few...
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full mx-auto relative z-10">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="group relative cursor-pointer"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              delay: index * 0.1,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            onHoverStart={() => setHovered(index)}
            onHoverEnd={() => setHovered(null)}
            whileHover={{ y: -8 }}
          >
            {/* Card background */}
            <div
              className="rounded-[2.5rem] p-10 md:p-12 flex flex-col items-center text-center min-h-[380px] justify-center relative overflow-hidden transition-all duration-700"
              style={{
                background:
                  hovered === index
                    ? `linear-gradient(145deg, rgba(255,255,255,0.10) 0%, ${reason.glow.replace("0.3", "0.08")} 100%)`
                    : "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                border:
                  hovered === index
                    ? `1px solid ${reason.color}44`
                    : "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  hovered === index
                    ? `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${reason.glow}`
                    : "0 8px 30px rgba(0,0,0,0.3)",
                backdropFilter: "blur(4px)",
              }}
            >
              {/* Number badge */}
              <div
                className="absolute top-5 right-6 font-display text-6xl font-bold opacity-10"
                style={{ color: reason.color }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <motion.div
                className="mb-6 relative will-change-transform"
                animate={
                  hovered === index
                    ? { scale: 1.2, rotate: [0, -10, 10, 0] }
                    : { scale: 1, rotate: 0 }
                }
                transition={{ duration: 0.5, type: "spring" }}
              >
                <reason.Icon
                  size={72}
                  strokeWidth={1.5}
                  style={{ color: reason.color }}
                />
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-transparent opacity-60"
                  style={{
                    "--tw-gradient-from": `${reason.color} var(--tw-gradient-from-position)`,
                  }}
                />
              </motion.div>

              {/* Emoji */}
              <motion.span
                className="text-4xl mb-4 block"
                animate={hovered === index ? { scale: [1, 1.4, 1] } : {}}
                transition={{ duration: 0.6 }}
              >
                {reason.emoji}
              </motion.span>

              {/* Label */}
              <p
                className="font-sans uppercase tracking-[0.3em] text-xs mb-4 font-semibold"
                style={{ color: reason.color }}
              >
                Reason #{index + 1}
              </p>

              {/* Text */}
              <p className="font-script text-2xl md:text-3xl text-white/90 leading-relaxed">
                "{reason.text}"
              </p>

              {/* Bottom heart */}
              <AnimatedHeart color={reason.color} active={hovered === index} />
            </div>

            {/* Monkey on last card */}
            {index === 5 && (
              <motion.div
                className="absolute -bottom-8 -right-6 z-20"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Monkey type="peek" className="scale-90" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom prose */}
      <motion.p
        className="text-center font-script text-3xl text-premium-rose/60 mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        "And a thousand reasons more..." 💕
      </motion.p>
    </section>
  );
};

const AnimatedHeart = ({ color, active }) => (
  <motion.div
    className="mt-8"
    animate={
      active
        ? { scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }
        : { scale: 1, opacity: 0.4 }
    }
    transition={{ duration: 1.2, repeat: active ? Infinity : 0 }}
  >
    <Heart size={28} style={{ color }} fill={color} />
  </motion.div>
);

export default Reasons;
