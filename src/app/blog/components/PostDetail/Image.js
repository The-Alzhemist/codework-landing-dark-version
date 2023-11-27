import { storyblokEditable } from "@storyblok/react/rsc";

const Image = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="relative">
   <img  className="w-full" src="https://fakeimg.pl/400x100" />
  </div>
);

export default Image;
