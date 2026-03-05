import React from "react";
import { motion } from "framer-motion";
import Monkey from "./Monkey";

const Ending = () => {
  const bgImage = "/couple photos/IMG_20260103_185134374.webp";

  const quotes = [
    '"Every moment with you is special."',
    '"Thank you for being in my life."',
    '"Happy Birthday Shottey ❤️"',
  ];

  return (
    <section className="min-h-screen w-full relative flex items-center justify-center overflow-hidden">
      {/* Slow Ken Burns background */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ backgroundImage: `url("${bgImage}")` }}
        animate={{ scale: [1.1, 1.05] }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Multi-layer cinematic overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-black/80" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-premium-rose/10 via-transparent to-premium-deep/15" />

      {/* Glow orbs - Optimized */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-premium-rose/30 to-transparent rounded-full pointer-events-none z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-premium-deep/30 to-transparent rounded-full pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl w-full py-24 flex flex-col items-center justify-center">
        {/* Animated quote lines */}
        <div className="flex flex-col items-center gap-6 mb-16 w-full">
          {quotes.map((q, i) => (
            <motion.p
              key={i}
              className="font-script text-xl sm:text-3xl md:text-5xl text-white/90 leading-[1.4]"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.3,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {q}
            </motion.p>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-premium-gold/80" />
          <span className="text-premium-gold text-2xl animate-pulse">✦</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-premium-gold/80" />
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center w-full"
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="font-display text-6xl sm:text-8xl md:text-[9rem] text-premium-rose leading-none mb-6"
            style={{
              textShadow:
                "0 0 60px rgba(243,58,106,0.8), 0 0 120px rgba(243,58,106,0.4)",
            }}
          >
            Happy Birthday
          </h2>
          <h3
            className="font-script text-6xl sm:text-8xl md:text-[8rem] text-white leading-none mb-8"
            style={{ textShadow: "0 0 40px rgba(255,255,255,0.5)" }}
          >
            Shottey
          </h3>

          {/* Animated gold line */}
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-premium-gold to-transparent rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "60%" }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
          />
        </motion.div>

        {/* Forever tagline */}
        <motion.div
          className="mt-16 space-y-6 flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 1.5 }}
        >
          <p className="font-sans uppercase tracking-[0.7em] text-premium-soft/70 text-sm md:text-base font-light">
            Forever & Always ❤️
          </p>
          <div className="flex justify-center gap-3 text-2xl">
            {["❤️", "🌹", "✨", "💕", "🌸", "💫", "🌹", "❤️"].map((e, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.6 + i * 0.08 }}
              >
                {e}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Bottom monkey */}
        <motion.div
          className="flex justify-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2 }}
          animate={{ y: [0, -12, 0] }}
        >
          <div className="flex gap-8">
            <Monkey type="floating" />
            <Monkey type="playful" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ending;
