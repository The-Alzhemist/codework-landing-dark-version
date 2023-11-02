"use client";

import React from "react";
import Paragraph from "@/components/typography/paragraph/Paragraph";
import BackgroundGradientBlur from "@/components/BackgroundGradientBlur/BackgroundGradientBlur";

import witServiceIntro from "./withTeamIntro";
import { TeamIntroProps } from "./interface";
;

const TeamIntro = ({
  root,
  h1Ref,
  pRef,
  imgRef,
  circleLeftRef,
  circleRightRef,
}: TeamIntroProps) => {
  return (
    <section
      className={`relative overflow-hidden md:py-[50px] mx-auto px-5 lg:px-[50px] bg-neutral-1000 h-screen`}
      ref={root}
    >
      <div ref={circleLeftRef}>
        <BackgroundGradientBlur className="top-0 left-[-100px] sm:top-[-200px] sm:left-[-200px]  z-50 opacity-20  " />
      </div>
      <div ref={circleRightRef}>
        <BackgroundGradientBlur className="top-[400px] right-[-100px] sm:top-[200px] sm:right-[-200px]      z-50 opacity-20  " />
      </div>

      <div className="h-full  relative flex flex-col  lg:flex-row  justify-center items-center gap-y-10 sm:gap-y-0 w-full max-w-[1440px] m-auto text-center sm:text-left">
        <div className="z-0 w-[100%] lg:w-[100%]  relative flex flex-col items-left text-left justify-center sm:p-0">
          <h1 className="mb-5 md:mb-5 relative font-bold" ref={h1Ref}>
            <div className="text-4xl md:text-6xl mb-3  text-primary-100">
            TEAM.
            </div>
          </h1>

          <div ref={pRef} className="mb-3">
            <Paragraph
              className={`mb-8 max-w-[880px] text-base sm:text-lg font-light text-white opacity-80`}
            >
              <span>
                {`We are a dedicated team committed to the consistent delivery of exceptional products that surpass your expectations. Every day, we proactively seek opportunities for learning and growth to tackle new challenges, ensuring the development of top-tier software that exceeds your highest aspirations.`}
              </span>
            </Paragraph>
          </div>         
        </div>

        <picture ref={imgRef}>
            <source
              srcSet="images/teamPage/teamIntro/team-cover-v1.webp"
              type="image/webp"
            />
            <img
              src="images/teamPage/teamIntro/team-cover-v1.png"
              alt="team page image cover"
              title="team page image cover"
              loading="lazy"
              className="max-w-[200px] lg:max-w-[480px] rounded-lg mb-5 sm:mb-0 ml-24 sm:ml-0"
            />
          </picture>
      </div>
    </section>
  );
};

const WrappedComponent = witServiceIntro(TeamIntro);
export default WrappedComponent;