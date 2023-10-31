import SocialContactFloating from "@/components/SocialContactFloating/SocialContactFloating";
import FormPage from "@/features/ContactPage/FormPage";
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
    "Contact us to turn your vision into reality. Let’s create something extraordinary together.",
  openGraph: {
    title: "CodeWork Tech | Contact Us",
    description:
      "Contact us to turn your vision into reality. Let’s create something extraordinary together.",
    url: "",
    siteName: "",
    images: [
      {
        url: "/logo/meta/metatag-contact-us.png",
        width: 800,
        height: 600,
      },
      {
        url: "/logo/meta/metatag-contact-us.png",
        width: 1800,
        height: 1600,
        alt: "codework-tech-contact-us-logo-white-transpatent",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ContactUsPage() {
  return (
    <main className={` bg-neutral-1000 ${poppinsFont.className}`}>
      <FormPage />
      <SocialContactFloating />
    </main>
  );
}
