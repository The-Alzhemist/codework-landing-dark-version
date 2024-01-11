export interface OurServiceProps {
    h1Ref: React.RefObject<HTMLDivElement>;
    pref: React.RefObject<HTMLDivElement>;
    divBtnRef: React.RefObject<HTMLDivElement>;
    root: React.RefObject<HTMLElement>;
    serviceList: {
      name: string;
      imageWebP: string;
      image: string;
      detail: string;
  }[];
    t:any
  }
  