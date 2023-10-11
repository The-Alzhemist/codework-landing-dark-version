"use client";

import { GTM_PRODUCTION, LOCAL_STORAGE_PDPA_KEY } from "@/config/environment";
import { GimmickSection } from "@/features/GimmickSection/GimmickSection";
import ContactHomeSection from "@/features/Homepage/ContactHomeSection/ContactHomeSection";
import HeroSection from "@/features/Homepage/HeroSection/HeroSection";
import OurPartner from "@/features/Homepage/OurPartnerSection/OurPartner";
import { OurProject } from "@/features/Homepage/OurProjectSection/OurProject";

import { OurService } from "@/features/Homepage/OurServiceSection/OurService";
import PDPAPopup from "@/features/PAPAPopup/PDPAPopup";

import { Poppins } from "next/font/google";
import { useEffect, useMemo, useRef, useState } from "react";
import TagManager from "react-gtm-module";
import { QueryClient, QueryClientProvider } from "react-query";

const poppinsFont = Poppins({
  weight: ["100", "300", "500", "700", "800"],
  subsets: ["latin"],
});

function useIsInViewport(ref: any) {
  const [isInViewport, setIsInViewport] = useState(false);

  const checkVisibility = () => {
    const element = ref.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      console.log("rect >>", rect);
      const windowHeight =
        (typeof window !== "undefined" && window.innerHeight) ||
        document.documentElement.clientHeight;
      const visibleHeight = Math.max(
        0,
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
      );
      const visibility = (visibleHeight / element.offsetHeight) * 100;
      setIsInViewport(visibility > 60);
    }
  };

  useMemo(() => {
    checkVisibility();
    typeof window !== "undefined" &&
      window.addEventListener("scroll", checkVisibility);
    typeof window !== "undefined" &&
      window.addEventListener("resize", checkVisibility);
    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("scroll", checkVisibility);
      typeof window !== "undefined" &&
        window.removeEventListener("resize", checkVisibility);
    };
  }, [ref]);

  return isInViewport;
}

const queryClient = new QueryClient();
export default function Home() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const userHasGivenConsent =
      typeof window !== "undefined" &&
      localStorage.getItem(LOCAL_STORAGE_PDPA_KEY);
    if (userHasGivenConsent) {
      setHasConsent(true);
      TagManager.initialize({ gtmId: GTM_PRODUCTION });
    }
  }, [hasConsent]);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const isInViewport1 = useIsInViewport(ref1);
  const isInViewport2 = useIsInViewport(ref2);
  const isInViewport3 = useIsInViewport(ref3);
  const isInViewport4 = useIsInViewport(ref4);
  const isInViewport5 = useIsInViewport(ref5);

  console.log("isInViewport1:", isInViewport1);
  console.log("isInViewport2:", isInViewport2);
  console.log("isInViewport3:", isInViewport3);
  console.log("isInViewport4:", isInViewport4);
  console.log("isInViewport5:", isInViewport5);

  return (
    <QueryClientProvider client={queryClient}>
      <main className={` ${poppinsFont.className} `}>
        <div id="ref1" ref={ref1}>
          <HeroSection />
        </div>

        <div id="ref2" ref={ref2}>
          <OurPartner />
        </div>

        <div id="ref3" ref={ref3}>
          <OurService />
        </div>

        {/* <OurProject/> */}
        <div id="ref4" ref={ref4}>
          <OurProject />
        </div>

        <div id="ref5" ref={ref5}>
          <ContactHomeSection />
        </div>

        {/* <GimmickSection/> */}
        {/* {!hasConsent && <PDPAPopup onAccept={() => setHasConsent(true)} />}  */}
        <div className="fixed top-[50%] right-3 flex flex-col gap-y-2 ">
          <div
            className={`${
              isInViewport1
                ? "bg-primary border-transparent"
                : " border-slate-300  "
            } p-1 w-[2px] h-[2px] border rounded-full`}
          ></div>
          <div
            className={`${
              isInViewport2
                ? "bg-primary border-transparent"
                : " border-slate-300 "
            } p-1 w-[2px] h-[2px] border rounded-full`}
          ></div>
          <div
            className={`${
              isInViewport3
                ? "bg-primary border-transparent"
                : " border-slate-300  "
            } p-1 w-[2px] h-[2px] border rounded-full`}
          ></div>
          <div
            className={`${
              isInViewport4
                ? "bg-primary border-transparent"
                : " border-slate-300 "
            } p-1 w-[2px] h-[2px] border rounded-full`}
          ></div>

          <div
            className={`${
              isInViewport5
                ? "bg-primary border-transparent"
                : " border-slate-300 "
            } p-1 w-[2px] h-[2px] border rounded-full`}
          ></div>
        </div>
      </main>
    </QueryClientProvider>
  );
}
function setHasConsent(arg0: boolean) {
  throw new Error("Function not implemented.");
}
