"use client"

import { GTM_PRODUCTION, LOCAL_STORAGE_PDPA_KEY } from "@/config/environment";
import { GimmickSection } from "@/features/GimmickSection/GimmickSection";
import ContactHomeSection from "@/features/Homepage/ContactHomeSection/ContactHomeSection";
import HeroSection from "@/features/Homepage/HeroSection/HeroSection";
import HeroSectionCopy from "@/features/Homepage/HeroSectionCopy/HeroSectionCopy";
import OurPartner from "@/features/Homepage/OurPartnerSection/OurPartner";
import { OurProject } from "@/features/Homepage/OurProjectSection/OurProject";
import { OurService } from "@/features/Homepage/OurServiceSection/OurService";
import PDPAPopup from "@/features/PAPAPopup/PDPAPopup";

import { Poppins } from 'next/font/google'
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import { QueryClient, QueryClientProvider } from "react-query";

const poppinsFont = Poppins({
  weight: ['100', '300',  '500', '700'],
  subsets: ['latin'],
})

const queryClient = new QueryClient()
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
    <QueryClientProvider client={queryClient}>
    <main className={`mt-[70px] ${poppinsFont.className}`}>
      <HeroSectionCopy/>
      {/* <HeroSection/> */}
      <OurPartner/>
      <OurService/>
      <OurProject/>
      <ContactHomeSection/>
      {/* <GimmickSection/> */}
      {!hasConsent && <PDPAPopup onAccept={() => setHasConsent(true)} />} 
    </main>
    </QueryClientProvider>
  );
}
function setHasConsent(arg0: boolean) {
  throw new Error("Function not implemented.");
}

