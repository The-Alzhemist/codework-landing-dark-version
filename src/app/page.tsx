"use client"

import { GTM_PRODUCTION, LOCAL_STORAGE_PDPA_KEY } from "@/config/environment";
import ContactHomeSection from "@/features/Homepage/ContactHomeSection/ContactHomeSection";
import HeroSection from "@/features/Homepage/HeroSection/HeroSection";
import { OurPartner } from "@/features/Homepage/OurPartnerSection/OurPartner";
import { OurProject } from "@/features/Homepage/OurProjectSection/OurProject";
import { OurService } from "@/features/Homepage/OurServiceSection/OurService";
import PDPAPopup from "@/features/PAPAPopup/PDPAPopup";

import { Poppins } from 'next/font/google'
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";

const poppinsFont = Poppins({
  weight: ['100', '300',  '500', '700'],
  subsets: ['latin'],
})

export default function Home() {
  const [hasConsent, setHasConsent] = useState(false);
  
  useEffect(() => {
    const userHasGivenConsent = typeof window !== 'undefined' && localStorage.getItem(LOCAL_STORAGE_PDPA_KEY);
    if (userHasGivenConsent) {
      setHasConsent(true);
      TagManager.initialize({ gtmId: GTM_PRODUCTION });
    }
  }, [hasConsent]);
  
  
  return (
    <main className={`mt-[70px] ${poppinsFont.className}`}>
      <HeroSection/>
      <OurPartner/>
      <OurService/>
      <OurProject/>
      <ContactHomeSection/>
      {!hasConsent && <PDPAPopup onAccept={() => setHasConsent(true)} />} 
    </main>
  );
}
function setHasConsent(arg0: boolean) {
  throw new Error("Function not implemented.");
}

