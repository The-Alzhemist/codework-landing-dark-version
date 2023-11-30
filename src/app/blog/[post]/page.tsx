import React from "react";
import { Poppins } from "next/font/google";
import {
  ISbStoriesParams,
  StoryblokStory,
  getStoryblokApi,
} from "@storyblok/react/rsc";
import ContactHomeSection from "@/components/ContactHomeSection/ContactHomeSection";
import SocialContactFloating from "@/components/SocialContactFloating/SocialContactFloating";
import { getLinks } from "@/utils/storyblok";
import Breadcrumb from "@/features/BlogPage/components/Breadcrumb/Breadcrumb";


const poppinsFont = Poppins({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export default async function PostPage({ params }: any) {
  const { data } = await fetchData(params.post);

  return (
    <>
      <main
        className={`${poppinsFont.className} pt-20 sm:pt-0 relative  md:py-[50px] mx-auto px-5 lg:px-[250px] bg-neutral-1000`}
      >
       <Breadcrumb postPath={params.post}/>

        <StoryblokStory story={data.story} />
        <SocialContactFloating />
      </main>
      <ContactHomeSection />
    </>
  );
}

async function fetchData(post: any) {
  let sbParams:ISbStoriesParams = { version: "draft" };
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/blog/${post}`, sbParams);
}


export async function generateStaticParams() {
  const links = await getLinks("blog/");
  const paths: any[] = [];
  
  Object.keys(links).forEach((linkKey) => {
    if (links[linkKey].is_folder || links[linkKey].slug === "blog/") {
      return;
    }
    const slug = links[linkKey].slug.replace("blog/", "");
    paths.push({ post: slug });
  });

  return paths;
}

