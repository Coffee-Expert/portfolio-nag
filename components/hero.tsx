"use client";

import { motion } from "framer-motion";
import { ServiceCards } from "./service-cards";

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
  }));

  return (
    
    <div className="absolute inset-0 pointer-events-none z-0">
      
      <svg
        className="w-full h-full text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
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
  );
}

export function Hero() {
  return (
    
    
    <section className="px-6 md:px-6 lg:px-24 relative overflow-hidden pt-5 pb-20 z-4">
      {/* Floating background */}
{/* Global floating background */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <FloatingPaths position={1} />
    <FloatingPaths position={-1} />

  </div>

      <div className="  rounded-3xl p-10 z-5  relative my-30 border border-white/20 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl relative z-10 py-40">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-6">
            I create{" "}
            <span className="italic font-serif bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
              beautiful
            </span>
            <br />
            experiences
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-xl mb-8">
            We design brands that look good, feel right, and perform even
            better. From visuals to visibility, IADU Studio builds your presence
            from the ground up.
          </p>

          <p className="text-white/50 text-sm">Open for Projects</p>
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
              <circle
                cx="50"
                cy="50"
                r="8"
                fill="currentColor"
                className="text-purple-400/50"
              />
            </svg>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-white/40 via-white/10 to-transparent" />

          <div
            className="relative ml-6 p-10 rounded-2xl bg-white/5 
                  backdrop-blur-md border border-white/10 
                  shadow-xl transition-all duration-500 
                  hover:bg-white/[0.07] hover:-translate-y-[2px]"
          >
            <div
              className="absolute inset-0 rounded-2xl 
                    bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_60%)] 
                    pointer-events-none"
            />

            <h3 className="text-sm uppercase tracking-[0.3em] text-white/60 mb-2">
              Who We Are
            </h3>

            <h2
              className="text-3xl md:text-4xl font-semibold leading-tight mb-6
               text-white
               [text-shadow:0_0_12px_rgba(192,132,252,0.35)]"
            >
              Identity. Aesthetics. Design. Utility.
            </h2>

            <p className="text-white/80 text-lg leading-relaxed">
              At IADU Studio, we partner with forward-thinking brands to define
              and elevate their digital presence through precision, clarity, and
              refined execution.
            </p>

            <div className="flex items-center gap-4 mt-8 mb-4">
              <span className="text-xs tracking-widest text-white/50">
                IADU
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent" />
            </div>

            <p className="text-white/80 text-lg leading-relaxed">
              Identity, Aesthetics, Design & Utility — four pillars guiding
              every system we build. Clean visuals, futuristic palettes, and
              purposeful storytelling shape brands designed not for attention,
              but for endurance.
            </p>
          </div>
        </div>
      </div>
              <ServiceCards />
      
    </section>
    
  );
}
