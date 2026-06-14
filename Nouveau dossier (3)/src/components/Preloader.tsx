import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onComplete: () => void;
}

// Highly stylized SVG animation representing a Master Chef's hand/tweezers placing a gold pearl on a pleated traditional Algerian pastry
const ChefDecoratingCakeAnimation = () => {
  return (
    <div id="chef-decorating-animation" className="relative w-48 h-48 mb-6 flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="pastryGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#451A03" />
            <stop offset="60%" stopColor="#78350F" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Glow behind the pastry to simulate warmth */}
        <motion.circle
          cx="100"
          cy="125"
          r="45"
          fill="url(#glow)"
          animate={{
            scale: [0.9, 1.15, 0.9],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Traditional Algerian Pastry - Ornate pleated Dziriette pastry */}
        <g id="traditional-dziriette-pastry">
          {/* Crisp, golden-brown baked almond cup body */}
          <path
            d="M 60,115 C 60,115 50,145 75,155 C 100,165 100,165 125,155 C 150,145 140,115 140,115 C 140,115 130,123 100,123 C 70,123 60,115 60,115 Z"
            fill="url(#pastryGradient)"
            stroke="#D97706"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Elegant manually-pinched folds */}
          <path d="M 60,115 C 68,124 72,144 78,153" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.7" />
          <path d="M 80,119 C 84,128 88,146 90,156" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.7" />
          <path d="M 100,123 C 100,133 100,148 100,158" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.7" />
          <path d="M 120,119 C 116,128 112,146 110,156" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.7" />
          <path d="M 140,115 C 132,124 128,144 122,153" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.7" />

          {/* Glistering sugar beads on pinched folds */}
          <circle cx="60" cy="115" r="2.2" fill="#FEF3C7" stroke="#D97706" strokeWidth="0.5" />
          <circle cx="80" cy="119" r="2.2" fill="#FEF3C7" stroke="#D97706" strokeWidth="0.5" />
          <circle cx="100" cy="123" r="2.2" fill="#FEF3C7" stroke="#D97706" strokeWidth="0.5" />
          <circle cx="120" cy="119" r="2.2" fill="#FEF3C7" stroke="#D97706" strokeWidth="0.5" />
          <circle cx="140" cy="115" r="2.2" fill="#FEF3C7" stroke="#D97706" strokeWidth="0.5" />

          {/* Honey-Glazed almond citrus dome filling */}
          <path
            d="M 68,114 C 68,114 75,90 100,90 C 125,90 132,114 132,114 C 132,114 115,121 100,121 C 85,121 68,114 68,114 Z"
            fill="url(#goldGradient)"
            stroke="#FEF3C7"
            strokeWidth="0.75"
            opacity="0.95"
          />
        </g>

        {/* Master Chef's Precision Tweezers inserting a Golden Pearl */}
        <motion.g
          id="chef-tweezers-arm"
          initial={{ x: 15, y: -15 }}
          animate={{
            x: [18, 0, 18],
            y: [-18, 4, -18],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Tweezers Drop Shadow */}
          <path
            d="M 175,25 L 105,95 L 101,98 L 99,101 L 97,105 L 103,103 L 107,99 L 179,31 Z"
            fill="#000000"
            opacity="0.15"
          />
          {/* Stainless steel premium culinary tweezers */}
          <path
            d="M 170,22 L 104,88 C 102,90 98,92 96,96"
            stroke="#E5E7EB"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M 180,32 L 114,98 C 112,100 106,104 101,106"
            stroke="#9CA3AF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Elegant gold collar sleeve */}
          <path
            d="M 158,34 L 138,54"
            stroke="url(#goldGradient)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Golden Pearl / Sugar Bead being placed by Chef Oum Mohamed */}
          <motion.circle
            cx="96"
            cy="97"
            r="4.5"
            fill="url(#goldGradient)"
            className="filter drop-shadow-[0_0_8px_#fbbf24]"
            animate={{
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
            }}
          />
        </motion.g>

        {/* Golden sparkles showing placement success */}
        <motion.g
          id="sparkle-burst"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 0, 1.35, 0, 0],
            opacity: [0, 0, 1, 0, 0]
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.44, 0.52, 0.65, 1]
          }}
        >
          {/* Cross lines of the light burst */}
          <line x1="96" y1="78" x2="96" y2="108" stroke="#FEF3C7" strokeWidth="2" strokeLinecap="round" />
          <line x1="81" y1="93" x2="111" y2="93" stroke="#FEF3C7" strokeWidth="2" strokeLinecap="round" />
          {/* Sub-beams */}
          <line x1="86" y1="83" x2="106" y2="103" stroke="#FBBF24" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="106" y1="83" x2="86" y2="103" stroke="#FBBF24" strokeWidth="1.2" strokeLinecap="round" />
        </motion.g>

        {/* Circular honey wave ripple when tweezers make contact */}
        <motion.ellipse
          cx="96"
          cy="95"
          rx="12"
          ry="5"
          stroke="#F59E0B"
          strokeWidth="1.2"
          initial={{ scale: 0.15, opacity: 0 }}
          animate={{
            scale: [0.15, 1.6, 2.3],
            opacity: [0, 0.85, 0]
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.50, 0.88]
          }}
        />
      </svg>
    </div>
  );
};

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); // Small pause for smooth transition
          return 100;
        }
        return prev + 2.5; // Smooth progression
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        id="preloader-container"
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-950 text-[#F5F1E9]"
        exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      >
        {/* Ambient background rays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.07)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative flex flex-col items-center max-w-md px-6 text-center">
          {/* Exquisite Chef Decorating Cake Custom Animated Component */}
          <ChefDecoratingCakeAnimation />

          {/* Luxury Text Animation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="font-serif text-3xl md:text-4xl font-light tracking-[0.2em] text-[#E5D5B8]">
              OUM MOHAMED
            </h1>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-amber-500/80">
              Haute Pâtisserie Algérienne
            </p>
          </motion.div>

          {/* Inspirational Chef Quote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-6 text-xs italic font-serif text-stone-300 max-w-xs leading-relaxed"
          >
            "Handcrafting the sweet gold of Algiers since 1994, honoring heritage one fold at a time."
          </motion.p>

          {/* Progress bar and numeric readout */}
          <div className="w-64 mt-12 relative">
            <div className="h-[2px] w-full bg-stone-850 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-300 shadow-[0_0_8px_#f59e0b]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center mt-3 text-[10px] font-mono tracking-wider text-stone-400">
              <span>TRADITION & PRECISION</span>
              <span className="text-amber-400">{Math.round(progress)}%</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
