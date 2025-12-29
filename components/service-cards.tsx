import { Badge } from "@/components/ui/badge"

export function ServiceCards() {
  return (
    <section className="px-6 pb-12 md:px-12 lg:px-24">
      <div className="grid md:grid-cols-2 gap-6 max-w-7xl">
        {/* Design Card */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 md:p-10">
          <h2 className="text-white text-3xl md:text-4xl font-light mb-4">Design</h2>

          <p className="text-white/90 text-base leading-relaxed mb-6">
            Whether it's branding and identity, print layouts, or powerful poster design, I create visually stunning
            solutions. With years of experience building designs for a variety of industries and businesses, we focus on
            simplicity and modern aesthetic that grabs attention.
          </p>

          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Branding
            </Badge>
            <Badge variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Development
            </Badge>
          </div>
        </div>

        {/* Art Direction Card */}
        <div className="bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-3xl p-8 md:p-10">
          <h2 className="text-white text-3xl md:text-4xl font-light mb-4">Art direction</h2>

          <p className="text-white/90 text-base leading-relaxed mb-6">
            I'm passionate about creating compelling visual stories. The difference between good design and great design
            is the art direction behind it. I work with clients to develop a cohesive and visually stunning end product.
            I work with clients to develop a cohesive design strategy by creating final composite designs.
          </p>

          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Concept design
            </Badge>
            <Badge variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Brand identity
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
