import React, { useContext, useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ContactHomeSectionProps } from "./interface";
import { NavbarToggleContext } from "@/context/NavbarToggleContext/NavbarToggleContext";

gsap.registerPlugin(TextPlugin);


const withContactHomeSection = (Component: React.FC<ContactHomeSectionProps>) => {
  const Hoc = () => {
    const textMessageRef = useRef<HTMLDivElement>(null);
    const root = useRef<HTMLElement>(null);
    const NavbarContext = useContext(NavbarToggleContext);
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
    

    if (!NavbarContext) {
      return <div>Context is not available</div>;
    }
  
    const { isOpen, setIsOpen } = NavbarContext;
  
  
    
    const newProps: ContactHomeSectionProps = {
      root,
      textMessageRef,
      isOpen, 
      setIsOpen
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withContactHomeSection;
