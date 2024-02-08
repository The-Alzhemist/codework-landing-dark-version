"use client";

import React from "react";

import { AiFillMessage } from "react-icons/ai";
import withSocialContactFloating from "./withSocialContactFloating";
import {
  ContactLink,
  SocialContactFloatingProps,
  SocialLink,
} from "./interface";

const SocialContactFloating = ({
  isClicked,
  handleClick,
  socialListRef,
  socialLinks,
  contactLinks,
  t,
}: SocialContactFloatingProps) => {
  return (
    <div
      className="flex flex-col gap-y-2 fixed bottom-4 right-5 z-40 transition-all duration-300"
      ref={socialListRef}
    >
      <button
        className="flex gap-x-1 items-center justify-center rounded-full px-5 py-3 bg-slate-300"
        onClick={handleClick}
      >
        <AiFillMessage />
        <span> {t("Button.Contact")}</span>
      </button>

      {isClicked && (
        <div className="absolute min-w-[250px] bottom-14 left-[-120px] p-5 bg-slate-100 shadow-md rounded-2xl z-10 cursor-pointer flex flex-col gap-y-2 ">
          {socialLinks.map((link: SocialLink, index: number) => (
            <a
              key={index}
              href={link.url}
              rel="nofollow"
              aria-label={`Contact us with ${link.text}`}
              target="_blank"
              className="hover:text-primary-400 transition-all duration-150 flex  items-center justify-start gap-x-2"
            >
              {link.icon}
              <span>{link.text}</span>
            </a>
          ))}

          <div className="border-t border-slate-200 w-full pt-1">
            {contactLinks.map((link: ContactLink, index: number) => (
              <a
                key={index}
                href={link.url}
                className="hover:text-primary-400 transition-all duration-150 flex  items-center justify-start gap-x-2 pt-2"
              >
                {link.icon}
                <span className="text-xs">{link.text}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const WrappedComponent = withSocialContactFloating(SocialContactFloating);
export default WrappedComponent;
