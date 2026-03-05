import React from "react";
import { motion } from "framer-motion";

const balloonData = Array.from({ length: 25 }).map((_, i) => ({
  id: i,
  color: ["#F33A6A", "#D4AF37", "#A78BFA", "#fbbf24", "#fdba74", "#f472b6"][
    Math.floor(Math.random() * 6)
  ],
  left: Math.random() * 100, // Random starting position
  delay: Math.random() * 2,
  duration: 6 + Math.random() * 6, // Randomize speed 6s to 12s
  scale: 0.6 + Math.random() * 0.8, // Sizes 60% to 140%
}));

// Premium SVG Balloon shape
const BalloonSVG = ({ color }) => (
  <svg
    viewBox="0 0 100 148"
    width="80"
    height="118"
    className="drop-shadow-2xl"
  >
    {/* Main Balloon Body */}
    <path
      d="M50,0 C20,0 0,25 0,55 C0,85 25,120 50,135 C75,120 100,85 100,55 C100,25 80,0 50,0 Z"
      fill={color}
    />
    {/* Tie Knot at bottom */}
    <path d="M45,134 L42,142 L58,142 L55,134 Z" fill={color} />
    {/* Elegant highlight for 3D effect */}
    <path
      d="M20,40 C20,20 40,10 60,15 C40,25 25,40 20,60 C15,55 20,40 20,40 Z"
      fill="rgba(255,255,255,0.3)"
    />
  </svg>
);

const Balloons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {balloonData.map((b) => (
        <motion.div
          key={b.id}
          className="absolute bottom-[-200px]"
          style={{ left: `${b.left}%` }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: "-130vh", // Float way past the top
            opacity: [0, 1, 1, 0], // Fade in, then fade out at the very top
            x: [
              (Math.random() - 0.5) * 50,
              (Math.random() - 0.5) * -50,
              (Math.random() - 0.5) * 50,
              0,
            ], // Gentle swaying
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            ease: "easeInOut",
            times: [0, 0.1, 0.8, 1],
          }}
        >
          {/* Internal sway rotation */}
          <motion.div
            style={{ transformOrigin: "bottom center" }}
            animate={{ rotate: [-5, 5, -5] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              style={{
                transform: `scale(${b.scale})`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <BalloonSVG color={b.color} />

              {/* Dangling String */}
              <svg width="4" height="60" className="mt-[-2px] opacity-40">
                <path
                  d="M2,0 Q-3,15 2,30 T2,60"
                  fill="transparent"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Balloons;
