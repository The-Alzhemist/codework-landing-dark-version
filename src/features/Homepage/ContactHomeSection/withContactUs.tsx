import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ContactHomeSectionProps } from "./interface";
gsap.registerPlugin(TextPlugin);


const withContactHomeSection = (Component: React.FC<ContactHomeSectionProps>) => {
  const Hoc = () => {
    const textMessageRef = useRef<HTMLDivElement>(null);
    const root = useRef<HTMLElement>(null);
  
    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        gsap.to(textMessageRef.current, {
          duration: 7,
          repeat: -1,
          repeatDelay: 5,
          ease: "bounce.out",
          text: {
            value:
              "Let's start a conversation about your business's digital future",
            delimiter: "",
          },
        });
      });
  
      return () => ctx.revert();
    }, []);
    
    const newProps: ContactHomeSectionProps = {
      root,
      textMessageRef
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withContactHomeSection;
