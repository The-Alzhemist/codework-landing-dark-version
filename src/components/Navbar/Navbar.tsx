"use client";

import React, { useContext, useState } from "react";

import withNavbar from "./withNavbar";
import { NavbarRight } from "./components/NavbarRight/NavbarRight";
import { NavbarLeft } from "./components/NavbarLeft/NavbarLeft";
import { NavbarProps } from "./interface";
import { IoMdMenu } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { CodeworkTechLogo } from "./components/BrandLogo/BrandLogo";
import { Poppins } from "next/font/google";

import { usePathname, useRouter } from "next/navigation";

const poppinsFont = Poppins({
  weight: ["100", "300", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

const Navbar = ({
  sectionNavRef,
  onClikcToggle,
  isScrolled,
  currentLang,
  switchLang,
}: NavbarProps) => {
  const handleChange = (e: any) => {
    switchLang(e.target.value);
  };

  return (
    <>
      <div
        className={`${
          isScrolled ? "fixed  bg-neutral-1000" : "absolute bg-transparent"
        }  ${
          poppinsFont.className
        } z-10 p-2  w-full px-5 sm:px-12 py-3 flex justify-between items-center transition-all duration-700`}
      >
        <div className="text-neutral-1000 cursor-pointer">
          <CodeworkTechLogo />
        </div>

        <div className="flex gap-x-2 items-center">
          {/* <div className="flex justify-center items-center gap-x-2 text-white">
            <button onClick={() => switchLang("th")}>TH</button> |
            <button onClick={() => switchLang("en")}>EN</button>
          </div> */}

          <div className="flex justify-center items-center ">
            <button
              className={`border px-3 py-1.5 text-xs rounded-s-lg ${
                currentLang === "th" ? "bg-white text-gray-800" : "text-white"
              }`}
              onClick={() => switchLang("th")}
            >
              <div className="flex items-center gap-x-1">
                <img
                  className="w-auto h-3"
                  src="/images/thFlag.png"
                  alt="ThFlag"
                  title="ThFlag"
                />
                <span className="hidden sm:block font-bold">TH</span>
              </div>
            </button>
            <button
              className={`border-y border-r px-3 py-1.5  text-xs rounded-e-lg ${
                currentLang === "en" ? "bg-white text-gray-800" : "text-white"
              }`}
              onClick={() => switchLang("en")}
            >
              <div className="flex items-center gap-x-1">
                <img
                  className="w-auto h-3"
                  src="/images/enFlag.png"
                  alt="EnFlag"
                  title="EnFlag"
                />
                <span className="hidden sm:block font-bold">EN</span>
              </div>
            </button>
          </div>

          <div
            className="text-2xl text-neutral-50 cursor-pointer hover:bg-neutral-850 rounded-full p-2 "
            onClick={onClikcToggle}
          >
            <IoMdMenu />
          </div>
        </div>
      </div>

      <section
        ref={sectionNavRef}
        onClick={onClikcToggle}
        className={`translate-y-[-100%]   fixed top-0  w-full h-screen  z-10 ${poppinsFont.className}`}
      >
        <aside
          onClick={(e) => e.stopPropagation()}
          className=" bg-primary-400  flex flex-col"
        >
          {/* nav */}
          <div className="p-2 cursor-pointer w-full px-5 sm:px-12 py-3 flex justify-between items-center h-[70px]">
            <div className="text-neutral-1000" onClick={onClikcToggle}>
              <Link href={`/${currentLang}`}>
                <picture>
                  <source srcSet="/logo/codework_white.png" type="image/webp" />
                  <img
                    src="/logo/codework_white.png"
                    alt="codework tech logo"
                    title="codework tech logo"
                    loading="lazy"
                    className="w-auto h-4"
                  />
                </picture>
              </Link>
            </div>
            <div
              className="text-2xl text-neutral-800 cursor-pointer hover:bg-neutral-100 rounded-full p-2 "
              onClick={onClikcToggle}
            >
              <IoCloseCircleOutline />
            </div>
          </div>

          {/* menu */}
          <div className="cursor-pointer px-5 sm:px-12 sm:pt-10 flex justify-start sm:justify-between items-center mb-10 h-full sm:h-auto">
            <NavbarLeft handleClick={onClikcToggle} />

            <NavbarRight />
          </div>
        </aside>
      </section>
    </>
  );
};

const WrappedComponent = withNavbar(Navbar);
export default WrappedComponent;
