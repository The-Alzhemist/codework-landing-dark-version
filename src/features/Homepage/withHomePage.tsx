import { GTM_PRODUCTION, LOCAL_STORAGE_PDPA_KEY } from "@/config/environment";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import TagManager from "react-gtm-module";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { HomePageProps } from "./interface";

const withHomePage = (Component: React.FC<HomePageProps>) => {
  
  const Hoc = () => {
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
  
    const handleSocialContactVisibility = (isRef1:boolean) => {
      const opacityValue = isRef1 ? 0 : 1;
      gsap.to(".social-contact-floating", { opacity: opacityValue, duration: 0.5 });
    };
  

    const newProps: HomePageProps = {
      hasConsent,
      setHasConsent,
      rootPage,
      ref1,
      ref2,
      ref3,
      ref4,
      ref5,
      scrollToSection,
      activeSection
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};

export default withHomePage;
