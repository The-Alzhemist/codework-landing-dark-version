import React, { useContext, useLayoutEffect, useRef } from "react";
import { HeroSectionProps } from "./interface";
import { gsap } from "gsap";
import { NavbarToggleContext } from "@/context/NavbarToggleContext/NavbarToggleContext";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const withHeroSection = (Component: React.FC<HeroSectionProps>) => {
  const Hoc = () => {
    const pathname = usePathname();
    const currentLang = pathname.includes("en") ? "en" : "th";
    const t = useTranslations("Home");

    const root = useRef<HTMLElement | null>(null);
    const h1Ref = useRef<HTMLDivElement | null>(null);
    const pRef = useRef<HTMLDivElement | null>(null);
    const btnRef = useRef<HTMLDivElement | null>(null);

    const circleLeftRef = useRef<HTMLDivElement | null>(null);
    const circleRightRef = useRef<HTMLDivElement | null>(null);

    const NavbarContext = useContext(NavbarToggleContext);

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
        gsap.from(btnRef.current, {
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

    if (!NavbarContext) {
      console.warn("Context is not available");
      return;
    }

    const { isOpen, setIsOpen } = NavbarContext;

    const newProps: HeroSectionProps = {
      root,
      h1Ref,
      pRef,
      btnRef,
      circleLeftRef,
      circleRightRef,
      isOpen,
      setIsOpen,
      currentLang,
      t,
    };
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withHeroSection;
