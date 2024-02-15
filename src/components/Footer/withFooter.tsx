import React from "react";
import { FooterProps } from "./interface";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const withFooter = (Component: React.FC<FooterProps>) => {
  const Hoc = () => {
    const t = useTranslations("Menu");
    const contactTranslations = useTranslations("ContactUs");

    const pathname = usePathname();
    const currentLang = pathname.includes("en") ? "en" : "th";

    const footerMenu = {
      footerLeft: {
        companyName: contactTranslations("CodeWorkTechCompany"),
        companyAddress: contactTranslations("Address"),
        companyEmail: "hello@codework-tech.com",
        companyTel: "(+66) 63 849 4282",
        companyCopyright: "Ⓒ2024 CodeWork Tech Co.,Ltd. All rights reserved.",
      },
      footerRight: [
        {
          pageMenu: t("Home"),
          hasSubMenu: false,
          path: `/${currentLang}`,
        },
        {
          pageMenu: t("Service"),
          hasSubMenu: false,
          path: `/${currentLang}/services`,
          subMenu: [
            {
              name: "UX/UI Design",
            },
          ],
        },
        {
          pageMenu: t("Project"),
          hasSubMenu: false,
          path: `/${currentLang}/projects`,
        },
        {
          pageMenu: t("Team"),
          hasSubMenu: false,
          path: `/${currentLang}/team`,
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
          pageMenu: t("ContactUs"),
          hasSubMenu: false,
          path: `/${currentLang}/contact-us`,
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
