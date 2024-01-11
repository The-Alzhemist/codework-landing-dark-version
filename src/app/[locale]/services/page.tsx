import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import FormPage from "@/features/ContactPage/FormPage";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import ServiceIntro from "../../../features/ServicePage/components/ServiceIntro/ServiceIntro";
import ContactHomeSection from "@/components/ContactHomeSection/ContactHomeSection";
import ServiceCard from "../../../features/ServicePage/components/ServiceCard/ServiceCard";
import SocialContactFloating from "@/components/SocialContactFloating/SocialContactFloating";
import ServiceWrapper from "@/features/ServicePage/ServiceWrapper";
import { getTranslations } from "next-intl/server";

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
    title: t("Service.Title"),
    description: t("Service.Description"),
    openGraph: {
      title: t("Service.Title"),
      description: t("Service.Description"),
      images: [
        {
          url: "/logo/meta/meta-tag-services.jpg",
          width: 800,
          height: 600,
        },
        {
          url: "/logo/meta/meta-tag-services.jpg",
          width: 1800,
          height: 1600,
          alt: "codework-tech-contact-us-logo-white-transpatent",
        },
      ],
    },
    type: "website",
  };
}

export default function ServicePage() {
  return (
    <main className={` bg-neutral-1000 ${poppinsFont.className}`}>
      <ServiceWrapper />
    </main>
  );
}

const locales = ["en", "th"];
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
