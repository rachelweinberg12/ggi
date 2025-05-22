import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { formatDate } from "@/utils/formatting";
import { Col, Row } from "@/components/blocks";
import clsx from "clsx";
import { LinkButton } from "@/components/link-button";
import { SUBSTACK_URL } from "@/utils/constants";

const postSlugs = [
  "founding-essay",
  "measuring-ai-progress",
  "first-they-came-for-the-software",
];

export function WritingSpotlight() {
  return (
    <Col className="nav-section-padding y-section-padding border-t border-black">
      <Row className="justify-between items-end flex-row">
        <h2>Recent writing</h2>
        <LinkButton
          href={SUBSTACK_URL}
          title="See all writing"
          className="hidden xs:flex"
        />
      </Row>
      <div className="xl:grid grid-cols-12 x-gap hidden">
        <div className="col-span-5">
          <PostPreview slug={postSlugs[0]} vertical />
        </div>
        <Col className="h-full justify-between col-span-7">
          {postSlugs.map((slug, i) => {
            if (i === 0) return null;
            return <PostPreview slug={slug} key={i} />;
          })}
        </Col>
      </div>
      <div className="hidden xs:grid grid-rows-3 y-gap xl:hidden">
        <PostPreview slug={postSlugs[0]} />
        {postSlugs.map((slug, i) => {
          if (i === 0) return null;
          return <PostPreview slug={slug} key={i} />;
        })}
      </div>
      <div className="grid grid-rows-3 y-gap xs:hidden">
        <PostPreview slug={postSlugs[0]} vertical />
        {postSlugs.map((slug, i) => {
          if (i === 0) return null;
          return <PostPreview slug={slug} key={i} vertical />;
        })}
      </div>
      <Row className="justify-end xs:hidden">
        <LinkButton href={SUBSTACK_URL} title="See all writing" />
      </Row>
    </Col>
  );
}

function PostPreview(props: { slug: string; vertical?: boolean }) {
  const { slug, vertical } = props;
  // Get post data
  const filePath = path.join(process.cwd(), "posts/", slug + ".mdx");
  let post;
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter } = matter(fileContent);
    post = {
      title: frontmatter.title,
      subtitle: frontmatter.subtitle,
      date: frontmatter.date,
      substackSlug: frontmatter["substack-slug"],
      authors: frontmatter.authors,
    };
  } catch (error) {
    console.error(error);
    return null;
  }

  return (
    <a
      className={clsx(
        "flex overflow-hidden p-1 rounded border border-black h-full hover:bg-sand",
        vertical ? "flex-col gap-y-1" : "gap-x-1 sm:gap-x-3",
      )}
      href={`${SUBSTACK_URL}${post.substackSlug}`}
      target="_blank"
    >
      <div
        className={clsx(
          "sm:aspect-[4/3]",
          vertical ? "aspect-[5/3]" : "aspect-square",
        )}
      >
        <Image
          src={`/post-images/${slug}/header.png`}
          alt={post.title}
          className={clsx(
            "w-full h-full object-cover rounded-sm sm:aspect-[4/3]",
            vertical
              ? "aspect-[5/3]"
              : "max-h-36 sm:max-h-52 md:max-h-64 xl:max-h-full aspect-square",
          )}
          width={500}
          height={700}
        />
      </div>
      <Col className="p-1 sm:p-3 gap-y-0 h-full justify-between">
        <div>
          <h3 className="mb-1">{post.title}</h3>
          <h5 className="mb-1 sm:mb-3">{post.subtitle}</h5>
        </div>
        <p className="info">
          {formatDate(post.date)} | {post.authors}
        </p>
      </Col>
    </a>
  );
}
