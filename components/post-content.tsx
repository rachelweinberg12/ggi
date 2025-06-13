import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PostContentProps {
  content: string;
}

export const PostContent: React.FC<PostContentProps> = ({ content }) => {
  return (
    <div className="prose prose-lg">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => <h3 {...props} className="mt-12" />,
          h2: ({ node, ...props }) => <h4 {...props} className="mt-12" />,
          h3: ({ node, ...props }) => (
            <p {...props} className="font-bold mt-12" />
          ),
          p: ({ node, ...props }) => <p {...props} className="mt-4" />,
          a: ({ node, ...props }) => <a {...props} className="text-link" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
