import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Monkey from "./Monkey";
import Balloons from "./Balloons";

const Celebration = () => {
  const [isBlown, setIsBlown] = useState(false);

  const handleBlow = () => {
    setIsBlown(true);

    // Multi-phase confetti explosion
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#F33A6A", "#D4AF37", "#E1BEE7", "#ffffff", "#f9a8d4"],
    });
    setTimeout(
      () =>
        confetti({
          particleCount: 100,
          angle: 60,
          spread: 70,
          origin: { x: 0 },
          colors: ["#F33A6A", "#D4AF37", "#fbbf24"],
        }),
      300,
    );
    setTimeout(
      () =>
        confetti({
          particleCount: 100,
          angle: 120,
          spread: 70,
          origin: { x: 1 },
          colors: ["#F33A6A", "#E1BEE7", "#c084fc"],
        }),
      500,
    );

    // Star burst
    setTimeout(() => {
      const defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 9999,
        shapes: ["star"],
      };
      confetti({
        ...defaults,
        particleCount: 80,
        origin: { x: 0.5, y: 0.4 },
        colors: ["#D4AF37", "#ffffff", "#fbbf24"],
      });
    }, 800);

    // Rain
    const duration = 5000;
    const end = Date.now() + duration;
    const intervalId = setInterval(() => {
      if (Date.now() > end) return clearInterval(intervalId);
      confetti({
        particleCount: 4,
        startVelocity: 0,
        ticks: 200,
        origin: { x: Math.random(), y: -0.1 },
        colors: ["#F33A6A", "#D4AF37", "#E1BEE7", "#c084fc"],
        gravity: 0.5,
        drift: Math.random() - 0.3,
      });
    }, 80);
  };

  return (
    <section className="py-32 px-4 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Deep glow backdrop - Optimized */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-premium-rose/20 to-transparent rounded-full" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400/10 to-transparent rounded-full" />
      </div>

      {/* Header */}
      <motion.div
        className="text-center mb-20 z-10 relative"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-sans uppercase tracking-[0.5em] text-premium-gold text-sm font-semibold mb-4">
          🎂 &nbsp; Make a Wish &nbsp; 🎂
        </p>
        <h2
          className="font-display text-7xl md:text-[9rem] text-white leading-none mb-4"
          style={{
            textShadow:
              "0 0 50px rgba(212,175,55,0.6), 0 0 100px rgba(212,175,55,0.3)",
          }}
        >
          Gowry,
        </h2>
        <p
          className="font-script text-3xl md:text-5xl text-premium-rose"
          style={{ textShadow: "0 0 30px rgba(243,58,106,0.5)" }}
        >
          it's time to blow the candle!
        </p>
      </motion.div>

      {/* Cake */}
      <motion.div
        className="relative z-10 mb-32 mt-24"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
      >
        <div
          className="relative flex flex-col items-center"
          style={{ transform: "scale(2)" }}
        >
          {/* Candle */}
          <AnimatePresence>
            {!isBlown && (
              <motion.div
                className="absolute -top-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
                exit={{ y: 20, opacity: 0, scale: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Flame */}
                <motion.div
                  className="w-5 h-8 rounded-full mb-0"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 80%, #f97316, #fbbf24, #fff7ed)",
                  }}
                  animate={{
                    scaleX: [1, 0.8, 1.2, 1],
                    scaleY: [1, 1.15, 0.9, 1],
                    rotate: [-3, 5, -4, 3, -2],
                  }}
                  transition={{ duration: 0.4, repeat: Infinity }}
                />
                {/* Flame glow */}
                <div className="absolute top-0 w-10 h-10 bg-orange-400/30 blur-xl rounded-full" />
                {/* Candle stick */}
                <div className="w-3 h-12 bg-gradient-to-b from-white to-premium-soft rounded-full shadow-lg" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Top cake tier */}
          <motion.div
            className="w-32 h-20 rounded-t-2xl relative overflow-hidden border-t-2 border-white/20"
            style={{
              background: "linear-gradient(to bottom, #F33A6A, #4A148C)",
            }}
            animate={isBlown ? { scaleY: 0.92, y: 3 } : {}}
            transition={{ type: "spring", damping: 8 }}
          >
            {/* Icing */}
            <div className="absolute top-0 w-full h-5 bg-white/25 rounded-t-2xl" />
            {/* Drips */}
            <div className="absolute top-4 flex justify-around w-full px-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="w-5 h-6 bg-white/30 rounded-b-full" />
              ))}
            </div>
            {/* Stars on cake */}
            <div className="absolute bottom-4 flex justify-around w-full px-4">
              {["⭐", "💕", "⭐"].map((s, i) => (
                <span key={i} className="text-xs">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bottom cake tier */}
          <div
            className="w-48 h-14 -mt-1 -ml-8 rounded-b-2xl relative overflow-hidden border-b-4 border-black/30"
            style={{
              background:
                "linear-gradient(to bottom, rgba(74,20,140,0.9), rgba(30,8,60,0.95))",
            }}
          >
            <div className="absolute top-0 w-full h-4 bg-white/10" />
            <div className="absolute bottom-2 flex justify-around w-full px-4">
              {["🌸", "❤️", "🌸"].map((s, i) => (
                <span key={i} className="text-xs">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Plate shadow */}
          <div className="w-56 h-4 bg-black/30 blur-md rounded-full -mt-1 -ml-8" />
        </div>
      </motion.div>

      {/* CTA or Post-blow celebration */}
      <div className="z-10 relative mt-12 flex flex-col items-center min-h-[280px]">
        {!isBlown ? (
          <motion.button
            onClick={handleBlow}
            className="group relative px-16 py-6 rounded-full text-2xl font-bold text-white overflow-hidden border border-white/20"
            style={{
              background:
                "linear-gradient(135deg, rgba(243,58,106,0.5) 0%, rgba(74,20,140,0.5) 100%)",
              boxShadow:
                "0 0 40px rgba(243,58,106,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 80px rgba(243,58,106,0.7)",
            }}
            whileTap={{ scale: 0.94 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.span
              className="relative z-10 flex items-center gap-3"
              animate={{ x: [0, 3, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🕯️ Blow the Candle! 🕯️
            </motion.span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="text-center flex flex-col items-center gap-8"
          >
            {/* Render Balloons when blown! */}
            <Balloons />

            {/* Celebrating monkeys */}
            <div className="flex gap-12">
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [-5, 5, -5] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                <Monkey type="playful" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [5, -5, 5] }}
                transition={{ duration: 1.4, repeat: Infinity, delay: 0.2 }}
              >
                <Monkey type="floating" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [-5, 5, -5] }}
                transition={{ duration: 1.1, repeat: Infinity, delay: 0.4 }}
              >
                <Monkey type="peek" />
              </motion.div>
            </div>

            <motion.h3
              className="font-display text-6xl md:text-8xl text-premium-rose leading-tight"
              style={{ textShadow: "0 0 50px rgba(243,58,106,0.8)" }}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              Happy Birthday
              <br />
              <span className="font-script italic text-white">Shottey!</span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="space-y-3"
            >
              <p className="font-sans uppercase tracking-[0.4em] text-premium-gold md:text-2xl text-lg font-bold">
                You Make My World Beautiful ❤️
              </p>
              <div className="flex justify-center gap-3 text-3xl mt-4">
                {["🎉", "🎊", "💕", "🌹", "🎂", "✨"].map((e, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + i * 0.1, type: "spring" }}
                  >
                    {e}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Celebration;
