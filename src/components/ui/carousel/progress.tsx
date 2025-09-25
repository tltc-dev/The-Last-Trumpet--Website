"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  length: number; // number of items
  index: number; // current active index
};

const Progress = ({ length, index }: Props) => {
  const progressRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    progressRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.killTweensOf(el);
      gsap.set(el, { width: 0 });
      if (i === index) {
        gsap.to(el, {
          width: "100%",
          duration: 4.5, // slightly less than autoplay
          ease: "power2.inOut",
        });
      }
    });
  }, [index, length]);

  return (
    <div className="flex flex-row w-full gap-0.5">
      {Array.from({ length }).map((_, i) => (
        <div key={i} className="h-[3px] w-full bg-gray-400 overflow-hidden">
          <div
            ref={(el) => {
              progressRef.current[i] = el;
            }}
            className="h-full w-0 bg-white"
          />
        </div>
      ))}
    </div>
  );
};

export default Progress;
