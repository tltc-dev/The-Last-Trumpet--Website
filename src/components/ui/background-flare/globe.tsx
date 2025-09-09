"use client";
import React from "react";
import { motion } from "framer-motion";

const Globe = () => {
  return (
    <motion.div className="absolute flex justify-center inset-0 top-70 z-0 ">
      <motion.div
        initial={{ scale: 2 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        className="blur-[1px] w-36 h-36 rounded-full overflow-hidden"
      >
        {" "}
        <svg
          className="blur-xl"
          width="239"
          height="237"
          viewBox="0 0 239 237"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          >
            <circle cx="119.5" cy="119.5" r="119.5" fill="#0000" />
          </motion.g>
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          >
            <circle cx="57.5" cy="57.5" r="57.5" fill="#F4933C" />
          </motion.g>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default Globe;
