"use client";
import React, { useEffect, useRef, useState } from "react";
import type { JSX } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

type Props = {
  phrase?: string | string[];
  className?: string;
  as?: keyof JSX.IntrinsicElements; // optional, choose tag
};

const TextAnimation: React.FC<Props> = ({
  phrase,
  className,
  as: Tag = "div",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const color = resolvedTheme === "dark" ? "white" : "black";
    console.log(color);
    const lines = Array.from(container.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              lines,
              { color: "white", opacity: 0, filter: "blur(8px)" },
              {
                keyframes: [
                  {
                    color: "orange",
                    opacity: 1,
                    filter: "blur(1px)",
                    duration: 0.1,
                  },
                  { color: color, filter: "blur(0px)", duration: 0.05 },
                ],
                ease: "power1.inOut",
                duration: 1,
                overwrite: "auto",
                stagger: 0.15,
              }
            );
          } else {
            gsap.to(lines, { opacity: 0, duration: 0.1, overwrite: "auto" });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [resolvedTheme]);

  const lines = Array.isArray(phrase) ? phrase : phrase ? [phrase] : [];

  return (
    <div ref={containerRef}>
      {lines.map((line, idx) => (
        <Tag key={idx} className={cn("flex flex-col gap-2", className)}>
          {line}
        </Tag>
      ))}
    </div>
  );
};

export default TextAnimation;
