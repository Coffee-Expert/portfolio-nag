import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MagicButton } from "./magic-button"

export function Footer() {
  return (
    <footer className="px-6 py-20 md:px-12 lg:px-24">
      <div className="relative mb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-purple-500/10 to-purple-600/20 rounded-3xl blur-2xl" />
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 md:p-20 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 text-balance">
            Interested in
            <br />
            working together?
          </h2>

        

          <Link href="/contact">
            <MagicButton href="/contact" className="my-10 hover:from-purple-500 hover:to-purple-400 text-white border-0 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Get In Touch
            </MagicButton>
              {/* Decorative badge */}
          <div className="inline-flex items-center justify-center my-8">
  <Image
    src="/talk.png"
    alt="Decorative badge"
    width={200}
    height={200}
    className="slow-rotate"
  />
</div>

          </Link>
          
        </div>
      </div>

      {/* Bottom footer */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-purple-400/10">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-white/80 text-lg font-serif italic hover:text-white transition-colors">
            Nag Nine
          </Link>
          <p className="text-white/40 text-sm">©2025 - All Rights Reserved</p>
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-white/60 hover:text-white text-xs transition-colors"
          >
            LINKEDIN ↗
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="text-white/60 hover:text-white text-xs transition-colors"
          >
            TWITTER ↗
          </Link>
          <Link
            href="https://dribbble.com"
            target="_blank"
            className="text-white/60 hover:text-white text-xs transition-colors"
          >
            DRIBBBLE ↗
          </Link>
        </nav>

        <p className="text-white/40 text-sm">Available for freelance work</p>
      </div>
    </footer>
  )
}
