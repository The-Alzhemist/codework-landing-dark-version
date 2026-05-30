import SocialContactFloating from "@/components/SocialContactFloating/SocialContactFloating";

import FormPage from "@/features/ContactPage/FormPage";

import { poppinsFont } from "@/lib/fonts";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) {
  const t = await getTranslations({ locale, namespace: "MetaData" });

  return {
    title: t("ContactUs.Title"),
    description: t("ContactUs.Description"),
    openGraph: {
      title: t("ContactUs.Title"),
      description: t("ContactUs.Description"),
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
    },
    type: "website",
  };
}

export default function ContactUsPage() {
  return (
    <main className={` bg-neutral-1000 ${poppinsFont.className}`}>
      <FormPage />
      <SocialContactFloating />
    </main>
  );
}

const locales = ["en", "th"];
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
