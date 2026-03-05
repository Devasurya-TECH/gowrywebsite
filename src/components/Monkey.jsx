import React from "react";
import { motion } from "framer-motion";

const Monkey = ({ className, type = "floating" }) => {
  const monkeySrc = "/monkey/WhatsApp Image 2026-03-05 at 8.54.37 PM.jpeg";

  const variants = {
    floating: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    peek: {
      y: [20, 0, 20],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    playful: {
      scale: [1, 1.1, 1],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={`relative ${className} group`}
      variants={variants[type]}
      initial={type}
      animate={type}
    >
      <div className="relative inline-block">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-premium-rose/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <img
          src={monkeySrc}
          alt="Gowry's Monkey"
          className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-full shadow-2xl border-4 border-white/20 transform group-hover:scale-110 transition-transform duration-500"
        />

        {/* Decorative heart */}
        <motion.div
          className="absolute -top-2 -right-2 text-xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ❤️
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Monkey;
