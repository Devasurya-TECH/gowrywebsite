import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Envelope from './components/Envelope'
import Hero from './components/Hero'
import Memories from './components/Memories'
import LoveMessage from './components/LoveMessage'
import Reasons from './components/Reasons'
import Celebration from './components/Celebration'
import Ending from './components/Ending'
import FloatingHearts from './components/FloatingHearts'

function App() {
    const [introFinished, setIntroFinished] = useState(false)
    const [showSurprise, setShowSurprise] = useState(false)

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
                            <Memories />
                            <LoveMessage />
                            <Reasons />
                            <Celebration />
                            <Ending />
                        </motion.div>
                    )}
                </motion.div>
            )}
        </div>
    )
}

export default App
