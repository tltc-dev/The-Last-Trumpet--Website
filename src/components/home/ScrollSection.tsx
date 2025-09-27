"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import TextAnimation from "../ui/typography/TextAnimation";
import TextOpacityOnScroll from "../ui/typography/text-on-scroll/TextOnScroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

const ScrollSection = (props: Props) => {
  const contain = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const sectionOne = useRef<HTMLDivElement | null>(null);
  const sectionTwo = useRef<HTMLDivElement | null>(null);
  const sectionThree = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=400%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          markers: false,
        },
      });
      tl.to(sectionOne.current, {
        y: 0,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
      });
      tl.fromTo(
        sectionTwo.current,
        { y: 0, opacity: 0, blur: "10px" },
        {
          y: 0,
          opacity: 1,
          duration: 0.2,
          blur: "0px",
        }
      );
      tl.to(sectionTwo.current, { opacity: 0, duration: 0.5 });
      tl.fromTo(
        sectionThree.current,
        { y: 0, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.2,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="padding relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div
        ref={sectionOne}
        className=" flex flex-col gap-7 items-center justify-center h-full w-full z-20"
      >
        <TextAnimation
          phrase={["Who Are We", "And What We Believe"]}
          className="text-center heading font-poppins"
        />
        <TextOpacityOnScroll
          className=" w-[80vw] md:w-[550px]  md:text-xl leading-6 md:leading-9 font-light "
          contain={contain}
          phrase="At the heart of our faith is a simple but profound truth:We were created to love God, and to love each other.From the very beginning, God designed us to reflect His image, experience His goodness, and walk in His abundance."
        />
      </div>
      <div
        ref={sectionTwo}
        className="absolute opacity-0 flex flex-col gap-7 items-center justify-center h-full w-full z-20"
      >
        <TextAnimation
          phrase={["Test Heading", "Second Heading"]}
          className="text-center heading font-poppins"
        />
        <TextOpacityOnScroll
          className=" w-[80vw] md:w-[550px]  md:text-xl leading-6 md:leading-9 font-light "
          contain={contain}
          phrase="From the very beginning, God designed us to reflect His image, experience His goodness, and walk in His abundance."
        />
      </div>
      <div
        ref={sectionThree}
        className="absolute opacity-0 flex flex-col gap-7 items-center justify-center h-full w-full z-20"
      >
        <TextAnimation
          phrase={["Support Our Ministry ", "Through Your Generosity"]}
          className="text-center heading font-poppins"
        />
        <TextOpacityOnScroll
          className=" w-[80vw] md:w-[550px]  md:text-xl leading-6 md:leading-9 font-light "
          contain={contain}
          phrase="At the heart of our faith is a simple but profound truth:
We were created to love God, and to love each other."
        />
      </div>
      <motion.div
        className="absolute  bg-radial blur-3xl from-[#F4933C]/70 via-orange-300/25 to-transparent w-[500px] h-[600px] z-10 rounded-3xl"
        animate={{ rotate: [360, 0] }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      ></motion.div>
      <motion.div
        className="absolute items-center justify-center z-0"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      >
        {/* <Progress /> */}
      </motion.div>
    </section>
  );
};

// tl.to(
//   tittle.current,
//   {
//     y: -200,
//     opacity: 1,
//     duration: 1,
//   },
//   ">-1.2"
// );

// tl.fromTo(
//   contentRef.current,
//   { y: 0, opacity: 0 },
//   {
//     y: "-85%",
//     opacity: 1,
//     duration: 1,
//   },
//   ">-0.8"
// );

// tl.fromTo(leaderSectionOne.current, { y: 0 }, { y: 50 }, "-=1");
// tl.fromTo(
//   [leaderSectionTwo.current, glowRef.current],
//   { y: 400 },
//   { y: -50 },
//   "-=1"
// );

const Progress = () => {
  return (
    <svg
      width="848"
      height="779"
      viewBox="0 0 848 779"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <g clip-path="url(#clip0_261_3)">
          <rect width="848" height="779" rx="389.5" fill="#0A0A0A" />
          <path
            d="M477 389V-90M477 389L490.571 -76.4306M477 389L504.143 -62.8612M477 389L517.714 -49.2918M477 389L531.286 -35.7224M477 389L544.857 -22.153M477 389L558.429 -8.58357M477 389L572 4.98584M477 389L585.571 18.5552M477 389L599.143 32.1247M477 389L612.714 45.6941M477 389L626.286 59.2635M477 389L639.857 72.8329M477 389L653.429 86.4023M477 389L667 99.9717M477 389L680.571 113.541M477 389L694.143 127.11M477 389L707.714 140.68M477 389L721.286 154.249M477 389L734.857 167.819M477 389L748.429 181.388M477 389L762 194.958M477 389L775.571 208.527M477 389L789.143 222.096M477 389L802.714 235.666M477 389L816.286 249.235M477 389L829.857 262.805M477 389L843.429 276.374M477 389L857 289.943M477 389L870.571 303.513M477 389L884.143 317.082M477 389L897.714 330.652M477 389L911.286 344.221M477 389L924.857 357.79M477 389L938.429 371.36M477 389L952 384.929"
            stroke="#F3A560"
            strokeWidth="3"
          />
          <path
            d="M477 388V-91M477 388L463.429 -77.4306M477 388L449.857 -63.8612M477 388L436.286 -50.2918M477 388L422.714 -36.7224M477 388L409.143 -23.153M477 388L395.571 -9.58357M477 388L382 3.98584M477 388L368.429 17.5552M477 388L354.857 31.1247M477 388L341.286 44.6941M477 388L327.714 58.2635M477 388L314.143 71.8329M477 388L300.571 85.4023M477 388L287 98.9717M477 388L273.429 112.541M477 388L259.857 126.11M477 388L246.286 139.68M477 388L232.714 153.249M477 388L219.143 166.819M477 388L205.571 180.388M477 388L192 193.958M477 388L178.429 207.527M477 388L164.857 221.096M477 388L151.286 234.666M477 388L137.714 248.235M477 388L124.143 261.805M477 388L110.571 275.374M477 388L97 288.943M477 388L83.4286 302.513M477 388L69.8571 316.082M477 388L56.2857 329.652M477 388L42.7143 343.221M477 388L29.1428 356.79M477 388L15.5714 370.36M477 388L2 383.929"
            stroke="url(#paint0_linear_261_3)"
            strokeWidth="3"
          />
          <path
            d="M477 393V872M477 393L490.571 858.431M477 393L504.143 844.861M477 393L517.714 831.292M477 393L531.286 817.722M477 393L544.857 804.153M477 393L558.429 790.584M477 393L572 777.014M477 393L585.571 763.445M477 393L599.143 749.875M477 393L612.714 736.306M477 393L626.286 722.737M477 393L639.857 709.167M477 393L653.429 695.598M477 393L667 682.028M477 393L680.571 668.459M477 393L694.143 654.89M477 393L707.714 641.32M477 393L721.286 627.751M477 393L734.857 614.181M477 393L748.429 600.612M477 393L762 587.042M477 393L775.571 573.473M477 393L789.143 559.904M477 393L802.714 546.334M477 393L816.286 532.765M477 393L829.857 519.195M477 393L843.429 505.626M477 393L857 492.057M477 393L870.571 478.487M477 393L884.143 464.918M477 393L897.714 451.348M477 393L911.286 437.779M477 393L924.857 424.21M477 393L938.429 410.64M477 393L952 397.071"
            stroke="#A8A3A3"
            strokeOpacity="0.8"
            strokeWidth="3"
          />
          <path
            d="M477 392V871M477 392L463.429 857.431M477 392L449.857 843.861M477 392L436.286 830.292M477 392L422.714 816.722M477 392L409.143 803.153M477 392L395.571 789.584M477 392L382 776.014M477 392L368.429 762.445M477 392L354.857 748.875M477 392L341.286 735.306M477 392L327.714 721.737M477 392L314.143 708.167M477 392L300.571 694.598M477 392L287 681.028M477 392L273.429 667.459M477 392L259.857 653.89M477 392L246.286 640.32M477 392L232.714 626.751M477 392L219.143 613.181M477 392L205.571 599.612M477 392L192 586.042M477 392L178.429 572.473M477 392L164.857 558.904M477 392L151.286 545.334M477 392L137.714 531.765M477 392L124.143 518.195M477 392L110.571 504.626M477 392L97 491.057M477 392L83.4286 477.487M477 392L69.8571 463.918M477 392L56.2857 450.348M477 392L42.7143 436.779M477 392L29.1428 423.21M477 392L15.5714 409.64M477 392L2 396.071"
            stroke="#A8A3A3"
            strokeOpacity="0.8"
            strokeWidth="3"
          />
          <path
            d="M697.929 393.25C697.929 548.019 572.492 673.483 417.757 673.483C263.023 673.483 137.585 548.019 137.585 393.25C137.585 238.482 263.023 113.017 417.757 113.017C572.492 113.017 697.929 238.482 697.929 393.25Z"
            fill="#0A0A0A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-165 -148H1032V974H-165V-148ZM418.291 684.693C579.215 684.693 709.669 554.21 709.669 393.25C709.669 232.291 579.215 101.808 418.291 101.808C257.367 101.808 126.912 232.291 126.912 393.25C126.912 554.21 257.367 684.693 418.291 684.693Z"
            fill="#0A0A0A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M697.929 393.25C697.929 548.019 572.492 673.483 417.757 673.483C263.023 673.483 137.585 548.019 137.585 393.25C137.585 238.482 263.023 113.017 417.757 113.017C572.492 113.017 697.929 238.482 697.929 393.25Z"
            fill="#0A0A0A"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_261_3"
          x1="378"
          y1="135"
          x2="165.5"
          y2="388"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F3A560" />
          <stop offset="1" stop-color="#DADADA" stop-opacity="0.8" />
        </linearGradient>
        <clipPath id="clip0_261_3">
          <rect width="848" height="779" rx="389.5" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ScrollSection;
