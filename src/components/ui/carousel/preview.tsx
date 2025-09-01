"use client";
import React from "react";
import { StaticImageData } from "next/image";
import Carousel from "./carousel";
import Progress from "./progress";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[] | StaticImageData[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Preview = ({ images, index, setIndex }: Props) => {
  return (
    <div className="absolute flex gap-4 bottom-10 right-20 w-[350px] h-[150px] border-3 backdrop-blur-lg bg-[#fff]/15 border-[#fff]/5  p-1.5">
      <Carousel images={images} index={index} className="w-[130px]" />
      <div className="flex flex-col ">
        <p className="text-white">The Last Trumpet Church</p>
        <div className="flex absolute bottom-6 right-1.5 gap-2">
          <div
            onClick={() => setIndex((prev) => prev + 1)}
            className="button-rounded w-7 h-7"
          >
            <ChevronLeft size={18} strokeWidth={2} />
          </div>
          <div
            onClick={() => setIndex((prev) => prev - 1)}
            className="button-rounded w-7 h-7"
          >
            <ChevronRight size={18} strokeWidth={2} />
          </div>
        </div>
        <Progress images={images} index={index} />
      </div>
    </div>
  );
};

export default Preview;
