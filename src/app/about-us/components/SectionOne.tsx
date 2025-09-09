"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import TextOpacityOnScroll from "@/components/ui/text-on-scroll/TextOnScroll";
import TextAnimation from "@/components/ui/TextAnimation";
import { ScrollTrigger } from "gsap/all";
import image1 from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const LeadershipTeam = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const tittle = useRef<HTMLDivElement | null>(null);
  const leaderSectionOne = useRef<HTMLDivElement | null>(null);
  const leaderSectionTwo = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to([textRef.current, glowRef.current], {
        y: -200,
        opacity: 0,
        duration: 1.2,
        delay: 1.2,
      });

      tl.to(
        tittle.current,
        {
          y: -200,
          opacity: 1,
          duration: 1,
        },
        ">-1.2"
      );

      tl.fromTo(
        contentRef.current,
        { y: 0, opacity: 0 },
        {
          y: "-85%",
          opacity: 1,
          duration: 1,
        },
        ">-0.8"
      );

      tl.fromTo(leaderSectionOne.current, { y: 0 }, { y: 50 }, "-=1");
      tl.fromTo(
        [leaderSectionTwo.current, glowRef.current],
        { y: 400 },
        { y: -50 },
        "-=1"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="padding relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div ref={tittle} className="tittle top-0 text-center z-10 relative">
        <div className="bg-black blur-xl absolute h-full w-full"></div>
        <TextAnimation phrase="Church" className="heading font-sans " />
        <TextAnimation
          phrase="Leadership Team"
          className="heading font-sans "
        />
      </div>

      <div ref={textRef} className="pt-10">
        <TextOpacityOnScroll
          contain={sectionRef}
          phrase="We are blessed with a passionate and committed leadership team that supports the vision of the church, ministers to people, and ensures the spiritual and practical growth of the ministry."
          className="w-[80vw] md:w-[550px] md:text-xl leading-6 md:leading-9 font-light font-sans  text-center"
        />
      </div>

      <div
        ref={glowRef}
        className="absolute bottom-20  bg-radial blur-3xl from-[#F4933C]/70 via-orange-300/25 to-transparent w-[200px] h-[300px] z-10 rounded-3xl"
      ></div>

      <div
        ref={contentRef}
        className="absolute bottom-[-100%] w-full h-full flex flex-row items-center "
      >
        <div
          ref={leaderSectionOne}
          className="w-1/2 h-fit flex flex-col items-end  p-10"
        >
          <Image
            src={image1}
            width={180}
            height={220}
            alt="..."
            className="bg-gray-400  h-60 w-44 object-cover  rotate-6 rounded-2xl shadow-2xl shadow-[#F4933C]/30"
          />
          <p className="font-semibold font-quterial pt-10">
            Brother Chandra Naidu
          </p>
          <p className="font-light text-sm text-white/80">Church Leader</p>
          <p className="font-base text-sm text-white text-end para-sm pt-10 w-90">
            Our Assistant Church Associate, providing hands-on support across
            ministries and helping lead various church functions. He plays a
            vital role in member care, outreach, and ministry assistance. His
            servant heart and commitment to excellence are a blessing to the
            church family.
          </p>
        </div>
        <Boarder />
        <div ref={leaderSectionTwo} className="w-1/2 h-fit p-10">
          <Image
            src={image1}
            width={180}
            height={220}
            alt="..."
            className="bg-gray-400  h-60 w-44 object-cover  rotate-354 rounded-2xl shadow-2xl shadow-[#F4933C]/30"
          />
          <p className="font-semibold font-quterial pt-10">Ramesh Devidiga</p>
          <p className="font-light text-sm text-white/80">Admin In-Charge</p>
          <p className="font-base text-sm text-white text-start para-sm pt-10 w-90">
            The Administrative In-Charge, ensuring the smooth coordination of
            church operations, logistics, and systems. His dedication behind the
            scenes helps every event, service, and outreach run efficiently. He
            carries a heart to serve and keeps everything organized with
            diligence and joy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;

const Boarder = () => {
  return (
    <svg
      width="3"
      height="892"
      viewBox="0 0 3 892"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1.53418"
        y1="0.775175"
        x2="1.48256"
        y2="891.775"
        stroke="url(#paint0_linear_132_5)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_132_5"
          x1="0.53418"
          y1="0.775118"
          x2="0.482563"
          y2="891.775"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="black" />
          <stop offset="0.163967" stopColor="#F4933C" />
          <stop offset="0.725135" stopColor="#F4933C" />
          <stop offset="2" stopColor="black" />
        </linearGradient>
      </defs>
    </svg>
  );
};
