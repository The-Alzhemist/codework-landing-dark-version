import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import { NavbarToggleContextProvider } from "@/context/NavbarToggleContext/NavbarToggleContext";

const poppinsFont = Poppins({
  weight: ["100", "300", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "CodeWork Tech | Turning Ideas into Powerful Software Solutions",
  description:
    "Bring innovation to life with our innovative software solutions. From UX/UI design to digital transformation consultant, we deliver excellence in scalability, reliability, and creativity.",
  openGraph: {
    title: "CodeWork Tech | Turning Ideas into Powerful Software Solutions",
    description:
      "Bring innovation to life with our innovative software solutions. From UX/UI design to digital transformation consultant, we deliver excellence in scalability, reliability, and creativity.",
    url: "https://codework-tech.com",
    siteName: "https://codework-tech.com",
    images: [
      {
        url: "/logo/meta/meta-tag-home.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "/logo/meta/meta-tag-home.jpg",
        width: 1800,
        height: 1600,
        alt: "codework-tech-home-page-meta-image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/features/BlogPage/components/StoryblokProvider/StoryblokProvider";
import { BlogFilterTagsProvider } from "@/context/BlogFilterTagsContext/BlogFilterTagsContext";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={poppinsFont.className}>
          <NavbarToggleContextProvider>
            <BlogFilterTagsProvider>
              <Navbar />
              <div>{children}</div>
              <Footer />
            </BlogFilterTagsProvider>
          </NavbarToggleContextProvider>
        </body>
      </html>
    </StoryblokProvider>
  );
}
