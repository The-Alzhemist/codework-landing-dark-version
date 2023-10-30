import React, { useContext, useEffect, useRef, useState } from "react";
import { NavbarProps } from "./interface";
import { gsap } from "gsap";
import { NavbarToggleContext } from "@/context/ThemeContext/NavbarToggleContext";


const withNavbar = (Component: React.FC<NavbarProps>) => {
  const Hoc = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
    
    // const [isOpen, setIsOpen] = useState(false);
    const sectionNavRef = useRef(null);

    const NavbarContext = useContext(NavbarToggleContext);

    if (!NavbarContext) {
      // Handle the case where the context is undefined
      return null; // or render an error message or loading state
    }
    const { isOpen, setIsOpen } = NavbarContext;
  

    const onClikcToggle = () => {
      setIsOpen(!isOpen);
    };

    


  

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
