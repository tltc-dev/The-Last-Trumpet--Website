import CardEvent from "@/components/ui/event-card/CardEvent";
import { event } from "@/lib/data";
import React from "react";

type Props = {};

const EventSection = (props: Props) => {
  return (
    <section className=" ">
      <div className="padding  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-2 md:gap-x-5 gap-y-10 z-10 ">
        {event.slice(0, 6).map((evt) => (
          <CardEvent evt={evt} key={evt.id} /> // add more button
        ))}
      </div>
    </section>
  );
};

export default EventSection;
