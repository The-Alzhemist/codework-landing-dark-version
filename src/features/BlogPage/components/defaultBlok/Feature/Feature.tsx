import React from 'react';
import { storyblokEditable } from "@storyblok/react/rsc";
import { FeatureProps } from './interface';



const Feature: React.FC<FeatureProps> = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);

export default Feature;