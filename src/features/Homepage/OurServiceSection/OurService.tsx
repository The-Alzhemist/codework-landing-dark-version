"use client";

import Paragraph from "@/components/typography/paragraph/Paragraph";
import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const serviceList = [
  {
    name: "UX/UI design",
    image: '/images/ux-ui.png',
    detail:
      "Focusing on creating intuitive and visually appealing digital interfaces that enhance user experience and engagement",
  },
  {
    name: "Project solution consultancy",
    image: '/images/project-solution.png',
    detail:
      "Collaborating closely with clients to identify their unique challenges and requirements",
  },
  {
    name: "Web development",
    image: '/images/web-development.png',
    detail:
      "The process of building and maintaining websites, utilizing various programming languages and frameworks to create responsive and dynamic online platforms.",
  },
  {
    name: "Mobile development",
    image: '/images/mobile-development.png',
    detail:
      "Elevate your business with our mobile development expertise. We specialize in creating intuitive and customized mobile apps for both iOS and Android platforms.",
  },
  {
    name: "Digital marketing",
    image: '/images/digital-marketing.png',
    detail:
      "Unlock the full potential of your online presence with our digital marketing strategies. From SEO and social media marketing to targeted campaigns",
  },
  {
    name: "Digital transformation consultancy",
    image: '/images/digital-transformation-consultancy.png',
    detail:
      "We'll assess your current processes, define a tailored roadmap, and implement cutting-edge solutions to streamline operations and enhance customer experiences.",
  },
];

export const OurService = () => {
  const [ref, inView] = useInView();

  const headingAnimation = {
    hidden: { opacity: 0  }, // Fade in from left
    visible: { opacity: 1 },
  };

 
  return (
    <section className="relative py-12 md:py-[50px] mx-auto px-5 lg:px-[50px] sm:pt-0  bg-neutralVariant-1000 ">
      <div ref={ref} className="max-w-[1440px] m-auto">
        {/* title */}
        <motion.div
        
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headingAnimation}
          transition={{ duration: 0.8 }}
          className="flex items-center flex-col mb-16"
        >
          <h2 className="text-xl md:text-4xl font-semibold flex mb-7 text-center">
            <span className="text-primary-100 border-b-2 border-primary-100 ">
              SERVICES
            </span>
          </h2>
          <Paragraph
            className={`lg:max-w-[1000px] text-base sm:text-md text-white text-center font-light `}
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
          {serviceList.map((service: any) => (
            <React.Fragment key={service.name}>
              <div className="relative sm:w-[45%]  lg:w-[30%] max-w-[425px] border-2 border-neutral-500 min-h-[500px] p-6 rounded-xl overflow-hidden">
                <h3 className="relative text-3xl font-semibold h-[135px] text-white flex items-center justify-between">
                  <span className="max-w-[310px]">{service.name}</span>
                  <span>
                    <BsArrowRightCircle />
                  </span>
                </h3>
                <p className="text-white h-[150px] mb-5 flex items-start text-base sm:text-lg font-light">
                  {service.detail}
                </p>
                <img
                  className="relative bottom-[-40px] rounded-md"
                  src={service.image}
                  alt=""
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
