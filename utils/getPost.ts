import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default async function getPost(slug: string) {
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