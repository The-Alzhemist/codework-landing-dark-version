import React from 'react';
import { storyblokEditable } from "@storyblok/react/rsc";
import { ImageProps } from './interface';


const Image: React.FC<ImageProps> = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="relative">
    <img
      className="w-full"
      src={
        blok.image
          ? blok.image.filename
          : "https://fakeimg.pl/300x157/282828/eae0d0/?retina=1"
      }
      alt="Description" // Add appropriate alt text for accessibility
    />
  </div>
);

export default Image;
