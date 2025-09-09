import { Host } from "@/lib/types";
import Image from "next/image";
import React from "react";

type Props = {
  hosts?: Host[];
};

const Avatar: React.FC<Props> = ({ hosts }) => {
  if (!hosts || hosts.length === 0) return null;

  const names =
    hosts.length === 1
      ? hosts[0].name
      : hosts.length === 2
      ? `${hosts[0].name} & ${hosts[1].name}`
      : `${hosts[0].name}, ${hosts[1].name} & more...`;

  return (
    <div className="flex flex-row items-center justify-between relative">
      <div className="relative ">
        {hosts.slice(0, 3).map((h, idx) => (
          <Image
            key={idx}
            src={h.profile}
            alt={h.name}
            className={`w-10 h-10 rounded-full border-2 border-white/30 shadow-lg ${
              idx === 1 ? "ml-6" : "absolute top-0 left-0"
            }`}
          />
        ))}
      </div>
      <p className="text-sm text-white w-1/2 text-end">{names}</p>
    </div>
  );
};

export default Avatar;
