import { StoryblokRichtextContent } from "storyblok-rich-text-react-renderer";

export interface BlogDetailTextProps {
    blok: {
      text: {
        type: "doc";
        content: StoryblokRichtextContent[];
      };
    };
  }
  