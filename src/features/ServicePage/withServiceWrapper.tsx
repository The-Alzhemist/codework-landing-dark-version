import { GTM_PRODUCTION, LOCAL_STORAGE_PDPA_KEY } from "@/config/environment";
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import { ServiceWrapperProps } from "./interface";


const withServiceWrapper = (Component: React.FC<ServiceWrapperProps>) => {
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

    const newProps: ServiceWrapperProps = {
      hasConsent,
      setHasConsent,
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};

export default withServiceWrapper;
