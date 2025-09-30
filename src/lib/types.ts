import { StaticImageData } from "next/image";

export type Host = {
  name: string;
  profile: string | StaticImageData;
};

export type AppEvent = {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  date: string;
  time: string;
  location: string;
  homeCarousel? : boolean ;
  host?: Host[];
};
