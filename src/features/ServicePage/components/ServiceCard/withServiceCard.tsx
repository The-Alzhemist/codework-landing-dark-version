import React from "react";

const withServiceCard = (Component: React.FC<any>) => {
  const Hoc = () => {
  
    

    return <Component />;
  };

  return Hoc;
};
export default withServiceCard;
