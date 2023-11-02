import { GTM_PRODUCTION, LOCAL_STORAGE_PDPA_KEY } from "@/config/environment";
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import { TeamWrapperProps } from "./interface";

const withTeamWrapper = (Component: React.FC<TeamWrapperProps>) => {
  const Hoc = () => {
    const [hasConsent, setHasConsent] = useState(false);
    // CHECK PDPA CONSENT LOCAL STORAGE
    useEffect(() => {
      const userHasGivenConsent =
        typeof window !== "undefined" &&
        localStorage.getItem(LOCAL_STORAGE_PDPA_KEY);
      if (userHasGivenConsent) {
        setHasConsent(true);
        TagManager.initialize({ gtmId: GTM_PRODUCTION });
      }
    }, [hasConsent]);

    const newProps: TeamWrapperProps = {
      hasConsent,
      setHasConsent,
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};

export default withTeamWrapper;
