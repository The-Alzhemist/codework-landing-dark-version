import { motion } from "framer-motion";
import React from "react";

import { IoClose } from "react-icons/io5";
import { PiFacebookLogoBold, PiLinkedinLogoBold } from "react-icons/pi";
import { FaLine, FaInstagram } from "react-icons/fa6";
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
            <IconSocialLink linkName="#" iconName={<PiFacebookLogoBold />} />
            <IconSocialLink linkName="#" iconName={<FaInstagram />} />
            <IconSocialLink linkName="#" iconName={<PiLinkedinLogoBold />} />
          </div>
          <div className="text-xs sm:text-lg ">Codework Tech</div>
        </div>

        <div className="mb-5">
          <label className="flex justify-end">
            <IconSocialLink linkName="#" iconName={<FaLine />} />
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
