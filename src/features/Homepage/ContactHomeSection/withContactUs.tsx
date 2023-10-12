import React from "react";




const withContactHomeSection = (Component: React.FC<any>) => {
  const Hoc = () => {
    const newProps: any = {
      
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withContactHomeSection;
