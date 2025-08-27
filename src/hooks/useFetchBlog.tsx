import { Post } from "@/lib/interface";
import React from "react";

const useFetchBlog = (amount: number, category?: number) => {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        `/api/posts/?amount=${amount}${category ? `&category=${category}` : ""}`
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, loading };
};

export default useFetchBlog;
