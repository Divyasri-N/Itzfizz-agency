"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      }).to(titleRef.current, {
        scale: 1.05,
        duration: 0.6,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px] opacity-30"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-black opacity-60"></div>

      {/* Main Text */}
      <h1
        ref={titleRef}
        className="relative text-5xl md:text-7xl font-bold tracking-wide text-center
        bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
        text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(255,0,255,0.5)]"
      >
        WELCOME TO ITZFIZZ
      </h1>
    </section>
  );
}