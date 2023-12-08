"use client"
import React from 'react';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import Feature from '../defaultBlok/Feature/Feature';
import Grid from '../defaultBlok/Grid/Grid';
import Teaser from '../defaultBlok/Teaser/Teaser';
import Page from '../defaultBlok/Page/Page';
import BlogCard from '../customBlok/BlogCard/BlogCard';
import AuthorSection from '../customBlok/postDetailBlok/AuthorSection/AuthorSection';
import BlogDetailText from '../customBlok/postDetailBlok/BlogDetailText/BlogDetailText';
import BlogCardLastest from '../customBlok/BlogCardLastest/BlogCardLastest';
import BlogH2 from '../customBlok/BlogH2/blogH2';
import BlogDetailTag from '../customBlok/postDetailBlok/BlogDetailTag/BlogDetailTag';
import ImageCoverDetailBlog from '../customBlok/postDetailBlok/ImageCoverDetailBlog/ImageCoverDetailBlog';
import HorizontalScroll from '../customBlok/HorizontalScroll/HorizontalScroll';
import GridSortLayout from '../customBlok/GridSortLayout/GridSortLayout';

const components: { [key: string]: React.ComponentType<any> } = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  gridSortLayout: GridSortLayout,
  blogCard: BlogCard,
  authorSection: AuthorSection,
  blogDetailText: BlogDetailText,
  blogCardLastest: BlogCardLastest,
  blogH2: BlogH2,
  blogDetailTag: BlogDetailTag,
  imageCoverDetailBlog: ImageCoverDetailBlog,
  horizontalScroll: HorizontalScroll
};

const REVALIDATE_TIME = Number(process.env.STORYBLOK_REVALIDATE_TIME_SECOND as number | false | undefined )

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN as string,
  use: [apiPlugin],
  components,
  apiOptions: {
    fetch: (input, init) =>
      fetch(input, { ...init, next: { revalidate: REVALIDATE_TIME }}),
  },
});

const StoryblokProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default StoryblokProvider;
