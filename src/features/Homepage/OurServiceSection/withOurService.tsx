import React from "react";




const withOurService = (Component: React.FC<any>) => {
  const Hoc = () => {
  

  const headingAnimation = {
    hidden: { opacity: 0  }, // Fade in from left
    visible: { opacity: 1 },
  };

    const newProps: any = {
        headingAnimation
    };
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withOurService;