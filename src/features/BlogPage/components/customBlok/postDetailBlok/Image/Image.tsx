import React from 'react';
import { storyblokEditable } from "@storyblok/react/rsc";
import { ImageProps } from './interface';


const Image: React.FC<ImageProps> = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="relative">
    <img
      className="w-full"
      src={
        blok.Image.filename
          ? blok.Image.filename
          : "https://fakeimg.pl/30x30/282828/eae0d0/?retina=1"
      }
      alt="Description" // Add appropriate alt text for accessibility
    />
  </div>
);

export default Image;
