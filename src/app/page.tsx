
import HeroSection from "@/features/Homepage/HeroSection/HeroSection";
import { OurPartner } from "@/features/Homepage/OurPartnerSection/OurPartner";
import { OurProject } from "@/features/Homepage/OurProjectSection/OurProject";
import { OurService } from "@/features/Homepage/OurServiceSection/OurService";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-[70px] ">
      <HeroSection/>
      <OurPartner/>
      <OurService/>
      <OurProject/>
    </main>
  );
}
