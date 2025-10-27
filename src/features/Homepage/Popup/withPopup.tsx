import React, { useEffect, useState } from "react";
import { PDPAPopupAcceptProps, PDPAPopupProps } from "./interface";
import { LOCAL_STORAGE_PDPA_KEY } from "@/config/environment";

const withPopup = (Component: React.FC<PDPAPopupProps>) => {
  const Hoc = (props: PDPAPopupAcceptProps) => {
    const { onAccept } = props;
    const [shouldRender, setShouldRender] = useState(false);

    const handleClose = (isAcceptBtn: boolean = true) => {
      setIsOpen(false);
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        setShouldRender(true);
      }, 3000);

      return () => clearTimeout(timer);
    }, []);

    const hasConsentExpired = () => {
      const consentData =
        typeof window !== "undefined" &&
        localStorage.getItem(LOCAL_STORAGE_PDPA_KEY);
      if (!consentData) {
        return true; // ถ้าไม่มี consentData ให้ return true ไปเลย
      }
      const parsedData = JSON.parse(consentData);

      const expirationTimeUTC7 = parsedData.expires + 30 * 24 * 60 * 60 * 1000;
      const currentTimeUTC7 = new Date().getTime() + 7 * 60 * 60 * 1000;
      return currentTimeUTC7 > expirationTimeUTC7;
    };

    // isOpen หรือเปล่า ดูจาก localStorage มีค่าไหม หรือ เช็คจากว่า hasConsentExpired หรือเปล่า
    const [isOpen, setIsOpen] = useState(
      (typeof window !== "undefined" &&
        !localStorage.getItem(LOCAL_STORAGE_PDPA_KEY)) ||
        hasConsentExpired()
    );

    const newProps: PDPAPopupProps = {
      handleClose,
      isOpen,
      shouldRender,
      setIsOpen,
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};

export default withPopup;
