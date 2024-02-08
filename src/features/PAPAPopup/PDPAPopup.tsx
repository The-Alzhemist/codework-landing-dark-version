import { SimpleButton } from '@/components/buttons/SimpleButton'
import React from 'react'
import withPDPAPopup from './withPDPAPopup';
import { PDPAPopupProps } from './interface';
import { Poppins } from "next/font/google";
import { useTranslations } from 'next-intl';

const poppinsFont = Poppins({
    weight: ["100", "300", "500", "700", "800"],
    subsets: ["latin"],
    display: 'swap', adjustFontFallback: false 
  });

const PDPAPopup = ({ isOpen, handleClose, shouldRender, setIsOpen }: PDPAPopupProps) => {
    const t = useTranslations("CookieConsentPopup");
    return (
        <>
            {shouldRender && isOpen && <section className={`${poppinsFont.className} flex justify-center shadow-2xl`}>
                <div className='bg-white sm:w-[90%] border-t-2 sm:border-2 border-gray-900 fixed z-50 bottom-0 md:bottom-10 p-5 sm:rounded-lg  w-full max-w-[800px] flex justify-between gap-x-5 flex-col sm:flex-row'>
                    <div className="flex flex-col justify-center mb-5 sm:mb-0">
                        <div className="text-xl font-semibold mb-2">{t("Title")}</div>
                        <div className="text-sm font-light">{t("Description")}.</div>
                    </div>

                    <div className="flex flex-row-reverse gap-x-3  justify-start sm:justify-center  sm:flex-col">
                        <SimpleButton className=" w-[150px] h-[40px] sm:h-[40px] flex justify-center items-center" onClickHandler={() => handleClose(true)}>{t("AcceptButton")}</SimpleButton>
                        <div
                            className="text-xs cursor-pointer absolute top-1 
                            right-2 text-gray-400 bg-transparent" onClick={() => handleClose(false)}>
                            X
                        </div>
                    </div>
                </div>
            </section>}
        </>

    )
}


const WrappedComponent = withPDPAPopup(PDPAPopup);
export default WrappedComponent;