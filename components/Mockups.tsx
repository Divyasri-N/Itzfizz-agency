"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Mockups() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      gsap.from(containerRef.current.children, {
        x: 200,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);
  gsap.to(containerRef.current, {
  y: -100,
  scrollTrigger: {
    trigger: containerRef.current,
    scrub: true,
  },
});

  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-6 px-10"
      >
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="min-w-[300px] h-[200px] bg-white rounded-2xl shadow-lg flex items-center justify-center text-xl font-semibold"
          >
            Project {item}
          </div>
        ))}
      </div>
    </section>
  );
}