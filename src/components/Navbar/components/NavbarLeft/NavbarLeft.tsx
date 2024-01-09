
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

export const NavbarLeft = ({ handleClick }: { handleClick: () => void }) => {
  const t = useTranslations("Menu");

  const menuList = [
    {
      name: t("Home"),
      url: "/",
    },
    {
      name: t("Service"),
      url: "/services",
    },
    {
      name: t("Project"),
      url: "/projects",
    },
    {
      name: t("Team"),
      url: "/team",
    },
    {
      name: t("Blog"),
      url: "/blog",
    },
    {
      name: t("ContactUs"),
      url: "/contact-us",
    },
  ];

  return (
    <>
      <div className="flex flex-col  gap-y-7 items-start  w-full max-w-[500px] ">
        {menuList.map((menu: { name: string; url: string }) => (
          <React.Fragment key={menu.name}>
            <div className="w-full pb-2 text-neutral-900  border-neutral-900 border-b-2 border-dashed sm:border-none hover:text-white text-4xl sm:text-5xl font-bold cursor-pointer group transition-all">
              <Link href={menu.url} onClick={handleClick}>
                <span className="flex gap-x-2 text-center sm:text-left">
                  {menu.name}
                  <span className="hidden  group-hover:flex text-white">
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
