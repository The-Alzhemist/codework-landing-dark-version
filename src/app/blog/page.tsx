

export const revalidate = 6

import BlogWrapper from "@/features/BlogPage/BlogWrapper";

import { Metadata } from "next";
import { Poppins } from "next/font/google";


const poppinsFont = Poppins({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "CodeWork Tech | Blogs",
  description:
    "Explore the latest insights, trends, and expert opinions in technology and business through our blog.",
  openGraph: {
    title: "CodeWork Tech | Blogs",
    description:
      "Explore the latest insights, trends, and expert opinions in technology and business through our blog.",
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



export default function BlogPage() {

  return (
    <main className={`bg-neutral-1000 ${poppinsFont.className}`}>
      <BlogWrapper/>
    </main>
  );
}
