import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { FastAverageColor } from 'fast-average-color'
import { useTheme } from 'next-themes'
import { Event } from '@/lib/types'


type Props = {
    index : number ;
    image : StaticImageData ; // evt.image
    length : number ; // event.length 
    evt : Event ;
}

const Card = ({ index , image , length , evt }: Props) => {

    const [shadowColor, setShadowColor] = useState('')
    const { resolvedTheme } = useTheme();
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    
    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setCurrent((prev : number) => (prev + 1) % length );
        }, 3000);

        
        return () => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [current]);

    const opacity = resolvedTheme === "dark" ? "0.35" : "0.6";

    const prevIndex = (current - 1 + length) % length;
    const nextIndex = (current + 1) % length;
    
    let position: "prev" | "current" | "next" | "hidden" = "hidden";
    if (index === current) position = "current";
    else if (index === prevIndex) position = "prev";
    else if (index === nextIndex) position = "next";

    useEffect(() => {

        const fac = new FastAverageColor();
        const imgUrl = typeof image === "string" ? image : image.src;
    
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
            // setTextColor(color.isDark ? "text-white" : "text-black");
          });

      }, [evt.image, resolvedTheme]);


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
                  position === "current" ? 1 : position === "hidden" ? 0 : 1,
                scale: position === "current" ? 0.95 : 0.95,
              }}
              transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
              className={`relative overflow-hidden shadow-lg  ${
                position === "hidden" ? "pointer-event-none" : ""
              }`}
            >
              <Image
                src={evt.image}
                alt={evt.title}
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font- pb-3">{evt.title}</h3>
                <p className="text-xs">
                  {evt.date} • {evt.time}
                </p>
                <p className="text-xs">{evt.location}</p>
              </div>
              <button className="absolute top-4 left-4 bg-black/50 px-3 py-1 text-white text-xs">
                Register
              </button>
            </motion.div>
  )
}

export default Card ; 