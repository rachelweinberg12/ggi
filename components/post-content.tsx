import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw';

interface PostContentProps {
  content: string;
}

export const PostContent: React.FC<PostContentProps> = ({ content }) => {
  // Find line breaks inside table cells, and replace them with BRs so that the Markdown renderer will
  // display them properly. Warning, this regex was written by Claude and I (Steve) haven't attempted to
  // understand it. It's meant to replace line breaks that appear inside a multi-line table cell, meaning
  // after a line that starts (but does not end) with a pipe character, and before a line that ends (but does not
  // start) with a pipe character.
  const processedContent = content.replace(
    /(\|.*\|[\s\S]*?)(?=\n\n|\n\|[^|]*\||$)/g,
    (tableSection) => tableSection.replace(/\n(?!\|)/g, '<br/>')
  );

  return (
    <div className="prose prose-lg">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ node, ...props }) => <h3 {...props} className="mt-12" />,
          h2: ({ node, ...props }) => <h4 {...props} className="mt-12" />,
          h3: ({ node, ...props }) => (
            <p {...props} className="font-bold mt-12" />
          ),
          p: ({ node, ...props }) => <p {...props} className="mt-4" />,
          a: ({ node, ...props }) => <a {...props} className="text-link" />,
          blockquote: ({ node, ...props }) => <blockquote {...props} className="pull-quote" />,
          table: ({ node, ...props }) => (
            <table {...props} className="border-collapse border border-gray-300 [&_td]:border [&_td]:border-gray-300 [&_th]:border [&_th]:border-gray-300" />
          ),
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
};
