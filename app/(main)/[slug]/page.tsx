import getPost from "@/utils/getPost";
import { PostPageBody } from "@/components/post-content";
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

  return <PostPageBody title={post.title} content={post.content} date={post.date} themeClass="theme-sand" />;
}
