import { storyblokEditable } from "@storyblok/react/rsc";
import { DateTime } from "luxon";
import { AuthorSectionProps } from "./interface";


const AuthorSection: React.FC<AuthorSectionProps> = ({ blok }) => (
  <>
    <div {...storyblokEditable(blok)}>
      {/* autoher */}
      <div className="text-white flex items-center gap-x-2 text-xs mt-5 mb-3">
        <span>
          <img
            className="relative  transition-all duration-100 rounded-full"
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
        <span>{blok.blogDate ? DateTime.fromFormat(blok.blogDate, "yyyy-MM-dd HH:mm").toFormat("dd LLL yyyy") : "-"}</span> |
        <span>{blok.readingTime ? blok.readingTime : "-"}min read.</span>
      </div>
    </div>

    {/* title */}
    <div>
      <h3 className="relative text-lg sm:text-3xl font-semibold  text-white mb-5 flex items-center justify-between">
        <span className="max-w-[800px] py-2">{blok.blogTitle ?? "-"}</span>
      </h3>
    </div>
  </>
);

export default AuthorSection;
