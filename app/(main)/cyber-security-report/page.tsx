import getPost from "@/utils/getPost";
import { PostContent } from "@/components/post-content";
import { notFound } from "next/navigation";

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
