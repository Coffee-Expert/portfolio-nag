"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import "../app/slider.css"

type Card = {
  id: number
  imgSrc: string
}

interface Slider3DProps {
  images: string[]
}

export default function Slider3D({ images }: Slider3DProps) {
  const [cards, setCards] = useState<Card[]>([])
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const newCards = images.map((img, index) => ({
      id: index + 1,
      imgSrc: img,
    }))
    setCards(newCards)

    const handleScroll = (e: Event) => {
      const sliderSection = e.target as HTMLElement
      const scrollPos = sliderSection.scrollTop
      const slider = sliderSection.querySelector(".slider") as HTMLElement | null
      if (!slider) return

      const initialTransform = "translate3d(-50%, -50%, 0) rotateX(0deg) rotateY(-25deg) rotateZ(-120deg)"
      const zOffset = scrollPos * 0.5
      slider.style.transform = `${initialTransform} translateY(${zOffset}px)`
    }

    const sliderSection = document.querySelector(".slider-section")
    if (sliderSection) {
      sliderSection.addEventListener("scroll", handleScroll, { passive: true })
    }

    return () => {
      if (sliderSection) {
        sliderSection.removeEventListener("scroll", handleScroll)
      }
    }
  }, [images])

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.left = "15%"
  }

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.left = "0%"
  }

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  return (
    <>
      <div className="slider-section">
        <div className="slider" aria-label="3D image slider">
          {cards.map((card) => (
            <div
              key={card.id}
              className="card cursor-pointer"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => handleImageClick(card.imgSrc)}
            >
              <img src={card.imgSrc || "/placeholder.svg"} alt={`Image ${card.id}`} />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] flex items-center justify-center">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Full size preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
