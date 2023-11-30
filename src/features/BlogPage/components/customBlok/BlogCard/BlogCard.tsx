// Import necessary types and modules
import { FC } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";
import { BlogCardProps } from "./interface";
import { DateTime } from "luxon";


// Define the props interface

// Convert the component to TypeScript
const BlogCard: FC<BlogCardProps> = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <Link href={blok.link ? blok.link.cached_url : "#"}>
      <div className="relative sm:w-[100%] max-w-[425px] border border-primary-50 hover:border-primary-100 min-h-auto sm:min-h-[500px] p-6 rounded-lg overflow-hidden cursor-pointer transition-all duration-3 hover:shadow-[0_8px_30px_rgba(233,251,100,0.1)] group">
        <picture className="mb-5">
          <img
            className="relative transition-all duration-100 rounded-md"
            src={
              blok.image.filename
                ? blok.image.filename
                : "https://fakeimg.pl/400x200/282828/eae0d0/?retina=1"
            }
            width={400}
            height={200}
            alt=""
          />
        </picture>

        {blok.recommendFrag && (
          <div className=" absolute transform -rotate-45 bg-green-600 text-center text-white font-semibold py-1 left-[-35px] top-[32px] w-[170px]">
            {blok.recommendFrag}
          </div>
        )}

        {/* autoher */}
        <div className="text-white flex items-center gap-x-2 text-xs mt-5 mb-5 sm:mb-0">
          <span>
            <img
              className="relative transition-all duration-100 rounded-full"
              src={
                blok.authorImage ?
                   blok.authorImage.filename
                  : "https://fakeimg.pl/30x30/282828/eae0d0/?retina=1"
              }
              width={30}
              height={30}
              alt=""
            />
          </span>
          <span className="text-primary-100">{blok.authorName ? blok.authorName : "Admin CodeWork"}</span> |
          <span>{blok.blogDate ? DateTime.fromFormat(blok.blogDate , "yyyy-MM-dd HH:mm").toFormat("dd LLL yyyy") : "-"}</span> |
          <span>{blok.readingTime ? blok.readingTime : "-"} min read.</span>
        </div>

        {/* title */}
        <div>
          <h3 className="relative text-lg sm:text-xl font-semibold h-[70px] sm:h-[135px]  text-white flex items-center justify-between">
            <span className="max-w-[360px] py-2">{blok.blogTitle ?? "-"}</span>
          </h3>

          <p className="text-white h-[80px] mb-2 flex items-start text-sm sm:text-md font-light mb-5">
            {blok.blogShortDetail ?? "-"}
          </p>
        </div>

        {/* tag */}
        <div className="flex flex-wrap gap-2">
          {blok.tags &&
            blok.tags.sort().map((tag, index) => (
              <span
                key={index}
                className="text-xs text-secondary-200 py-2 px-3 rounded-full border border-secondary-200"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </Link>
  </div>
);

export default BlogCard;
