"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

type Props = {};

const Navbar = (props: Props) => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // avoid mismatch between server and client render
    return null;
  }

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: [0.43, 0.13, 0.23, 0.96], duration: 0.6 }}
      className="w-full padding fixed  top-0 h-14 p-3 z-30 backdrop-blur-lg text-white mix-blend-difference border-b border-gray-100/10 flex flex-row items-center justify-between"
    >
      <a href="/" className="">
        Logo
      </a>
      <div className="flex gap-10 font-poppins text-sm font-light text-white opacity-80">
        <a href="/event-detail" className="">
          Events
        </a>
        <a href="/about-us" className="text-sm font-light text-white">
          Overview
        </a>
        <a href="/ministry" className="text-sm font-light text-white">
          Ministry
        </a>
        <a href="/connect" className="text-sm font-light text-white">
          Connect
        </a>
        <button
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
          className="ml-4 w-20 rounded-full border border-white/20 px-3 py-1 text-xs hover:bg-white/10"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
