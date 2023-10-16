import { motion } from "framer-motion";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

export const menuList = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Service",
    url: "/services",
  },
  {
    name: "Project",
    url: "/projects",
  },
  {
    name: "Contact us",
    url: "/contact-us",
  },
];

export const NavbarLeft = () => {
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1, transition: { delay: 0.7, duration: 0.3 } },
  };

  return (
    <>
      <div className="flex flex-col  gap-y-7">
        {menuList.map((menu: any) => (
          <React.Fragment key={menu}>
            <motion.div
              variants={itemVariants}
              className="text-neutral-900 hover:text-white text-3xl sm:text-5xl font-bold cursor-pointer group transition-all"
            >
              <span className="flex gap-x-2">
                {menu.name}
                <span className="hidden  group-hover:flex text-white">
                  <FaArrowLeft />
                </span>
              </span>
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
