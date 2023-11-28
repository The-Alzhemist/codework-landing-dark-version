import { storyblokEditable } from "@storyblok/react/rsc";

const Image = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="relative">
   <img  className="w-full" src={
              blok.Image.filename
                ? blok.Image.filename
                : "https://fakeimg.pl/30x30/282828/eae0d0/?retina=1"
            } />
  </div>
);

export default Image;
