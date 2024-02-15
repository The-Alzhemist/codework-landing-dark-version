import React from "react";
import { PiFacebookLogoBold, PiLinkedinLogoBold } from "react-icons/pi";
import { FaLine, FaInstagram } from "react-icons/fa6";
import IconSocialLink from "../IconSocialLink/IconSocialLink";

const SocialsSection = () => {
  return (
    <section className="px-2 md:px-5 mt-8 sm:mt-0 text-white">
      <div className="mb-5">Other contact channels</div>
      <div className="flex justify-left items-center gap-x-2 mb-2">
        <IconSocialLink linkName="#" iconName={<PiFacebookLogoBold />} />
        <IconSocialLink linkName="#" iconName={<FaInstagram />} />
        <IconSocialLink linkName="#" iconName={<PiLinkedinLogoBold />} />
        <span className="font-light text-sm">Codework Tech</span>
      </div>
      <div className="flex justify-left items-center gap-x-2">
        <IconSocialLink linkName="#" iconName={<FaLine />} />
        <span className="font-light text-sm">@Codeworktech</span>
      </div>
    </section>
  );
};

export default SocialsSection;
