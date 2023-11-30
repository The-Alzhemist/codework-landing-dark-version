

import { ISbStoriesParams, getStoryblokApi} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import BlogIntro from "./components/BlogIntro/BlogIntro";
 
export default async function BlogWrapper() {
  const { data } = await fetchData();
 
  return (
    <div>
      <BlogIntro/>
      <StoryblokStory story={data.story} />
    </div>
  );
}
 
 async function fetchData() {
  let sbParams:ISbStoriesParams = { version: "draft" };
 
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/blog`,sbParams );
}