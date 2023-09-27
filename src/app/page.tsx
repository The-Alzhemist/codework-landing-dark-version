
import HeroSection from "@/features/Homepage/HeroSection/HeroSection";
import { OurPartner } from "@/features/Homepage/OurPartnerSection/OurPartner";
import { OurService } from "@/features/Homepage/OurServiceSection/OurService";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-[70px] ">
      <HeroSection/>
      <OurPartner/>
      <OurService/>
    </main>
  );
}
