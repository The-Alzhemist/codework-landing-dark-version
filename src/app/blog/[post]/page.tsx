import React from "react";
import BlogPostWrapper from "@/features/BlogPage/components/BlogPost/BlogPostWrapper";
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
  const resultArray: any = [];
  const storyblokApi = getStoryblokApi();
  const links = storyblokApi
    .get("cdn/links/", {
      starts_with: "blog/",
    })
    .then((response) => {

      const linkObj = [response.data.links];

      for (const item of linkObj) {
        // Loop through the inner objects
        for (const key in item) {
          if (item.hasOwnProperty(key)) {
            const realPath = item[key].real_path;
            resultArray.push({ path: realPath });
          }
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
  // console.log('links #1 >>>>> ', links)
  console.log('resultArray >>>>>>',resultArray )
  return [{ post: "1" }, { post: "2" }, { post: "3" }];
}
