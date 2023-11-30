"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "./defaultBlok/Page/Page";
import Teaser from "./defaultBlok/Teaser/Teaser";
import Feature from "./defaultBlok/Feature/Feature";
import Grid from "./defaultBlok/Grid/Grid";
import BlogCardLastest from './customBlok/BlogCardLastest/BlogCardLastest'
import BlogCard from "./customBlok/BlogCard/BlogCard";
import AuthorSection from "./customBlok/postDetailBlok/AuthorSection/AuthorSection";
import Image from "./customBlok/postDetailBlok/Image/Image";
import BlogDetailText from "./customBlok/postDetailBlok/BlogDetailText/BlogDetailText";
import BlogH2 from './customBlok/BlogH2/blogH2'
import BlogDetailTag from "./customBlok/postDetailBlok/BlogDetailTag/BlogDetailTag";


const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  blogCard: BlogCard,
  authorSection: AuthorSection,
  image: Image,
  blogDetailText: BlogDetailText,
  blogCardLastest: BlogCardLastest,
  blogH2: BlogH2,
  blogDetailTag: BlogDetailTag
};

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
  apiOptions: {
    fetch: (input, init) =>
      fetch(input, { ...init, next: { revalidate: 3600 } }),
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}


