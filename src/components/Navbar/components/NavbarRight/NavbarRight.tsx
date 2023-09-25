import { motion } from "framer-motion";
import React from "react";

import { IoClose } from "react-icons/io5";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FaLine, FaInstagram } from "react-icons/fa6";

export const NavbarRight = () => {


  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1, transition: { delay: 0.7, duration: 0.3 } },
  };
  
  return (
    <>
      <motion.div
        className="text-right hidden sm:block"
        initial="closed"
        animate="open"
        exit="closed"
        variants={itemVariants}
      >
        <div className="mb-5">
          <label className="text-lg font-semibold">Social media</label>
          <div className="flex justify-end">
            <PiLinkedinLogoBold />
            <PiLinkedinLogoBold />
            <PiLinkedinLogoBold />
          </div>
          <div className="text-2xl">Codework Tech</div>
        </div>

        <div className="mb-5">
          <label className="flex justify-end">
            <FaLine />
          </label>
          <div className="text-2xl">@codeworktech</div>
        </div>

        <div className="mb-5">
          <label className="text-lg font-semibold">Telephone</label>
          <div className="text-2xl">(+66)83 987 4997</div>
        </div>

        <div>
          <label className="text-lg font-semibold">Email</label>
          <div className="text-2xl">hello@codework-tech.com</div>
        </div>
      </motion.div>
    </>
  );
};
