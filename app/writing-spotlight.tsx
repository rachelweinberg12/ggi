import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { formatDate } from "@/utils/formatting";
import { Col, Row } from "@/components/blocks";

const postSlugs = [
  "finally-a-way-to-measure-ai-progress",
  "finally-a-way-to-measure-ai-progress",
  "finally-a-way-to-measure-ai-progress",
];

export function WritingSpotlight() {
  return (
    <Col className="section-padding">
      <h2>Recent writing</h2>
      <Row>
        {postSlugs.map((slug, i) => (
          <PostPreview slug={slug} key={i} />
        ))}
      </Row>
    </Col>
  );
}

function PostPreview(props: { slug: string }) {
  const { slug } = props;
  // Get post data
  const filePath = path.join(process.cwd(), "posts/", slug, "/post.mdx");
  let post;
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter } = matter(fileContent);
    post = {
      title: frontmatter.title,
      date: frontmatter.date,
      substackLink: frontmatter["substack-link"],
    };
  } catch (error) {
    console.error(error);
    return null;
  }

  return (
    <div className=" overflow-hidden theme-sand border border-black">
      <div className="aspect-[7/5]">
        <Image
          src={`/post-images/${slug}/header.png`}
          alt={post.title}
          className="w-full h-full object-contain"
          width={500}
          height={700}
        />
      </div>
      <div className="p-3">
        <h4 className="mb-2">{post.title}</h4>
        <p className="text-gray-500 text-sm mb-4">{formatDate(post.date)}</p>
      </div>
    </div>
  );
}
