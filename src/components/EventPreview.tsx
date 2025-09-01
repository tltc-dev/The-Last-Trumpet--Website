"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { events } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EventPreview = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % events.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <div className=" flex flex-col w-full">
      <div className="relative flex w-full max-w-6xl mx-auto overflow-hidden h-[400px] md:h-[500px] lg:h-[400px] 2xl:h-[600px]">
        {events.map((event, i) => {
          const prevIndex = (current - 1 + events.length) % events.length;
          const nextIndex = (current + 1) % events.length;

          let position: "prev" | "current" | "next" | "hidden" = "hidden";
          if (i === current) position = "current";
          else if (i === prevIndex) position = "prev";
          else if (i === nextIndex) position = "next";

          return (
            <motion.div
              key={event.id}
              animate={{
                flex: position === "next" ? 2 : position === "hidden" ? 0 : 1,
                opacity:
                  position === "current" ? 1 : position === "hidden" ? 0 : 1,
                scale: position === "current" ? 0.95 : 0.95,
              }}
              transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
              className={`relative overflow-hidden shadow-lg  ${
                position === "hidden" ? "pointer-events-none" : ""
              }`}
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font- pb-3">{event.title}</h3>
                <p className="text-xs">
                  {event.date} • {event.time}
                </p>
                <p className="text-xs">{event.location}</p>
              </div>
              <button className="absolute top-4 left-4 bg-black/50 px-3 py-1 text-white text-xs">
                Register
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Controls - bottom right */}

      <div className="w-full flex justify-end gap-3 pt-10">
        <button className="button flex items-center justify-between w-fit">
          All Events <ChevronRight strokeWidth="1.5" />
        </button>
        <button onClick={handlePrev} className="button-rounded w-9 h-9">
          <ChevronLeft size={24} strokeWidth={2} />
        </button>
        <button onClick={handleNext} className="button-rounded w-9 h-9">
          <ChevronRight size={24} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default EventPreview;
