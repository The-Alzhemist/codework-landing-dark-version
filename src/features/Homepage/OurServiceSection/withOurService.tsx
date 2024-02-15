import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { OurServiceProps } from "./interface";
import { useTranslations } from "next-intl";

const withOurService = (Component: React.FC<OurServiceProps>) => {
  const Hoc = () => {
    const h1Ref = useRef<HTMLDivElement>(null);
    const pref = useRef<HTMLDivElement>(null);
    const divBtnRef = useRef<HTMLDivElement>(null);
    const root = useRef<HTMLElement>(null);
    const t = useTranslations('Home');

    const serviceList = [
      {
        name: "UX/UI design",
        imageWebP: "/images/homePage/ux-ui.webp",
        image: "/images/homePage/ux-ui.png",
        detail: t('OurService.UxUi')
      },
      {
        name: "Project solution consultancy",
        imageWebP: "/images/homePage/project-solution.webp",
        image: "/images/homePage/project-solution.png",
        detail: t('OurService.ProjectSolution')
      },
      {
        name: "Web development",
        imageWebP: "/images/homePage/web-development.webp",
        image: "/images/homePage/web-development.png",
        detail: t('OurService.WebDevelopment')
      },
      {
        name: "Mobile development",
        imageWebP: "/images/homePage/mobile-development.webp",
        image: "/images/homePage/mobile-development.png",
        
        detail: t('OurService.MobileDevelopment')
      },
      {
        name: "Digital marketing",
        imageWebP: "/images/homePage/digital-marketing.webp",
        image: "/images/homePage/digital-marketing.png",
        detail: t('OurService.DigitalMkt')
      },
      {
        name: "Digital transformation consultancy",
        imageWebP: "/images/homePage/digital-transformation-consultancy.webp",
        image: "/images/homePage/digital-transformation-consultancy.png",
        detail: t('OurService.DigitalTrasformConsult')
      },
    ];

    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        gsap.from(h1Ref.current, {
          duration: 1,
          y: 10,
          delay: 0,
          ease: "power4",
          stagger: 0.25,
        });
        gsap.from(pref.current, {
          opacity: 0,
          y: 10,
          duration: 1,
          delay: 0.7,
          ease: "power4",
          stagger: 0.25,
        });
        gsap.from(divBtnRef.current, {
          opacity: 0,
          y: 100,
          duration: 3,
          delay: 1,
          ease: "power4",
          stagger: 0.25,
        });
      }, root);

      return () => ctx.revert();
    }, []);

    const newProps: OurServiceProps = {
      h1Ref,
      pref,
      divBtnRef,
      root,
      serviceList,
      t
    };
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withOurService;
