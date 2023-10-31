

export interface FooterMenu {
  footerLeft: {
    companyName: string;
    companyAddress: string;
    companyEmail: string;
    companyTel: string;
    companyCopyright: string;
  };
  footerRight: FooterMenuItem[];
}

export interface FooterMenuItem {
  pageMenu: string;
  hasSubMenu: boolean;
  subMenu?: { name: string, path?: string }[];
  path: string;
}

export interface FooterProps {
  footerMenu: FooterMenu;

}

