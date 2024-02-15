"use client";

import React from "react";
import Paragraph from "@/components/typography/paragraph/Paragraph";

import withHeroSection from "./withHeroSection";
import BackgroundGradientBlur from "@/components/BackgroundGradientBlur/BackgroundGradientBlur";
import { HeroSectionProps } from "./interface";

import { FaLine } from "react-icons/fa6";
import { ExternalPrimaryButton } from "@/components/buttons/ExternalPrimaryButton";
import Link from "next/link";
import { useTranslations } from "next-intl";

const HeroSection = ({
  root,
  h1Ref,
  pRef,
  btnRef,
  circleLeftRef,
  circleRightRef,
  setIsOpen,
  currentLang,
  t,
}: HeroSectionProps) => {
  return (
    <section
      className={`relative overflow-hidden md:py-[50px] mx-auto px-5 lg:px-[50px] bg-neutral-1000 h-screen`}
      ref={root}
    >
      <div ref={circleLeftRef}>
        <BackgroundGradientBlur className="top-0 left-[-100px] sm:top-[-200px] sm:left-[-200px]  z-50 opacity-20  " />
      </div>
      <div ref={circleRightRef}>
        <BackgroundGradientBlur className="top-[400px] right-[-100px] sm:top-[200px] sm:right-[-200px]      z-50 opacity-20  " />
      </div>

      <div className="h-full   relative flex justify-start items-center w-full max-w-[1440px] m-auto">
        <div className="z-0 w-[100%] lg:w-[100%]  min-h-[600px] relative flex flex-col items-center text-center justify-center sm:p-0">
          {currentLang === "en" && (
            <h1 className="mb-5 md:mb-5 relative font-bold" ref={h1Ref}>
              <div className="text-4xl md:text-6xl mb-3 text-white">
                We can make
              </div>

              <div className="text-3xl md:text-6xl mb-3 text-white">
                your <span className="text-primary-100">idea</span> come
                <span className="text-primary-100"> true</span>
              </div>
            </h1>
          )}

          {currentLang === "th" && (
            <h1 className="mb-7 md:mb-5 relative font-bold" ref={h1Ref}>
              <div className="text-3xl md:text-4xl mb-5 text-white">
                ให้ธุรกิจของคุณเติบโตในยุคสมัยแห่งเทคโนโลยี
              </div>
              <div className="text-3xl md:text-4xl mb-2 text-white">
                <span className="text-primary-100">
                  เราสร้างสรรค์ผลงานที่ทันสมัยและตอบโจทย์ทุกรายละเอียดของธุรกิจคุณ
                </span>
              </div>
            </h1>
          )}

          <div ref={pRef} className="mb-3">
            <Paragraph
              className={`mb-8 max-w-[890px] text-lg sm:text-md font-light text-white opacity-80`}
            >
              <span>{t("HeroSection.Description")}</span>
            </Paragraph>
          </div>

          <div
            className="max-w-7xl "
            ref={btnRef}
            onClick={() => setIsOpen(true)}
          >
            <div className="flex flex-col gap-x-2">
              <ExternalPrimaryButton
                pathName="https://page.line.me/448yyxgh"
                className=" text-xl "
              >
                <div className="flex items-center gap-x-2">
                  {t("HeroSection.LetTalkWithUs")}
                  <span className="text-2xl">
                    <FaLine />
                  </span>
                </div>
              </ExternalPrimaryButton>

              <div className="mt-5 text-white text-xs mb-5">
                {t("HeroSection.Or")}
              </div>

              <Link
                href={`${currentLang}/contact-us`}
                className="flex justify-center text-xl"
              >
                <div className="flex items-center text-white border-b-2 border-white">
                  {t("HeroSection.LeaveMessage")}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WrappedComponent = withHeroSection(HeroSection);
export default WrappedComponent;
