import React from "react";
import { Poppins } from "next/font/google";
import {
  ISbStoriesParams,
  StoryblokStory,
  getStoryblokApi,
} from "@storyblok/react/rsc";

const poppinsFont = Poppins({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export default async function PostPage({ params }: any) {
  const { data } = await fetchData(params.post);

  return (
    <main
      className={` ${poppinsFont.className} relative md:py-[50px] mx-auto px-5 lg:px-[200px] bg-neutral-1000`}
    >
      <StoryblokStory story={data.story} />
    </main>
  );
}

async function fetchData(post: any) {
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/blog/${post}`, sbParams);
}

export async function generateStaticParams() {
  const links = await getLink();
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

const getLink = async () => {
  const storyblokApi = getStoryblokApi();
  if (!storyblokApi) {
    return;
  }
  return storyblokApi
    .get("cdn/links/", {
      starts_with: "blog/",
    })
    .then((res) => res.data.links);
};
