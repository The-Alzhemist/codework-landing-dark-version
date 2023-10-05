"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { HeroSectionProps } from "./interface";
import Paragraph from "@/components/typography/paragraph/Paragraph";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import withHeroSectionCopy from "./withHeroSectionCopy";
import { gsap } from "gsap";

const HeroSectionCopy = ({
  containerAnimation,
  itemAnimation,
}: HeroSectionProps) => {
  const h1Ref = useRef<HTMLDivElement | null>(null);
  const pref = useRef<HTMLDivElement | null>(null);
  const divBtnRef = useRef<HTMLDivElement | null>(null);

  const root = useRef<any>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(h1Ref.current, { opacity: 0, y: 200, delay: .5, ease: "slowMo" });
      gsap.from(pref.current, { opacity: 0, y: 200, delay: .7, ease: "slowMo" });
      gsap.from(divBtnRef.current, { opacity: 0, y: 200, delay: .8, ease: "slowMo" });
    }, root);
  
    return () => ctx.revert();
  }, []);

  return (
    <section
      className={`relative  md:py-[50px] mx-auto px-5 lg:px-[50px]  custom-bg `}
      ref={root}
    >
      <div className="relative flex w-full max-w-[1440px] m-auto">
        <div className="z-0 w-[100%] lg:w-[100%]  min-h-[600px] relative flex flex-col justify-center sm:p-0">
          <h1 className="xxx mb-5 md:mb-5 relative font-semibold" ref={h1Ref}>
            <div className="text-3xl md:text-6xl mb-3 text-white">
              XXX We can make
            </div>
            <div className="text-3xl md:text-6xl mb-3  text-white">
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

const WrappedComponent = withHeroSectionCopy(HeroSectionCopy);
export default WrappedComponent;
