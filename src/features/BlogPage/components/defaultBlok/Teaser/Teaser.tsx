import React from 'react';
import { storyblokEditable } from "@storyblok/react/rsc";

interface TeaserProps {
  blok: {
    headline: string;
    // Add other properties if needed
  };
}

const Teaser: React.FC<TeaserProps> = ({ blok }) => (
  <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>
);

export default Teaser;
