import { Poppins, Prompt } from "next/font/google";
import React from 'react'
import { ParagraphInterfaceProps } from './interface';
import { twMerge } from 'tailwind-merge';

const poppinsFont = Poppins({
  weight: ["100", "300", "500", "700", "800"],
  subsets: ["latin"],
  display: 'swap', adjustFontFallback: false 
});

const Paragraph = (props:ParagraphInterfaceProps) => {
  const style = twMerge(`${poppinsFont.className} text-2xl `, props.className)
  return (
      <p className={style}>
            {props.children}
      </p>
  )
}

export default Paragraph
