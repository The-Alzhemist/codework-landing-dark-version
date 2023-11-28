import { storyblokEditable } from "@storyblok/react/rsc";

const AuthorSection = ({ blok }) => (
  <>
    <div {...storyblokEditable(blok)}>
      {/* autoher */}
      <div className="text-white flex items-center gap-x-2 text-xs mt-5">
        <span>
          <img
            className="relative  transition-all duration-100 rounded-full"
            src={
              blok.image.filename
                ? blok.image.filename
                : "https://fakeimg.pl/30x30/282828/eae0d0/?retina=1"
            }
            width={30}
            height={30}
            alt=""
          />
        </span>
        <span>{blok.authorName ? blok.authorName : "Admin CodeWork"}</span> |
        <span>{blok.blogDate ? blok.blogDate : "-"}</span> |
        <span>{blok.readingTime ? blok.readingTime : "-"}</span>
      </div>
    </div>

    {/* title */}
    <div>
      <h3 className="relative text-lg sm:text-xl font-semibold h-[70px] sm:h-[110px] text-white flex items-center justify-between">
        <span className="max-w-[800px] py-2">{blok.blogTitle ?? "-"}</span>
      </h3>
    </div>
  </>
);

export default AuthorSection;
