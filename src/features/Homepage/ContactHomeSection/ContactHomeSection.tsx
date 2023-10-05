import React, { useEffect, useRef } from "react";
import Image from "next/image";

import withContactUs from "./withContactUs";
import { ContactHomeSectionProp } from "./interface";

import Paragraph from "@/components/typography/paragraph/Paragraph";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";

import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap";
// เปิดใช้งาน ScrollTrigger
gsap.registerPlugin(ScrollTrigger);



const ContactHomeSection = (props: ContactHomeSectionProp) => {
  
  const { contactUsSectionText } = props;

  const leftSection = useRef<HTMLDivElement | null>(null);
  const rightSection = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  const root = useRef<any>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(bgRef.current,2, { height:0, duration:1, delay: 0, ease: "power4",  scrollTrigger: {
        trigger: root.current,
        toggleActions: "restart none none none",
      } });

      gsap.from(leftSection.current, { opacity: 0,duration:2, y: 100, delay: 1, ease: "power4",  scrollTrigger: {
        trigger: root.current,
        toggleActions: "restart none none none",
      } });

      gsap.from(rightSection.current, { opacity: 0, duration:2, y: 100, delay: 1, ease: "power4", scrollTrigger: {
        trigger: root.current,
        toggleActions: "restart none none none",
      } });
     
    }, root);

    return () => ctx.revert();
  },[]);

  return (
    <section className={`relative py-12 md:py-[50px] mx-auto lg:px-[50px] sm:pt-0 bg-neutralVariant-1000 px-5 `} ref={root}>
      <div className="flex gap-16 flex-col lg:flex-row justify-center items-center mb-10 p-5 sm:p-16  bg-secondary-800 max-w-[1440px] m-auto" ref={bgRef}>
        <div className="w-full lg:w-1/2 text-left mb-5  flex flex-col items-end" ref={leftSection}>
          <Paragraph className="max-w-[450px]   p-4 rounded-2xl mb-5 text-base sm:text-xl bg-secondary-1000 font-light text-primary-100 "> {`Let's start a conversation about your business's digital future`}</Paragraph>
          <Paragraph className="max-w-[670px] text-end  mb-4 text-md sm:text-2xl font-semibold text-white">
           {`Let’s make your dream come true`} 
          </Paragraph>

          <h2 className="mb-14 flex justify-end relative">
            <span className="text-primary-100 font-semibold text-xl md:text-4xl ">CONTACT US</span>
          </h2>

          <div className="flex justify-end relative">
            <PrimaryButton
              className="min-w-[200px] py-3 font-semibold text-lg"
              pathName="/contact-us"
            >
              Share us your idea
            </PrimaryButton>
          </div>
        </div>

        <picture className="w-full lg:w-1/2 flex justify-center lg:justify-start" ref={rightSection}>
          <source
            srcSet="/images/contact-us-cover.png"
            type="image/webp"
            media="(max-width: 639px)"
          />
          <source
            srcSet="/images/contact-us-cover.png"
            type="image/webp"
            media="(min-width: 640px)"
          />
          <img
            src="/images/contact-us-cover.png"
            alt="codework contact us section cover image"
            title="codework contact us section cover image"
            loading="lazy"
            className="rounded-full w-[200px] h-[200px]  sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px]"
          />
        </picture>
      </div>
    </section>
  );
};

const WrappedComponent = withContactUs(ContactHomeSection);
export default WrappedComponent;
