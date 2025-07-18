import getPost from "@/utils/getPost";
import { PostContent } from "@/components/post-content";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
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
