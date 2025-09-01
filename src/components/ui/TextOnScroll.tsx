"use client";
import { useRef, useEffect, RefObject } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { cn } from "../../lib/utils";
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      keyframes: [
        { color: "orange", opacity: 1, duration: 0.1 },
        { color: "#F3A560", opacity: 1, duration: 0.4 },
        { color: "white", duration: 0.5 },
      ],
      stagger: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: body.current,
        scrub: true,

        //   start: "top ",
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
        className="opacity-50 "
      >
        {letter}
      </span>
    ));
  };

  return (
    <main
      className={cn(
        "flex flex-col items-end justify-center leading-relaxed text-white/90 ",
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
