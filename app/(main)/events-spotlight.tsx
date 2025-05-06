import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { formatDate } from "@/utils/formatting";
import { Col, Row } from "@/components/blocks";
import clsx from "clsx";

const eventSlugs = [
  "founding-essay",
  //   "finally-a-way-to-measure-ai-progress",
  //   "first-they-came-for-the-software-engineers",
];

export function EventsSpotlight() {
  const numEvents = eventSlugs.length;
  return (
    <div>
      <Col className="nav-section-padding y-section-padding" id="events">
        <h2>Upcoming events</h2>
        {numEvents === 1 ? (
          <OneCardLayout eventSlug={eventSlugs[0]} />
        ) : numEvents === 2 ? (
          <TwoCardLayout eventSlugs={eventSlugs} />
        ) : (
          <ThreeCardLayout eventSlugs={eventSlugs} />
        )}
      </Col>
    </div>
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
      substackLink: frontmatter["substack-link"],
      authors: frontmatter.authors,
    };
  } catch (error) {
    console.error(error);
    return null;
  }

  return (
    <a
      className={clsx(
        "flex overflow-hidden p-1 rounded-xl border border-black h-full hover:bg-sand",
        vertical ? "flex-col gap-y-1" : "gap-x-1 sm:gap-x-3",
      )}
      href={post.substackLink}
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
            "w-full h-full object-cover rounded sm:aspect-[4/3]",
            vertical
              ? "aspect-[5/3]"
              : "max-h-36 sm:max-h-52 md:max-h-64 xl:max-h-full aspect-square",
          )}
          width={400}
          height={300}
        />
      </div>
      <Col className="p-1 sm:p-3 gap-y-0 justify-between">
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

function ThreeCardLayout(props: { eventSlugs: string[] }) {
  const { eventSlugs } = props;
  return (
    <>
      <div className="xl:grid grid-cols-12 x-gap hidden">
        <div className="col-span-5">
          <PostPreview slug={eventSlugs[0]} vertical />
        </div>
        <Col className="h-full justify-between col-span-7">
          {eventSlugs.map((slug, i) => {
            if (i === 0) return null;
            return <PostPreview slug={slug} key={i} />;
          })}
        </Col>
      </div>
      <div className="hidden xs:grid grid-rows-3 y-gap xl:hidden">
        {eventSlugs.map((slug, i) => (
          <PostPreview slug={slug} key={i} />
        ))}
      </div>
      <div className="grid grid-rows-3 y-gap xs:hidden">
        {eventSlugs.map((slug, i) => (
          <PostPreview slug={slug} key={i} vertical />
        ))}
      </div>
    </>
  );
}

function TwoCardLayout(props: { eventSlugs: string[] }) {
  const { eventSlugs } = props;
  return (
    <div className="grid grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 y-gap x-gap">
      {eventSlugs.map((slug, i) => (
        <div key={i} className="col-span-1 row-span-1">
          <div className="hidden xs:block xl:hidden h-full w-full">
            <PostPreview slug={slug} />
          </div>
          <div className="xs:hidden xl:block h-full w-full">
            <PostPreview slug={slug} vertical />
          </div>
        </div>
      ))}
    </div>
  );
}

function OneCardLayout(props: { eventSlug: string }) {
  const { eventSlug } = props;
  return (
    <>
      <div className="hidden xs:block">
        <PostPreview slug={eventSlug} />
      </div>
      <div className="xs:hidden">
        <PostPreview slug={eventSlug} vertical />
      </div>
    </>
  );
}
