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
      // gsap.from(bgRef.current,2, { height:0, duration:1, delay: 0, ease: "power4",  scrollTrigger: {
      //   trigger: root.current,
      //   toggleActions: "restart none none none",
      // } });

      // gsap.from(leftSection.current, { opacity: 0,duration:2, y: 100, delay: 1, ease: "power4",  scrollTrigger: {
      //   trigger: root.current,
      //   toggleActions: "restart none none none",
      // } });

      // gsap.from(rightSection.current, { opacity: 0, duration:2, y: 100, delay: 1, ease: "power4", scrollTrigger: {
      //   trigger: root.current,
      //   toggleActions: "restart none none none",
      // } });
     
    }, root);

    return () => ctx.revert();
  },[]);

  return (
    <section className={`relative py-12 md:py-[50px] mx-auto lg:px-[50px] sm:pt-0 bg-neutral-1000 px-5 `} ref={root}>
      <div className="flex justify-evenly mb-10 items-center px-5 py-10  border-2 border-neutral-700 bg-neutral-900 rounded-xl max-w-[1440px] m-auto min-h-[500px]" ref={bgRef}>
        <div className=" text-left flex flex-col items-end" ref={leftSection}>
          <Paragraph className="max-w-[450px]   p-4 rounded-2xl mb-5 text-base sm:text-xl bg-secondary-1000 font-light text-primary-100 "> {`Let's start a conversation about your business's digital future`}</Paragraph>
          <Paragraph className="max-w-[670px] text-end  mb-4 text-md sm:text-2xl font-semibold text-white">
           {`Let’s make your dream come true`} 
          </Paragraph>

          <h2 className="mb-14 flex justify-end relative">
            <span className="text-primary-100 font-semibold text-xl md:text-4xl ">CONTACT US</span>
          </h2>

          <div className="w-1/2 flex justify-end relative">
            <PrimaryButton
              className="min-w-[200px] py-3  text-lg"
              pathName="/contact-us"
            >
              Share us your idea
            </PrimaryButton>
          </div>
        </div>

        <picture className="w-1/2 relative  overflow-hidden flex justify-center lg:justify-start" ref={rightSection}>
          <source
            srcSet="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            type="image/webp"
            media="(max-width: 639px)"
          />
          <source
            srcSet="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            type="image/webp"
            media="(min-width: 640px)"
          />
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="codework contact us section cover image"
            title="codework contact us section cover image"
            loading="lazy"
            className="contrast relative max-w-[100%]  rounded-xl"
          />
        </picture>
      </div>
    </section>
  );
};

const WrappedComponent = withContactUs(ContactHomeSection);
export default WrappedComponent;
