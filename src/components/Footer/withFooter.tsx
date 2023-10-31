import React from "react";
import { FooterMenu, FooterProps } from "./interface";
import { footerMenu } from "@/constants/footerText";



const withFooter = (Component: React.FC<FooterProps>) => {
  const Hoc = () => {

    const newProps: FooterProps = {
      footerMenu
    };
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withFooter;
