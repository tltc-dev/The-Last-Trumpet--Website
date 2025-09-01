import React, { useCallback, useEffect, useState } from "react";
import Carousel from "./ui/carousel/carousel";
import Preview from "./ui/carousel/preview";
import { images } from "@/lib/data";

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
    <div className="font-sans lg:h-[60vw] 2xl:h-screen w-screen bg-black relative ">
      <Carousel images={images} index={index} />
      <Preview images={images} index={next} setIndex={setIndex} />
    </div>
  );
};

export default Landing;
