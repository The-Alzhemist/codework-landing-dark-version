"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { HeroSectionProps } from "./interface";
import Paragraph from "@/components/typography/paragraph/Paragraph";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";

import { gsap } from "gsap";
import withHeroSection from "./withHeroSection";
import BackgroundGradientBlur from "@/components/BackgroundGradientBlur/BackgroundGradientBlur";

const HeroSection = ({
  containerAnimation,
  itemAnimation,
}: HeroSectionProps) => {
  const h1Ref = useRef<HTMLDivElement | null>(null);
  const pref = useRef<HTMLDivElement | null>(null);
  const divBtnRef = useRef<HTMLDivElement | null>(null);

  const root = useRef<any>(null);
  const circleLeft =  useRef<HTMLDivElement | null>(null);
  const circleRight =  useRef<HTMLDivElement | null>(null);


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(h1Ref.current, {
        opacity: 0,
        y: 200,
        duration: 1,
        delay: 0.5,
        ease: "power4",
        stagger: 0.25,
      });
      gsap.from(pref.current, {
        opacity: 0,
        y: 200,
        duration: 1,
        delay: 0.7,
        ease: "power4",
        stagger: 0.25,
      });
      gsap.from(divBtnRef.current, {
        opacity: 0,
        y: 200,
        duration: 1,
        delay: 0.9,
        ease: "power4",
        stagger: 0.25,
      });
      gsap.from(circleLeft.current, {
        opacity: 0,
        duration: 5,
        delay: 1,
        yoyo:true,
        ease: "power4",
        repeat: -1,
        x: 100
      })
      gsap.from(circleRight.current, {
        opacity: 0,
        duration: 5,
        delay: 1,
        yoyo:true,
        ease: "power4",
        repeat: -1,
        x: -100
      })

    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className={`relative overflow-hidden md:py-[50px] mx-auto px-5 lg:px-[50px] bg-neutral-1000`}
      ref={root}
    >
     <div ref={circleLeft}>
     <BackgroundGradientBlur className="top-0 left-[-100px] sm:top-[-200px] sm:left-[-200px]  z-50 opacity-20  " />

     </div>
     <div ref={circleRight}>
     <BackgroundGradientBlur className="top-[400px] right-[-100px] sm:top-[200px] sm:right-[-200px]      z-50 opacity-20  " />
     </div>


      <div className="relative flex w-full max-w-[1440px] m-auto">
        <div className="z-0 w-[100%] lg:w-[100%]  min-h-[600px] relative flex flex-col items-center text-center justify-center sm:p-0">
          <h1 className="xxx mb-5 md:mb-5 relative font-semibold" ref={h1Ref}>
            <div className="text-3xl md:text-6xl mb-3 text-white">
              We can make
            </div>
            <div className="text-3xl md:text-6xl mb-3 text-white">
              your <span className="text-primary-100">idea</span> come
              <span className="text-primary-100"> true</span>
            </div>
          </h1>

          <div ref={pref}>
            <Paragraph
              className={`mb-8 lg:max-w-[550px]  xl:max-w-[670px] text-base sm:text-md font-light text-white`}
            >
              <span>
                {" "}
                {` Turning your brilliant ideas into real-world solutions is our
            passion! Whether you're an entrepreneur, a startup, or a
            well-established business, we’re here to transform your vision into
            a functional and cutting-edge software.`}
              </span>
            </Paragraph>
          </div>

          <div className="max-w-7xl" ref={divBtnRef}>
            <PrimaryButton pathName="/contact-us" className="mr-5 text-xl">
              Contact us
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

const WrappedComponent = withHeroSection(HeroSection);
export default WrappedComponent;
