"use client";
import { Post } from "@/lib/interface";
import React from "react";

const postCache = new Map<string, Post>();

const useFetchPost = (slug: string) => {
  const [post, setPost] = React.useState<Post>();
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchPosts = async () => {
    try {
      if (postCache.has(slug)) {
        setPost(postCache.get(slug));
        setLoading(false);
        return;
      }

      const response = await fetch(`/api/post/${slug}`);
      const data = await response.json();

      if (data) {
        postCache.set(slug, data);
      }

      setPost(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchPosts();
  }, [slug]);

  return { post, loading };
};

export default useFetchPost;
