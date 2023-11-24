"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
 
/** Import your components */
import Page from "./Page";
import Teaser from "./Teaser";
import Feature from "./Feature";
import Grid from "./Grid";
import BlogCard from './BlogCard'
 
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  blogCard: BlogCard
};
 
storyblokInit({
  accessToken: "NleD8v5eHeN3VQGJ0n4j3Att",
  use: [apiPlugin],
  components
});
 
export default function StoryblokProvider({ children }) {
  return children;
}