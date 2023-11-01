"use client";

import ContactHomeSection from "@/components/ContactHomeSection/ContactHomeSection";
import PDPAPopup from "../PAPAPopup/PDPAPopup";
import TeamIntro from "./components/TeamIntro/TeamIntro";
import TeamMember from "./components/TeamMember/TeamMember";
import withTeamWrapper from "./withTeamWrapper";
import SocialContactFloating from "@/components/SocialContactFloating/SocialContactFloating";

const TeamWrapper = ({ hasConsent, setHasConsent }: any) => {
  return (
    <>
      <TeamIntro />
      <TeamMember />
      <ContactHomeSection />
      <SocialContactFloating />
      {!hasConsent && <PDPAPopup onAccept={() => setHasConsent(true)} />}
    </>
  );
};

const WrappedComponent = withTeamWrapper(TeamWrapper);
export default WrappedComponent;
