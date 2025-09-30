"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import BlurEffect from "react-progressive-blur";
import Carousel from "../ui/carousel/carousel";
import Preview from "../ui/carousel/preview";
import AnimatedTitle from "../ui/typography/TitleFadeRandom/AnimatedTittle";
import { AppEvent } from "@/lib/types";

interface Props {
  events: Array<AppEvent>;
}
const Landing = ({ events }: Props) => {
  const [index, setIndex] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const isNavigatingRef = useRef(false); // synchronous lock
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goToSlide = useCallback(
    (direction: "next" | "prev") => {
      if (isNavigatingRef.current) return;

      isNavigatingRef.current = true;
      setIsNavigating(true);

      setIndex((prev) =>
        direction === "next"
          ? (prev + 1) % events.length
          : (prev - 1 + events.length) % events.length
      );

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        isNavigatingRef.current = false;
        setIsNavigating(false);
      }, 800);
    },
    [events.length]
  );

  useEffect(() => {
    const interval = setInterval(() => goToSlide("next"), 6000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="h-screen lg:h-[60vw] 2xl:h-screen w-screen relative overflow-hidden">
      <Carousel images={events.map((e) => e.image)} index={index} />
      <div className="absolute bottom-0 w-full h-full  z-20">
        <div className="padding relative w-full h-full flex items-end pb-10 md:pb-20 lg:pb-32">
          <AnimatedTitle
            shadow="[text-shadow:_0px_0px_26px_rgba(0,0,0,0.6)]"
            title={events[index].description}
            index={index}
            className="absolute bottom-20 md:max-w-[50vw] lg:max-w-[45vw] xl:max-w-[55vw] 2xl:max-w-[40vw] text-white font-light font-poppins text-3xl md:text-4xl xl:text-5xl leading-11 xl:leading-13"
          />
          <Preview
            className="absolute right-5 md:right-10 lg:right-20 bottom-10"
            events={events}
            index={index}
            // setIndex={setIndex}
            navigate={goToSlide}
          />
        </div>
      </div>

      <BlurEffect
        position="bottom"
        intensity={80}
        className="h-60 w-full bg-gradient-to-b from-white/0 to-black/40"
      />
    </div>
  );
};

export default Landing;
