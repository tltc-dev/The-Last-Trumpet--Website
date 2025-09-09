"use client";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LeadershipTeam from "./components/SectionOne";
import SpiritualWarriors from "./components/SectionTwo";

type Props = {};
gsap.registerPlugin(ScrollTrigger);

const Page = (props: Props) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useGSAP(
    () => {
      if (scrollRef.current) {
        const boxes = gsap.utils.toArray(
          scrollRef.current.children
        ) as HTMLElement[];
        boxes.forEach((box) => {
          gsap.from(box, {
            y: 80,
            scale: 1,
            scrollTrigger: {
              trigger: box,
              start: "top bottom",
              end: "top 70%",
              scrub: true,
            },
            ease: "power1.inOut",
          });
        });
      }
    },
    { scope: scrollRef }
  );

  return (
    <main ref={scrollRef}>
      <LeadershipTeam />
      <SpiritualWarriors />
    </main>
  );
};

export default Page;
