import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { BlogDetailTagProps } from "./interface";
import { FacebookShareButton, LinkedinShareButton } from "react-share";
import { PiFacebookLogoBold, PiLinkedinLogoBold } from "react-icons/pi";

const BlogDetailTag: React.FC<BlogDetailTagProps> = ({ blok }) => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";

  return (
    <div {...storyblokEditable(blok)} className="mb-10">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-wrap gap-2">
          {blok.tags &&
            blok.tags.sort().map((tag: string, index: number) => (
              <span
                key={index}
                className="text-xs text-secondary-200 py-2 px-3 rounded-full border border-secondary-200"
              >
                {tag}
              </span>
            ))}
        </div>
        <div className="flex gap-2">
          <FacebookShareButton url={currentUrl}>
            <div className="text-xl text-white">
              <PiFacebookLogoBold />
            </div>
          </FacebookShareButton>
          <LinkedinShareButton url={currentUrl}>
            <div className="text-xl text-white">
              <PiLinkedinLogoBold />
            </div>
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailTag;
