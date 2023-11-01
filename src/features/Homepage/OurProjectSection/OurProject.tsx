"use client";

import Paragraph from "@/components/typography/paragraph/Paragraph";
import React from "react";
import withOurProject from "./withOurPoject";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { v4 as uuidv4 } from 'uuid';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ProjectListProps } from "./interface";

const projectList: ProjectListProps[] = [
  {
    projectName: "Seamoor Marine",
    projectDetail:
      "Develop an internal system for a marine and logistics company, optimizing operations, tracking shipments, and facilitating efficient communication.",
    projectTasks: [
      {
        task: "Project solution consultancy",
      },
      {
        task: "UX/UI Design",
      },
      {
        task: "Web development",
      },
      {
        task: "Digital marketing",
      },
      {
        task: "Digital transformation consultancy",
      },
    ],
    projectImage: "/images/seamoorMock.png",
    projectImageWebP: "/images/seamoorMock.webp",
  },
  {
    projectName: "The Pine",
    projectDetail:
      "Develop an internal system for a marine and logistics company, optimizing operations, tracking shipments, and facilitating efficient communication.",
    projectTasks: [
      {
        task: "Project solution consultancy",
      },
      {
        task: "UX/UI Design",
      },
      {
        task: "Web development",
      },
      {
        task: "Digital marketing",
      },
      {
        task: "Digital transformation consultancy",
      },
    ],
    projectImage: "/images/homePage/the-pine-mock-project-v1.webp",
    projectImageWebP: "/images/homePage/the-pine-mock-project-v1.jpg",
  },
  {
    projectName: "Tonsai Market",
    projectDetail:
      "Develop an internal system for a marine and logistics company, optimizing operations, tracking shipments, and facilitating efficient communication.",
    projectTasks: [
      {
        task: "Project solution consultancy",
      },
      {
        task: "UX/UI Design",
      },
      {
        task: "Web development",
      },
      {
        task: "Digital marketing",
      },
      {
        task: "Digital transformation consultancy",
      },
    ],
    projectImage: "/images/homePage/tonsai-mock-project-v1.webp",
    projectImageWebP: "/images/homePage/tonsai-mock-project-v1.jpg",
  },
];

export const OurProject = () => {
  return (
    <section className=" relative py-12 md:py-[100px] mx-auto px-5 lg:px-[50px]  bg-neutral-1000 ">
      <div className=" m-auto max-w-[1440px]">
        {/* title */}
        <div className="flex items-center flex-col mb-16 ease-out">
          <h2 className="text-2xl md:text-4xl font-semibold flex mb-7">
            <span className="text-white  border-primary-100 underline underline-offset-3 decoration-8 decoration-primary-100">
              Projects.
            </span>
          </h2>
          <Paragraph
            className={`lg:max-w-[1000px] text-sm sm:text-md font-light text-white opacity-80 text-center`}
          >
            {`Explore our successful projects with valued clients, showcasing our expertise and dedication.`}
          </Paragraph>
        </div>

        {/* card */}
        <Swiper
           direction="horizontal" // Set the direction to right-to-left
          navigation
          pagination={{ clickable: true }}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          
          loop={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1000: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            600: {
              slidesPerView: 1.5,
              spaceBetween: 0,
            },
            200: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 1000,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        >
          {projectList &&
            projectList.map((proj: ProjectListProps) => (
         
                <SwiperSlide key={uuidv4()}>
                  <div className="relative bg-neutral-950-750 w-full rounded-3xl overflow-hidden border-4 border-neutralVariant-50">
                    {/* img */}
                    <div className="flex justify-center w-full rounded-2xl overflow-hidden">
                      <div className="absolute opacity-90 rounded-2xl  bg-gradient-to-t from-black from-10% to-transparent to-90%   w-full h-full"></div>

                      <picture>
                        <source
                          srcSet={proj.projectImage}
                          type="image/webp"
                        />
                        <img
                          src={proj.projectImage}
                          alt={proj.projectName}
                          title={proj.projectName}
                          loading="lazy"
                          className="rounded-lg w-full min-h-[300px] sm:h-auto object-cover lg:h-[350px]"
                        />
                      </picture>
                    </div>

                    {/* text */}
                    <div className="absolute bottom-0  text-neutral-50   p-7">
                      <div className="flex flex-wrap font-light gap-2 text-slate-900 mb-14    sm:mb-3">
                        {proj.projectTasks && proj.projectTasks.map((item: {task:string}, index:number) => (
                          <React.Fragment key={uuidv4()}>
                            <div className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
                          {item.task}
                        </div>
                        </React.Fragment>
                        ))}
                     
                      </div>

                      <h2 className="text-2xl sm:text-3xl mb-1 sm:mb-5 font-semibold ">
                       {proj.projectName}
                      </h2>
                      <p className="font-light text-xs sm:text-base">
                      {proj.projectDetail}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
             
            ))}
        </Swiper>
      </div>
    </section>
  );
};

const WrappedComponent = withOurProject(OurProject);
export default WrappedComponent;
