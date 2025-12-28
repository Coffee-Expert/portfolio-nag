import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// TODO: Replace with actual Google Drive fetcher
// Placeholder images for now - will be replaced with Drive images
const caseStudies = [
  {
    id: "korba",
    title: "Korba",
    type: "CASE STUDY",
    tags: ["Web design", "Development"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare dolor.",
    image: "/abstract-neon-gradient-purple-orange.jpg",
    variant: "light" as const,
  },
  {
    id: "trailhive",
    title: "TrailHive",
    type: "CASE STUDY",
    tags: ["Concept design", "Brand identity"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare dolor.",
    image: "/abstract-neon-gradient-purple-pink-glow.jpg",
    variant: "dark" as const,
  },
  {
    id: "nexus",
    title: "Nexus",
    type: "CASE STUDY",
    tags: ["Visual identity", "Art direction"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare dolor.",
    image: "/abstract-holographic-gradient-blue-purple.jpg",
    variant: "dark" as const,
  },
]

export function CaseStudies() {
  return (
    <section className="px-6 py-12 md:px-12 lg:px-24 space-y-6">
      {caseStudies.map((study) => (
        <CaseStudyCard key={study.id} {...study} />
      ))}
    </section>
  )
}

function CaseStudyCard({
  title,
  type,
  tags,
  description,
  image,
  variant,
}: {
  title: string
  type: string
  tags: string[]
  description: string
  image: string
  variant: "light" | "dark"
}) {
  return (
    <div
      className={`rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center ${
        variant === "light"
          ? "bg-gradient-to-br from-purple-100 to-purple-50"
          : "bg-gradient-to-br from-[#1a0b2e] to-[#2d1650] border border-purple-500/20"
      }`}
    >
      {/* Content */}
      <div className="space-y-6 relative">
        {/* Decorative badge for dark variant */}
        {variant === "dark" && (
          <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full border border-purple-400/30 flex items-center justify-center opacity-50">
            <svg className="w-10 h-10" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-purple-400/50"
              />
              <path
                d="M50 25 L50 35 M50 65 L50 75"
                stroke="currentColor"
                strokeWidth="2"
                className="text-purple-400/60"
              />
            </svg>
          </div>
        )}

        <div>
          <p className={`text-xs font-semibold mb-2 ${variant === "light" ? "text-purple-600" : "text-purple-300"}`}>
            {type}
          </p>
          <h3
            className={`text-4xl md:text-5xl font-light mb-4 ${variant === "light" ? "text-gray-900" : "text-white"}`}
          >
            {title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className={
                  variant === "light"
                    ? "bg-white border-purple-200 text-gray-700"
                    : "bg-purple-500/10 border-purple-400/30 text-purple-200"
                }
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <p className={`leading-relaxed ${variant === "light" ? "text-gray-600" : "text-white/70"}`}>{description}</p>

        <Button
          variant="ghost"
          className={variant === "light" ? "text-gray-900 hover:bg-purple-100" : "text-white hover:bg-purple-500/10"}
        >
          SEE CASE STUDY →
        </Button>
      </div>

      {/* Image */}
      <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
    </div>
  )
}
