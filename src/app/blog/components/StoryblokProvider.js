"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
import Page from "./Page";
import Teaser from "./Teaser";
import Feature from "./Feature";
import Grid from "./Grid";
import BlogCard from "./BlogCard";
import AuthorSection from './PostDetail/AuthorSection'
import Image from './PostDetail/Image'
import BlogDetailText from './PostDetail/BlogDetailText'

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  blogCard: BlogCard,
  authorSection: AuthorSection,
  image: Image,
  blogDetailText: BlogDetailText
};

storyblokInit({
  accessToken: "AvAS9WNQIjtLCunkmVME0gtt",
  use: [apiPlugin],
  components
});

export default function StoryblokProvider({ children }) {
  return children;
}
