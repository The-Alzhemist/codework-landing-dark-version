"use client"

import React from "react";
import ProjectIntro from "./components/ProjectIntro/ProjectIntro";
import ProjectSeamoor from "./components/ProjectSearmoor/ProjectSeamoor";
import ContactHomeSection from "@/components/ContactHomeSection/ContactHomeSection";
import SocialContactFloating from "@/components/SocialContactFloating/SocialContactFloating";
import PDPAPopup from "../PAPAPopup/PDPAPopup";
import { ProjectWrapperProps } from "./interface";
import withProjectWrapper from "./withProjectWrapper";

 const  ProjectWrapper = ({hasConsent, setHasConsent}:ProjectWrapperProps) => {
  return (
    <>
      <ProjectIntro />
      <ProjectSeamoor />
      <ContactHomeSection />
      <SocialContactFloating />
      {!hasConsent && <PDPAPopup onAccept={() => setHasConsent(true)} /> }
    </>
  );
}

const WrappedComponent = withProjectWrapper(ProjectWrapper);
export default WrappedComponent;

