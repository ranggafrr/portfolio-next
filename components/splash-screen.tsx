"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="fixed inset-0 bg-zinc-900 z-9999 flex items-center justify-center overflow-hidden"
          exit={{
            opacity: 0,
            scale: 1.1,
            transition: {
              duration: 0.6,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* Greeting Text */}
          <div className="text-center">
            <motion.div
              className="overflow-hidden mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-6xl font-extralight text-white tracking-wider"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                Hello
              </motion.h1>
            </motion.div>

            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <motion.p
                className="text-zinc-400 text-sm lg:text-base tracking-[0.3em] uppercase font-light"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 1.4,
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                Welcome to my world
              </motion.p>
            </motion.div>

            {/* Subtle dot indicator */}
            <motion.div
              className="mt-12 flex justify-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 bg-zinc-600 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 2.2 + i * 0.1,
                    duration: 0.3,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
