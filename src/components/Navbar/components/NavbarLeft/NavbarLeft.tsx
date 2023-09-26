import { motion } from 'framer-motion';
import React from 'react'
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
    }
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
          <div className="flex flex-col  gap-y-5">
                  {menuList.map((menu: any) => (
                    <React.Fragment key={menu}>
                      <motion.div
                        whileHover={{ x: 50 }}
                        variants={itemVariants}
                        className="text-white hover:text-primary-500 text-5xl font-bold cursor-pointer"
                      >
                        {menu.name}
                      </motion.div>
                    </React.Fragment>
                  ))}
                </div>
    </>
  )
}
