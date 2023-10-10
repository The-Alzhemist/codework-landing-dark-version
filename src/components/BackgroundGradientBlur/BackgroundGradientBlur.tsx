import React from "react";
import { BgGradientBlueInterface } from "./interface";
import { twMerge } from "tailwind-merge";

const BackgroundGradientBlur = ({ className }: BgGradientBlueInterface) => {
  const style = twMerge(`hidden lg:flex absolute -z-10 w-[700px] h-[700px]`, className)
  return (
    <>
        <picture className={style}>
              <source
                srcSet="/images/bg-blur-50.png"
                type="image/webp"
              />
              <img
                src="/images/bg-blur-50.png"
                alt="bg circle gradient"
                title="bg circle gradient"
                loading="lazy"
              />
            </picture>
    </>
  );
};

export default BackgroundGradientBlur;
