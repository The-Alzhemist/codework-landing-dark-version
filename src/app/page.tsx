"use client";

import ContactHomeSection from "@/components/ContactHomeSection/ContactHomeSection";
import HeroSection from "@/features/Homepage/HeroSection/HeroSection";
import OurPartner from "@/features/Homepage/OurPartnerSection/OurPartner";
import { OurProject } from "@/features/Homepage/OurProjectSection/OurProject";

import PDPAPopup from "@/features/PAPAPopup/PDPAPopup";

import { Poppins } from "next/font/google";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import OurService from "@/features/Homepage/OurServiceSection/OurService";
import SocialContactFloating from "@/components/SocialContactFloating/SocialContactFloating";
import { GTM_PRODUCTION, LOCAL_STORAGE_PDPA_KEY } from "@/config/environment";
import TagManager from "react-gtm-module";
gsap.registerPlugin(ScrollTrigger);

const poppinsFont = Poppins({
  weight: ["100", "300", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export default function Home() {
  const [hasConsent, setHasConsent] = useState(false);
  const rootPage = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const [activeSection, setActiveSection] = useState(1);

  const scrollToSection = (sectionNumber: number) => {
    // Find the corresponding section reference
    const sectionRefs = [ref1, ref2, ref3, ref4, ref5];

    // Ensure that sectionRef is of the correct type
    const sectionRef = sectionRefs[
      sectionNumber - 1
    ] as React.RefObject<HTMLElement> | null;

    // Check if the section reference exists
    if (sectionRef && sectionRef.current) {
      // Scroll to the section smoothly
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const refs = [ref1, ref2, ref3, ref4, ref5];

      refs.forEach((ref, index) => {
        if (ref.current) {
          ScrollTrigger.create({
            trigger: ref.current,
            markers: false,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
              setActiveSection(index + 1);
              handleSocialContactVisibility(index + 1 === 1);
            },
            onEnterBack: () => {
              setActiveSection(index + 1);
              handleSocialContactVisibility(index + 1 === 1);
            },
          });
        }
      });
    }, rootPage);

    return () => ctx.revert();
  }, [ref1, ref2, ref3, ref4, ref5]);

  useEffect(() => {
    const userHasGivenConsent =
      typeof window !== "undefined" &&
      localStorage.getItem(LOCAL_STORAGE_PDPA_KEY);
    if (userHasGivenConsent) {
      setHasConsent(true);
      TagManager.initialize({ gtmId: GTM_PRODUCTION });
    }
  }, [hasConsent]);

 

  return (
    <main className={`${poppinsFont.className} `} ref={rootPage}>
      <div className="section" ref={ref1}>
        <HeroSection />
      </div>

      <div className="section" ref={ref2}>
        <OurPartner />
      </div>

      <div className="section" ref={ref3}>
        <OurService />
      </div>

      {/* <OurProject/> */}
      <div ref={ref4}>
        <OurProject />
      </div>

      <div ref={ref5}>
        <ContactHomeSection />
      </div>

      {!hasConsent && <PDPAPopup onAccept={() => setHasConsent(true)} />}

      {/* tab section */}
      <div className="hidden sm:flex fixed top-[50%] right-4  flex-col gap-y-2">
        <div
          onClick={() => scrollToSection(1)}
          className={`${
            activeSection === 1
              ? "bg-primary border-transparent"
              : " border-slate-300"
          }  p-1 w-[2px] h-[2px] border rounded-full cursor-pointer`}
        ></div>

        <div
          onClick={() => scrollToSection(2)}
          className={`${
            activeSection === 2
              ? "bg-primary border-transparent"
              : " border-slate-300"
          }  p-1 w-[2px] h-[2px] border rounded-full cursor-pointer`}
        ></div>

        <div
          onClick={() => scrollToSection(3)}
          className={`${
            activeSection === 3
              ? "bg-primary border-transparent"
              : " border-slate-300"
          }  p-1 w-[2px] h-[2px] border rounded-full cursor-pointer`}
        ></div>

        <div
          onClick={() => scrollToSection(4)}
          className={`${
            activeSection === 4
              ? "bg-primary border-transparent"
              : " border-slate-300"
          }  p-1 w-[2px] h-[2px] border rounded-full cursor-pointer`}
        ></div>

        <div
          onClick={() => scrollToSection(5)}
          className={`${
            activeSection === 5
              ? "bg-primary  border-transparent"
              : " border-slate-300"
          }  p-1 w-[2px] h-[2px] border rounded-full cursor-pointer`}
        ></div>
      </div>

     <div className="social-contact-floating">
     <SocialContactFloating />
     </div>
    
    </main>
  );
}
