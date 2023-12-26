import React, { useEffect, useRef, useState } from "react";

import {
    FaInstagram,
    FaLine,
    FaFacebook,
    FaLinkedin,
  } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


import { ContactLink, SocialContactFloatingProps, SocialLink } from "./interface";

const withSocialContactFloating = (Component: React.FC<SocialContactFloatingProps>) => {
  const Hoc = () => {
    const [isClicked, setIsClicked] = useState(false);
    const socialListRef = useRef<HTMLDivElement | null>(null);
    const socialLinks: SocialLink[] = [
        {
          icon: <FaFacebook />,
          text: "Facebook",
          url: "https://www.facebook.com/profile.php?id=61551048177724",
        },
        {
          icon: <FaLine />,
          text: "Line",
          url:
            "https://line.me/R/ti/p/@448yyxgh?from=page&searchId=448yyxgh",
        },
        {
          icon: <FaLinkedin />,
          text: "LinkedIn",
          url: "https://www.linkedin.com/in/your-linkedin-profile",
        },
        {
          icon: <FaInstagram />,
          text: "Instagram",
          url: "https://www.instagram.com/your-instagram-profile",
        },
      ];

      const contactLinks: ContactLink[] = [
        {
          icon: <IoCallSharp />,
          text: "(+66) 63 849 4282",
          url: "tel:0638494282",
        },
        {
          icon: <MdEmail />,
          text: "hello@codework-tech.com",
          url: "mailto:hello@codework-tech.com",
        },
      ];


    
      const handleClick = () => {
        setIsClicked(!isClicked);
      };
    
      const handleClickOutside = (event: MouseEvent) => {
        if (
          socialListRef.current &&
          !socialListRef.current.contains(event.target as Node)
        ) {
          setIsClicked(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, []);
   

    const newProps: SocialContactFloatingProps = {
        isClicked,
        handleClick,
        socialListRef,
        socialLinks,
        contactLinks
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withSocialContactFloating;
