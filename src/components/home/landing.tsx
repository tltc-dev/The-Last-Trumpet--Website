import React, { useCallback, useEffect, useState } from "react";
import Carousel from "../ui/carousel/carousel";
import Preview from "../ui/carousel/preview";
import { images } from "@/lib/data";
import BlurEffect from "react-progressive-blur";

const Landing = () => {
  const [index, setIndex] = useState(0);
  const [next, setNext] = useState(1);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
    setNext((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="font-sans  h-[70vh] lg:h-[60vw] 2xl:h-screen w-screen bg-black relative overflow-hidden">
      <Carousel images={images} index={index} />
      <BlurEffect position="bottom" intensity={30} className="h-32 w-full" />
      <div className="absolute flex w-full justify-center md:justify-end gap-4 bottom-5 md:bottom-10 md:right-20 z-20">
        <Preview images={images} index={next} setIndex={setIndex} />
      </div>
    </div>
  );
};

export default Landing;
