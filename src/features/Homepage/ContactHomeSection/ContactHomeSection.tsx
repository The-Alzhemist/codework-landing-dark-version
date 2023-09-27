import React from "react";
import Image from "next/image";

import withContactUs from "./withContactUs";
import { ContactHomeSectionProp } from "./interface";

import Paragraph from "@/components/typography/paragraph/Paragraph";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";

const ContactHomeSection = (props: ContactHomeSectionProp) => {
  const { contactUsSectionText } = props;
  return (
    <section className={`relative md:py-[50px] mx-auto lg:px-[50px] sm:pt-0`}>
      <div className="flex gap-10 flex-col lg:flex-row justify-center items-center mb-10 p-16 bg-secondary-900">
       
        <div className="w-1/2 text-left mb-5 text-3xl md:text-4xl lg:w-2/4 flex flex-col items-end">
          <Paragraph className="max-w-[450px]   p-4 rounded-2xl mb-5  text-xl bg-secondary-1000 font-light text-primary-100 ">Let's start a conversation about your business's digital future</Paragraph>
          <Paragraph className="max-w-[670px] text-end  mb-4 text-2xl font-semibold text-white">
            Let’s make your dream come true
          </Paragraph>

          <h2 className="mb-14 flex justify-end relative">
            <span className="text-primary-100 font-semibold  ">CONTACT US</span>
          </h2>

          <div className="flex justify-end relative">
            <PrimaryButton
              className="min-w-[200px] py-3 font-semibold text-lg"
              pathName="/contact-us"
            >
              Share us your idea
            </PrimaryButton>
          </div>
        </div>

        <picture className="w-1/2 ">
          <source
            srcSet="https://fastly.picsum.photos/id/716/500/500.jpg?hmac=t_YSPYS_yDjE9YSxHrDW9PrxvGExSkJg-MOkKntmQFU"
            type="image/webp"
            media="(max-width: 639px)"
          />
          <source
            srcSet="https://fastly.picsum.photos/id/716/500/500.jpg?hmac=t_YSPYS_yDjE9YSxHrDW9PrxvGExSkJg-MOkKntmQFU"
            type="image/webp"
            media="(min-width: 640px)"
          />
          <img
            src="https://fastly.picsum.photos/id/716/500/500.jpg?hmac=t_YSPYS_yDjE9YSxHrDW9PrxvGExSkJg-MOkKntmQFU"
            alt="codework contact us section cover image"
            title="codework contact us section cover image"
            loading="lazy"
            className="rounded-full"
          />
        </picture>
      </div>
    </section>
  );
};

const WrappedComponent = withContactUs(ContactHomeSection);
export default WrappedComponent;
