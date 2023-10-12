import React, { useEffect, useLayoutEffect, useRef } from "react";
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
  
  const footerLeft = useRef<HTMLDivElement | null>(null);
  const footerRight = useRef<HTMLDivElement | null>(null);
  const root = useRef<any>(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 500 ? true : false

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.from(footerLeft.current, {
  //       x: isMobile ? 10 : 50,
  //       opacity: 0,
  //       duration: 2,
  //       ease: "Power4.easeInOut",
  //       scrollTrigger: {
  //         trigger: footerLeft.current,
  //         markers: false,
  //         toggleActions: "restart none none none"
  //       },
  //     })
  //     gsap.from(footerRight.current, {
  //       x: isMobile ? -10 : -50,
  //       opacity: 0,
  //       duration: 2,
  //       ease: "Power4.easeInOut",
  //       scrollTrigger: {
  //         trigger: footerRight.current,
  //         markers: false,
  //         toggleActions: "restart none none none"
  //       },
  //     });
  //   }, root);

  //   return () => ctx.revert();
  // }, []);

  return (
    <section className={`h-screen relative py-12 md:py-[50px] mx-auto lg:px-[50px] sm:pt-0 bg-neutralVariant-1000 px-5 flex justify-start items-center `} ref={root}>
      <div className="flex flex-col lg:flex-row justify-evenly  items-center px-5 py-8  border-2 border-neutral-700 bg-secondary-50  rounded-xl m-auto min-h-[500px] group transition-all duration-300  hover:py-14 ">
        <div className=" text-left flex flex-col items-end" ref={footerLeft}>
          <Paragraph className="max-w-[450px] p-4 rounded-2xl mb-5 group-hover:mb-10 text-base sm:text-xl bg-secondary-1000 font-light text-primary-100 group-hover:rotate-[-6deg]  transition-all duration-300"> {`Let's start a conversation about your business's digital future`}</Paragraph>
          <Paragraph className="max-w-[670px] text-end  mb-4 group-hover:mt-10 text-md sm:text-2xl font-semibold text-slate-900 group-hover:rotate-6 transition-all duration-300">
           {`Let’s make your dream come true`} 
          </Paragraph>

          <h2 className="mb-5 sm:mb-14 flex justify-end relative ">
            <span className="font-semibold text-xl md:text-4xl text-slate-900 group-hover:rotate-6  transition-all duration-300 ">CONTACT US</span>
          </h2>

          <div className="w-full sm:w-1/2 flex justify-end relative mb-10 sm:mb-0  group-hover:rotate-6 transition-all duration-300">
            <PrimaryButton
              className=" py-3 text-base sm:text-lg hover:scale-90 mb-5 lg:mb-0"
              pathName="/contact-us"
            >
              Share us your idea
            </PrimaryButton>
          </div>
        </div>

        <picture className="w-full sm:w-1/2 relative  overflow-hidden flex justify-center lg:justify-start group-hover:rotate-6 group-hover:scale-95  transition-all duration-300" ref={footerRight}>
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
            className="contrast relative max-w-[100%] rounded-xl "
          />
        </picture>
      </div>
    </section>
  );
};

const WrappedComponent = withContactUs(ContactHomeSection);
export default WrappedComponent;
