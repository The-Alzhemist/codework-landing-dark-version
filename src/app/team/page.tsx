import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import FormPage from "@/features/ContactPage/FormPage";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import TeamIntro from "../../features/TeamPage/components/TeamIntro/TeamIntro";
import TeamMember from "../../features/TeamPage/components/TeamMember/TeamMember";
import ContactHomeSection from "@/components/ContactHomeSection/ContactHomeSection";

const poppinsFont = Poppins({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
  display: 'swap', adjustFontFallback: false 
});

export const metadata: Metadata = {
  title: "CodeWork Tech | Team",
  description:
    "Meet the talented team who drive the achievements at CodeWork Tech. Our exceptional team is the backbone of our success story.",
  openGraph: {
    title: "CodeWork Tech | Team",
    description:
      "Meet the talented team who drive the achievements at CodeWork Tech. Our exceptional team is the backbone of our success story.",
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

export default function TeamPage() {
  return (
    <main className={` bg-neutral-1000 ${poppinsFont.className}`}>    
    <TeamIntro/>
    <TeamMember/>
    <ContactHomeSection/>
  </main>
  );
}
