"use client";

import Paragraph from "@/components/typography/paragraph/Paragraph";
import React, { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import withTeamMember from "./withTeamMember";
gsap.registerPlugin(ScrollTrigger);

const serviceList = [
  {
    img: "https://placehold.co/220x305",
    imgWebP: "https://placehold.co/220x305",
    name: "Pakorn (Puck)",
    position: "CEO & Co-founder",
  },
  {
    img: "https://placehold.co/220x305",
    imgWebP: "https://placehold.co/220x305",
    name: "Soratat (Q)",
    position: "Founder",
  },
  {
    img: "/images/team-page/ter.jpg",
    imgWebP: "/images/team-page/ter.webp",
    name: "Pongsakorn (Ter)",
    position: "Head of Product and Deliverable",
  },
  {
    img: "/images/team-page/ice.jpg",
    imgWebP: "/images/team-page/ice.webp",
    name: "Pornjira (Ice)",
    position: "Operations Manager",
  },
  {
    img: "/images/team-page/man.jpg",
    imgWebP: "/images/team-page/man.webp",
    name: "Pusit (Man)",
    position: "Product manager",
  },
  {
    img: "/images/team-page/ford.jpg",
    imgWebP: "/images/team-page/ford.webp",
    name: "Pornsit (Ford)",
    position: "Principle Engineer",
  },
  {
    img: "/images/team-page/mo.jpg",
    imgWebP: "/images/team-page/mo.webp",
    name: "Niti (Mo)",
    position: "Full-stack Developer",
  },
  {
    img: "/images/team-page/fluke.jpg",
    imgWebP: "/images/team-page/fluke.webp",
    name: "Peerapol (Fluke)",
    position: "Full-stack Developer",
  },
  {
    img: "/images/team-page/nueng.jpg",
    imgWebP: "/images/team-page/nueng.webp",
    name: "Aphiwit (Nueng)",
    position: "Front-end Developer",
  },


  {
    img: "/images/team-page/kawpoon.jpg",
    imgWebP: "/images/team-page/kawpoon.webp",
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
             <picture>
            <source
              srcSet={item.imgWebP}
              type="image/webp"
            />
            <img
              src={item.img}
              alt=""
              title=""
              loading="lazy"
              className="rounded-lg mb-3 w-[220px] h-[200px] sm:h-[305px] object-cover border-2 border-primary-50"
            />
          </picture>
          <div>
            <h2 className="text-sm sm:text-base font-semibold text-white text-left ">
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
