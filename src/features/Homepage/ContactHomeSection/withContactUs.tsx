import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);


const withContactHomeSection = (Component: React.FC<any>) => {
  const Hoc = () => {
    const textMessageRef = useRef<any | null>(null);
    const root = useRef<any>(null);
  
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
    
    const newProps: any = {
      root,
      textMessageRef
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withContactHomeSection;
