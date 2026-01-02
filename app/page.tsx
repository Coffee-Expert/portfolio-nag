"use client";

import Slider3D from "@/components/slider-3d";
import images from "./images";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ServiceCards } from "@/components/service-cards";
import { CaseStudies } from "@/components/case-studies";
import SkillsMarquee from "@/components/skills-marquee";
import { Footer } from "@/components/footer";
import { GlassmorphismNav } from "@/components/glassmorphism-nav";
import { FloatingPaths } from "@/components/background-paths";
import ScrollMarqueeStrip from "@/components/marquee";

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-gray-950 via-gray-150 to-black">
      <GlassmorphismNav />
      <Hero />
      <SkillsMarquee />

      <section className="slider-section my-20">
        <Slider3D images={images} />
      </section>       <ScrollMarqueeStrip />

      <CaseStudies />
      <Footer />
    </main>
  );
}
