import { StaticImageData } from "next/image";
import React, { useState } from "react";
import Carousel from "./carousel";
import Preview from "./preview";

type Props = {
  images: string[] | StaticImageData[];
};

const Banner = ({ images }: Props) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full h-full">
      <Carousel images={images} index={0} />
      {/* <Preview images={images} index={index}  /> */}
    </div>
  );
};

export default Banner;
