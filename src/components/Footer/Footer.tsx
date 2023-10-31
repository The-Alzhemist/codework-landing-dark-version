"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import withFooter from "./withFooter";
import { FooterMenuItem, FooterProps } from "./interface";
import Link from "next/link";

import { gsap } from "gsap";



const Footer = (props: FooterProps) => {
  const { footerMenu } = props;

  const footerLeft = useRef<HTMLDivElement | null>(null);
  const footerRight = useRef<HTMLDivElement | null>(null);
  const root = useRef<any>(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 500 ? true : false

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(footerLeft.current, {
        x: isMobile ? 10 : 50,
        opacity: 0,
        duration: 2,
        ease: "Power4.easeInOut",
        scrollTrigger: {
          trigger: footerLeft.current,
          markers: false,
        },
      })
      gsap.from(footerRight.current, {
        x: isMobile ? -10 : -50,
        opacity: 0,
        duration: 2,
        ease: "Power4.easeInOut",
        scrollTrigger: {
          trigger: footerRight.current,
          markers: false,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="bg-neutral-1000 text-white">
      <div
      ref={root}
        className={`relative md:py-[50px]  mx-auto p-5 lg:px-[50px] flex flex-col-reverse lg:flex-row gap-y-10 lg:gap-y-0`}
      >
        {/* left */}
        <div className="w-full lg:w-1/2" ref={footerLeft}>
          <div className="font-light">{footerMenu.footerLeft.companyName}</div>
          <div className="font-light">
            {footerMenu.footerLeft.companyAddress}
          </div>
          <div className="font-light">
            Email: <a href="mailto: hello@codework-tech.com"><span className="hover:border-b-2 hover:border-white">{footerMenu.footerLeft.companyEmail}</span></a> 
          </div>
          <div className="mb-5 font-light">
            Tel: <a href="tel:0638494282"><span className="hover:border-b-2 hover:border-white">{footerMenu.footerLeft.companyTel}</span></a>
          </div>
          <div className="text-xs  font-light">
            {footerMenu.footerLeft.companyCopyright}
          </div>
        </div>

        {/* right */}

        <div
          className="w-full lg:w-1/2 flex flex-col gap-y-5"
          ref={footerRight}
        >
          {/* Row:1 */}
          <div className="w-full flex">
            {footerMenu.footerRight
              .slice(0, 3)
              .map((menu: FooterMenuItem, index: number) => (
                <React.Fragment key={`footer-menu-${index}`}>
                  <div className="w-1/3">
                    <Link href={menu.path}>{menu.pageMenu}</Link>
                    {menu.hasSubMenu &&
                      menu.subMenu?.map(
                        (submenu: { name: string }, index: number) => (
                          <div
                            className="text-xs sm:text-sm font-light"
                            key={`submenu-top-${index}`}
                          >
                            {submenu.name}
                          </div>
                        )
                      )}
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
                      menu.subMenu?.map(
                        (submenu: { name: string }, index: number) => (
                          <div
                            className="text-xs sm:text-sm"
                            key={`submenu-top-${index}`}
                          >
                            {submenu.name}
                          </div>
                        )
                      )}
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
