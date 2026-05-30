import { poppinsFont } from "@/lib/fonts";
import React from 'react'
import { ParagraphInterfaceProps } from './interface';
import { twMerge } from 'tailwind-merge';

const Paragraph = (props:ParagraphInterfaceProps) => {
  const style = twMerge(`${poppinsFont.className} text-2xl `, props.className)
  return (
      <p className={style}>
            {props.children}
      </p>
  )
}

export default Paragraph
