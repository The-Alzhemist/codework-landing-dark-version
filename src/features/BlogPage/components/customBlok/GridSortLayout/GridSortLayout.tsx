import React, { useContext } from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { GridProps } from "./interface";
import { BlogFilterTagsContext } from "@/context/BlogFilterTagsContext/BlogFilterTagsContext";

const GridSortLayout: React.FC<GridProps> = ({ blok }) => {
  const blogFilterContext = useContext(BlogFilterTagsContext);
  if (!blogFilterContext) {
    console.warn("Context is not available");
    return;
  }

  const { activeItem } = blogFilterContext;

  const sortedAndFilteredColumns = blok.columns
    ? [...blok.columns]
        .filter(
          (column) => column.tags.includes(activeItem) || activeItem === "All"
        )
        .sort((a, b) => {
          const dateA = new Date(a.blogDate).getTime();
          const dateB = new Date(b.blogDate).getTime();
          return dateB - dateA;
        })
    : [];

  return (
    <div
      className="flex flex-row flex-wrap justify-center sm:justify-start gap-7 p-5 lg:p-[50px]"
      {...storyblokEditable(blok)}
    >
      {!sortedAndFilteredColumns.length && (
        <div className="w-full min-h-[200px] flex flex-col justify-center items-center text-lg text-white">
          <p className="mb-4 font-bold">Oops! No {activeItem} blogs found.</p>
          <p className="text-sm">
          Check back later or explore other exciting content!
          </p>
        </div>
      )}
      {sortedAndFilteredColumns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default GridSortLayout;
