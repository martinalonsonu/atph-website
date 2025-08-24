import PostPage from "@/features/post";

interface PostProps {
  params: {
    slug: string;
  };
}

const Post = async ({ params }: PostProps) => {
  const { slug } = params;

  return <PostPage slug={slug} />;
};

export default Post;
