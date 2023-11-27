


import React from 'react'
import BlogPostWrapper from '@/features/BlogPage/components/BlogPost/BlogPostWrapper';
import { Poppins } from 'next/font/google';
import { ISbStoriesParams, StoryblokStory, getStoryblokApi } from '@storyblok/react/rsc';

const poppinsFont = Poppins({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});


export default async function PostPage({params}: any) {
  console.log("params >>", params.post)
  const { data } = await fetchData(params.post);

  return (
    <main className={` ${poppinsFont.className} relative md:py-[50px] mx-auto px-5 lg:px-[200px] bg-neutral-1000`}>
      <StoryblokStory story={data.story}/>
    </main>
  );
}
 

async function fetchData(post:any) {
  let sbParams: ISbStoriesParams = { version: "draft" };
  
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/blog/${post}`, sbParams);
}



