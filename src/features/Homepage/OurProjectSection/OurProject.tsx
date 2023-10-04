"use client";
import Paragraph from "@/components/typography/paragraph/Paragraph";
import { motion } from "framer-motion";
import React from "react";
import { BsArrowRightCircleFill, BsArrowRightCircle } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

const serviceList = [
  {
    name: "Seamoor marine",
    detail:
      "Develop an internal system for a marine and logistics company, optimizing operations, tracking shipments, and facilitating efficient communication.",
  }
];

export const OurProject = () => {
  const [ref, inView] = useInView();

  const headingAnimation = {
    hidden: { opacity: 0 }, // Fade in from left
    visible: { opacity: 1 },
  };

  const projectListAnimation = {
    hidden: { opacity: 0, y: -50  }, // Fade in from left
    visible: { opacity: 1, y: 0},
  };

  return (
    <section className="relative py-12 md:py-[100px] mx-auto px-5 lg:px-[50px]  bg-neutralVariant-1000 ">
      <div ref={ref} className=" m-auto max-w-[1440px]">
        {/* title */}
        <motion.div
       
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headingAnimation}
          transition={{ duration: 3 }}
          className="flex items-center flex-col mb-16 ease-out"
        >
          <h2 className="text-lg md:text-4xl font-semibold flex mb-7 text-center">
          <span className="text-white border-b-2 border-primary-100 underline underline-offset-3  decoration-8 decoration-primary-100">
              Projects.
            </span>
          </h2>
          <Paragraph
            className={`lg:max-w-[1000px] text-base sm:text-md  text-gray-400  text-center font-light `}
          >
            {`At CodeWork, we believe in the power of collaboration. That's why
            we've teamed up with industry-leading partners who share our vision
            for innovation and excellence. Together, we bring you cutting-edge
            solutions that propel your business into the future. Explore our
            network of trusted partners who help us deliver the technology
            solutions you can rely on.`}
          </Paragraph>
        </motion.div>

        {/* card */}

        <div className="flex flex-wrap justify-center gap-5">
          {serviceList.map((service: any, index: number) => (
            <React.Fragment key={service.name}>
              <motion.div
           
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={projectListAnimation}
                transition={{ duration: 1 }}
                className={`relative flex  flex-col ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                } gap-x-7  bg-[#172D27]  p-6 rounded-x rounded-2xl`}
              >
                {/* content */}
                <div className={`flex flex-col justify-center sm:w-2/5 `}>
                  <h3 className="relative text-3xl sm:text-5xl font-semibold  text-[#59ADA0] flex items-center justify-between mb-5">
                    <span className="">{service.name}</span>
                  </h3>
                  <p className="text-white flex items-center text-base sm:text-lg font-light mb-14">
                    {service.detail}
                  </p>

                  <div className="flex justify-end items-center text-white text-base sm:text-lg gap-x-2">
                    <span>See more </span>
                    <span className="text-2xl">
                      <BsArrowRightCircle />
                    </span>
                  </div>
                </div>

                {/* img */}
                <div
                  className={`sm:w-3/5 p-3 sm:p-10 bg-gradient-to-t  from-[#59ADA0]  via-[#172D27] rounded-md mb-5`}
                >
                  <img
                    className="rounded-md max-w"
                    src="/images/computer-bg.jpeg"
                    alt=""
                  />
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
