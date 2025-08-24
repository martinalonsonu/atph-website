import PostPage from "@/features/post";

interface PostProps {
  params: {
    slug: string;
  };
}

const Post = async ({ params }: PostProps) => {
  const { slug } = await params;

  return <PostPage slug={slug} />;
};

export default Post;
