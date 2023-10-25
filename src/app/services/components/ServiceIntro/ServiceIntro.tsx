"use client";

import React from "react";
import Paragraph from "@/components/typography/paragraph/Paragraph";
import BackgroundGradientBlur from "@/components/BackgroundGradientBlur/BackgroundGradientBlur";

import witServiceIntro from "./withServiceIntro";
import { ServiceIntroProps } from "./interface";


const ServiceIntro = ({
  root,
  h1Ref,
  pRef,
  btnRef,
  circleLeftRef,
  circleRightRef,
}: ServiceIntroProps) => {
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

      <div className="h-full   relative flex justify-start items-center w-full max-w-[1440px] m-auto">

      

        <div className="z-0 w-[100%] lg:w-[100%]  min-h-[600px] relative flex flex-col items-left text-left justify-center sm:p-0">
          <h1 className="mb-5 md:mb-5 relative font-bold" ref={h1Ref}>
            <div className="text-4xl md:text-6xl mb-3  text-primary-100">
            SERVICES.
            </div>
           
          </h1>

          <div ref={pRef} className="mb-3">
            <Paragraph
              className={`mb-8 max-w-[880px] text-base sm:text-lg font-light text-white opacity-80`}
            >
              <span>
                {`Explore our services tailored to elevate your business. We're here to provide the tools and expertise you need to succeed in the digital era. Your business, our priority.`}
              </span>
            </Paragraph>
          </div>

          {/* <div className="max-w-7xl " ref={btnRef}>
            <PrimaryButton pathName="/contact-us" className=" text-xl ">
              <div className="flex items-center gap-2">
                Contact us
                <span className="animate-horicentralBounce">
                  <FaArrowRight />
                </span>
              </div>
            </PrimaryButton>
          </div> */}
        </div>
      </div>
    </section>
  );
};

const WrappedComponent = witServiceIntro(ServiceIntro);
export default WrappedComponent;
