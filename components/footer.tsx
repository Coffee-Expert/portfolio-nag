import Link from "next/link"
import { Button } from "@/components/ui/button"

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

          {/* Decorative badge */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="w-20 h-20 rounded-full border-2 border-purple-400/30 flex items-center justify-center">
              <svg className="w-12 h-12" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-purple-400/40"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-purple-400/30"
                  strokeDasharray="3 3"
                />
                <path
                  d="M50 30 L50 40 M50 60 L50 70 M30 50 L40 50 M60 50 L70 50"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-purple-400/50"
                />
                <circle cx="50" cy="50" r="6" fill="currentColor" className="text-purple-400/60" />
              </svg>
            </div>
          </div>

          <Link href="/contact">
            <Button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white border-0 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Get In Touch ↗
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-purple-400/10">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-white/80 text-lg font-serif italic hover:text-white transition-colors">
            Nag Nine
          </Link>
          <p className="text-white/40 text-sm">©2024 - All Rights Reserved</p>
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
