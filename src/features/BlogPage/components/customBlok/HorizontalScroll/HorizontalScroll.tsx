import React, { useContext } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { BlogFilterTagsContext } from "@/context/BlogFilterTagsContext/BlogFilterTagsContext";
import { FILTER_TAGS } from "@/constants/blogPage/constant";

const HorizontalScroll: React.FC<any> = ({ blok }) => {
  const sortedLists = [...FILTER_TAGS].sort((a, b) => a.localeCompare(b));

  const blogFilterContext = useContext(BlogFilterTagsContext);
  if (!blogFilterContext) {
    console.warn("Context is not available");
    return;
  }

  const { activeItem, setActiveItem } = blogFilterContext;

  const changeToActive = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div {...storyblokEditable(blok)} className="p-5 lg:px-[50px]">
      <div className="flex flex-row flex-nowrap md:flex-wrap justify-left gap-5 items-center overflow-scroll max-w-[1000px]">
        {sortedLists.map((item: any, index: number) => (
          <span
          key={`blog-item-${index}`}
            className={`text-xs py-2 px-3 rounded-full min-w-fit h-[35px] border cursor-pointer ${
              item === activeItem
                ? "border-white bg-white text-black"
                : "border-primary-200 text-primary-200"
            }`}
            onClick={() => changeToActive(item)}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
