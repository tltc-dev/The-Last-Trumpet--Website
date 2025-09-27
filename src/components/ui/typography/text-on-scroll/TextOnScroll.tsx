"use client";
import { useRef, useEffect, RefObject } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { cn } from "../../../../lib/utils";
import { useTheme } from "next-themes";
interface Props {
  contain: RefObject<HTMLDivElement | null>;
  phrase: string;
  className?: string;
}

const TextOpacityOnScroll: React.FC<Props> = ({
  contain,
  phrase,
  className,
}) => {
  const refs = useRef<HTMLSpanElement[]>([]);
  const body = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  // const color = resolvedTheme === "dark" ? "#000" : "#fff";
  const createAnimation = () => {
    gsap.to(refs.current, {
      keyframes: [
        { color: "orange", opacity: 1, duration: 0.01 },
        { color: "#F3A560", opacity: 1, duration: 0.4 },
        { color: "var(--color)", opacity: 0.6, duration: 0.5 },
      ],
      stagger: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: body.current,
        scrub: true,

        start: "top 30%",
        end: `+=${window.innerHeight / 1.1}`,
      },
    });
  };

  const splitWords = (phrase: string) => {
    return phrase.split(" ").map((word, i) => (
      <p key={`${word}_${i}`} className="m-0 mr-1">
        {splitLetters(word)}
      </p>
    ));
  };

  const splitLetters = (word: string) => {
    return word.split("").map((letter, i) => (
      <span
        key={`${letter}_${i}`}
        ref={(el) => {
          if (el) refs.current.push(el);
        }}
        className="opacity-20 "
      >
        {letter}
      </span>
    ));
  };

  return (
    <main
      className={cn(
        "flex flex-col items-end justify-center leading-relaxed  ",
        className
      )}
    >
      <div ref={body} className="flex flex-wrap justify-center">
        {splitWords(phrase)}
      </div>
    </main>
  );
};

export default TextOpacityOnScroll;
