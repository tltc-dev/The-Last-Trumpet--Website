import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { FastAverageColor } from 'fast-average-color'
import { useTheme } from 'next-themes'
import { Event } from '@/lib/types'
import BlurEffect from 'react-progressive-blur'
import Avatar from '../event-card/Avatar'


interface Props  {
  index: number;
  length: number; // event.length 
  evt: Event;
  current: number;
}

const Card = ({ index, length, evt, current }: Props) => {

  const [shadowColor, setShadowColor] = useState('')
  const [textColor, setTextColor] = useState('')
  const { resolvedTheme } = useTheme();
  const opacity = resolvedTheme === "dark" ? "0.6" : "0.6";


  useEffect(() => {

    const fac = new FastAverageColor();
    const imgUrl = typeof evt.image === "string" ? evt.image : evt.image.src; // Remove this condition after api image type fixed 

    fac
      .getColorAsync(imgUrl, {
        ignoredColor: [
          [255, 255, 255, 255],
          [0, 0, 0, 255],
        ],
      })
      .then((color) => {
        console.log("Average color:", color);
        const [r, g, b] = color.value;
        setShadowColor(`rgba(${r}, ${g}, ${b}, ${opacity})`);
        setTextColor(color.isDark ? "light" : "dark");
      });

  }, [evt.image, resolvedTheme]);


  const prevIndex = (current - 1 + length) % length;
  const nextIndex = (current + 1) % length;

  let position: "prev" | "current" | "next" | "hidden" = "hidden";
  if (index === current) position = "current";
  else if (index === prevIndex) position = "prev";
  else if (index === nextIndex) position = "next";


  return (
    <motion.div
      style={{
        boxShadow: `0px 15px 50px ${shadowColor}`,
        transition: "box-shadow 1.5s ease",
      }}
      key={evt.id}
      animate={{
        flex: position === "next" ? 2 : position === "hidden" ? 0 : 1,
        opacity:
          position === "current" ? 1 : position === "hidden" ? 0.8 : 1,
        scale: position === "current" ? 0.95 : 0.95,
      }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      className={`relative overflow-hidden ${position === "hidden" ? "pointer-event-none" : ""
        }`}
    >
      <Image
        src={evt.image}
        alt={evt.title}
        fill
        className="object-cover"
      />

      <BlurEffect
        position="bottom"
        intensity={80}
        className="h-32 w-full bg-gradient-to-t from-white/20 to-transparent"
      />
      <div className="absolute flex flex-col bottom-0 p-5 min-w-[300px] max-w-full text-white z-20">

        <div className="flex pt-3 ">
          <div className="relative flex flex-col gap-2">
            <h3 className={`${(textColor == "light") ? "text-white [text-shadow:_0_0_26px_black]" : "text-[#2b2b2b] [text-shadow:_0_0_56px_rgba(255,255,255,1)]"} 
            text-xl leading-6 font-outfit font-semibold tracking-wide pb-1`}>
              {evt.title}
            </h3>
            <h3 className="text-sm w-[90%] leading-5 pb-3 text-balance h-16 overflow-hidden  line-clamp-3 font-light text-gray-200">
              {evt.description}
            </h3>
          </div>
          {/* <div className="w-full flex flex-col items-end justify-between ">
            <p className={`${textColor} text-[10px] text-end pt-1`}>
              {evt.time} <br /> {evt.location} <br /> {evt.date}
            </p>
            <p className="text-xs"></p>
            <button className="bg-black/50 px-3 py-1 mt-2 text-white text-xs">
              Register
            </button>
          </div> */}
        </div>
        <Avatar hosts={evt.host} />
      </div>
      <button className="absolute top-4 left-4 bg-black/50 px-3 py-1 text-white text-xs">
        Register
      </button>
    </motion.div>
  )
}

export default Card; 