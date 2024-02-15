import ProjectWrapper from "@/features/ProjectPage/ProjectWrapper";
import { Poppins } from "next/font/google";
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
    title: t("Project.Title"),
    description: t("Project.Description"),
    openGraph: {
      title: t("Project.Title"),
      description: t("Project.Description"),
      images: [
        {
          url: process.env.ENV_URL + "/logo/meta/meta-tag-projects.jpg",
          width: 800,
          height: 600,
        },
        {
          url: process.env.ENV_URL + "/logo/meta/meta-tag-projects.jpg",
          width: 1800,
          height: 1600,
          alt: "codework-tech-project-page-meta-image",
        },
      ],
    },
    type: "website",
  };
}

export default function ProjectPage() {
  return (
    <main className={` bg-neutral-1000 ${poppinsFont.className}`}>
      <ProjectWrapper />
    </main>
  );
}

const locales = ["en", "th"];
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
