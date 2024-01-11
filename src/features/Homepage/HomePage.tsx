"use client";

import ContactHomeSection from "@/components/ContactHomeSection/ContactHomeSection";
import HeroSection from "@/features/Homepage/HeroSection/HeroSection";
import OurPartner from "@/features/Homepage/OurPartnerSection/OurPartner";


import PDPAPopup from "@/features/PAPAPopup/PDPAPopup";

import { Poppins } from "next/font/google";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import OurService from "@/features/Homepage/OurServiceSection/OurService";
import SocialContactFloating from "@/components/SocialContactFloating/SocialContactFloating";
import withHomePage from "./withHomePage";
import { HomePageProps } from "./interface";
import OurProject from "./OurProjectSection/OurProject";
gsap.registerPlugin(ScrollTrigger);

const poppinsFont = Poppins({
  weight: ["100", "300", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

const HomePage = ({
  hasConsent,
  setHasConsent,
  rootPage,
  ref1,
  ref2,
  ref3,
  ref4,
  ref5,
  scrollToSection,
  activeSection,
}: HomePageProps) => {
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
};
const WrappedComponent = withHomePage(HomePage);
export default WrappedComponent;
