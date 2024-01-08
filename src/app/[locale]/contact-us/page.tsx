

import SocialContactFloating from "@/components/SocialContactFloating/SocialContactFloating";
import { GTM_PRODUCTION, LOCAL_STORAGE_PDPA_KEY } from "@/config/environment";
import FormPage from "@/features/ContactPage/FormPage";
import PDPAPopup from "@/features/PAPAPopup/PDPAPopup";
import { Metadata } from "next";

import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import {useTranslations} from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

const poppinsFont = Poppins({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "CodeWork Tech | Contact Us",
  description:
    "Contact us to turn your vision into reality. Let’s create something extraordinary together.",
  openGraph: {
    title: "CodeWork Tech | Contact Us",
    description:
      "Contact us to turn your vision into reality. Let’s create something extraordinary together.",
    url: "",
    siteName: "",
    images: [
      {
        url: process.env.ENV_URL + "/logo/meta/meta-tag-contact-us.jpg",
        width: 800,
        height: 600,
      },
      {
        url: process.env.ENV_URL + "/logo/meta/meta-tag-contact-us.jpg",
        width: 1800,
        height: 1600,
        alt: "codework-tech-contact-us-meta-image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ContactUsPage({params: {locale}}:any) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Home');
  return (
    <main className={` bg-neutral-1000 ${poppinsFont.className}`}>
      <h1 className="text-white">{t('HeroSection.Greeting')}</h1>
      <FormPage />
      <SocialContactFloating />
    </main>
  );
}

const locales = ['en', 'th'];
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
} 

