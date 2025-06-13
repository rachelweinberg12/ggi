import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostContent } from "@/components/post-content";
import { notFound } from "next/navigation";

async function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "mdx-pages", slug + ".mdx");
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter, content } = matter(fileContent);
    return {
      title: frontmatter.title,
      date: frontmatter.date,
      content,
    };
  } catch (error) {
    console.error(error);
    return null; // file not found
  }
}

export default async function Page() {
  const post = await getPost("cyber-security-report");
  if (!post) {
    notFound();
  }
  return (
    <div className="top-section-padding theme-classic">
      <article className="mx-auto max-w-3xl">
        <h2>{post.title}</h2>
        <PostContent content={post.content} />
      </article>
    </div>
  );
}
