"use client";
import Paragraph from "@/components/typography/paragraph/Paragraph";
import { ourPartnerSectionText } from "@/constants/homePage/ourPartnerText";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

export const OurPartner = () => {
  const [ref, inView] = useInView();

  const headingAnimation = {
    hidden: { opacity: 0  }, // Fade in from left
    visible: { opacity: 1 },
  };


  return (
    <section className="relative py-12  md:py-[100px] mx-auto px-5 lg:px-[50px] sm:pt-0  bg-neutral-1000 ">
      <motion.div
        ref={ref}
        className={`
        } flex flex-col-reverse lg:flex-row justify-center gap-10 items-center m-auto`}
      >
        {/* logo */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 ">
          {ourPartnerSectionText.imagesList.map((item: any, index: number) => (
            <React.Fragment key={`our-partner-${index}`}>
              <motion.a
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={headingAnimation}
                      transition={{ duration: 0.8 }}
                className="w-[80px] h-[80px] sm:w-[110px] sm:h-[110px]  bg-white rounded-full border-2 border-primary-700 flex justify-center items-center transition-all ease-out  hover:shadow-lg"
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
          ))}
        </div>

        {/* content */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headingAnimation}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start transition-all ease-out  "
        >
          <h2 className="text-xl md:text-4xl font-semibold flex mb-7">
            <span className="text-primary-100 border-b-2 border-primary-100 ">
            
              PARTNERS
            </span>
          </h2>
          <Paragraph
            className={`lg:max-w-[550px] xl:max-w-[670px] text-base sm:text-md font-light text-white text-center lg:text-left`}
          >
            {`At CodeWork, we believe in the power of collaboration. That's why
            we've teamed up with industry-leading partners who share our vision
            for innovation and excellence. Together, we bring you cutting-edge
            solutions that propel your business into the future. Explore our
            network of trusted partners who help us deliver the technology
            solutions you can rely on.`}
          </Paragraph>
        </motion.div>
      </motion.div>
    </section>
  );
};
