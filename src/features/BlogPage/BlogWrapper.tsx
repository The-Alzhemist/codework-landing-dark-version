

import { ISbStoriesParams, getStoryblokApi} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import BlogIntro from "./components/BlogIntro/BlogIntro";
import SocialContactFloating from "@/components/SocialContactFloating/SocialContactFloating";
import ContactHomeSection from "@/components/ContactHomeSection/ContactHomeSection";
 
export default async function BlogWrapper() {
  const { data } = await fetchData();

   
  return (
    <div>
      <BlogIntro/>
      process.env.STORYBLOK_CONTENT_VERSION:  {process.env.STORYBLOK_CONTENT_VERSION}
      <StoryblokStory story={data.story} />
      <ContactHomeSection />
      <SocialContactFloating />
    
    </div>
  );
}
 
 async function fetchData() {
  let sbParams:ISbStoriesParams = { version: process.env.STORYBLOK_CONTENT_VERSION as "draft" | "published" | undefined };
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/blog`, sbParams);
}