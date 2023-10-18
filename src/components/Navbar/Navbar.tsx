"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import withNavbar from "./withNavbar";
import { NavbarRight } from "./components/NavbarRight/NavbarRight";
import { NavbarLeft } from "./components/NavbarLeft/NavbarLeft";
import { NavbarProps } from "./interface";
import { IoMdMenu } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { CodeworkTechLogo } from "./components/BrandLogo/BrandLogo";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  weight: ["100", "300", "500", "700", "800"],
  subsets: ["latin"],
});

const Navbar = ({
  handleButtonClick,
  open,
  itemVariants,
  isScrolled,
}: NavbarProps) => {
  return (
    <>
      <div
        className={`${
          isScrolled ? " fixed bg-neutral-1000" : "absolute bg-transparent"
        }  ${
          poppinsFont.className
        } z-10 p-2  w-full px-5 sm:px-12 py-3 flex justify-between items-center transition-all duration-700`}
      >
        <div className="text-neutral-1000 cursor-pointer">
          <CodeworkTechLogo />
        </div>
        <div
          className="text-2xl text-neutral-50 cursor-pointer hover:bg-neutral-850 rounded-full p-2 "
          onClick={handleButtonClick}
        >
          <IoMdMenu />
        </div>
      </div>

      <section className={`fixed top-0 w-full  z-10 ${poppinsFont.className}`}>
        <AnimatePresence>
          {open && (
            <motion.aside
              initial={{ height: 0 }}
              animate={{
                height: 500,
                transition: { delay: 0, duration: 0.25 },
              }}
              exit={{
                height: 0,
                transition: { delay: 0.25, duration: 0.25 },
              }}
              className="bg-primary-400  flex flex-col"
            >
              {/* nav */}
              <motion.div
                className="p-2 cursor-pointer w-full px-5 sm:px-12 py-3 flex justify-between items-center h-[70px]"
                initial="closed"
                animate="open"
                exit="closed"
                variants={itemVariants}
              >
                <motion.div
                  className="text-neutral-1000"
                  whileHover={{ scale: 1.02 }}
                >
                  <Link href="/">
                    <picture>
                      <source
                        srcSet="/logo/codework_white.png"
                        type="image/webp"
                      />
                      <img
                        src="/logo/codework_white.png"
                        alt="codework tech logo"
                        title="codework tech logo"
                        loading="lazy"
                        className="w-auto h-4"
                      />
                    </picture>
                  </Link>
                </motion.div>
                <motion.div
                  className="text-2xl text-neutral-800 cursor-pointer hover:bg-neutral-100 rounded-full p-2 "
                  whileHover={{ scale: 1.02 }}
                  onClick={handleButtonClick}
                >
                  <IoCloseCircleOutline />
                </motion.div>
              </motion.div>

              {/* menu */}
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                className="cursor-pointer px-5 sm:px-12 sm:pt-10 flex justify-center sm:justify-between items-center sm:mb-10 h-screen"
              >
                <NavbarLeft handleClick={handleButtonClick} />

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
