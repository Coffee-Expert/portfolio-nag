"use client"

import { useEffect, useRef } from "react"
import { Palette, Pencil, Film, ImageIcon, Lightbulb, Zap, LayoutGrid, Cable as Cube } from "lucide-react"

const skills = [
  { name: "Canva", icon: Palette },
  { name: "CorelDRAW", icon: Pencil },
  { name: "Premiere Pro", icon: Film },
  { name: "Photoshop", icon: ImageIcon },
  { name: "Lightroom", icon: Lightbulb },
  { name: "Illustrator", icon: Zap },
  { name: "After Effects", icon: LayoutGrid },
  { name: "InDesign", icon: Palette },
  { name: "Figma", icon: LayoutGrid },
  { name: "Blender", icon: Cube },
]

export function SkillsMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0

    const animate = () => {
      scrollPosition += 0.5
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-12 text-center">Skills & Tools</h2>

        <div
          ref={scrollRef}
          className="overflow-hidden whitespace-nowrap"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="inline-flex gap-8 animate-marquee">
            {/* First set */}
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={`first-${index}`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-transparent backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-purple-400" />
                  <span className="text-white/90 font-medium text-lg">{skill.name}</span>
                </div>
              )
            })}
            {/* Duplicate set for seamless loop */}
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={`second-${index}`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-transparent backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-purple-400" />
                  <span className="text-white/90 font-medium text-lg">{skill.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
