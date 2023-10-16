"use client";
import Paragraph from "@/components/typography/paragraph/Paragraph";
import { ourPartnerSectionText } from "@/constants/homePage/ourPartnerText";
import React from "react";
import withOurPartner from "./withOurPartner";
import { OurPartnerProps } from "./interface";

const OurPartner = ({ root, h1Ref, pRef, btnRef }: any) => {
  return (
    <section
      className="h-screen  relative py-10  md:py-[50px] mx-auto px-5 lg:px-[0px] sm:pt-0  bg-neutral-1000 flex flex-col justify-center items-center"
      ref={root}
    >
      <div className="overflow-scroll w-full">
        <div
          ref={root}
          className={`
        } flex flex-col-reverse  items-center justify-center gap-10 items-center m-auto`}
        >
          {/* logo */}
          <div className="flex flex-wrap justify-center gap-5 max-w-[1000px]"></div>

          {/* content */}
          <div className="flex flex-col items-center transition-all">
            <h2
              className="text-2xl md:text-4xl font-semibold flex mb-7"
              ref={h1Ref}
            >
              <span className="text-white  border-primary-100 underline underline-offset-3 decoration-8 decoration-primary-100">
                Partner.
              </span>
            </h2>
            <div ref={pRef}>
              <Paragraph
                className={`lg:max-w-[1000px] text-base sm:text-md font-light text-white opacity-80 text-center`}
              >
                {`At CodeWork, we believe in the power of collaboration. That's why we've teamed up with industry-leading partners who share our vision for innovation and excellence. Together, we bring you cutting-edge solutions that propel your business into the future. Explore our network of trusted partners who help us deliver the technology solutions you can rely on`}
              </Paragraph>
            </div>
          </div>
        </div>

        <>
          {/* logo */}
          <div
            ref={btnRef}
            className=" overflow-hidden  whitespace-nowrap relative group "
          >
            {/* img-slide */}
            <ul className="inline-block animate-scroll group-hover:pause mr-10">
              {/* img */}
              <div className="flex gap-x-5 sm:gap-x-10">
                {ourPartnerSectionText.imagesList.map(
                  (item: any, index: number) => (
                    <React.Fragment key={`our-partner-${index}`}>
                      <a
                        className="grayscale-[50%] group-hover:grayscale-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]  bg-white rounded-full border-2 border-primary-700 flex justify-center items-center transition-all  hover:shadow-lg whitespace-nowrap"
                        href={item.urlName}
                        target="_blank"
                        rel="noopener nofollow"
                      >
                        <img
                          src={item.pathName}
                          width={0}
                          height={0}
                          className={`h-auto w-[90%] p-3 ${item.className}`}
                          alt={`${item.alt}`}
                        />
                      </a>
                    </React.Fragment>
                  )
                )}
              </div>
            </ul>

            <ul className="inline-block animate-scroll group-hover:pause">
              {/* img */}
              <div className="flex  gap-x-5 sm:gap-x-10">
                {ourPartnerSectionText.imagesList.map(
                  (item: any, index: number) => (
                    <React.Fragment key={`our-partner-${index}`}>
                      <a
                        className="grayscale-[50%] group-hover:grayscale-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]  bg-white rounded-full border-2 border-primary-700 flex justify-center items-center transition-all  hover:shadow-lg whitespace-nowrap"
                        href={item.urlName}
                        target="_blank"
                        rel="noopener nofollow"
                      >
                        <img
                          src={item.pathName}
                          width={0}
                          height={0}
                          className={`h-auto w-[90%] p-3 ${item.className}`}
                          alt={`${item.alt}`}
                        />
                      </a>
                    </React.Fragment>
                  )
                )}
              </div>
            </ul>
          </div>
        </>
      </div>
    </section>
  );
};

const WrappedComponent = withOurPartner(OurPartner);
export default WrappedComponent;
