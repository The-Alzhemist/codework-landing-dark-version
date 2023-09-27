import Paragraph from "@/components/typography/paragraph/Paragraph";
import { ourPartnerSectionText } from "@/constants/homePage/ourPartnerText";
import React from "react";

export const OurPartner = () => {
  return (
    <section className="relative py-12  md:py-[100px] mx-auto px-5 lg:px-[50px] sm:pt-0  bg-secondary-1000 ">
      <div className="flex flex-col-reverse lg:flex-row justify-center gap-10 items-center m-auto">
        {/* logo */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 ">
          {ourPartnerSectionText.imagesList.map((item: any, index: number) => (
            <React.Fragment key={`our-partner-${index}`}>
              <a
                className="w-[80px] h-[80px] sm:w-[110px] sm:h-[110px]  bg-white rounded-full border-2 border-primary-700 flex justify-center items-center transition-all ease-out duration-100 hover:shadow-lg"
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
          ))}
        </div>

        {/* content */}
        <div className="flex flex-col items-center lg:items-start ">
          <h2 className="text-xl md:text-4xl font-semibold flex mb-7">
            <span className="text-primary-100 border-b-2 border-primary-100 "> PARTNERS</span>
          </h2>
          <Paragraph
            className={`lg:max-w-[550px] xl:max-w-[670px] text-base sm:text-md font-light text-white text-center lg:text-left`}
          >
            At CodeWork, we believe in the power of collaboration. That's why
            we've teamed up with industry-leading partners who share our vision
            for innovation and excellence. Together, we bring you cutting-edge
            solutions that propel your business into the future. Explore our
            network of trusted partners who help us deliver the technology
            solutions you can rely on.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};
