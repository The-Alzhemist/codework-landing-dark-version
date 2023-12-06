import React from 'react';
import { storyblokEditable } from "@storyblok/react/rsc";
import {
  render,
  MARK_BOLD,
  MARK_CODE,
  NODE_PARAGRAPH,
  NODE_LI,
  NODE_IMAGE
} from "storyblok-rich-text-react-renderer";
import { BlogDetailTextProps } from './interface';


const BlogDetailText: React.FC<BlogDetailTextProps> = ({ blok }) => (
  <>
    <div {...storyblokEditable(blok)}>
      {/* autoher */}
      <div className="text-white flex flex-col items-left gap-x-2 text-lg mt-12     ">
        {render(blok.text, {
          markResolvers: {
            [MARK_BOLD]: (children) => (
              <strong className="text-primary-200">{children}</strong>
            ),
            [MARK_CODE]: (children) => (
              <div className="flex flex-wrap">
                <p className="p-2 my-2 border font-light border-white  rounded-sm">
                  {children}
                </p>
              </div>
            ),
          },
          nodeResolvers: {
            [NODE_PARAGRAPH]: (children) => (
              <p className="my-2">{children}</p>
            ),
            [NODE_LI]: (children) => (
              <li className="pl-2 flex items-center gap-x-2"><span>-</span> <span>{children}</span> </li>
            ),
            [NODE_IMAGE]: (children, props) => (
             <img className='p-3 sm:p-10 w-[90%] mx-auto' {...props}/>
            )
          },
        })}
      </div>
    </div>
  </>
);

export default BlogDetailText;
