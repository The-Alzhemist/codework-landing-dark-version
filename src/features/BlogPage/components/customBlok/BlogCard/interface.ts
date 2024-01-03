export interface BlogCardProps {
    blok: {
      slugBlog?: string;
      image: {
        filename?: string;
      };
      authorName?: string;
      blogDate?: string;
      readingTime?: string;
      blogTitle?: string;
      blogShortDetail?: string;
      tags?: string[];
      recommendFrag?: string;
      authorImage:  {
        filename?: string;
      };
      link?: {
        cached_url: string;
      }
    };
  }