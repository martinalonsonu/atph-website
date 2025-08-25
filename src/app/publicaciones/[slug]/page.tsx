import PostPage from "@/features/post";

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <PostPage slug={slug} />;
}
