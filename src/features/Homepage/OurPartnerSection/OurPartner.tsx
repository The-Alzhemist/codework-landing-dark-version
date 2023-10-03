"use client";
import Paragraph from "@/components/typography/paragraph/Paragraph";
import { ourPartnerSectionText } from "@/constants/homePage/ourPartnerText";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const OurPartner = () => {
  const [ref, inView] = useInView();

  const headingAnimation = {
    hidden: { opacity: 0 }, // Fade in from left
    visible: { opacity: 1 },
  };

  // const [carouselOffset, setCarouselOffset] = useState(0);

  // useEffect(() => {
  //   // Move the carousel to the right every 3 seconds (adjust the interval as needed)
  //   const interval = setInterval(() => {
  //     setCarouselOffset((prevOffset) => prevOffset - 100); // Adjust the width of each logo as needed
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="relative py-12  md:py-[100px] mx-auto px-5 lg:px-[50px] sm:pt-0  bg-neutralVariant-1000">
      <motion.div
        ref={ref}
        className={`
        } flex flex-col-reverse  items-center justify-center gap-10 items-center m-auto`}
      >
        {/* logo */}
        <div className="flex flex-wrap justify-center gap-5 max-w-[1000px]">
          {/* {ourPartnerSectionText.imagesList.map((item: any, index: number) => (
            <React.Fragment key={`our-partner-${index}`}>
              <motion.a
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={headingAnimation}
                transition={{ duration: 0.8 }}
                className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]  bg-white rounded-full border-2 border-primary-700 flex justify-center items-center transition-all  hover:shadow-lg"
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
              </motion.a>
            </React.Fragment>
          ))} */}
        </div>

        {/* content */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headingAnimation}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center transition-all "
        >
          <h2 className="text-xl md:text-4xl font-semibold flex mb-7">
            <span className="text-primary-100 border-b-2 border-primary-100 ">
              PARTNERS
            </span>
          </h2>
          <Paragraph
            className={`lg:max-w-[1000px] text-base sm:text-md font-light text-white text-center`}
          >
            {`At CodeWork, we believe in the power of collaboration. That's why we've teamed up with industry-leading partners who share our vision for innovation and excellence. Together, we bring you cutting-edge solutions that propel your business into the future. Explore our network of trusted partners who help us deliver the technology solutions you can rely on.`}
          </Paragraph>
        </motion.div>
      </motion.div>

 

      <>
        {/* logo */}
        <div className=" overflow-hidden  whitespace-nowrap relative group ">
          {/* img-slide */}
          <ul className="inline-block animate-scroll group-hover:pause mr-10">
            {/* img */}
            <div className="flex gap-x-10">
            {ourPartnerSectionText.imagesList.map(
              (item: any, index: number) => (
                <React.Fragment key={`our-partner-${index}`}>
                  <motion.a
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={headingAnimation}
                    transition={{ duration: 0.8 }}
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
                  </motion.a>
                </React.Fragment>
              )
            )}
            </div>
           
          </ul>

          <ul className="inline-block animate-scroll group-hover:pause">
            {/* img */}
            <div className="flex gap-x-10">
            {ourPartnerSectionText.imagesList.map(
              (item: any, index: number) => (
                <React.Fragment key={`our-partner-${index}`}>
                  <motion.a
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={headingAnimation}
                    transition={{ duration: 0.8 }}
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
                  </motion.a>
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
