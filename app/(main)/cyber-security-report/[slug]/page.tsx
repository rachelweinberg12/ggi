import { PostPageBody } from "@/components/post-content";
import { notFound } from "next/navigation";
import getPost from "@/utils/getPost";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return <PostPageBody title={post.title} content={post.content} themeClass="theme-classic" />;
}
