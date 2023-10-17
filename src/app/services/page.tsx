import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import FormPage from "@/features/ContactPage/FormPage";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
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
      <div className="relative bg-neutral-1000 rounded-xl w-full max-w-[1140px] mx-auto py-[30px] md:py-[50px] lg:px-[50px] sm:my-0 px-5">
        <div className="text-center h-screen flex justify-center flex-col items-center text-4xl text-white">
      
          <div className="mb-10"> Service page is coming soon...</div>
          <PrimaryButton
          className=" py-3 text-base sm:text-lg hover:scale-90 mb-5 lg:mb-0"
          pathName="/"
        >
          Back to home page
        </PrimaryButton>
        </div>
       
      </div>
    </main>
  );
}
