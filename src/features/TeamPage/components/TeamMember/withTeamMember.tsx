import React from "react";

const withTeamMember = (Component: React.FC<any>) => {
  const Hoc = () => {
  
   
    return <Component />;
  };

  return Hoc;
};
export default withTeamMember;
