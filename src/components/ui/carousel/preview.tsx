"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Progress from "./progress";
import Carousel from "./carousel";
import { cn } from "@/lib/utils";
import AnimatedTitle from "../typography/TitleFadeRandom/AnimatedTittle";
import { AnimatePresence, motion } from "framer-motion";
import { Event } from "@/lib/types";

type Props = {
  event: Event[];
  index: number;
  navigate: any;
  className?: string;
};

const Preview = ({ event, index, navigate, className }: Props) => {
  const nextIndex = (index + 1) % event.length;

  return (
    <div
      className={cn(
        className,
        `w-[90vw] md:w-[350px] h-[150px] flex gap-2 border-3 backdrop-blur-lg bg-white/15 border-white/5 p-1.5`
      )}
    >
      <Carousel
        images={event.map((e) => e.image)}
        index={nextIndex}
        className="w-[200px]"
      />
      <div className="flex flex-col w-full relative">
        <div className="h-7">
          <AnimatedTitle
            className="text-white text-sm pt-1 gap-1"
            index={nextIndex}
            title={event[nextIndex].title}
          />
        </div>
        <AnimatedTitle
          maxWords={12}
          index={nextIndex}
          className="text-xs  w-40 pt-1  text-white/60 gap-0.5"
          title={event[nextIndex].description}
        />
        <div className="flex flex-col w-full absolute bottom-0 right-0 gap-3">
          <div className="flex gap-2 items-center justify-between">
            <div className="flex flex-row">
              <p className="text-xs w-fit text-white/60 pr-1">
                Upcoming Slide :{" "}
              </p>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.p
                  key={nextIndex}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs w-fit text-white/60 text-balance truncate line-clamp-3"
                >
                  {nextIndex + 1}
                </motion.p>
              </AnimatePresence>
              <p className="text-xs w-fit text-white/60 pl-1">{` / ${
                event.length + 1
              }`}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => navigate("prev")}
                className="button-trans w-7 h-7 text-white"
              >
                <ChevronLeft size={18} strokeWidth={2} />
              </button>
              <button
                onClick={() => navigate("next")}
                className="button-trans w-7 h-7 text-white"
              >
                <ChevronRight size={18} strokeWidth={2} />
              </button>
            </div>
          </div>
          <Progress length={event.length} index={index} />
        </div>
      </div>
    </div>
  );
};

export default Preview;
