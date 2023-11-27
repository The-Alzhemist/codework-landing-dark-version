
import { storyblokEditable } from "@storyblok/react/rsc";
 
const BlogH2 = ({ blok }) => {
  return <h2 {...storyblokEditable(blok)} className="p-5 pt-10 lg:px-[50px] w-full text-2xl md:text-4xl font-semibold flex  text-primary-100">{blok.headline}</h2>
  
  ;
};
 
export default BlogH2;