export interface ContactHomeSectionProps {
  root: React.RefObject<HTMLElement>;
  textMessageRef: React.RefObject<HTMLDivElement>;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  t: any;
  currentLang: string;
}
