import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


type Props = {}

const Card = (props: Props) => {
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
                onLoad={onImageLoad}
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