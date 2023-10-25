"use client";

import Paragraph from "@/components/typography/paragraph/Paragraph";
import React, { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import withTeamMember from "./withTeamMember";
gsap.registerPlugin(ScrollTrigger);

const serviceList = [
  {
    img: "",
    alt: "",
    name: "Pakorn (Puck)",
    position: "CEO & Co-founder",
  },
  {
    img: "",
    alt: "",
    name: "Soratat (Q)",
    position: "Founder",
  },
  {
    img: "",
    alt: "",
    name: "Pongsakorn (Ter)",
    position: "Head of Product and Deliverable",
  },
  {
    img: "",
    alt: "",
    name: "Pusit (Man)",
    position: "Product manager",
  },
  {
    img: "",
    alt: "",
    name: "Pornsit (Ford)",
    position: "Principle Engineer",
  },
  {
    img: "",
    alt: "",
    name: "Niti (Mo)",
    position: "Full-stack Developer",
  },
  {
    img: "",
    alt: "",
    name: "Peerapol (Fluke)",
    position: "Full-stack Developer",
  },
  {
    img: "",
    alt: "",
    name: "Aphiwit (Nueng)",
    position: "Front-end Developer",
  },
  {
    img: "",
    alt: "",
    name: "Pornjira (Ice)",
    position: "Operations Manager",
  },

  {
    img: "",
    alt: "",
    name: "Chantisa (Kawpoon)",
    position: "UX/UI Designer",
  },
];

function TeamMember() {
  return (
    <section className="service-card-container relative  py-12 md:py-[50px] mx-auto px-5 lg:px-[50px] flex flex-row justify-center  flex-wrap gap-x-10 sm:gap-x-0">
      {serviceList.map((item: any, index) => (
        <div
          key={"team-member-key-" + index}
          className="w-[40%] md:w-[32%] lg:w-[20%] card-x flex flex-col rounded-2xl items-start mb-10 max-w-[350px] "
        >
          <img
            src="https://placehold.co/220x305"
            alt="bg circle gradient"
            title="bg circle gradient"
            loading="lazy"
            className=" rounded-lg mb-3"
          />
          <div>
            <h2 className="text-sm sm:text-base font-semibold text-white text-left">
              {item.name}
            </h2>
          
              <Paragraph
                className={` text-white font-light opacity-80 text-xs sm:text-sm`}
              >
                {item.position}
              </Paragraph>
            
          </div>
        </div>
      ))}
    </section>
  );
}

const WrappedComponent = withTeamMember(TeamMember);
export default WrappedComponent;
