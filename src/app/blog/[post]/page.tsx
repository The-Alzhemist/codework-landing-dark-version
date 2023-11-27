


import React from 'react'
import BlogPostWrapper from '@/features/BlogPage/components/BlogPost/BlogPostWrapper';
import { Poppins } from 'next/font/google';

const poppinsFont = Poppins({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});


export default async function PostPage() {

  return (
    <main className={` ${poppinsFont.className} relative md:py-[50px] mx-auto px-5 lg:px-[200px] bg-neutral-1000`}>
      <BlogPostWrapper/>
    </main>
  );
}
 

