"use client"

import { motion } from "framer-motion"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-purple-400/20" viewBox="0 0 696 316" fill="none">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export function Hero() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-6">
          I create{" "}
          <span className="italic font-serif bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
            beautiful
          </span>
          <br />
          experiences
        </h1>

        <p className="text-white/70 text-lg md:text-xl max-w-xl mb-8">
          I work with people all over the world to create tailor-made graphic design experiences
        </p>

        <p className="text-white/50 text-sm">Available for freelance work</p>
      </div>

      {/* Decorative badge */}
      <div className="absolute right-12 top-32 hidden lg:block z-10">
        <div className="w-24 h-24 rounded-full border-2 border-purple-400/30 flex items-center justify-center">
          <svg className="w-16 h-16" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-purple-400/30"
            />
            <path
              d="M50 20 L50 35 M50 65 L50 80 M20 50 L35 50 M65 50 L80 50"
              stroke="currentColor"
              strokeWidth="2"
              className="text-purple-400/40"
            />
            <circle cx="50" cy="50" r="8" fill="currentColor" className="text-purple-400/50" />
          </svg>
        </div>
      </div>
    </section>
  )
}
