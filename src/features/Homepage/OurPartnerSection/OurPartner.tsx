"use client";
import Paragraph from "@/components/typography/paragraph/Paragraph";
import { ourPartnerSectionText } from "@/constants/homePage/ourPartnerText";
import { motion } from "framer-motion";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import withOurPartner from "./withOurPartner";
import { OurPartnerProps } from "./interface";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap";
// เปิดใช้งาน ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const OurPartner = ({ headingAnimation }: OurPartnerProps) => {

  const h1Ref = useRef<HTMLDivElement | null>(null);
  const pref = useRef<HTMLDivElement | null>(null);
  const divBtnRef = useRef<HTMLDivElement | null>(null);
  const root = useRef<any>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(h1Ref.current, { duration:1, y: 10, delay: 0, ease: "power4", stagger: 0.25, scrollTrigger: {
        trigger: h1Ref.current,
        markers: false,
        scrub: 1,
        pin: true,
        toggleActions: "restart pause resume none",
        
      } });
      gsap.from(pref.current, { opacity: 0, y: 10, duration:1, delay: .7, ease: "power4", stagger: 0.25,  scrollTrigger: {
        trigger: pref.current,
        markers: false,
        scrub: 1,
        toggleActions: "restart pause resume none",
        
      } });
      gsap.from(divBtnRef.current, { opacity: 0, y:100,  duration:3, delay: 3, ease: "power4", stagger: 0.25, scrollTrigger: {
        trigger: divBtnRef.current,
        markers: false,
        scrub: 1,
        toggleActions: "restart pause resume none",
        
      } });
    }, root);

    return () => ctx.revert();
  },[]);

  


  return (
    <section className="relative py-12  md:py-[100px] mx-auto px-5 lg:px-[50px] sm:pt-0  bg-neutral-1000"  ref={root}>
      <div
        ref={root}
        className={`
        } flex flex-col-reverse  items-center justify-center gap-10 items-center m-auto`}
      >
        {/* logo */}
        <div className="flex flex-wrap justify-center gap-5 max-w-[1000px]"></div>

        {/* content */}
        <div
          className="flex flex-col items-center transition-all"
        >
          <h2 className="text-2xl md:text-4xl font-semibold flex mb-7" ref={h1Ref}>
            <span className="text-white  border-primary-100 underline underline-offset-3 decoration-8 decoration-primary-100">
              Partner.
            </span>
          </h2>
          <div ref={pref}>
          <Paragraph
            className={`lg:max-w-[1000px] text-sm sm:text-md font-light text-white opacity-80 text-center`}
          >
            {`At CodeWork, we believe in the power of collaboration. That's why we've teamed up with industry-leading partners who share our vision for innovation and excellence. Together, we bring you cutting-edge solutions that propel your business into the future. Explore our network of trusted partners who help us deliver the technology solutions you can rely on.`}
          </Paragraph>
          </div>
         
        </div>
      </div>

      <>
        {/* logo */}
        <div ref={divBtnRef} className=" overflow-hidden  whitespace-nowrap relative group ">
          {/* img-slide */}
          <ul className="inline-block animate-scroll group-hover:pause mr-10">
            {/* img */}
            <div className="flex gap-x-5 sm:gap-x-10">
              {ourPartnerSectionText.imagesList.map(
                (item: any, index: number) => (
                  <React.Fragment key={`our-partner-${index}`}>
                    <a
                      className="grayscale group-hover:grayscale-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]  bg-white rounded-full border-2 border-primary-700 flex justify-center items-center transition-all  hover:shadow-lg whitespace-nowrap"
                      href={item.urlName}
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      <img
                        src={item.pathName}
                        width={0}
                        height={0}
                        className={`h-auto w-[90%] p-3 ${item.className}`}
                        alt={`${item.alt}`}
                      />
                    </a>
                  </React.Fragment>
                )
              )}
            </div>
          </ul>

          <ul className="inline-block animate-scroll group-hover:pause">
            {/* img */}
            <div className="flex  gap-x-5 sm:gap-x-10">
              {ourPartnerSectionText.imagesList.map(
                (item: any, index: number) => (
                  <React.Fragment key={`our-partner-${index}`}>
                    <a
                      className="grayscale group-hover:grayscale-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]  bg-white rounded-full border-2 border-primary-700 flex justify-center items-center transition-all  hover:shadow-lg whitespace-nowrap"
                      href={item.urlName}
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      <img
                        src={item.pathName}
                        width={0}
                        height={0}
                        className={`h-auto w-[90%] p-3 ${item.className}`}
                        alt={`${item.alt}`}
                      />
                    </a>
                  </React.Fragment>
                )
              )}
            </div>
          </ul>

        </div>
      </>
    </section>
  );
};

const WrappedComponent = withOurPartner(OurPartner);
export default WrappedComponent;
