import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="px-6 py-6 md:px-12 lg:px-24">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-white text-lg font-serif italic">
          Nag Nine
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-white/80 hover:text-white text-sm transition-colors"
          >
            LINKEDIN ↗
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="text-white/80 hover:text-white text-sm transition-colors"
          >
            TWITTER ↗
          </Link>
          <Link
            href="https://dribbble.com"
            target="_blank"
            className="text-white/80 hover:text-white text-sm transition-colors"
          >
            DRIBBBLE ↗
          </Link>
        </nav>

        <Link href="/contact">
          <Button className="bg-purple-600/40 hover:bg-purple-600/60 text-white border border-purple-400/30 rounded-full px-6">
            LET'S TALK ↗
          </Button>
        </Link>
      </div>
    </header>
  )
}
