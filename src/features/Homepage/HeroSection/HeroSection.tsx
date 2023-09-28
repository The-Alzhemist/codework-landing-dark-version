import React from "react";
import withHeroSection from "./withHeroSection";
import { HeroSectionProps } from "./interface";
import Paragraph from "@/components/typography/paragraph/Paragraph";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";

const HeroSection = (props: HeroSectionProps) => {
  const { heroSectionText } = props;
  return (
    <section
      className={`relative  md:py-[50px] mx-auto px-5 lg:px-[50px]  custom-bg `}
    >
      <div className="relative flex w-full max-w-[1440px] m-auto ">
        <div className="z-0 w-[100%] lg:w-[100%]  min-h-[600px] relative flex flex-col justify-center sm:p-0">
          <h1 className="mb-5 md:mb-5 relative font-semibold">
            <div className="text-3xl md:text-6xl mb-3 text-white">
              We can make
            </div>
            <div className="text-3xl md:text-6xl mb-3  text-white">
              your <span className="text-primary-100">idea</span> come 
              <span className="text-primary-100"> true</span>
            </div>
          </h1>

          <Paragraph
            className={`mb-8 lg:max-w-[550px]  xl:max-w-[670px] text-base sm:text-md font-light text-white`}
          >
            Turning your brilliant ideas into real-world solutions is our
            passion! Whether you're an entrepreneur, a startup, or a
            well-established business, we’re here to transform your vision into
            a functional and cutting-edge software.
          </Paragraph>

          <div className="max-w-7xl">
            <PrimaryButton pathName="/aboutus" className="mr-5 text-xl">
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
