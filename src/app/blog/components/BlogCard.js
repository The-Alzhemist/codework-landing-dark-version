import { storyblokEditable } from "@storyblok/react/rsc";

const BlogCard = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <div className="relative sm:w-[100%] max-w-[425px] border border-primary-50 hover:border-primary-100  min-h-auto sm:min-h-[500px] p-6 rounded-lg overflow-hidden cursor-pointer transition-all duration-3  hover:shadow-[0_8px_30px_rgba(233,251,100,0.1)] group">
      <picture className="mb-5">
        <img
          className="relative  transition-all duration-100 rounded-md grayscale-[50%] group-hover:grayscale-0"
          src="https://fakeimg.pl/400x200/282828/eae0d0/?retina=1"
          alt=""
        />
      </picture>

      {/* autoher */}
      <div className="text-white flex items-center gap-x-2 text-xs mt-5">
        <span>
          <img
            className="relative  transition-all duration-100 rounded-full"
            src="https://fakeimg.pl/30x30/282828/eae0d0/?retina=1"
            width={30}
            height={30}
            alt=""
          />
        </span>
        <span>Nueng Aphiwit</span> |<span>23 Nov 2023</span> |
        <span>3 min read</span>
      </div>

      {/* title */}
      <div>
        <h3 className="relative text-lg sm:text-xl font-semibold h-[70px] sm:h-[135px] text-white flex items-center justify-between">
          <span className="max-w-[360px] py-2">
            Next js Tutorial for Beginners | Nextjs 13 (App Router) with
            TypeScript
          </span>
        </h3>

        <p className="text-white h-[50px] sm:h-[100px] mb-5 flex items-start text-sm sm:text-md font-light">
          You just have to put your image size after our URL. Only the first
          parameter is mandatory. There are options too, you can pass a text, or
          change some colors.
        </p>
      </div>

      {/* tag */}
      <div className="flex flex-wrap gap-x-2">
        <span className="text-xs text-white  py-2 px-4 rounded-full border border-primary-200">
          Web development
        </span>

        <span className="text-xs text-white  py-2 px-4 rounded-full border border-primary-200">
          UX IU
        </span>
      </div>
    </div>

    {/* {blok.name} */}
  </div>
);

export default BlogCard;
