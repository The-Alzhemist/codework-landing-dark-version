import { Metadata } from "next";
import { Poppins } from "next/font/google";
import TeamIntro from "../../../features/TeamPage/components/TeamIntro/TeamIntro";
import TeamMember from "../../../features/TeamPage/components/TeamMember/TeamMember";
import ContactHomeSection from "@/components/ContactHomeSection/ContactHomeSection";
import SocialContactFloating from "@/components/SocialContactFloating/SocialContactFloating";
import TeamWrapper from "@/features/TeamPage/TeamWrapper";
import { getTranslations } from "next-intl/server";

const poppinsFont = Poppins({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: "MetaData" });

  return {
    title: t("Team.Title"),
    description: t("Team.Description"),
    openGraph: {
      title: t("Team.Title"),
      description: t("Team.Description"),
      images: [
        {
          url: process.env.ENV_URL + "/logo/meta/meta-tag-team.jpg",
          width: 800,
          height: 600,
        },
        {
          url: process.env.ENV_URL + "/logo/meta/meta-tag-team.jpg",
          width: 1800,
          height: 1600,
          alt: "codework-tech-team-page-meta-image",
        },
      ],
    },
    type: "website",
  };
}

export default function TeamPage() {
  return (
    <main className={` bg-neutral-1000 ${poppinsFont.className}`}>
      <TeamWrapper />
    </main>
  );
}

const locales = ["en", "th"];
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
