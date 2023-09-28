
import ContactHomeSection from "@/features/Homepage/ContactHomeSection/ContactHomeSection";
import HeroSection from "@/features/Homepage/HeroSection/HeroSection";
import { OurPartner } from "@/features/Homepage/OurPartnerSection/OurPartner";
import { OurProject } from "@/features/Homepage/OurProjectSection/OurProject";
import { OurService } from "@/features/Homepage/OurServiceSection/OurService";

import { Poppins } from 'next/font/google'

const poppinsFont = Poppins({
  weight: ['100', '300',  '500', '700'],
  subsets: ['latin'],
})


export default function Home() {
  return (
    <main className={`mt-[70px] ${poppinsFont.className}`}>
      <HeroSection/>
      <OurPartner/>
      <OurService/>
      <OurProject/>
      <ContactHomeSection/>
    </main>
  );
}
