"use client";

import React from "react";
import Paragraph from "@/components/typography/paragraph/Paragraph";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";

import withHeroSection from "./withHeroSection";
import BackgroundGradientBlur from "@/components/BackgroundGradientBlur/BackgroundGradientBlur";
import { HeroSectionProps } from "./interface";

import { FaArrowRight, FaLine } from "react-icons/fa6";
import { ExternalPrimaryButton } from "@/components/buttons/ExternalPrimaryButton";
import { OutlinedButton } from "@/components/buttons/OutlinedButton";
import Link from "next/link";

const HeroSection = ({
  root,
  h1Ref,
  pRef,
  btnRef,
  circleLeftRef,
  circleRightRef,
  setIsOpen,
}: HeroSectionProps) => {
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
        <div className="z-0 w-[100%] lg:w-[100%]  min-h-[600px] relative flex flex-col items-center text-center justify-center sm:p-0">
          <h1 className="mb-5 md:mb-5 relative font-bold" ref={h1Ref}>
            <div className="text-4xl md:text-6xl mb-3 text-white">
              We can make
            </div>
            <div className="text-3xl md:text-6xl mb-3 text-white">
              your <span className="text-primary-100">idea</span> come
              <span className="text-primary-100"> true</span>
            </div>
          </h1>

          <div ref={pRef} className="mb-3">
            <Paragraph
              className={`mb-8 max-w-[880px] text-base sm:text-md font-light text-white opacity-80`}
            >
              <span>
                {`Turning your innovative ideas into real-world solutions is our expertise. Whether you're an entrepreneur, a startup, or a well-established business, we’re here to transform your vision into a functional and cutting-edge software.`}
              </span>
            </Paragraph>
          </div>

          <div
            className="max-w-7xl "
            ref={btnRef}
            onClick={() => setIsOpen(true)}
          >
            <div className="flex flex-col gap-x-2">
              <ExternalPrimaryButton
                pathName="https://page.line.me/448yyxgh"
                className=" text-xl "
              >
                <div className="flex items-center gap-x-2">
                  Quick contact with
                  <span className="text-2xl">
                    <FaLine />
                  </span>
                </div>
              </ExternalPrimaryButton>

              <div className="mt-5 text-white text-xs mb-5">OR</div>

              <Link
                href="/contact-us"
                className="flex justify-center text-xl"
              >
                <div className="flex items-center text-white border-b-2 border-white">
                  Contact us form
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WrappedComponent = withHeroSection(HeroSection);
export default WrappedComponent;
