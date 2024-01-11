import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ServiceIntroProps } from "./interface";
import { useTranslations } from "next-intl";

const witServiceIntro = (Component: React.FC<ServiceIntroProps>) => {
  const Hoc = () => {
    const root = useRef<HTMLElement | null>(null);
    const h1Ref = useRef<HTMLDivElement | null>(null);
    const pRef = useRef<HTMLDivElement | null>(null);
    const imgRef = useRef<HTMLDivElement | null>(null);

    const circleLeftRef = useRef<HTMLDivElement | null>(null);
    const circleRightRef = useRef<HTMLDivElement | null>(null);

    const t = useTranslations("Service");

    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        gsap.from(h1Ref.current, {
          opacity: 0,
          y: 200,
          duration: 1,
          delay: 0.5,
          ease: "power4",
          stagger: 0.25,
        });
        gsap.from(pRef.current, {
          opacity: 0,
          y: 200,
          duration: 1,
          delay: 0.7,
          ease: "power4",
          stagger: 0.25,
        });
        gsap.from(imgRef.current, {
          opacity: 0,
          y: 200,
          duration: 1,
          delay: 0.9,
          ease: "power4",
          stagger: 0.25,
        });
        gsap.from(circleLeftRef.current, {
          opacity: 0,
          duration: 5,
          delay: 1,
          yoyo: true,
          ease: "power4",
          repeat: -1,
          x: 100,
        });
        gsap.from(circleRightRef.current, {
          opacity: 0,
          duration: 5,
          delay: 1,
          yoyo: true,
          ease: "power4",
          repeat: -1,
          x: -100,
        });
      }, root);

      return () => ctx.revert();
    }, []);

    const newProps: ServiceIntroProps = {
      root,
      h1Ref,
      pRef,
      imgRef,
      circleLeftRef,
      circleRightRef,
      t
    };
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default witServiceIntro;

