import { StaticImageData } from "next/image";

export type Host = {
  name: string;
  profile: string | StaticImageData;
};

export type Event = {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  date: string;
  time: string;
  location: string;
  host?: Host[];
};
