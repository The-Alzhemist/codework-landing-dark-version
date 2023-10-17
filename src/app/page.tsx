"use client";

import { GTM_PRODUCTION, LOCAL_STORAGE_PDPA_KEY } from "@/config/environment";

import ContactHomeSection from "@/features/Homepage/ContactHomeSection/ContactHomeSection";
import HeroSection from "@/features/Homepage/HeroSection/HeroSection";
import OurPartner from "@/features/Homepage/OurPartnerSection/OurPartner";
import { OurProject } from "@/features/Homepage/OurProjectSection/OurProject";

import { OurService } from "@/features/Homepage/OurServiceSection/OurService";
import PDPAPopup from "@/features/PAPAPopup/PDPAPopup";

import { Poppins } from "next/font/google";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import TagManager from "react-gtm-module";
import { QueryClient, QueryClientProvider } from "react-query";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const [activeSection, setActiveSection] = useState(1);

  const scrollToSection = (sectionNumber: any) => {
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
    const refs = [ref1, ref2, ref3, ref4, ref5];

    refs.forEach((ref, index) => {
      if (ref.current) {
        ScrollTrigger.create({
          trigger: ref.current,
          markers: false,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            console.log(index + 1);
            setActiveSection(index + 1);
          },
          onEnterBack: () => {
            console.log(`Back ${index + 1}`);
            setActiveSection(index + 1);
          },
        });
      }
    });
  }, [ref1, ref2, ref3, ref4, ref5]);

  return (
    <QueryClientProvider client={queryClient}>
      <main className={`page-container ${poppinsFont.className} `}>
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
        <div className="hidden sm:flex fixed top-[50%] right-4  flex-col gap-y-2 ">
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

        {/* contact */}
        <div className="flex flex-col gap-y-2 fixed bottom-4 right-4 z-50">
          <a
            href="https://page.line.me/448yyxgh"
            rel="nofollow"
            target="_blank"
          >
            <img
              src="/logo/line-logo.png"
              className="h-[50px] w-[50px] sm:h-[70px] sm:w-[70px] z-50"
            />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61551048177724"
            rel="nofollow"
            target="_blank"
          >
            <img
              src="/logo/facebook-logo.png"
              className="h-[50px] w-[50px] sm:h-[70px] sm:w-[70px]"
            />
          </a>
        </div>
      </main>
    </QueryClientProvider>
  );
}
