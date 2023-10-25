"use client";

import Paragraph from "@/components/typography/paragraph/Paragraph";
import React, { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import withServiceCard from "./withServiceCard";
gsap.registerPlugin(ScrollTrigger);

const serviceList = [
  {
    img: "/images/service-page/service-card/service-ux-xi-1x.png",
    imgWebP: "/images/service-page/service-card/service-ux-xi-1x.webp",
    title: "UXUI Design",
    detail:
      "Focusing on creating intuitive and visually appealing digital interfaces that enhance user experience and engagement.",
  },
  {
    img: "/images/service-page/service-card/service-project-solution-1x.png",
    imgWebP: "/images/service-page/service-card/service-project-solution-1x.webp",
    title: "Project solution consultancy",
    detail:
      "Collaborating closely with clients to identify their unique challenges and requirements.",
    detail_2:
      "Based on scalability, maintainability and reliability mechanism, we ensure the delivery of quality products to end users.",
  },
  {
    img: "/images/service-page/service-card/service-web-dev-1x.png",
    imgWebP: "/images/service-page/service-card/service-web-dev-1x.webp",
    title: "Web development",
    detail:
      "The process of building and maintaining websites, utilizing various programming languages and frameworks to create responsive and dynamic online platforms.",
    detail_2:
      "By developing trendy and popular libraries and frameworks such as React, Angular, VueJs, our products will become more efficient and reliable.",
  },
  {
    img: "/images/service-page/service-card/service-mobile-dev-1x.png",
    imgWebP: "/images/service-page/service-card/service-mobile-dev-1x.webp",
    title: "Mobile development",
    detail:
      "The creation of software applications for smartphones and other mobile devices, offering users personalized and efficient experiences on Android and iOS platforms.",
    detail_2:
      "By developing trendy and popular libraries and frameworks like Kotlin, Swift, Objective-C, as well as hybrid frameworks such as React Native and Flutter, we ensure seamless and engaging experiences on your devices.",
  },
  {
    img: "/images/service-page/service-card/service-digital-mkt-1x.png",
    imgWebP: "/images/service-page/service-card/service-digital-mkt-1x.webp",
    title: "Digital marketing",
    detail:
      "Employing various online channels and strategies, such as SEO, social media, email, and content marketing, to promote brands, attract targeted audiences, and drive conversions in the digital realm.",
  },
  {
    img: "/images/service-page/service-card/service-consult-1x.png",
    imgWebP: "/images/service-page/service-card/service-consult-1x.webp",
    title: "Digital transformation consultancy",
    detail:
      "Guiding organizations through adopting digital technologies and strategies to optimize operations and stay competitive in the digital era, providing innovative solutions for enhanced efficiency and customer experience.",
  },
];


 function ServiceCard() {
  return (
    <section className="service-card-container relative  py-12 md:py-[50px] mx-auto px-5 lg:px-[50px] flex flex-col">
      {serviceList.map((item: any, index) => (
        <div key={'service-card-key-' + index} className="card-x flex flex-col sm:flex-row  border-2 border-secondary-200 p-7 rounded-2xl items-center gap-x-10  mb-10">
        
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
