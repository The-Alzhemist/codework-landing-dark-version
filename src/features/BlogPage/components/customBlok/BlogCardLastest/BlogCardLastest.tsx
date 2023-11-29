
import { storyblokEditable } from "@storyblok/react";
import { BlogCardLastestProps } from "./interface";
import { DateTime } from "luxon";
import Link from "next/link";


const BlogCardLastest: React.FC<BlogCardLastestProps> = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
     <Link href={blok.link ? blok.link.cached_url : "#"}>
     <div className="flex flex-col-reverse sm:flex-row gap-x-5 max-w-[425px] sm:max-w-full justify-between items-center relative border border-primary-50 hover:border-primary-100 min-h-auto p-6 rounded-lg overflow-hidden cursor-pointer transition-all duration-3 hover:shadow-[0_8px_30px_rgba(233,251,100,0.1)] group">
      {/* left */}
      <div>
        {/* autoher */}
        <div className="text-white flex items-center gap-x-2 text-xs mb-2">
          <span>
            <img
              className="relative transition-all duration-100 rounded-full"
              src={
                blok.authorImage
                  ? blok.authorImage.filename
                  : "https://fakeimg.pl/30x30/282828/eae0d0/?retina=1"
              }
              width={30}
              height={30}
              alt=""
            />
          </span>
          <span className="text-primary-100">{blok.authorName ? blok.authorName : "Admin CodeWork"}</span> |
          <span>{blok.blogDate ? DateTime.fromFormat(blok.blogDate , "yyyy-MM-dd HH:mm").toFormat("dd LLL yyyy") : "-"}</span> |
        <span>{blok.readingTime ? blok.readingTime : "-"} min read. </span>
        </div>

        {/* title */}
        <div className="mb-3">
          <h3 className="relative text-lg sm:text-xl font-semibold h-[70px] sm:h-auto text-white flex items-center justify-betwee mb-2">
            <span className="max-w-[800px] py-2">{blok.blogTitle ?? "-"}</span>
          </h3>

          <p className="text-white h-[80px] sm:h-auto mb-2 flex items-start text-sm sm:text-md font-light">
          {blok.blogShortDetail ?? "-"}
          </p>
        </div>

        {/* tag */}
        <div className="flex flex-wrap gap-2">
          {blok.tags &&
            blok.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs text-secondary-200 py-2 px-3 rounded-full border border-secondary-200"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>

      {/* right */}
      <picture>
        <img
          className="relative transition-all duration-100 rounded-md grayscale-[50%] group-hover:grayscale-0 mb-5 sm:mb-0"
          src={
            blok.image.filename
              ? blok.image.filename
              : "https://fakeimg.pl/30x30/282828/eae0d0/?retina=1"
          }
          width={400}
          height={200}
          alt=""
        />
      </picture>
    </div>
     </Link>
   
  </div>
);

export default BlogCardLastest;
