import React, { useEffect, useRef, useState } from "react";
import { NavbarProps } from "./interface";
import { gsap } from "gsap";

const withNavbar = (Component: React.FC<NavbarProps>) => {
  const Hoc = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const sectionNavRef = useRef(null);

    const onClikcToggle = () => {
      setIsOpen(!isOpen);
      gsap.to(sectionNavRef.current, {
        y: isOpen ? "-100%" : "0%",
        duration: 0.75,
        ease: "power4.out",
      });
    };

    useEffect(() => {
      const handleScroll = () => {
        if (typeof window !== "undefined" && window.scrollY > 30) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      typeof window !== "undefined" &&
        window.addEventListener("scroll", handleScroll);

      return () => {
        typeof window !== "undefined" &&
          window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  

    const newProps: NavbarProps = {
      sectionNavRef,
      onClikcToggle,
      isScrolled,
    };
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withNavbar;
