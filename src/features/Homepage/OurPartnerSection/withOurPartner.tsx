import React from "react";

import { OurPartnerProps } from "./interface";

const withOurPartner = (Component: React.FC<OurPartnerProps>) => {
  const Hoc = () => {
    const headingAnimation = {
      hidden: { opacity: 0 }, // Fade in from left
      visible: { opacity: 1 },
    };
    const newProps: any = {
        headingAnimation
    };
    return <Component  {...newProps} />;
  };

  return Hoc;
};
export default withOurPartner;