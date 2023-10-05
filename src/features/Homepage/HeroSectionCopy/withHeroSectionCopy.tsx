import React from "react";
import { HeroSectionProps } from "./interface";



const withHeroSectionCopy = (Component: React.FC<HeroSectionProps>) => {
  const Hoc = () => {
    const containerAnimation = {
      hidden: {opacity: 1, y:0},
      visible: {
        opacity: 1,
        transition: {
          delay: 1,
          staggerChildren: 0.08,
        },
      }
    }
  
     const itemAnimation = {
      hidden: {opacity: 0, y:50},
      visible: {
        opacity: 1, y:0
      }
    }

    const newProps: HeroSectionProps = {
      containerAnimation,
      itemAnimation
    };
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withHeroSectionCopy;