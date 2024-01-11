export const revalidate = 6;

import BlogWrapper from "@/features/BlogPage/BlogWrapper";

import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
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
    title: t("Blog.Title"),
    description: t("Blog.Description"),
    openGraph: {
      title: t("Blog.Title"),
      description: t("Blog.Description"),
      images: [
        {
          url: process.env.ENV_URL + "/images/blogPage/meta-tag-blog.jpg",
          width: 800,
          height: 600,
        },
        {
          url: process.env.ENV_URL + "/images/blogPage/meta-tag-blog.jpg",
          width: 1800,
          height: 1600,
          alt: "codework-tech-blog-meta-image",
        },
      ],
    },
    type: "website",
  };
}

export default function BlogPage() {
  return (
    <main className={`bg-neutral-1000 ${poppinsFont.className}`}>
      <BlogWrapper />
    </main>
  );
}

const locales = ["en", "th"];
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
