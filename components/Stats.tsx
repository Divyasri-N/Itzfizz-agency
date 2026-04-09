"use client";

import { useEffect, useState, useRef } from "react";

export default function Stats() {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let c = 0;
          let p = 0;

          const interval = setInterval(() => {
            if (c < 50) setClients(++c);
            if (p < 200) setProjects(++p);

            if (c >= 50 && p >= 200) clearInterval(interval);
          }, 30);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-black text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-10">Our Impact</h2>

      <div className="flex justify-center gap-16">
        <div>
          <h3 className="text-5xl font-bold">{clients}+</h3>
          <p className="mt-2 text-gray-400">Clients</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold">{projects}+</h3>
          <p className="mt-2 text-gray-400">Projects</p>
        </div>
      </div>
    </section>
  );
}