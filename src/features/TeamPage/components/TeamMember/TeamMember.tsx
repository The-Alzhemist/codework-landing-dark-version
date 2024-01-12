"use client";

import Paragraph from "@/components/typography/paragraph/Paragraph";
import React from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import withTeamMember from "./withTeamMember";
import { TeamMemberProps } from "./interface";
gsap.registerPlugin(ScrollTrigger);

const teamMemberList: TeamMemberProps[] = [
  {
    img: "/images/teamPage/kunpuck.jpg",
    imgWebP: "/images/teamPage/kunpuck.webp",
    name: "Pakorn (Puck)",
    position: "CEO & Co-founder",
  },
    {
    img: "/images/teamPage/kunQ.jpg",
    imgWebP: "/images/teamPage/kunQ.webp",
    name: "Soratat (Q)",
    position: "Co-founder",
  },
  {
    img: "/images/teamPage/ter.jpg",
    imgWebP: "/images/teamPage/ter.webp",
    name: "Pongsakorn (Ter)",
    position: "Head of Product Development & Co-founder",
  },
  {
    img: "/images/teamPage/ice.jpg",
    imgWebP: "/images/teamPage/ice.webp",
    name: "Pornjira (Ice)",
    position: "Operations Manager",
  },
  {
    img: "/images/teamPage/man.jpg",
    imgWebP: "/images/teamPage/man.webp",
    name: "Pusit (Man)",
    position: "Product manager",
  },
  {
    img: "/images/teamPage/ford.jpg",
    imgWebP: "/images/teamPage/ford.webp",
    name: "Pornsit (Ford)",
    position: "Principal Engineer",
  },
  {
    img: "/images/teamPage/mo.jpg",
    imgWebP: "/images/teamPage/mo.webp",
    name: "Niti (Mo)",
    position: "Full-stack Developer",
  },
  {
    img: "/images/teamPage/fluke.jpg",
    imgWebP: "/images/teamPage/fluke.webp",
    name: "Peerapol (Fluke)",
    position: "Full-stack Developer",
  },
  {
    img: "/images/teamPage/nueng.jpg",
    imgWebP: "/images/teamPage/nueng.webp",
    name: "Aphiwit (Nueng)",
    position: "Front-end Developer",
  }
];

function TeamMember() {
  return (
    <section className="serviceCard-container relative  py-12 md:py-[50px] mx-auto px-5 lg:px-[50px] flex flex-row justify-center  flex-wrap gap-x-10 sm:gap-x-0">
      {teamMemberList.map((item: TeamMemberProps, index) => (
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
              alt={item.name}
              title=""
              loading="lazy"
              className="rounded-lg mb-3 w-[220px] h-[200px] sm:h-[305px] object-cover border-2 border-primary-50 m-1"
            />
          </picture>
          <div>
            <h2 className="text-sm sm:text-base font-semibold text-white text-left ">
              {item.name}
            </h2>
          
              <Paragraph
                className={` text-white font-light opacity-80 text-xs sm:text-sm max-w-[220px]`}
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
