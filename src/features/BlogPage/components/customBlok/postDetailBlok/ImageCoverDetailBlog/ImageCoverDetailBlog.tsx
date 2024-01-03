import React from 'react';
import { storyblokEditable } from "@storyblok/react/rsc";



const ImageCoverDetailBlog: React.FC<any> = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="relative">
    <img
      className="w-full"
      src={
        blok.coverImg
          ? blok.coverImg.filename
          : "https://fakeimg.pl/300x157/282828/eae0d0/?retina=1"
      }
      alt="Description" // Add appropriate alt text for accessibility
    />
  </div>
);

export default ImageCoverDetailBlog;
