"use client";

type Props = {
  children: React.ReactNode;
};

export default function LiquidContainer({ children }: Props) {
  return (
    <div className="flex items-center justify-center h-ful w-full  relative">
      <svg className="absolute w-0 h-0">
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          <feColorMatrix values=" 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0  0 0 0 20 -10 " />
        </filter>
      </svg>

      <div className="relative w-full h-full" style={{ filter: "url(#gooey)" }}>
        {children}
      </div>
    </div>
  );
}
