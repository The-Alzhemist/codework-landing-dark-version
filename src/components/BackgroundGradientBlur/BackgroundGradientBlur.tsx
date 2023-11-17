import React from "react";
import { BgGradientBlueInterface } from "./interface";
import { twMerge } from "tailwind-merge";

const BackgroundGradientBlur = ({ className }: BgGradientBlueInterface) => {
  const style = twMerge(
    `flex absolute -z-10  w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]  lg:w-[700px] lg:h-[700px] `,
    className
  );
  return (
    <>
      <picture className={style}>
        <source media="(min-width:576px)" srcSet="/images/bg-blur-2x.webp" type="image/webp" />
        <source media="(min-width:576px)" srcSet="/images/bg-blur-2x.png" />
        <source media="(max-width:575px)" srcSet="/images/bg-blur-1x.webp" />
        <img
          src="/images/bg-blur-1x.png"
          alt="bg circle gradient"
          title="bg circle gradient"
     
        />
      </picture>
    </>
  );
};

export default BackgroundGradientBlur;
