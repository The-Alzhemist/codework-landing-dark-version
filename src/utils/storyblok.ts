import { getStoryblokApi } from "@storyblok/react/rsc";


/* cdn/links/ สำหรับ get path ทั้งหมดที่ส้รางใน storyblok 
จุดประสงค์เพื่อเอามาใช้ในการ build dynamic routing */
export const getLinks = async (pathLink: string) => {
    const storyblokApi = getStoryblokApi();
    if (!storyblokApi) {
      return;
    }
    return storyblokApi
      .get("cdn/links/", {
        starts_with: pathLink
      })
      .then((res) => res.data.links);
  };
  