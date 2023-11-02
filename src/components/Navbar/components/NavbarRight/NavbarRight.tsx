import { motion } from "framer-motion";
import React from "react";

import { PiFacebookLogoBold } from "react-icons/pi";
import { FaLine } from "react-icons/fa6";
import IconSocialLink from "@/components/IconSocialLink/IconSocialLink";

export const NavbarRight = () => {
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1, transition: { delay: 0.25, duration: 0.25 } },
  };

  return (
    <>
      <motion.div
        className="hidden sm:block text-right  text-slate-900"
        initial="closed"
        animate="open"
        exit="closed"
        variants={itemVariants}
      >
        <div className="mb-5">
          <label className="text-sm sm:text-lg font-bold">Social media</label>
          <div className="flex justify-end gap-x-2 items-center">
            <IconSocialLink  ariaLabel="Facebook social link" linkName="https://web.facebook.com/people/CodeWork-Tech/61551048177724/?_rdc=1&_rdr" iconName={<PiFacebookLogoBold />} />

            {/* ถ้ามีลิ้งให้กลับมาเปิดใช้งาน */}
            {/* <IconSocialLink linkName="#" iconName={<FaInstagram />} /> */}
            {/* <IconSocialLink linkName="#" iconName={<PiLinkedinLogoBold />} /> */}
            <div className="text-xs sm:text-lg ">Codework Tech</div>
          </div>

          <label className="flex justify-end items-center gap-x-2 ">
            <IconSocialLink ariaLabel="Line social link" linkName="https://page.line.me/448yyxgh" iconName={<FaLine />} />
            <div className="text-xs sm:text-lg">@codeworktech</div>
          </label>
        </div>

        <div className="mb-5 flex flex-col">
          <label className="text-sm sm:text-lg font-bold">Telephone</label>
          <a href="tel:0638494282" className="text-xs sm:text-lg "><span className="hover:border-b-2 hover:border-slate-900">(+66) 63 849 4282</span></a>
        </div>

        <div className="flex flex-col">
          <label className="text-sm sm:text-lg font-bold">Email</label>
          <a href="mailto: hello@codework-tech.com"className="text-xs sm:text-lg  "><span className="hover:border-b-2 hover:border-slate-900">hello@codework-tech.com</span></a>
        </div>
      </motion.div>
    </>
  );
};
