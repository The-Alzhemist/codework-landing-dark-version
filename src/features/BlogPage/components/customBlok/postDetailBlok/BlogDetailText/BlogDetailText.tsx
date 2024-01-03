import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import {
  render,
  MARK_BOLD,
  NODE_PARAGRAPH,
  NODE_LI,
  NODE_IMAGE,
  NODE_CODEBLOCK,
} from "storyblok-rich-text-react-renderer";
import { BlogDetailTextProps } from "./interface";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

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
          },
          nodeResolvers: {
            [NODE_PARAGRAPH]: (children) => <p className="my-2">{children}</p>,
            [NODE_LI]: (children) => (
              <li className="pl-2 flex items-center gap-x-2">
                <span>-</span> <span>{children}</span>{" "}
              </li>
            ),
            [NODE_IMAGE]: (chidren, props) => (
              <>
                  <img className="p-3 sm:p-10 w-[90%] mx-auto" {...props} />
              </>
            ),
            [NODE_CODEBLOCK]: (children, story) => {
              return (
                <pre>
                  <code className="text-sm">
                    <SyntaxHighlighter
                      language={story.class.replace("language-", "")}
                      style={oneLight}
                    >
                      {String(children)}
                    </SyntaxHighlighter>
                  </code>
                </pre>
              );
            },
          },
        })}
      </div>
    </div>
  </>
);

export default BlogDetailText;
