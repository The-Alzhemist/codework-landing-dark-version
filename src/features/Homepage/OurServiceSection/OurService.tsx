"use client";

import Paragraph from "@/components/typography/paragraph/Paragraph";
import React from "react";
import withOurService from "./withOurService";
import { OurServiceProps } from "./interface";
import { useTranslations } from "next-intl";

const OurService = ({
  h1Ref,
  pref,
  divBtnRef,
  root,
  serviceList,
  t,
}: OurServiceProps) => {
  return (
    <section
      className="relative py-12 md:py-[50px] mx-auto px-5 lg:px-[50px] sm:pt-0  bg-neutral-1000 "
      ref={root}
    >
      <div className="max-w-[1440px] m-auto">
        {/* title */}
        <div className="flex items-center flex-col mb-16">
          <h2
            className="text-2xl md:text-4xl font-semibold flex mb-7 text-center"
            ref={h1Ref}
          >
            <span className="text-white border-b-2 border-primary-100 underline underline-offset-3 decoration-8 decoration-primary-100">
              Services.
            </span>
          </h2>
          <div ref={pref}>
            <Paragraph
              className={`lg:max-w-[970px] text-sm sm:text-md font-light text-white opacity-80 text-center`}
            >
              {t("OurService.Description")}
            </Paragraph>
          </div>
        </div>

        {/* card */}

        <div className="flex flex-wrap justify-center gap-7" ref={divBtnRef}>
          {serviceList.map(
            (service: {
              name: string;
              image: string;
              imageWebP: string;
              detail: string;
            }) => (
              <React.Fragment key={service.name}>
                <div className="relative sm:w-[45%] lg:w-[30%] max-w-[425px] border border-primary-50 hover:border-primary-100  min-h-auto sm:min-h-[500px] p-6 rounded-lg overflow-hidden cursor-pointer transition-all duration-3  hover:shadow-[0_8px_30px_rgba(233,251,100,0.1)] group">
                  <h3 className="relative  text-xl sm:text-4xl font-semibold h-[70px] sm:h-[135px] text-white flex items-center justify-between">
                    <span className="max-w-[310px] text-transparent bg-clip-text bg-secondary-100 py-2">
                      {service.name}
                    </span>
                  </h3>
                  <p className="text-secondary-400 h-[50px] sm:h-[100px] mb-5 flex items-start text-sm sm:text-md font-light">
                    {service.detail}
                  </p>

                  <picture>
                    <source srcSet={service.imageWebP} type="image/webp" />
                    <img
                      className="relative bottom-[-40px] transition-all duration-100 rounded-md grayscale-[50%] group-hover:grayscale-0"
                      src={service.image}
                      alt={service.name}
                    />
                  </picture>
                </div>
              </React.Fragment>
            )
          )}
        </div>
      </div>
    </section>
  );
};

const WrappedComponent = withOurService(OurService);
export default WrappedComponent;
