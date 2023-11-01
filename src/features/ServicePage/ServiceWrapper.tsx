"use client"

import ContactHomeSection from "@/components/ContactHomeSection/ContactHomeSection";
import PDPAPopup from "../PAPAPopup/PDPAPopup";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import ServiceIntro from "./components/ServiceIntro/ServiceIntro";
import { ServiceWrapperProps } from "./interface";
import withServiceWrapper from "./withServiceWrapper";
import SocialContactFloating from "@/components/SocialContactFloating/SocialContactFloating";

const ServiceWrapper = ({ hasConsent, setHasConsent }: ServiceWrapperProps) => {
  return (
    <>
      <ServiceIntro />
      <ServiceCard />
      <ContactHomeSection />
      <SocialContactFloating />
      {!hasConsent && <PDPAPopup onAccept={() => setHasConsent(true)} />}
    </>
  );
};

const WrappedComponent = withServiceWrapper(ServiceWrapper);
export default WrappedComponent;
