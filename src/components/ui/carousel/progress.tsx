import React, { useEffect, useRef } from "react";
import { StaticImageData } from "next/image";
import gsap from "gsap";

type Props = {
  images: string[] | StaticImageData[];
  index: number;
};

const Progress = ({ images, index }: Props) => {
  const progressRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    progressRef.current.forEach((el, i) => {
      gsap.killTweensOf(el);
      gsap.set(el, { width: 0 });
      if (i === index) {
        gsap.to(el, {
          width: "100%",
          duration: 4,
          ease: "cubic-bezier(0.43, 0.13, 0.23, 0.96)",
        });
      }
    });
  }, [index, images.length]);

  return (
    <div className="flex flex-row w-full gap-0.5 absolute bottom-1">
      {images.map((_, i) => (
        <div key={i} className="h-[3px] w-full bg-gray-400">
          {i === index && (
            <div
              ref={(el) => {
                progressRef.current[i] = el;
              }}
              key={index}
              className="h-full w-full bg-white"
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Progress;
