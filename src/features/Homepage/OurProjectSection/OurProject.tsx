"use client";
import Paragraph from "@/components/typography/paragraph/Paragraph";
import React from "react";
import withOurProject from "./withOurPoject";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const serviceList = [
  {
    name: "Seamoor marine",
    detail:
      "Develop an internal system for a marine and logistics company, optimizing operations, tracking shipments, and facilitating efficient communication.",
  },
];

export const OurProject = () => {
  return (
    <section className=" relative py-12 md:py-[100px] mx-auto px-5 lg:px-[50px]  bg-neutral-900 ">
      <div className=" m-auto max-w-[1440px]">
        {/* title */}
        <div className="flex items-center flex-col mb-16 ease-out">
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
        </div>

        {/* card */}
        <div className="flex flex-wrap justify-center gap-5 max-w-[1400px] m-auto ">
          <Swiper
            slidesPerView={1.5}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative bg-neutral-950-750 w-full rounded-3xl overflow-hidden border-4 border-neutralVariant-50">
                {/* img */}
                <div className="flex justify-center w-full rounded-2xl overflow-hidden">
                  <div className="absolute opacity-90 rounded-2xl  bg-gradient-to-t from-black from-10% to-transparent to-90%   w-full h-full"></div>

                  <div className="absolute flex top-4 left-4 font-light gap-2 ">
                    <div className="bg-neutralVariant-50  rounded-full text-center py-1 px-2 text-sm shadow-md">
                      Project solution consultancy
                    </div>
                    <div className="bg-neutralVariant-50  rounded-full text-center py-1 px-2 text-sm shadow-md">
                      UX/UI Design
                    </div>
                    <div className="bg-neutralVariant-50  rounded-full text-center py-1 px-2 text-sm shadow-md">
                      Web development
                    </div>
                  </div>
                  <img
                    src="https://fastly.picsum.photos/id/866/836/544.jpg?hmac=kYHGOly8GBlfVC-qEaY8r3iMmpkLD0IYyDMYpLpTEqc"
                    alt=""
                    className="rounded-lg w-full h-auto"
                  />
                </div>

                {/* text */}
                <div className="absolute bottom-0  text-neutral-50   p-7">
                  <h2 className="text-3xl mb-5 font-semibold ">
                    Seamoor marine
                  </h2>
                  <p className="font-light ">
                    Develop an internal system for a marine and logistics
                    company, optimizing operations, tracking shipments, and
                    facilitating efficient communication.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="relative bg-neutral-950-750 w-full rounded-3xl overflow-hidden border-4 border-neutralVariant-50">
                {/* img */}
                <div className="flex justify-center w-full rounded-2xl overflow-hidden">
                  <div className="absolute opacity-90 rounded-2xl  bg-gradient-to-t from-black from-10% to-transparent to-90%   w-full h-full"></div>

                  <div className="absolute flex top-4 left-4 font-light gap-2 ">
                    <div className="bg-neutralVariant-50  rounded-full text-center py-1 px-2 text-sm shadow-md">
                      Project solution consultancy
                    </div>
                    <div className="bg-neutralVariant-50  rounded-full text-center py-1 px-2 text-sm shadow-md">
                      UX/UI Design
                    </div>
                    <div className="bg-neutralVariant-50  rounded-full text-center py-1 px-2 text-sm shadow-md">
                      Web development
                    </div>
                  </div>
                  <img
                    src="        https://fastly.picsum.photos/id/269/836/544.jpg?grayscale&hmac=7stdFKeTPSzTj8U24auLAWeRRSVN6hktozQOnCAQLW8
                    "
                    alt=""
                    className="rounded-lg w-full h-auto"
                  />
                </div>

                {/* text */}
                <div className="absolute bottom-0  text-neutral-50   p-7">
                  <h2 className="text-3xl mb-5 font-semibold ">
                    Seamoor marine
                  </h2>
                  <p className="font-light ">
                    Develop an internal system for a marine and logistics
                    company, optimizing operations, tracking shipments, and
                    facilitating efficient communication.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const WrappedComponent = withOurProject(OurProject);
export default WrappedComponent;
