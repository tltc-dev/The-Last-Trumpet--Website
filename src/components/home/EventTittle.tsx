import React from "react";
import TextAnimation from "../ui/TextAnimation";
import { ArrowRight } from "lucide-react";

type Props = {};

const EventTittle = (props: Props) => {
  return (
    <div className="padding flex flex-col md:flex-row gap-3 md:gap-0 justify-between py-36 xl:py-40">
      <div className="flex flex-col gap-2 lg:gap-3 md:justify-between">
        <p className="opacity-80 pb-5">Upcoming Events</p>
        <TextAnimation
          className="heading text-start"
          phrase={["Stay Involved", "Upcoming Church Activities"]}
        />
      </div>
      <div className="flex flex-col gap-5 w-full md:w-1/3 items-start justify-center opacity-90">
        <p>
          We love Tacoma, and the entire South Sound. At Anchor we actively seek
          how to live as blessings to this already beautiful region."
        </p>
        <button className="button-rounded flex items-center gap-2 ">
          connect <ArrowRight size={19} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default EventTittle;
