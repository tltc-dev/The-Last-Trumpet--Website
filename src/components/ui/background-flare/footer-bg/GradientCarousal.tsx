"use client";
import React from "react";
import { motion } from "framer-motion";

export const GradientCarousal = () => {
  return (
    <div className="w-full h-full  relative overflow-hidden border-t border-white/50 bg-white/5">
      <div className="p-10">
        <p className="text-white font-light text-lg">Magic Flow</p>
      </div>
      <motion.div
        className="absolute opacity-60"
        animate={{
          x: [-100, 200, 220, -100],
          y: [0, -300, 100, 0],
          rotate: [360, 300, 200, 210, 100, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Svg />
      </motion.div>
      <motion.div
        className="absolute opacity-60"
        animate={{
          x: [-100, 220, -100],
          y: [0, -300, 100, 0],
          rotate: [360, 200, 100, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Svg />
      </motion.div>
      <motion.div
        className="absolute opacity-50"
        initial={{ x: 100, y: -200 }}
        animate={{ rotate: [0, 100, 200, 300, 360] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Svg />
      </motion.div>
    </div>
  );
};

const Svg = () => {
  return (
    <svg
      width="653"
      height="470"
      viewBox="0 0 653 470"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8" filter="url(#filter0_f_149_113)">
        <path
          d="M551.183 -520L445.561 -90.288L239.776 115.358C211.522 154.851 170.694 215.291 140.696 267.378C129.567 330.752 117.284 375.461 105.638 368.808C92.3908 361.24 111.367 318.302 140.696 267.378C155.175 184.927 167.702 70.8823 174.337 -2.7521L395.925 -356.406L551.183 -520Z"
          fill="#F4933C"
          fill-opacity="0.15"
        />
        <path
          d="M551.183 -520L445.561 -90.288L239.776 115.358C211.522 154.851 170.694 215.291 140.696 267.378C129.567 330.752 117.284 375.461 105.638 368.808C92.3908 361.24 111.367 318.302 140.696 267.378C155.175 184.927 167.702 70.8823 174.337 -2.7521L395.925 -356.406L551.183 -520Z"
          fill="#F4933C"
          fill-opacity="0.15"
        />
        <path
          d="M551.183 -520L445.561 -90.288L239.776 115.358C183.898 193.462 78.8409 353.499 105.638 368.808C132.436 384.118 162.603 127.48 174.337 -2.7521L395.925 -356.406L551.183 -520Z"
          stroke="#F4933C"
          stroke-opacity="0.15"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_149_113"
          x="0.84082"
          y="-621.712"
          width="651.278"
          height="1091.68"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_149_113"
          />
        </filter>
      </defs>
    </svg>
  );
};
