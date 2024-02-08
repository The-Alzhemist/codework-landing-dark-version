export interface SocialLink {
  icon: React.ReactNode;
  text: string;
  url: string;
}

export interface ContactLink {
  icon: React.ReactNode;
  text: string;
  url: string;
}

export interface SocialContactFloatingProps {
  isClicked: boolean;
  handleClick: () => void;
  socialListRef: React.RefObject<HTMLDivElement>;
  socialLinks: SocialLink[];
  contactLinks: ContactLink[];
  t: any;
}
