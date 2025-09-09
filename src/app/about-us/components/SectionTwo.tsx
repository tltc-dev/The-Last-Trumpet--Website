import TextAnimation from "@/components/ui/TextAnimation";
import image1 from "@/lib/data";
import Image from "next/image";
import React from "react";

type Props = {};

const SpiritualWarriors = (props: Props) => {
  return (
    <section className="padding h-screen w-full flex flex-col gap-10 items-center justify-center font-sans">
      <div className="flex flex-col items-center justify-center">
        <TextAnimation
          phrase="Meet Our"
          className="text-center heading font-poppins"
        />
        <TextAnimation
          phrase="Spiritual Warriors"
          className="text-center pb-10 heading font-poppins"
        />
      </div>
      <div className="flex ">
        <div className="w-full h-fit flex flex-col items-center  p-10">
          <Image
            src={image1}
            width={160}
            height={200}
            alt="..."
            className="bg-gray-400 rotate-354 h-56 w-40 object-cover rounded-2xl shadow-2xl shadow-[#F4933C]/30"
          />
          <p className="font-semibold font-quterial pt-10">
            Brother Chandra Naidu
          </p>
          <p className="font-light text-sm text-white/80">Church Leader</p>
        </div>
        <div className="w-full h-fit flex flex-col items-center  p-10">
          <Image
            src={image1}
            width={160}
            height={200}
            alt="..."
            className="bg-gray-400 rotate-6 rounded-2xl  h-56 w-40 object-cover  shadow-2xl shadow-[#F4933C]/30"
          />
          <p className="font-semibold font-quterial pt-10">
            Brother Chandra Naidu
          </p>
          <p className="font-light text-sm text-white/80">Church Leader</p>
        </div>
        <div className="w-full h-fit flex flex-col items-center  p-10">
          <Image
            src={image1}
            width={160}
            height={200}
            alt="..."
            className="bg-gray-400 rotate-6 rounded-2xl shadow-2xl shadow-[#F4933C]/30  h-56 w-40 object-cover "
          />
          <p className="font-semibold font-quterial pt-10">
            Brother Chandra Naidu
          </p>
          <p className="font-light text-sm text-white/80">Church Leader</p>
        </div>
      </div>
      <p className="para w-[55vw] text-center text-white/80">
        These women are not seen on stage—but they are always on the frontline
        of spiritual battle. These women work tirelessly and faithfully,
        preparing hearts like soil ready for God's Word, and walking beside
        people as they become true disciples of Christ.
      </p>
    </section>
  );
};

export default SpiritualWarriors;
