"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  images: (string | StaticImageData)[];
  index: number;
  className?: string;
};

const Carousel = ({ images, index, className }: Props) => {
  return (
    <div className={cn("h-full bg-black relative overflow-hidden", className)}>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={index}
          className="absolute inset-0 overflow-hidden"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ x: "-30%" }}
            animate={{ x: "0%" }}
            exit={{ x: "30%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={images[index]}
              alt={`Slide ${index}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
