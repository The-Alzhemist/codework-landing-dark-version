export const dynamicParams = true 
export const revalidate = 6

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
import { Metadata, ResolvingMetadata } from "next";
import { MetaArrayItem, PathItem, PostPageProps } from "./interface";

const poppinsFont = Poppins({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});



export default async function PostPage({ params }: PostPageProps) {
  const { data } = await fetchData(params.post);

  return (
    <>
      <main
        className={`${poppinsFont.className} pt-20 sm:pt-0 relative  md:py-[50px] mx-auto px-5  bg-neutral-1000`}
      >
        <div className="max-w-[800px] mx-auto">
        <Breadcrumb postPath={params.post} />
        <StoryblokStory story={data.story} />
        </div>

        <div className="bg-teal-600">
        STORYBLOK_CONTENT_VERSION:    {process.env.STORYBLOK_CONTENT_VERSION} | 
        STORYBLOK_REVALIDATE_TIME_SECOND: {process.env.STORYBLOK_REVALIDATE_TIME_SECOND} | 
        STORYBLOK_ACCESS_TOKEN: {process.env.STORYBLOK_ACCESS_TOKEN}
        </div>
       
      </main>

      <SocialContactFloating />
      <ContactHomeSection />
    </>
  );
}



async function fetchData(post: string) {
  let sbParams: ISbStoriesParams = {
    version: process.env.STORYBLOK_CONTENT_VERSION as
      | "draft"
      | "published"
      | undefined,
  };
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/blog/${post}`, sbParams);
}


export async function generateStaticParams() {
  const links = await getLinks("blog/");
  const paths: PathItem[] = [];

  Object.keys(links).forEach((linkKey) => {
    if (links[linkKey].is_folder || links[linkKey].slug === "blog/") {
      return;
    }
    const slug = links[linkKey].slug.replace("blog/", "");
    paths.push({ post: slug });
  });

  return paths;
}




export async function generateMetadata(
  { params }: {params: { post: string }},
  parent: ResolvingMetadata
): Promise<Metadata> {
  let seoTag: Metadata = {};

  const { data } = await fetchData(params.post);

  const metaArray:MetaArrayItem[] = data.story.content.body.filter(
    (item: MetaArrayItem) => (item.metaTitle) 
  );
 
 
  metaArray.forEach((item: MetaArrayItem) => {
    seoTag = {
      title: item.metaTitle,
      description: item.metaDescription,
      openGraph: {
        title: item.metaTitle,
        description: item.metaDescription,
        images: [
          {
            url: item.metaImage ? item.metaImage.filename : "/logo/meta/meta-tag-home.jpg",
            width: 800,
            height: 600,
            alt: "",
          },
        ],
      },
    };
  });

  return seoTag;
}
