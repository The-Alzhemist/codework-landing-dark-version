import React, { useContext, useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ContactHomeSectionProps } from "./interface";
import { NavbarToggleContext } from "@/context/NavbarToggleContext/NavbarToggleContext";
import { useTranslations } from "next-intl";

gsap.registerPlugin(TextPlugin);


const withContactHomeSection = (Component: React.FC<ContactHomeSectionProps>) => {
  const Hoc = () => {
    const textMessageRef = useRef<HTMLDivElement>(null);
    const root = useRef<HTMLElement>(null);
    const NavbarContext = useContext(NavbarToggleContext);
    const t = useTranslations("ContactSection");
    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        gsap.to(textMessageRef.current, {
          duration: 7,
          repeat: -1,
          repeatDelay: 5,
          ease: "power4.out",
          text: {
            value:
              t('TextAnimation'),
            delimiter: "",
          },
        });
      });
  
      return () => ctx.revert();
    }, []);
    

    if (!NavbarContext) {
      console.warn('Context is not available')
      return
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
