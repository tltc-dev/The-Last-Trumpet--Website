"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full h-[500px] md:h-[400px]  not-dark:bg-white dark:bg-black  px-3 sm:px-5 md:px-10 lg:px-20  border-t border-white/30 relative overflow-hidden justify-center">
      <motion.div
        className="absolute opacity-15"
        animate={{
          x: [-100, 200, 220, -100],
          y: [0, -300, 100, 0],
          rotate: [360, 300, 200, 210, 100, 0],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Flair />
      </motion.div>
      <div className="absolute  from-[#F4933C]/70 via-orange-300/25 to-transparent w-[300px] h-[200px] rounded-4xl"></div>

      <div className="flex flex-col md:flex-row h-full">
        <div className="md:w-1/2 h-full flex flex-col pt-15 md:pt-0 gap-3 justify-center">
          <p className="font-light">
            The Last Trumpet Church
            <br />
            Mumbai
          </p>
          <p className="para-sm ">For Business Inquiry - hr@smaplemail.com</p>
          <div className="flex pt-5 md:pt-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-md text-sm md:text-base font-light px-5 w-50 md:w-60 bg-white/10 border border-white/20 hover:bg-white/20"
            />
            <button className="button  px-4 py-2 ml-2 ">Get Subscribe </button>
          </div>
        </div>
        <div className="md:w-1/2 h-full py-10 md:pt-20 flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <p className="pb-3">Our Service</p>
            <p className="para-sm">Events</p>
            <p className="para-sm">Donations</p>
            <p className="para-sm">Connect</p>
            <p className="para-sm">About</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="pb-3">Connect Us</p>
            <p className="para-sm">Toll free - 1800 32 94028</p>
            <p className="para-sm">Email - connect@samplemail.com</p>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Flair = () => {
  return (
    <svg
      width="769"
      height="933"
      viewBox="0 0 769 933"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_265_11)">
        <rect
          x="255"
          y="255"
          width="259"
          height="423"
          fill="url(#paint0_linear_265_11)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_265_11"
          x="0.300003"
          y="0.300003"
          width="768.4"
          height="932.4"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="127.35"
            result="effect1_foregroundBlur_265_11"
          />
        </filter>
        <linearGradient
          id="paint0_linear_265_11"
          x1="385"
          y1="479"
          x2="384.5"
          y2="678"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F4933C" />
          <stop offset="1" stopColor="black" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Footer;
