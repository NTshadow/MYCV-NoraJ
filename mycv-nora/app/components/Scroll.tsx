"use client";

import { useEffect, useRef } from "react";

const D = "M20 0 C40 100 0 200 20 300 S0 500 20 600 S0 700 20 800";

export default function Scroll() {
  const path = useRef<SVGPathElement>(null);
  const dot = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const p = path.current;
    const d = dot.current;
    if (!p || !d) return;

    const len = p.getTotalLength();
    p.style.strokeDasharray = `${len}`;

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      p.style.strokeDashoffset = `${len * (1 - progress)}`;
      const pt = p.getPointAtLength(len * progress);
      d.setAttribute("cx", `${pt.x}`);
      d.setAttribute("cy", `${pt.y}`);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 800"
      preserveAspectRatio="none"
      className="pointer-events-none fixed left-3 top-0 hidden h-screen w-10 md:block"
    >
      {/* Grå bane */}
      <path d={D} fill="none" stroke="white" strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round" />
      {/* Linjen som tegnes mens du scroller */}
      <path ref={path} d={D} fill="none" className="stroke-foreground" strokeWidth="3" strokeLinecap="round" />
      <circle ref={dot} r="7" cx="20" cy="0" className="fill-orange" />
    </svg>
  );
}
