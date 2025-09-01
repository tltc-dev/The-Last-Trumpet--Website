"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

type Props = {
  phrase?: string;
  className?: string;
};

const TextAnimation = ({ phrase, className }: Props) => {
  const textRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              el,
              { color: "white", opacity: 0, filter: "blur(8px)" },
              {
                keyframes: [
                  //   { color: "orange", opacity: 1, filter: "blur(3px)", duration:  0.1 },
                  {
                    color: "orange",
                    opacity: 1,
                    filter: "blur(1px)",
                    duration: 0.1,
                  },
                  { color: "white", filter: "blur(0px)", duration: 0.05 },
                ],
                ease: "power1.inOut",
                duration: 1,
                overwrite: "auto",
              }
            );
          } else {
            gsap.to(el, { opacity: 0, duration: 0.1, overwrite: "auto" });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <h1
      ref={textRef}
      className={cn("text-4xl stroke-3 opacity-0 text-white ", className)}
    >
      {phrase}
    </h1>
  );
};

export default TextAnimation;
