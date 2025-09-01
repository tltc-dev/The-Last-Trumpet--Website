"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Landing from "@/components/landing";

import TextAnimation from "@/components/ui/TextAnimation";
import TextOpacityOnScroll from "@/components/ui/TextOnScroll";
import EventPreview from "@/components/EventPreview";
import FAQ from "@/components/FAQ";

export default function Home() {
  const contain = useRef<HTMLDivElement | null>(null);

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
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="font-sans h-full w-full">
      <Landing />
      <div className="px-3 sm:px-5 md:px-10 lg:px-20 2xl:max-w-screen-3xl  mx-auto font-sans h-full pb-0 relative">
        <div className="flex justify-between py-36 xl:py-40">
          <div className="flex flex-col gap-2 lg:gap-3">
            <p className="opacity-80 pb-5">Upcoming Events</p>
            <TextAnimation className="xl:text-5xl" phrase="Stay Involved" />
            <TextAnimation
              className="xl:text-5xl"
              phrase="Upcoming Church Activities"
            />
          </div>
          <div className="flex flex-col gap-5 w-1/3 items-start justify-center">
            <p>
              We love Tacoma, and the entire South Sound. At Anchor we actively
              seek how to live as blessings to this already beautiful region."
            </p>
            <button className="">contact</button>
          </div>
        </div>
        <EventPreview />
        <div className="flex flex-col items-center justify-center h-screen w-full">
          <TextAnimation phrase="Who Are We" className="text-center" />
          <TextAnimation
            phrase="And What We Believe"
            className="text-center pb-10"
          />
          <TextOpacityOnScroll
            className="w-[550px] text-xl leading-9 font-light"
            contain={contain}
            phrase="At the heart of our faith is a simple but profound truth:We were created to love God, and to love each other.From the very beginning, God designed us to reflect His image, experience His goodness, and walk in His abundance. Growth, fruitfulness, unity, and worship—these are not just church goals, but part of God’s original design for humanity."
          />
        </div>
        <FAQ />
      </div>
    </main>
  );
}
