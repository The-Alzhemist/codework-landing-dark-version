import { storyblokEditable } from "@storyblok/react/rsc";
import { render, MARK_BOLD } from 'storyblok-rich-text-react-renderer';

render(document, {
    markResolvers: {
        [MARK_BOLD]: (children) => <strong className="bg-yellow-300">{children}</strong>
    }
});


const BlogDetailText = ({ blok }) => (
  <>
    <div {...storyblokEditable(blok)}>
      {/* autoher */}
      <div className="text-white flex flex-col items-left gap-x-2 text-lg mt-5">
      {render(blok.text)}
      </div>
    </div>   
  </>
);

export default BlogDetailText;
