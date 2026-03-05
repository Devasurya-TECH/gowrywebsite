import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

const Envelope = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  // Steps:
  // 0 = Initial state (Envelope closed, bouncing slightly)
  // 1 = Envelope opens (flap goes up)
  // 2 = Letter slides out
  // 3 = Read letter (3 seconds)
  // 4 = Fade entire screen to reveal main site

  useEffect(() => {
    // Auto-sequence the intro
    const timeouts = [];

    // Wait 1.5s then open flap
    timeouts.push(setTimeout(() => setStep(1), 1500));

    // Wait 2.2s then slide letter out
    timeouts.push(setTimeout(() => setStep(2), 2200));

    // Wait 3.5s then read letter
    timeouts.push(setTimeout(() => setStep(3), 3500));

    // Wait 6.5s then fade out everything
    timeouts.push(setTimeout(() => setStep(4), 6500));

    // Trigger parent callback after full sequence
    timeouts.push(setTimeout(onComplete, 7500));

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {step < 4 && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <FloatingHearts />

          {/* Top Text */}
          <motion.div
            className="absolute top-1/4 text-center z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step < 2 ? 1 : 0, y: step < 2 ? 0 : -20 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans uppercase tracking-[0.4em] text-premium-gold text-sm md:text-base font-semibold mb-3">
              A message for Shottey ❤️
            </p>
          </motion.div>

          {/* The Envelope Context */}
          <div className="relative mt-20 md:mt-0 w-[300px] h-[200px] md:w-[400px] md:h-[250px]">
            {/* Glow behind envelope */}
            <div className="absolute inset-0 bg-premium-rose/20 blur-[60px] rounded-full scale-150 animate-pulse" />

            <motion.div
              className="relative w-full h-full"
              animate={{ y: step === 0 ? [0, -10, 0] : 0 }}
              transition={{
                duration: 2,
                repeat: step === 0 ? Infinity : 0,
                ease: "easeInOut",
              }}
            >
              {/* Envelope Back */}
              <div className="absolute inset-0 bg-[#e0d5c1] rounded-lg shadow-xl" />

              {/* The Letter (slides out) */}
              <motion.div
                className="absolute left-[5%] right-[5%] h-full bg-[#fdfbf7] rounded-md shadow-lg flex flex-col items-center justify-center p-6 text-center border border-premium-gold/20"
                initial={{ top: "10%", zIndex: 10, opacity: 0 }}
                animate={{
                  top: step >= 2 ? "-60%" : "10%",
                  zIndex: step >= 2 ? 30 : 10,
                  opacity: step >= 1 ? 1 : 0,
                  scale: step >= 3 ? 1.2 : 1,
                  boxShadow:
                    step >= 3
                      ? "0 0 40px rgba(243,58,106,0.3)"
                      : "0 4px 6px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: step >= 3 ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: step === 3 ? 0.3 : 0 }}
                >
                  <h2 className="font-display text-2xl md:text-4xl text-premium-rose mb-4">
                    Happy Birthday Shottey ❤️
                  </h2>
                  <p className="font-script text-xl md:text-3xl text-gray-700 leading-relaxed">
                    A small surprise <br /> made with love.
                  </p>
                </motion.div>
              </motion.div>

              {/* Envelope Front Left/Right Flaps */}
              <div
                className="absolute inset-0 border-l-[150px] md:border-l-[200px] border-r-[150px] md:border-r-[200px] border-b-[100px] md:border-b-[125px] border-t-[100px] md:border-t-[125px] border-transparent border-b-[#f4efe6] border-l-[#ebdcca] border-r-[#ebdcca] rounded-lg z-20"
                style={{ dropShadow: "0 -4px 4px rgba(0,0,0,0.05)" }}
              />

              {/* Envelope Top Flap (Opens) */}
              <motion.div
                className="absolute top-0 left-0 w-full h-[150px] md:h-[180px] z-40 origin-top"
                initial={{ rotateX: 0 }}
                animate={{
                  rotateX: step >= 1 ? 180 : 0,
                  zIndex: step >= 1 ? 5 : 40,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <div
                  className="w-full h-full border-t-[100px] md:border-t-[125px] border-l-[150px] md:border-l-[200px] border-r-[150px] md:border-r-[200px] border-transparent border-t-[#dfd1bb]"
                  style={{ filter: "drop-shadow(0 4px 4px rgba(0,0,0,0.1))" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Envelope;
