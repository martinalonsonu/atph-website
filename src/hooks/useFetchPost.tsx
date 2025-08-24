import { Post } from "@/lib/interface";
import React from "react";

const useFetchPost = (slug: string) => {
  const [post, setPost] = React.useState<Post>();
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`/api/post/${slug}`);
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return { post, loading };
};

export default useFetchPost;
