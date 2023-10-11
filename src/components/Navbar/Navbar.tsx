"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import withNavbar from "./withNavbar";
import { NavbarRight } from "./components/NavbarRight/NavbarRight";
import { NavbarLeft } from "./components/NavbarLeft/NavbarLeft";
import { NavbarProps } from "./interface";
import { IoMdMenu } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { CodeworkTechLogo } from "./components/BrandLogo/BrandLogo";



const Navbar = ({ handleButtonClick, open, itemVariants }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined" && window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleScroll);

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`${
          isScrolled
            ? " fixed bg-neutral-1000"
            : "absolute bg-transparent"
        } z-10   p-2  w-full px-5 sm:px-12 py-3 flex justify-between items-center transition-all duration-700  `}
      >
        <div className="text-white cursor-pointer">
          <CodeworkTechLogo />
        </div>
        <div
          className="text-2xl text-neutral-50 cursor-pointer hover:bg-neutral-600 rounded-full p-2 "
          onClick={handleButtonClick}
        >
          <IoMdMenu />
        </div>
      </div>

      <section className="fixed top-0 w-full  z-10 ">
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
              className="bg-white  flex flex-col"
            >
              {/* nav */}
              <motion.div
                className="  p-2 cursor-pointer w-full px-5 sm:px-12 py-3 flex justify-between items-center h-[70px]"
                initial="closed"
                animate="open"
                exit="closed"
                variants={itemVariants}
              >
                <motion.div className="text-white" whileHover={{ scale: 1.02 }}>
                  <Link href="/">
                    <picture>
                      <source
                        srcSet="/logo/codework-dark-logo-1x.webp"
                        type="image/webp"
                      />
                      <img
                        src="/logo/codework-dark-logo-1x.webp"
                        alt="codework tech logo"
                        title="codework tech logo"
                        loading="lazy"
                        className="w-auto h-4"
                      />
                    </picture>
                  </Link>
                </motion.div>
                <motion.div
                  className="text-2xl text-neutral-800 cursor-pointer hover:bg-neutral-400 rounded-full p-2 "
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
                className="cursor-pointer px-5 sm:px-12 pt-10 flex justify-between items-center mb-10 h-screen"
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
