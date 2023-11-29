export interface BlogCardLastestProps {
    blok: {
      authorName?: string;
      blogDate?: string;
      readingTime?: string;
      tags?: string[];
      image: {
        filename?: string;
      };
      blogShortDetail?: string;
      blogTitle?: string
      authorImage:  {
        filename?: string;
      };
      link?: {
        cached_url: string;
      }
    };
  }