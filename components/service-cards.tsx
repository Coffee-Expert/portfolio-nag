import { Badge } from "@/components/ui/badge"

export function ServiceCards() {
  return (
    <section className="p-6 pb-20 md:px-12 lg:px-24 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

        {/* SERVICE 01 */}
        <div className="group relative rounded-3xl p-8 md:p-10 
                        bg-white/5 backdrop-blur-md 
                        border border-white/10
                        transition-all duration-500
                        hover:bg-white/[0.07] hover:-translate-y-1">

          {/* Service Index */}
          <span className="text-sm tracking-widest text-white/40">
            01
          </span>

          <h2 className="mt-3 text-2xl md:text-3xl font-medium text-white">
            Branding & Visual Identity
          </h2>

          <p className="mt-4 text-white/80 leading-relaxed">
            We design complete brand systems — from logos and typography to color
            palettes and tone of voice — ensuring your brand communicates with clarity,
            consistency, and confidence across every touchpoint.
          </p>

          {/* Divider */}
          <div className="mt-6 h-px w-full bg-gradient-to-r from-white/30 to-transparent" />

          {/* Deliverables */}
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge className="bg-white/10 text-white border-white/20">Logo System</Badge>
            <Badge className="bg-white/10 text-white border-white/20">Color Palette</Badge>
            <Badge className="bg-white/10 text-white border-white/20">Typography</Badge>
            <Badge className="bg-white/10 text-white border-white/20">Brand Guidelines</Badge>
          </div>
        </div>

        {/* SERVICE 02 */}
        <div className="group relative rounded-3xl p-8 md:p-10 
                        bg-white/5 backdrop-blur-md 
                        border border-white/10
                        transition-all duration-500
                        hover:bg-white/[0.07] hover:-translate-y-1">

          <span className="text-sm tracking-widest text-white/40">
            02
          </span>

          <h2 className="mt-3 text-2xl md:text-3xl font-medium text-white">
            Social Media Setup & Design
          </h2>

          <p className="mt-4 text-white/80 leading-relaxed">
            We craft visually cohesive social profiles and content systems that attract
            attention, build credibility, and communicate your brand identity with
            intention — not noise.
          </p>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-white/30 to-transparent" />

          <div className="mt-6 flex flex-wrap gap-2">
            <Badge className="bg-white/10 text-white border-white/20">Profile Setup</Badge>
            <Badge className="bg-white/10 text-white border-white/20">Content Design</Badge>
            <Badge className="bg-white/10 text-white border-white/20">Post Scheduling</Badge>
            <Badge className="bg-white/10 text-white border-white/20">Growth Strategy</Badge>
          </div>
        </div>

        {/* SERVICE 03 */}
        <div className="group relative rounded-3xl p-8 md:p-10 
                        bg-white/5 backdrop-blur-md 
                        border border-white/10
                        transition-all duration-500
                        hover:bg-white/[0.07] hover:-translate-y-1">

          <span className="text-sm tracking-widest text-white/40">
            03
          </span>

          <h2 className="mt-3 text-2xl md:text-3xl font-medium text-white">
            Digital Marketing & SEO
          </h2>

          <p className="mt-4 text-white/80 leading-relaxed">
            We help your brand get discovered through data-driven SEO and digital
            marketing strategies — optimizing content, visibility, and performance
            to generate sustainable, long-term growth.
          </p>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-white/30 to-transparent" />

          <div className="mt-6 flex flex-wrap gap-2">
            <Badge className="bg-white/10 text-white border-white/20">SEO Strategy</Badge>
            <Badge className="bg-white/10 text-white border-white/20">Website Optimization</Badge>
            <Badge className="bg-white/10 text-white border-white/20">Google & Meta Ads</Badge>
            <Badge className="bg-white/10 text-white border-white/20">Analytics</Badge>
          </div>
        </div>

      </div>
    </section>
  )
}
