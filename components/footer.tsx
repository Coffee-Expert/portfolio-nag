import Link from "next/link"
import { MagicButton } from "./magic-button"
import { Linkedin, Instagram, Dribbble } from "lucide-react" // Lucide icons

export function Footer() {
  return ( <>
    <div className="px-6 py-20 md:px-12 lg:px-24  text-white">
      {/* Top CTA */}
      <div className="relative mb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-purple-500/10 to-purple-600/20 rounded-3xl blur-2xl" />
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 md:p-20 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8">
            Ready to turn your ideas 
            <br />
            into a <span className="text-white-400 [text-shadow:0_0_5px_rgba(192,132,252,0.6),0_0_10px_rgba(192,132,252,0.6),0_0_20px_rgba(192,132,252,0.8)]">
              masterpiece
            </span>?
          </h2>

          <Link href="/contact">
            <MagicButton href="/contact" className="my-10 hover:from-purple-500 hover:to-purple-400 text-white border-0 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Get In Touch
            </MagicButton>
          </Link>
        </div>
      </div>
</div>

    <footer>
      {/* Bottom footer */}
      <div className="rounded-t-3xl px-6 py-16 md:px-12 lg:px-24 bg-[#0a0a0a]">
        {/* Logo + copyright */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 mb-12">
          <Link
            href="/"
            className="text-4xl md:text-5xl font-bold uppercase tracking-tight font-sans bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
          >
            IADU
          </Link>
          <p className="text-white/40 text-sm md:ml-4">©2025 IADU Studios — All Rights Reserved</p>
        </div>

        {/* Footer links */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6 border-t border-purple-700/20 pt-6">
          
          {/* Minimal links */}
          <div className="flex gap-6">
            <Link href="/contact" className="text-white/70 hover:text-white text-sm transition-colors">Contact</Link>
          </div>

          {/* Social icons using Lucide */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
           
            <Link href="#" target="_blank" className="hover:text-purple-400 transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="#" target="_blank" className="hover:text-purple-400 transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" target="_blank" className="hover:text-purple-400 transition-colors">
              <Dribbble size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer> </>
  )
}
