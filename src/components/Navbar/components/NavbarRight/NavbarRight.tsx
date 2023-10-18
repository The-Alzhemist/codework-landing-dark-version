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
          <div className="flex justify-end gap-x-1">
            <IconSocialLink linkName="https://web.facebook.com/people/CodeWork-Tech/61551048177724/?_rdc=1&_rdr" iconName={<PiFacebookLogoBold />} />

            {/* ถ้ามีลิ้งให้กลับมาเปิดใช้งาน */}
            {/* <IconSocialLink linkName="#" iconName={<FaInstagram />} /> */}
            {/* <IconSocialLink linkName="#" iconName={<PiLinkedinLogoBold />} /> */}
          </div>
          <div className="text-xs sm:text-lg ">Codework Tech</div>
        </div>

        <div className="mb-5">
          <label className="flex justify-end">
            <IconSocialLink linkName="https://page.line.me/448yyxgh" iconName={<FaLine />} />
          </label>
          <div className="text-xs sm:text-lg">@codeworktech</div>
        </div>

        <div className="mb-5">
          <label className="text-sm sm:text-lg font-bold">Telephone</label>
          <div className="text-xs sm:text-lg">(+66)83 987 4997</div>
        </div>

        <div>
          <label className="text-sm sm:text-lg font-bold">Email</label>
          <div className="text-xs sm:text-lg">hello@codework-tech.com</div>
        </div>
      </motion.div>
    </>
  );
};
