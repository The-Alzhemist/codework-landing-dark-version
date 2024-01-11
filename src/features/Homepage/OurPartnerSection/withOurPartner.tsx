import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { OurPartnerProps } from "./interface";
import { useTranslations } from "next-intl";

const withOurPartner = (Component: React.FC<OurPartnerProps>) => {
  const Hoc = () => {
    const root = useRef<HTMLElement>(null);
    const h1Ref = useRef<HTMLDivElement>(null);
    const pRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLDivElement>(null);

    const t = useTranslations('Home');


    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        gsap.from(h1Ref.current, {
          duration: 1,
          y: 10,
          delay: 0,
          ease: "power4",
          stagger: 0.25,
        });
        gsap.from(pRef.current, {
          opacity: 0,
          y: 10,
          duration: 1,
          delay: 0.5,
          ease: "power4",
          stagger: 0.25,
        });
        gsap.from(btnRef.current, {
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


    const newProps: OurPartnerProps = {
      root,
      h1Ref,
      pRef,
      btnRef,
      t
    };
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withOurPartner;
