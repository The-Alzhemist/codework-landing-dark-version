"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
import Page from "./Page";
import Teaser from "./Teaser";
import Feature from "./Feature";
import Grid from "./Grid";
import BlogCardLastest from './BlogCardLastest'
import BlogCard from "./BlogCard";
import AuthorSection from "./PostDetail/AuthorSection";
import Image from "./PostDetail/Image";
import BlogDetailText from "./PostDetail/BlogDetailText";
import BlogH2 from './blogH2'


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
  blogH2: BlogH2
};

storyblokInit({
  accessToken: "AvAS9WNQIjtLCunkmVME0gtt",
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

export async function getLinks() {
  if(!storyblokApi) {
    return ;
  }
  const { data } = await storyblokApi.get('cdn/stories/blog/')
  const links = data ? data.links : null
  return links
}

export async function getStory(slug) {
  if(!storyblokApi) {
    return ;
  }
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`)
  const story = data ? data.story : null
  return story
}