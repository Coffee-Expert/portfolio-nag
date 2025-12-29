import React from "react"

interface MagicButtonProps {
  href: string
  children: React.ReactNode
  target?: string
  className?: string
}

// Do NOT wrap MagicButton in a <Link> or <a> if href is provided, to avoid <a> inside <a> hydration errors.
export function MagicButton({ href, children, target = "_blank", className = "" }: MagicButtonProps) {
  const baseClass =
    `relative z-10 rounded-2xl bg-black px-6 py-3 text-center text-[oklch(0.55_0.13_280)] font-medium no-underline transition-all duration-250 ease-in-out shadow-lg ` +
    `hover:text-[oklch(0.82_0.06_280)] hover:bg-black hover:scale-105 focus:text-[oklch(0.82_0.06_280)] focus:bg-[oklch(0.13_0.04_280)] focus:scale-105 ` +
    className

  const style = {
    boxShadow: "0 0 32px 8px oklch(0.42 0.18 280 / 0.5)"
  }

  return (
    <div className="grid place-items-center">
      {href ? (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={baseClass}
          style={style}
        >
          <span className="drop-shadow-sm w-full text-center block">{children}</span>
        </a>
      ) : (
        <button type="button" className={baseClass} style={style}>
          <span className="drop-shadow-sm w-full text-center block">{children}</span>
        </button>
      )}
    </div>
  )
}
