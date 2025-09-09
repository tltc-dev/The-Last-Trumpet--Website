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
    <div className="w-[90vw] flex gap-2 md:w-[350px] h-[150px] border-3 backdrop-blur-lg bg-[#fff]/15 border-[#fff]/5  p-1.5">
      <Carousel images={images} index={index} className="w-[200px]" />
      <div className="flex flex-col w-full relative">
        <p className="text-white text-sm">The Last Trumpet Church</p>
        <p className="text-xs w-40 text-white bg-blend-lighten mix-blend-different text-balance truncate text-ellipsis overflow-hidden  line-clamp-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="flex absolute bottom-6 right-0 gap-2">
          <div
            onClick={() => setIndex((prev) => prev + 1)}
            className="button-trans w-7 h-7"
          >
            <ChevronLeft size={18} strokeWidth={2} />
          </div>
          <div
            onClick={() => setIndex((prev) => prev - 1)}
            className="button-trans w-7 h-7"
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
