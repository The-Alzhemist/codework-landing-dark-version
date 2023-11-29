import React from 'react';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { GridProps } from './interface';


const Grid: React.FC<GridProps> = ({ blok }) => (
  <div className="flex flex-wrap justify-center gap-7 p-5 lg:p-[50px]" {...storyblokEditable(blok)}>
    {blok.columns.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);

export default Grid;