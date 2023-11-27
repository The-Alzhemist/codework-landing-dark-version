import { storyblokEditable } from "@storyblok/react/rsc";

const BlogCardLastest = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <div className="flex flex-col-reverse sm:flex-row gap-x-5 max-w-[425px] sm:max-w-full justify-between items-center  relative  border border-primary-50 hover:border-primary-100  min-h-auto p-6  rounded-lg overflow-hidden cursor-pointer transition-all duration-3  hover:shadow-[0_8px_30px_rgba(233,251,100,0.1)] group">
      {/* left */}
      <div>
        {/* autoher */}
        <div className="text-white flex items-center gap-x-2 text-xs">
          <span>
            <img
              className="relative  transition-all duration-100 rounded-full"
              src="https://fakeimg.pl/30x30/282828/eae0d0/?retina=1"
              width={30}
              height={30}
              alt=""
            />
          </span>
          <span>Nueng Aphiwit</span> |
          <span>26 Nov 2023</span> |
          <span>10 min read.</span>
        </div>

        {/* title */}
        <div>
          <h3 className="relative text-lg sm:text-xl font-semibold h-[70px] sm:h-auto text-white flex items-center justify-between">
            <span className="max-w-[360px] py-2">CSS trick: transition from height 0 to auto!</span>
          </h3>

          <p className="text-white h-[80px] sm:h-auto  mb-2 flex items-start text-sm sm:text-md font-light">
          If you messed around with CSS for long enough, chances are you ve tried at least once to make a transition from height: 0 to auto... only to find out that it doesnt work! 😢
          </p>
        </div>

        {/* tag */}
        <div className="flex flex-wrap gap-2">
          {blok.tags &&
            blok.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs text-white py-2 px-4 rounded-full border border-primary-200"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>

      {/* right */}
     
      <picture>
        <img
          className="relative  transition-all duration-100 rounded-md grayscale-[50%] group-hover:grayscale-0"
          src="https://fakeimg.pl/400x200/282828/eae0d0/?retina=1"
          width={400}
          height={200}
          alt=""
        />
      </picture>
    
     
    </div>
  </div>
);

export default BlogCardLastest;
