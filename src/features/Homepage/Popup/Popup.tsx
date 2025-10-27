import { SimpleButton } from "@/components/buttons/SimpleButton";
import React from "react";
import { PDPAPopupProps } from "./interface";
import { Poppins } from "next/font/google";
import { useTranslations } from "next-intl";
import withPopup from "@/features/Homepage/Popup/withPopup";

const poppinsFont = Poppins({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Popup = ({ isOpen, handleClose, shouldRender }: PDPAPopupProps) => {
  const t = useTranslations("CookieConsentPopup");

  if (!shouldRender || !isOpen) return null;

  return (
    <section
      className={`${poppinsFont.className} fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm`}
    >
      <div className="relative bg-white rounded-2xl border-2 overflow-hidden shadow-2xl w-[90%] max-w-md sm:max-w-lg md:max-w-xl animate-fade-in">
        {/* Close button */}
        <button
          onClick={() => handleClose(false)}
          className="absolute top-3 right-3 text-gray-300 hover:text-gray-600 transition-colors text-lg"
          aria-label="Close popup"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src="/Popup.jpg"
          alt="poupup image"
          title="poupup image"
          loading="lazy"
          className="w-full h-auto object-cover max-h-[80vh]"
        />

        {/* Button section */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center ">
          <SimpleButton
            className="w-[150px] h-[45px] bg-white/90 text-black rounded-full shadow-md backdrop-blur-sm hover:bg-white hover:scale-105 transition-transform hover:border-none hover:text-black  "
            onClickHandler={() => handleClose(true)}
          >
            เข้าสู่เว็บไซต์
          </SimpleButton>
        </div>
      </div>
    </section>
  );
};

export default withPopup(Popup);
