import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
 
const Grid = ({ blok }) => {
  return (
    <div className="flex flex-wrap justify-center gap-7 p-5 lg:p-[50px]" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
 
export default Grid;