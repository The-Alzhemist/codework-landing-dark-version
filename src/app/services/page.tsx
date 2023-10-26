


import { Metadata } from "next";
import { Poppins } from "next/font/google";
import ServiceIntro from "../../features/ServicePage/components/ServiceIntro/ServiceIntro";
import ContactHomeSection from "@/components/ContactHomeSection/ContactHomeSection";
import ServiceCard from "../../features/ServicePage/components/ServiceCard/ServiceCard";

const poppinsFont = Poppins({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeWork Tech | Services",
  description:
    "Discover our service offerings, thoughtfully designed to address your business requirements",
  openGraph: {
    title: "CodeWork Tech | Contact Us",
    description:
      "Discover our service offerings, thoughtfully designed to address your business requirements",
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

export default function ServicePage() {
  return (
    <main className={` bg-neutral-1000 ${poppinsFont.className}`}>
      <ServiceIntro/>
      <ServiceCard/>
      <ContactHomeSection/>
    </main>
  );
}
