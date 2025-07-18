import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw';

interface PostContentProps {
  content: string;
}

export const PostContent: React.FC<PostContentProps> = ({ content }) => {
  // Find line breaks inside table cells, and replace them with BRs so that the Markdown renderer will
  // display them properly. The initial regex matches lines that contain at least two pipes (which, in
  // our case, only occurs for tables), and continues until a pipe at the end of a line (which indicates
  // the end of a table row). Any line breaks in between are intra-cell content and should be replaced
  // with <br/>.
  const processedContent = content.replace(
    /\|.*\|[\s\S]*?\|$/gm,
    (tableSection) => tableSection.replace(/\n(?!\|)/g, '<br/>')
  );

  return (
    <div className="prose prose-lg">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ node, ...props }) => <h3 {...props} className="mt-12" />,
          h2: ({ node, ...props }) => <h4 {...props} className="mt-8" />,
          h3: ({ node, ...props }) => (
            <p {...props} className="font-bold mt-4" />
          ),
          p: ({ node, ...props }) => <p {...props} className="mt-4" />,
          a: ({ node, ...props }) => <a {...props} className="text-link" />,
          blockquote: ({ node, ...props }) => <blockquote {...props} className="pull-quote" />,
          table: ({ node, ...props }) => (
            <table {...props} className="border-collapse border border-gray-300 [&_td]:border [&_td]:border-gray-300 [&_th]:border [&_th]:text-left [&_th]:px-4 [&_th]:py-2 [&_td]:px-4 [&_td]:py-2" />
          ),
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
};

interface PostPageBodyProps {
  title: string;
  content: string;
  date?: string;
  themeClass?: string;
}

export const PostPageBody: React.FC<PostPageBodyProps> = ({ title, content, date, themeClass = "theme-classic" }) => (
  <div className={`top-section-padding ${themeClass}`}>
    <article className="mx-auto max-w-3xl">
      <h2>{title}</h2>
      {date && <p className="text-gray-500 mb-8">{date}</p>}
      <PostContent content={content} />
    </article>
  </div>
);
