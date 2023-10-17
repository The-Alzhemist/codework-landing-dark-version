// export interface ContactHomeSectionTextInterface {
//     heading1: string;
//     heading2: string;
//     buttonName: string;
// }

// export interface ContactHomeSectionProp{
//     contactUsSectionText: ContactHomeSectionTextInterface
// }

export interface ContactHomeSectionProps {
    root: React.RefObject<HTMLElement | null>;
    textMessageRef: React.RefObject<HTMLElement | null>;
  }