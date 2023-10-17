"use client";

import Paragraph from "@/components/typography/paragraph/Paragraph";
import React from "react";
import withOurProject from "./withOurPoject";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const OurProject = () => {
  return (
    <section className=" relative py-12 md:py-[100px] mx-auto px-5 lg:px-[50px]  bg-neutral-1000 ">
      <div className=" m-auto max-w-[1440px]">
        {/* title */}
        <div className="flex items-center flex-col mb-16 ease-out">
          <h2 className="text-lg md:text-4xl font-semibold flex mb-7 text-center">
            <span className="text-white border-b-2 border-primary-100 underline underline-offset-3  decoration-8 decoration-primary-100">
              Projects.
            </span>
          </h2>
          <Paragraph
            className={`lg:max-w-[1000px] text-sm sm:text-md font-light text-white opacity-80 text-center`}
          >
            {`At CodeWork, we believe in the power of collaboration. That's why
            we've teamed up with industry-leading partners who share our vision
            for innovation and excellence. Together, we bring you cutting-edge
            solutions that propel your business into the future. Explore our
            network of trusted partners who help us deliver the technology
            solutions you can rely on.`}
          </Paragraph>
        </div>

        {/* card */}
        <Swiper
          navigation
          pagination={{ clickable: true }}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          initialSlide={2}
          loop={true}
          breakpoints={{
            1000: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 1.5,
              spaceBetween: 30,
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
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="relative bg-neutral-950-750 w-full rounded-3xl overflow-hidden border-4 border-neutralVariant-50">
              {/* img */}
              <div className="flex justify-center w-full rounded-2xl overflow-hidden">
                <div className="absolute opacity-90 rounded-2xl  bg-gradient-to-t from-black from-10% to-transparent to-90%   w-full h-full"></div>

                <img
                  src="/images/seamoorMock.png"
                  alt=""
                  className="rounded-lg w-full min-h-[300px] sm:h-auto object-cover"
                />
              </div>

              {/* text */}
              <div className="absolute bottom-0  text-neutral-50   p-7">
                <div className="flex flex-wrap font-light gap-2 text-slate-900 mb-14    sm:mb-3">
                  <div className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
                    1 Project solution consultancy
                  </div>
                  <div className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
                    UX/UI Design
                  </div>
                  <div className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
                    Web development
                  </div>
                  <div className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
                    Digital marketing
                  </div>
                  <div className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
                    Digital transformation consultancy
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl mb-1 sm:mb-5 font-semibold ">
                  Seamoor marine
                </h2>
                <p className="font-light text-xs sm:text-base">
                  Develop an internal system for a marine and logistics company,
                  optimizing operations, tracking shipments, and facilitating
                  efficient communication.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative bg-neutral-950-750 w-full rounded-3xl overflow-hidden border-4 border-neutralVariant-50">
              {/* img */}
              <div className="flex justify-center w-full rounded-2xl overflow-hidden">
                <div className="absolute opacity-90 rounded-2xl  bg-gradient-to-t from-black from-10% to-transparent to-90%   w-full h-full"></div>

                <img
                  src="/images/seamoorMock.png"
                  alt=""
                  className="rounded-lg w-full min-h-[300px] sm:h-auto object-cover"
                />
              </div>

              {/* text */}
              <div className="absolute bottom-0  text-neutral-50   p-7">
                <div className="flex flex-wrap font-light gap-2 text-slate-900 mb-14    sm:mb-3">
                  <div className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
                    1 Project solution consultancy
                  </div>
                  <div className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
                    UX/UI Design
                  </div>
                  <div className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
                    Web development
                  </div>
                  <div className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
                    Digital marketing
                  </div>
                  <div className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
                    Digital transformation consultancy
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl mb-1 sm:mb-5 font-semibold ">
                  Seamoor marine
                </h2>
                <p className="font-light text-xs sm:text-base">
                  Develop an internal system for a marine and logistics company,
                  optimizing operations, tracking shipments, and facilitating
                  efficient communication.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative bg-neutral-950-750 w-full rounded-3xl overflow-hidden border-4 border-neutralVariant-50">
              {/* img */}
              <div className="flex justify-center w-full rounded-2xl overflow-hidden">
                <div className="absolute opacity-90 rounded-2xl  bg-gradient-to-t from-black from-10% to-transparent to-90%   w-full h-full"></div>

                <img
                  src="/images/seamoorMock.png"
                  alt=""
                  className="rounded-lg w-full min-h-[300px] sm:h-auto object-cover"
                />
              </div>

              {/* text */}
              <div className="absolute bottom-0  text-neutral-50   p-7">
                <div className="flex flex-wrap font-light gap-2 text-slate-900 mb-14    sm:mb-3">
                  <div className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
                    1 Project solution consultancy
                  </div>
                  <div className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
                    UX/UI Design
                  </div>
                  <div className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
                    Web development
                  </div>
                  <div className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
                    Digital marketing
                  </div>
                  <div className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
                    Digital transformation consultancy
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl mb-1 sm:mb-5 font-semibold ">
                  Seamoor marine
                </h2>
                <p className="font-light text-xs sm:text-base">
                  Develop an internal system for a marine and logistics company,
                  optimizing operations, tracking shipments, and facilitating
                  efficient communication.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

const WrappedComponent = withOurProject(OurProject);
export default WrappedComponent;
