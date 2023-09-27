
import ContactHomeSection from "@/features/Homepage/ContactHomeSection/ContactHomeSection";
import HeroSection from "@/features/Homepage/HeroSection/HeroSection";
import { OurPartner } from "@/features/Homepage/OurPartnerSection/OurPartner";
import { OurProject } from "@/features/Homepage/OurProjectSection/OurProject";
import { OurService } from "@/features/Homepage/OurServiceSection/OurService";
import Image from "next/image";

import { Noto_Sans_Thai } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const roboto = Noto_Sans_Thai({
  weight: ['100', '300',  '500', '700'],
  subsets: ['latin'],
})
 

export default function Home() {
  return (
    <main className={`mt-[70px] ${roboto.className}`}>
      <HeroSection/>
      <OurPartner/>
      <OurService/>
      {/* <OurProject/> */}
      <ContactHomeSection/>
    </main>
  );
}
