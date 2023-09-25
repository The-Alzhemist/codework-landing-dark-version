"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import { FaHamburger } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import withNavbar from "./withNavbar";
import { NavbarRight } from "./components/NavbarRight/NavbarRight";
import { NavbarLeft } from "./components/NavbarLeft/NavbarLeft";
import { NavbarProps } from "./interface";

const Navbar = ({handleButtonClick, open,itemVariants}: NavbarProps) => {
  return (
    <>
      <div
        className={`fixed h-[70px] top-0 ${
          open ? "bg-primary-600" : "bg-secondary-600"
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
              className="bg-primary-600  border-b-2  flex flex-col"
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
                className="sm:ml-5 cursor-pointer px-6 sm:px-10 pt-10 flex  justify-between items-end"
              >
                <NavbarLeft />

                <NavbarRight />
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

const WrappedComponent = withNavbar(Navbar);
export default WrappedComponent;
