import PostPage from "@/features/post";

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return <PostPage slug={slug} />;
}
