import { storyblokEditable } from "@storyblok/react/rsc";

const BlogTag = ({ blok }) => (
  <div className="text-xs text-white font-bold py-2 px-4 rounded-full border-2 border-pri" {...storyblokEditable(blok)}>
    Web development 
  </div>
);

export default BlogTag;
