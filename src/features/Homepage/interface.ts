export interface HomePageProps {
    hasConsent: boolean;
    setHasConsent: React.Dispatch<React.SetStateAction<boolean>>;
    rootPage: React.RefObject<HTMLElement>;
    ref1: React.RefObject<HTMLDivElement>;
    ref2: React.RefObject<HTMLDivElement>;
    ref3: React.RefObject<HTMLDivElement>;
    ref4: React.RefObject<HTMLDivElement>;
    ref5: React.RefObject<HTMLDivElement>;
    scrollToSection: (sectionNumber: number) => void;
    activeSection: number;
  }