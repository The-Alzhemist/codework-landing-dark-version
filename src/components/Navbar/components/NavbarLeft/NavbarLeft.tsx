import { motion } from "framer-motion";
import Link from "next/link";
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

export const NavbarLeft = ({handleClick}: { handleClick: () => void }) => {
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1, transition: { delay: 0.2, duration: 0.2 } },
  };

  return (
    <>
      <div className="flex flex-col  gap-y-7 items-center sm:items-start  ">
        {menuList.map((menu: {name: string, url: string}) => (
          <React.Fragment key={menu.name}>
            <motion.div
              variants={itemVariants}
              className="text-neutral-900 hover:text-white text-4xl sm:text-5xl font-bold cursor-pointer group transition-all"
            >
              <Link href={menu.url} onClick={handleClick}>
                <span className="flex gap-x-2 text-center sm:text-left">
                  {menu.name}
                  <span className="hidden  group-hover:flex text-white">
                    <FaArrowLeft />
                  </span>
                </span>
              </Link>
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
