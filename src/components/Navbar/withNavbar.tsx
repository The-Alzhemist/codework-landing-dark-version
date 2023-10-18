import { useCycle } from "framer-motion";
import React, { useEffect, useState } from "react";
import { NavbarProps } from "./interface";

const withNavbar = (Component: React.FC<NavbarProps>) => {
  const Hoc = () => {
    const [open, cycleOpen] = useCycle(false, true);
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
  

    const handleButtonClick = () => {
      cycleOpen();
    };
  
    const itemVariants = {
      closed: {
        opacity: 0,
      },
      open: { opacity: 1, transition: { delay: 0.2, duration: 0.2 } },
    };

    const newProps: NavbarProps = {
      handleButtonClick,
      itemVariants,
      open,
      isScrolled
    };
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withNavbar;
