import React, { useState, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Envelope from "./components/Envelope";
import Hero from "./components/Hero";
import FloatingHearts from "./components/FloatingHearts";

// Lazy load all heavy downstream components to eliminate main-thread stutter
const Memories = lazy(() => import("./components/Memories"));
const LoveMessage = lazy(() => import("./components/LoveMessage"));
const Celebration = lazy(() => import("./components/Celebration"));
const Ending = lazy(() => import("./components/Ending"));

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <div className="relative min-h-screen text-white bg-black">
      <div className="mesh-bg" />

      {/* Always show hearts */}
      <FloatingHearts />

      <AnimatePresence mode="wait">
        {!introFinished && (
          <Envelope key="envelope" onComplete={() => setIntroFinished(true)} />
        )}
      </AnimatePresence>

      {introFinished && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 w-full"
        >
          {!showSurprise ? (
            <AnimatePresence mode="wait">
              <Hero key="hero" onOpen={() => setShowSurprise(true)} />
            </AnimatePresence>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Suspense
                fallback={
                  <div className="min-h-screen bg-black flex items-center justify-center text-premium-rose animate-pulse">
                    Loading memories...
                  </div>
                }
              >
                <Memories />
                <LoveMessage />
                <Celebration />
                <Ending />
              </Suspense>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
}

export default App;
