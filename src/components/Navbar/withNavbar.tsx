import { useCycle } from "framer-motion";
import React from "react";
import { NavbarProps } from "./interface";

const withNavbar = (Component: React.FC<NavbarProps>) => {
  const Hoc = () => {
    const [open, cycleOpen] = useCycle(false, true);

    const handleButtonClick = () => {
      cycleOpen();
    };
  
    const itemVariants = {
      closed: {
        opacity: 0,
      },
      open: { opacity: 1, transition: { delay: 0.7, duration: 0.3 } },
    };

    const newProps: any = {
      handleButtonClick,
      itemVariants,
      open
    
    };
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withNavbar;
