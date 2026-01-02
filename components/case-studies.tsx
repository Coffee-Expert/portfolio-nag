import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// TODO: Replace with actual Google Drive fetcher
// Placeholder images for now - will be replaced with Drive images
const caseStudies = [
  {
    id: "superstar-beverages",
    title: "SuperStar Beverages",
    type: "BRANDING & SOCIAL STRATEGY",
    tags: ["Branding", "Instagram Strategy", "Wellness"],
    description:
      "Brand identity and Instagram growth strategy for a wellness startup, focused on positioning the brand as energetic, clean, and lifestyle-driven while increasing audience engagement.",
    image: "/images/prem/i4.jpeg",
    variant: "dark" as const,
  },
  {
    id: "cabin-mate",
    title: "Cabin Mate",
    type: "DIGITAL IDENTITY",
    tags: ["Brand Identity", "Web Presence", "Tech"],
    description:
      "Complete digital identity for a tech solutions firm, including visual branding, tone of voice, and foundational assets designed to scale with the company’s growth.",
    image: "/images/prem/i7.png",
    variant: "dark" as const,
  },
  {
    id: "helpful-cupcake",
    title: "Helpful Cupcake",
    type: "VISUAL DESIGN & LAUNCH",
    tags: ["Logo Design", "Menu Design", "Instagram Launch"],
    description:
      "Logo design, menu visuals, and a digital launch campaign for a dessert brand, including the creation and positioning of its Instagram presence.",
    image: "/images/prem/i8.jpg",
    variant: "dark" as const,
  },
]

export function CaseStudies() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-24">
      
      {/* Section Intro */}
      <div className="max-w-4xl mb-16">
        
        {/* Eyebrow / kicker */}
        <p className="text-sm uppercase tracking-wider text-purple-600 mb-4">
          Case Studies
        </p>

        {/* Main heading */}
        <h2 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
          Every project <br className="hidden md:block" />
          is a story
        </h2>

        {/* Supporting copy */}
        <p className="max-w-3xl text-lg text-white leading-relaxed">
          Each project we take on is built on strategy, designed with precision,
          and powered by creativity. Here’s a glimpse of how we’ve helped
          startups and small businesses define their identity, elevate their
          marketing, and connect with their audience.
        </p>

      </div>

      {/* Case Study Cards */}
      <div className="space-y-8">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} {...study} />
        ))}
      </div>

         {/* Closing line */}
      <div className="mt-10 text-center">
        <p className="text-gray-500 text-3xl">
          And yours next.
        </p>
                <p className="text-gray-500 text-3xl">
hopefully..</p>
      </div>


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


