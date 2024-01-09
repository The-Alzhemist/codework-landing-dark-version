"use client";

import Paragraph from "@/components/typography/paragraph/Paragraph";
import React from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import withServiceCard from "./withServiceCard";
import { ServiceListProps } from "./interface";
import { useTranslations } from "next-intl";
gsap.registerPlugin(ScrollTrigger);



 function ServiceCard() {
  const t = useTranslations('Home');
  const serviceList:ServiceListProps[] = [
    {
      img: "/images/servicePage/serviceCard/service-ux-xi-1x.png",
      imgWebP: "/images/servicePage/serviceCard/service-ux-xi-1x.webp",
      title: "UXUI Design",
      detail: t('OurService.UxUi')
    },
    {
      img: "/images/servicePage/serviceCard/service-project-solution-1x.png",
      imgWebP: "/images/servicePage/serviceCard/service-project-solution-1x.webp",
      title: "Project solution consultancy",
      detail: t('OurService.ProjectSolution')
    },
    {
      img: "/images/servicePage/serviceCard/service-web-dev-1x.png",
      imgWebP: "/images/servicePage/serviceCard/service-web-dev-1x.webp",
      title: "Web development",
      detail: t('OurService.WebDevelopment')
    },
    {
      img: "/images/servicePage/serviceCard/service-mobile-dev-1x.png",
      imgWebP: "/images/servicePage/serviceCard/service-mobile-dev-1x.webp",
      title: "Mobile development",
      detail: t('OurService.MobileDevelopment')
    },
    {
      img: "/images/servicePage/serviceCard/service-digital-mkt-1x.png",
      imgWebP: "/images/servicePage/serviceCard/service-digital-mkt-1x.webp",
      title: "Digital marketing",
      detail: t('OurService.DigitalMkt')
    },
    {
      img: "/images/servicePage/serviceCard/service-consult-1x.png",
      imgWebP: "/images/servicePage/serviceCard/service-consult-1x.webp",
      title: "Digital transformation consultancy",
      detail: t('OurService.DigitalTrasformConsult')
    },
  ];

  
  return (
    <section className="serviceCard-container relative  py-12 md:py-[50px] mx-auto px-5 lg:px-[50px] flex flex-col">
      {serviceList.map((item: ServiceListProps, index) => (
        <div key={'serviceCard-key-' + index} className="card-x flex flex-col sm:flex-row  border-2 border-secondary-200 p-7 rounded-2xl items-center gap-x-10  mb-10">
        
            <picture>
              <source
                srcSet={item.imgWebP}
                type="image/webp"
              />
              <img
                src={item.img}
                alt={item.title}
                title={item.title}
                loading="lazy"
                className="max-w-[300px] rounded-lg mb-5 sm:mb-0"
              />
            </picture>
          <div>
            <h2 className="text-xl sm:text-4xl font-semibold text-primary-100 mb-4">
              {item.title}
            </h2>
            {item.detail && (
              <Paragraph
                className={` ${
                  item.detail_2 && "mb-4"
                } text-base text-white font-light opacity-80`}
              >
                {item.detail}
              </Paragraph>
            )}

            {item.detail_2 && (
              <Paragraph className="text-base text-white font-light opacity-80">
                {item.detail_2}
              </Paragraph>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

const WrappedComponent = withServiceCard(ServiceCard);
export default WrappedComponent;
