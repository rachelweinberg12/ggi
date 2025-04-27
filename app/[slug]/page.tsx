import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostContent } from "@/components/post-content";
import { notFound } from "next/navigation";

// 1. Helper to load a single post
async function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "posts/", slug, "/post.mdx");
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

// 3. Page component
export default async function PostPage(props: { params: { slug: string } }) {
  const { slug } = await props.params;
  console.log(slug);
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="top-section-padding theme-sand">
      <article className="mx-auto max-w-3xl">
        <h2>{post.title}</h2>
        <p className="text-gray-500 mb-8">{post.date}</p>
        <PostContent content={post.content} />
      </article>
    </div>
  );
}
