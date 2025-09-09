import Image, { StaticImageData } from "next/image";
import React from "react";
import Avatar from "./Avatar";
import { Event } from "@/lib/types";
import BlurEffect from "react-progressive-blur";

type Props = {
  evt: Event;
};

const CardEvent = ({ evt }: Props) => {
  return (
    <div className="w-full h-80 relative bg-gray-500 overflow-hidden border border-gray-600">
      {evt.title}
      <Image src={evt.image} alt={evt.title} fill className="object-cover" />
      <div className="absolute w-full h-32 bottom-0 z-10 blur-2xl"></div>
      <BlurEffect
        position="bottom"
        intensity={80}
        className="h-32 w-full bg-gradient-to-t from-white/20 to-transparent"
      />
      <div className="absolute flex flex-col bottom-0 p-3 w-full text-white z-20">
        <Avatar hosts={evt.host} />
        <div className="flex pt-3 ">
          <div className="relative flex flex-col ">
            <h3 className="text-md pb-1 leading-6 font-poppins ">
              {evt.title}
            </h3>
            <h3 className="text-xs w-[90%] pb-3 text-balance  h-12 overflow-hidden  line-clamp-3 font-extralight">
              {evt.description}
            </h3>
          </div>
          <div className="w-full flex flex-col items-end justify-between ">
            <p className="text-[10px] text-end pt-1">
              {evt.time} <br /> {evt.location} <br /> {evt.date}
            </p>
            <p className="text-xs"></p>
            <button className=" bg-black/50 px-3 py-1 mt-2 text-white text-xs">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
