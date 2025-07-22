import getPost from "@/utils/getPost";
import { PostPageBody } from "@/components/post-content";
import { notFound } from "next/navigation";

export default async function Page() {
  const post = await getPost("cyber-security-report");

  if (!post) {
    notFound();
  }

  return <PostPageBody title={post.title} content={post.content} themeClass="theme-classic" />;
}
