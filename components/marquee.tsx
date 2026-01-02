"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap"; // animation engine
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollMarqueeStrip() {
  // reference to wrapper div that contains ALL marquee text
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  // direction of scroll: +1 (down) or -1 (up)
  const scrollDirectionRef = useRef(1);

  // GSAP timeline controlling marquee motion
  const tlRef = useRef<gsap.core.Tween | null>(null);

  // ------------ INITIAL SETUP ------------
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    // duplicate text so marquee loops forever
    el.innerHTML += el.innerHTML;

    // create horizontal infinite looping animation
    tlRef.current = gsap.to(el, {
      x: "-50%", // slide left to half width (since duplicated)
      duration: 5390, // speed of auto-marquee
      ease: "linear", // smooth easing
      repeat: -1, // infinite loop
    });

    // listen to scroll direction
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        // delta > 0 = scrolling down, delta < 0 = scrolling up
        scrollDirectionRef.current = self.direction === 1 ? 1 : -1;

        // increase or reverse marquee speed depending on scroll
        tlRef.current?.timeScale(scrollDirectionRef.current === 1 ? 2 : -2);
      },
    });

    return () => {
      tlRef.current?.kill();
    };
  }, []);

  // ------------------- UI ---------------------
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        background: "black",
        padding: "20px 0",
        whiteSpace: "nowrap",
        borderTop: "1px solid #222",
        borderBottom: "1px solid #222",
      }}
    >
      <div
        ref={marqueeRef}
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          fontSize: "90px",
          fontFamily: "Oswald, sans-serif",
          textTransform: "uppercase",
          letterSpacing: "10px",
          color: "transparent",
          WebkitTextStroke: "1px #fff", // hollow outline text
        }}
      >
        {/* Loop to repeat the text infinitely */}
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="mr-4">
            &nbsp; i need a phone please T_T •&nbsp;i need a phone please T_T
            •&nbsp;i need a phone please T_T •&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}
