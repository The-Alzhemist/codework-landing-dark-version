import React from "react";
import { ContactHomeSectionProp } from "./interface";



const withContactHomeSection = (Component: React.FC<ContactHomeSectionProp>) => {
  const Hoc = () => {
    const newProps: any = {
      
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withContactHomeSection;
