

export interface HeroSectionProps {
  root: React.RefObject<HTMLElement>;
  h1Ref: React.RefObject<HTMLDivElement>;
  pRef: React.RefObject<HTMLDivElement>;
  btnRef: React.RefObject<HTMLDivElement>;
  circleLeftRef: React.RefObject<HTMLDivElement>;
  circleRightRef: React.RefObject<HTMLDivElement>;
  isOpen:boolean
  setIsOpen: (value: boolean) => void;
  currentLang: string,
  t: any
}

