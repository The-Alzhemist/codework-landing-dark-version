"use client";

import Paragraph from "@/components/typography/paragraph/Paragraph";
import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import withOurService from "./withOurService";

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
  return (
    <section className="relative py-12 md:py-[50px] mx-auto px-5 lg:px-[50px] sm:pt-0  bg-neutralVariant-1000 ">
      <div  className="max-w-[1440px] m-auto">
        {/* title */}
        <motion.div
        
         
          className="flex items-center flex-col mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-semibold flex mb-7 text-center">
            <span className="text-white border-b-2 border-primary-100 underline underline-offset-3 decoration-8 decoration-primary-100">
              Services.
            </span>
          </h2>
          <Paragraph
            className={`lg:max-w-[1000px] text-base sm:text-md text-gray-400 text-center font-light `}
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

        <div className="flex flex-wrap justify-center gap-7 ">
          {serviceList.map((service: any) => (
            <React.Fragment key={service.name}>
              <div className="relative sm:w-[45%] lg:w-[30%] max-w-[425px] border border-primary-100  min-h-[500px] p-6 rounded-lg overflow-hidden shadow-[5px_5px_0px_0px_rgba(233,251,100)]">
                <h3 className="relative text-4xl font-semibold h-[135px] text-white flex items-center justify-between">
                  <span className="max-w-[310px] text-transparent bg-clip-text bg-gradient-to-r to-primary-100 from-secondary-100">{service.name}</span>
                  {/* <span>
                    <BsArrowRightCircle />
                  </span> */}
                </h3>
                <p className="text-secondary-400  h-[100px] mb-5 flex items-start text-base sm:text-md font-light">
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

const WrappedComponent = withOurService(OurService);
export default WrappedComponent;
