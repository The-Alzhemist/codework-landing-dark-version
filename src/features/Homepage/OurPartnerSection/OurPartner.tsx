"use client";
import Paragraph from "@/components/typography/paragraph/Paragraph";
import { ourPartnerSectionText } from "@/constants/homePage/ourPartnerText";
import { motion } from "framer-motion";
import React from "react";
import withOurPartner from "./withOurPartner";
import { OurPartnerProps } from "./interface";
import { useInView } from "react-intersection-observer";

const OurPartner = ({ headingAnimation }: OurPartnerProps) => {
  const [ref, inView] = useInView(); 
  return (
    <section className="relative py-12  md:py-[100px] mx-auto px-5 lg:px-[50px] sm:pt-0  bg-neutralVariant-1000">
      <motion.div
        ref={ref}
        className={`
        } flex flex-col-reverse  items-center justify-center gap-10 items-center m-auto`}
      >
        {/* logo */}
        <div className="flex flex-wrap justify-center gap-5 max-w-[1000px]"></div>

        {/* content */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headingAnimation}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center transition-all "
        >
          <h2 className="text-2xl md:text-4xl font-semibold flex mb-7">
            <span className="text-white border-b-2 border-primary-100 underline underline-offset-3 decoration-8 decoration-primary-100">
              Partner.
            </span>
          </h2>
          <Paragraph
            className={`lg:max-w-[1000px] text-sm sm:text-md font-light text-gray-400 text-center`}
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

const WrappedComponent = withOurPartner(OurPartner);
export default WrappedComponent;
