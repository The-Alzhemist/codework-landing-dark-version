import React, { useContext, useState } from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { GridProps } from "./interface";
import { BlogFilterTagsContext } from "@/context/BlogFilterTagsContext/BlogFilterTagsContext";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";

const GridSortLayout: React.FC<GridProps> = ({ blok }) => {
  const DEFAULT_BLOG_LIMIT = 6;
  const [blogLimit, setBlogLimit] = useState(DEFAULT_BLOG_LIMIT);

  const blogFilterContext = useContext(BlogFilterTagsContext);

  if (!blogFilterContext) {
    console.warn("Blog Filter Context is not available");
    return null;
  }

  const { activeItem } = blogFilterContext;

  const handleSeeMore = () => {
    setBlogLimit((prevLimit) => prevLimit + DEFAULT_BLOG_LIMIT);
  };

  const filteredAndSortedBlogs = blok.columns
    ? blok.columns
        .filter((column) => column.tags.includes(activeItem) || activeItem === "All")
        .sort((a, b) => new Date(b.blogDate).getTime() - new Date(a.blogDate).getTime())
    : [];

  const visibleBlogs = filteredAndSortedBlogs.slice(0, Math.min(blogLimit, filteredAndSortedBlogs.length));

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-7 p-5 lg:p-[50px]" {...storyblokEditable(blok)}>
        {filteredAndSortedBlogs.length === 0 && (
          <div className="w-full min-h-[200px] flex flex-col justify-center items-center text-lg text-t">
            <p className="mb-4 font-bold">Oops! No {activeItem} blogs found.</p>
            <p className="text-sm">Check back later or explore other exciting content!</p>
          </div>
        )}
        {visibleBlogs.map((nestedBlok) => (
          <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
        ))}
      </div>

      {filteredAndSortedBlogs.length > blogLimit && (
        <div className="mb-10 flex justify-center">
          <PrimaryButton onClick={handleSeeMore} pathName="">
            See more
          </PrimaryButton>
        </div>
      )}
    </>
  );
};

export default GridSortLayout;
