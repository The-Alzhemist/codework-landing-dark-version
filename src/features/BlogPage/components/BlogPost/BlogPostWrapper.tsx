"use client"

import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogPostWrapper() {
  const { post } = useParams();
  const [storyData, setStoryData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let sbParams: ISbStoriesParams = { version: "draft" };
      
      const storyblokApi = getStoryblokApi();
      const response = await storyblokApi.get(`cdn/stories/blog/${post}`, sbParams);
      
      setStoryData(response.data.story);
    }

    fetchData();
  }, [post]);

  return (
    <div>
      {storyData && <StoryblokStory story={storyData} />}
    </div>
  );
}