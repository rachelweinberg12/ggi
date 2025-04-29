import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { formatDate } from "@/utils/formatting";
import { Col, Row } from "@/components/blocks";

const postSlugs = [
  "finally-a-way-to-measure-ai-progress",
  "finally-a-way-to-measure-ai-progress",
  //   "finally-a-way-to-measure-ai-progress",
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
      subtitle: frontmatter.subtitle,
      date: frontmatter.date,
      substackLink: frontmatter["substack-link"],
    };
  } catch (error) {
    console.error(error);
    return null;
  }

  return (
    <a
      className="block overflow-hidden p-1 rounded-xl hover:bg-sand"
      href={post.substackLink}
      target="_blank"
    >
      <div className="aspect-[7/5]">
        <Image
          src={`/post-images/${slug}/header.png`}
          alt={post.title}
          className="w-full h-full object-contain rounded"
          width={500}
          height={700}
        />
      </div>
      <div className="p-3">
        <h3 className="mb-1">{post.title}</h3>
        <h5 className="mb-3">{post.subtitle}</h5>
        <p className="info">{formatDate(post.date)}</p>
      </div>
    </a>
  );
}
