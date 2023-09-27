import React from "react";
import { FooterMenu, FooterProps, footerExternalProps } from "./interface";
import { footerMenu } from "@/constants/footerText";



const withFooter = (Component: React.FC<FooterProps>) => {
  const Hoc = (props:footerExternalProps) => {

    const { fontPrompt } = props;

    const newProps: FooterProps = {
      footerMenu
    };
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withFooter;
