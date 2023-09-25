"use client";

import { AnimatePresence, motion, useCycle } from "framer-motion";
import React from "react";

import { FaHamburger } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

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
    name: "About us",
    url: "/aboutus",
  },
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "Products",
    url: "/products",
  },
];

export const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);

  const handleButtonClick = () => {
    cycleOpen();
  };

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1, transition: { delay: 0.7, duration: 0.3 } },
  };

  const sideVariants = {
    closed: {},
    open: {},
  };

  return (
    <>
      <div
        className={`fixed h-[70px] top-0 ${
          open ? "bg-[#434B00]" : "bg-[#35372d]"
        } p-2  cursor-pointer w-full px-6 py-3 flex justify-between items-center`}
      >
        <div className="text-white">Logo</div>
        <div className="text-xl text-white" onClick={handleButtonClick}>
          {open ? <IoClose /> : <FaHamburger />}
        </div>
      </div>

      <section className="absolute w-full top-0 z-10 ">
        <AnimatePresence>
          {open && (
            <motion.aside
              initial={{ height: 0 }}
              animate={{
                height: 500,
                transition: { delay: 0, duration: 0.3 },
              }}
              exit={{
                height: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
              className="bg-[#dbe67d] border-b-2  flex flex-col"
            >
              {/* nav */}
              <motion.div
                className="p-2 cursor-pointer w-full px-6 py-3 flex justify-between items-center h-[70px]"
                initial="closed"
                animate="open"
                exit="closed"
                variants={itemVariants}
              >
                <motion.div className="text-white" whileHover={{ scale: 1.02 }}>
                  Logo
                </motion.div>
                <motion.div
                  className="text-xl text-white"
                  whileHover={{ scale: 1.02 }}
                  onClick={handleButtonClick}
                >
                  <IoClose />
                </motion.div>
              </motion.div>

              {/* menu */}
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                className="ml-5 cursor-pointer px-10 pt-10 flex justify-between items-end"
                variants={sideVariants}
              >
                <div className="flex flex-col gap-y-5">
                  {menuList.map((menu: any) => (
                    <React.Fragment key={menu}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        variants={itemVariants}
                        className="text-slate-800 text-5xl font-bold cursor-pointer"
                      >
                        {menu.name}
                      </motion.div>
                    </React.Fragment>
                  ))}
                </div>

                <motion.div
                  className="text-right"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={itemVariants}
                >
                  <div>
                    <motion.label>Social media</motion.label>
                    <motion.div>Codework Tech</motion.div>
                  </div>

                  <div>
                    <label>Line</label>
                    <div>@codeworktech</div>
                  </div>

                  <div>
                    <label>Telephone</label>
                    <div>(+66)83 987 4997</div>
                  </div>

                  <div>
                    <label>Email</label>
                    <div>hello@codework-tech.com</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};
