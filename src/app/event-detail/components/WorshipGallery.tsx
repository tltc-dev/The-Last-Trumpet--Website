"use client";
import React, { useCallback, useEffect, useState } from "react";
import { images } from "@/lib/data";
import Image from "next/image";
import Carousel from "@/components/ui/carousel/carousel";
import { ChevronDown, MoveDown } from "lucide-react";
import BlurEffect from "react-progressive-blur";

type Props = {};

const WorshipGallery = (props: Props) => {
  const [index, setIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="padding h-full w-full  ">
      <div className="flex w-full md:h-[540px] xl:h-[750px] mt-15  border-2 border-white/20  ">
        <div className="w-2/3 h-full relative overflow- border-r border-white/20">
          <Carousel images={images} index={index} />
          <BlurEffect
            position="bottom"
            intensity={80}
            className="h-32 w-full"
          />
        </div>
        <div className="w-1/3 h-full relative">
          <div className=" bg-black h-full overflow-y-scroll grid gap-y-0 grid-cols-2 scrollbar-custom">
            {images.map((image, idx) => (
              <Image
                src={image}
                key={idx}
                alt="..."
                width={200}
                height={200}
                className="w-full md:h-36 lg:h-36 xl:h-52 object-cover border border-white/20"
              />
            ))}
          </div>
          <BlurEffect position="bottom" intensity={200} />
          <div className="bg-gradient-to-b from-transparent to-black/80 bottom-0 w-full h-30 absolute flex items-end p-5 justify-center">
            <button className="button-trans text-xs px-2.5 py-1">
              scroll upwards <ChevronDown strokeWidth={2} size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorshipGallery;
