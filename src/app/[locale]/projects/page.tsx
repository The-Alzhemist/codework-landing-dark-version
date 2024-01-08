import ContactHomeSection from "@/components/ContactHomeSection/ContactHomeSection";
import SocialContactFloating from "@/components/SocialContactFloating/SocialContactFloating";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import FormPage from "@/features/ContactPage/FormPage";
import ProjectIntro from "@/features/ProjectPage/components/ProjectIntro/ProjectIntro";
import ProjectWrapper from "@/features/ProjectPage/ProjectWrapper";
import ProjectSeamoor from "@/features/ProjectPage/components/ProjectSearmoor/ProjectSeamoor";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "CodeWork Tech | Contact Us",
  description:
    "Get in touch with us and make your dream come true. Let’s create something extraordinary together!",
  openGraph: {
    title: "CodeWork Tech | Contact Us",
    description:
      "Get in touch with us and make your dream come true. Let’s create something extraordinary together!",
    url: "",
    siteName: "",
    images: [
      {
        url: "/logo/meta/meta-tag-projects.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "/logo/meta/meta-tag-projects.jpg",
        width: 1800,
        height: 1600,
        alt: "codework-tech-project-page-meta-image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ProjectPage() {
  return (
    <main className={` bg-neutral-1000 ${poppinsFont.className}`}>
      <ProjectWrapper />
    </main>
  );
}
