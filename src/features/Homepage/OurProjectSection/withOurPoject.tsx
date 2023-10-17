import React from "react";

const withOurProject = (Component: React.FC) => {
  const Hoc = () => {
   
    return <Component  />;
  };

  return Hoc;
};
export default withOurProject;