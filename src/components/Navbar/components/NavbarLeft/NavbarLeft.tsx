import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

// {
//   name: t("Team"),
//   url: `/${currentLang}/team`,
// },
const getMenuList = (t: any, currentLang: string) => {
  return [
    {
      name: t("Home"),
      url: `/${currentLang}`,
    },
    {
      name: t("Service"),
      url: `/${currentLang}/services`,
    },
    {
      name: t("Project"),
      url: `/${currentLang}/projects`,
    },
    {
      name: t("Blog"),
      url: `/${currentLang}/blog`,
    },
    {
      name: t("ContactUs"),
      url: `/${currentLang}/contact-us`,
    },
  ];
};

export const NavbarLeft = ({ handleClick }: { handleClick: () => void }) => {
  const t = useTranslations("Menu");
  const pathname = usePathname();
  const currentLang = pathname.includes("en") ? "en" : "th";
  const menuList = getMenuList(t, currentLang);

  return (
    <>
      <div className="flex flex-col gap-y-7 items-start w-full max-w-[500px]">
        {menuList.map((menu: { name: string; url: string }) => (
          <React.Fragment key={menu.name}>
            <div className="w-full pb-2 text-neutral-900 border-neutral-900 border-b-2 border-dashed sm:border-none hover:text-white text-4xl sm:text-5xl font-bold cursor-pointer group transition-all">
              <Link href={menu.url} onClick={handleClick}>
                <span className="flex gap-x-2 text-center sm:text-left">
                  {menu.name}
                  <span className="hidden group-hover:flex text-white">
                    <FaArrowLeft />
                  </span>
                </span>
              </Link>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
