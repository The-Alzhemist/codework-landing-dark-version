import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
 
const Grid = ({ blok }) => {
  return (
    <div className="flex flex-wrap justify-center gap-7" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
 
export default Grid;