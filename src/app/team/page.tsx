
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import TeamIntro from "../../features/TeamPage/components/TeamIntro/TeamIntro";
import TeamMember from "../../features/TeamPage/components/TeamMember/TeamMember";
import ContactHomeSection from "@/components/ContactHomeSection/ContactHomeSection";
import SocialContactFloating from "@/components/SocialContactFloating/SocialContactFloating";

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
        url: "/logo/meta/meta-tag-team.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "/logo/meta/meta-tag-team.jpg",
        width: 1800,
        height: 1600,
        alt: "codework-tech-team-page-meta-image",
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
    <SocialContactFloating/>
  </main>
  );
}
