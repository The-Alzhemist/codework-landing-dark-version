import React from 'react';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { PageProps } from './interface';


const Page: React.FC<PageProps> = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
