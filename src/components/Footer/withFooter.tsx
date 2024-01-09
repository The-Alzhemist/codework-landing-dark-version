import React from "react";
import { FooterProps } from "./interface";
import { useTranslations } from "next-intl";


const withFooter = (Component: React.FC<FooterProps>) => {



  const Hoc = () => {
    const t = useTranslations("Menu");

    const footerMenu = {
      footerLeft: {
        companyName: "CodeWork Tech Co.,Ltd.",
        companyAddress:
          "3774 Sukhumvit road, South Bang Na, Bang Na, Bangkok 10260",
        companyEmail: "hello@codework-tech.com",
        companyTel: "(+66) 63 849 4282",
        companyCopyright: "Ⓒ2023 CodeWork Tech Co.,Ltd. All rights reserved.",
      },
      footerRight: [
        {
          pageMenu: t('Home'),
          hasSubMenu: false,
          path: "/",
        },
        {
          pageMenu:t('Service'),
          hasSubMenu: false,
          path: "/services",
          subMenu: [
            {
              name: "UX/UI Design",
            },
          ],
        },
        {
          pageMenu: t('Project'),
          hasSubMenu: false,
          path: "/projects",
        },
        {
          pageMenu: t('Team'),
          hasSubMenu: false,
          path: "/team",
          subMenu: [
            {
              name: "Our story",
            },
            {
              name: "Culture",
            },
            {
              name: "Team",
            },
          ],
        },
        {
          pageMenu: t('ContactUs'),
          hasSubMenu: false,
          path: "/contact-us",
        },
      ],
    };

    const newProps: FooterProps = {
      footerMenu,
    };
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withFooter;
