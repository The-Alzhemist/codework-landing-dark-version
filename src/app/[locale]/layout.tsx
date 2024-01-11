import Navbar from "@/components/Navbar/Navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import { NavbarToggleContextProvider } from "@/context/NavbarToggleContext/NavbarToggleContext";
import { NextIntlClientProvider, useMessages } from "next-intl";

const poppinsFont = Poppins({
  weight: ["100", "300", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

const REVALIDATE_TIME = Number(
  process.env.STORYBLOK_REVALIDATE_TIME_SECOND as number | false | undefined
);

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    fetch: (input, init) =>
      fetch(input, { ...init, next: { revalidate: REVALIDATE_TIME } }),
  },
});

export async function generateMetadata({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) {
  const t = await getTranslations({ locale, namespace: "MetaData" });

  return {
    title: t("Home.Title"),
    description: t("Home.Description"),
    openGraph: {
      title: t("Home.Title"),
      description: t("Home.Description"),
      url: "https://codework-tech.com",
      siteName: "https://codework-tech.com",
      images: [
        {
          url: process.env.ENV_URL + "/logo/meta/meta-tag-home.jpg",
          width: 800,
          height: 600,
        },
        {
          url: process.env.ENV_URL + "/logo/meta/meta-tag-home.jpg",
          width: 1800,
          height: 1600,
          alt: "codework-tech-home-page-meta-image",
        },
      ],
    },
    type: "website",
  };
}

export default function RootLayout({ children, params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
