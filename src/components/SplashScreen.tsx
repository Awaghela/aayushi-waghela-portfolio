import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500; // 1.5s
    const startTime = performance.now();

    const animateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        requestAnimationFrame(animateProgress);
      } else {
        setTimeout(onComplete, 300); // Small delay before unmounting
      }
    };

    requestAnimationFrame(animateProgress);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-[#020617] text-slate-900 dark:text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 dark:from-teal-500/20 dark:to-cyan-500/20 border border-slate-200 dark:border-white/10 backdrop-blur-md">
          <span className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-slate-600 dark:from-white dark:to-white/60">
            AW
          </span>
          <motion.div
            className="absolute inset-0 rounded-2xl border border-teal-500/50"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.2, opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      <div className="w-48 h-1 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-teal-500 to-cyan-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-4 text-xs tracking-widest text-slate-500 dark:text-white/40 uppercase font-mono">
        Initializing... {Math.round(progress)}%
      </div>
    </motion.div>
  );
}
