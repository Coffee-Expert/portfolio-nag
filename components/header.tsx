
        import Link from "next/link"
        import { Button } from "@/components/ui/button"
        import { useEffect, useState } from "react"
        import { motion, AnimatePresence } from "framer-motion"


        export function Header() {
          const [scrolled, setScrolled] = useState(false)

          useEffect(() => {
            const handleScroll = () => {
              setScrolled(window.scrollY > 0)
            }
            window.addEventListener("scroll", handleScroll)
            handleScroll()
            return () => window.removeEventListener("scroll", handleScroll)
          }, [])

          return (
            <header
              className={
                `fixed top-0 left-0 right-0 z-30 ` +
                `backdrop-blur-xl bg-white/30 dark:bg-black/30`
              }
              style={{ WebkitBackdropFilter: 'blur(24px)' }}
            >
              <div className="relative w-full">
                {/* Top row: Only IADU STUDIO and underline when not scrolled */}
                <AnimatePresence initial={false}>
                  {!scrolled && (
                    <motion.div
                      key="IADU STUDIO-row"
                      initial={{ opacity: 0, y: -24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -24 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="flex items-center justify-between px-6 md:px-12 lg:px-24 h-20"
                      style={{ overflow: 'hidden', position: 'relative' }}
                    >
                      <span className="text-white text-2xl font-serif italic tracking-widest select-none">IADU STUDIO</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* Underline: animates up on scroll */}
                <motion.div
                  key="underline"
                  initial={false}
                  animate={{
                    y: scrolled ? -20 : 0,
                    opacity: scrolled ? 0 : 1,
                    height: '2px',
                  }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="absolute left-0 w-full"
                  style={{
                    bottom: 0,
                    background: 'linear-gradient(90deg,rgba(255,255,255,0.7),rgba(255,255,255,0.2))',
                    zIndex: 40,
                  }}
                />
                {/* Navbar: hidden at top, slides down on scroll */}
                <AnimatePresence initial={false}>
                  {scrolled && (
                    <motion.div
                      key="navbar"
                      initial={{ opacity: 0, y: -24, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: '4.5rem' }}
                      exit={{ opacity: 0, y: -24, height: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="flex items-center justify-between px-6 md:px-12 lg:px-24 overflow-hidden"
                      style={{ minHeight: 0 }}
                    >
                      <Link href="/" className="text-white text-lg font-serif italic">
                        IADU STUDIO
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
                        <Button className=" hover:bg-purple-600/60 text-white border border-purple-400/30 rounded-full px-6">
                          LET'S TALK ↗
                        </Button>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </header>
          )
        }
