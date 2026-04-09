"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    // Smooth follow animation
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 12,
        y: e.clientY - 12,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    // Hover effect (grow)
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 2,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Apply hover effect to all buttons & links
    const targets = document.querySelectorAll("a, button");

    targets.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 bg-purple-500 rounded-full pointer-events-none z-50 blur-sm"
    />
  );
}