import React from 'react';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { GridProps } from './interface';

const Grid: React.FC<GridProps> = ({ blok }) => {
  // Sort the columns by blogDate
  const sortedColumns = blok.columns
    ? [...blok.columns].sort((a, b) => {
        const dateA = new Date(a.blogDate).getTime();
        const dateB = new Date(b.blogDate).getTime();
        return dateB - dateA;
      })
    : [];

  return (
    <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-7 p-5 lg:p-[50px]" {...storyblokEditable(blok)}>
      {!sortedColumns.length && <p>No Blog</p>}
      {sortedColumns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;