import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
const withOurService = (Component: React.FC<any>) => {
  const Hoc = () => {
    const h1Ref = useRef<HTMLDivElement | null>(null);
    const pref = useRef<HTMLDivElement | null>(null);
    const divBtnRef = useRef<HTMLDivElement | null>(null);
    const root = useRef<any>(null);

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

    const newProps: any = {
      h1Ref,
      pref,
      divBtnRef,
      root
    };
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withOurService;
