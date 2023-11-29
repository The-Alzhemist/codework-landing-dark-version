import React from 'react';
import { storyblokEditable } from "@storyblok/react/rsc";
import { BlogDetailTagProps } from './interface';


const BlogDetailTag: React.FC<BlogDetailTagProps> = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="mb-10">
      <div className="flex flex-wrap gap-2">
        {blok.tags &&
          blok.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="text-xs text-secondary-200 py-2 px-3 rounded-full border border-secondary-200"
            >
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
};

export default BlogDetailTag;
