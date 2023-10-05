"use client"

import React, { useEffect, useRef } from "react";
import withFooter from "./withFooter";
import { FooterMenuItem, FooterProps } from "./interface";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap";
// เปิดใช้งาน ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Footer = (props: FooterProps) => {
  const { footerMenu } = props;

  const footerLeft = useRef<HTMLDivElement | null>(null);
  const footerRight = useRef<HTMLDivElement | null>(null);
  const pref = useRef<HTMLDivElement | null>(null);
  const divBtnRef = useRef<HTMLDivElement | null>(null);
  const root = useRef<any>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(footerLeft.current, {opacity:0, delay: 0, x:-50, duration:3, ease: "power4", scrollTrigger: {
        trigger: footerLeft.current,
        toggleActions: "restart none none none",
        
      } });
      gsap.from(footerRight.current, {opacity:0, delay: 0, x:50, duration:3, ease: "power4", scrollTrigger: {
        trigger: footerRight.current,
        toggleActions: "restart none none none",
      } });
    }, root);

    return () => ctx.revert();
  },[]);

  return (
    <footer className="bg-neutral-1000 text-white">
      <div
        className={` font-prompt relative md:py-[50px]  mx-auto p-5 lg:px-[50px] flex flex-col-reverse lg:flex-row gap-y-10 lg:gap-y-0 `}
      >
        {/* left */}
        <div className="w-full lg:w-1/2" ref={footerLeft}>
          <div className="font-light">{footerMenu.footerLeft.companyName}</div>
          <div className="font-light">{footerMenu.footerLeft.companyAddress}</div>
          <div className="font-light">Email: {footerMenu.footerLeft.companyEmail}</div>
          <div className="mb-5 font-light"> Tel: {footerMenu.footerLeft.companyTel}</div>
          <div className="text-xs sm:text-sm font-light">
            {footerMenu.footerLeft.companyCopyright}
          </div>
        </div>

        {/* right */}
      
        <div className="w-full lg:w-1/2 flex flex-col gap-y-5" ref={footerRight}>
            {/* Row:1 */}
          <div className="w-full flex">
            {footerMenu.footerRight
              .slice(0, 3)
              .map((menu: FooterMenuItem, index: number) => (
                <React.Fragment key={`footer-menu-${index}`}>
                  <div className="w-1/3">
                  <Link href={menu.path}>{menu.pageMenu}</Link>
                      {menu.hasSubMenu &&
                        menu.subMenu?.map((submenu: { name: string }, index: number) => (
                          <div className="text-xs sm:text-sm font-light" key={`submenu-top-${index}`}>{submenu.name}</div>
                        ))}
                    </div>
                </React.Fragment>
              ))}
          </div>
            {/* Row:2 */}
          <div className="w-full flex">
          {footerMenu.footerRight
              .slice(3, 6)
              .map((menu: FooterMenuItem, index: number) => (
                <React.Fragment key={`footer-menu-${index}`}>
                  <div className="w-1/3">
                    <Link href={menu.path}>{menu.pageMenu}</Link>
                      {menu.hasSubMenu &&
                        menu.subMenu?.map((submenu: { name: string }, index: number) => (
                          <div className="text-xs sm:text-sm" key={`submenu-top-${index}`}>{submenu.name}</div>
                        ))}
                    </div>
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const WrappedComponent = withFooter(Footer);
export default WrappedComponent;
