import React from "react";

const withServiceCard = (Component: React.FC) => {
  const Hoc = () => {
  
    const newProps: any = {
    };
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withServiceCard;
