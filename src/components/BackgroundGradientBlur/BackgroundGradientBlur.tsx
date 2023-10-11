import React from "react";
import { BgGradientBlueInterface } from "./interface";
import { twMerge } from "tailwind-merge";

const BackgroundGradientBlur = ({ className }: BgGradientBlueInterface) => {
  const style = twMerge(`flex absolute -z-10  w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]  lg:w-[700px] lg:h-[700px] `, className)
  return (
    <>
        <picture className={style}>
              <source
                srcSet="/images/bg-blur-200.png"
                type="image/webp"
              />
              <img
                src="/images/bg-blur-200.png"
                alt="bg circle gradient"
                title="bg circle gradient"
                loading="lazy"
              />
            </picture>
    </>
  );
};

export default BackgroundGradientBlur;
