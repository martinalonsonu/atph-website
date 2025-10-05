"use server";
import { Post } from "./interface";

export const getAllPostSlugs = async (): Promise<string[]> => {
  const fields = "slug";
  const url = `${process.env.API_BASE}/posts?per_page=100&_fields=${fields}`;
  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error("Error al obtener slugs de posts");
    const data: Post[] = await response.json();
    return data.map((post) => post.slug);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getPosts = async (amountPosts: number): Promise<Post[]> => {
  const fields =
    "id,date,slug,title,author,jetpack_featured_media_url,categories,excerpt,tags";
  const amount = amountPosts || 5;
  const url = `${process.env.API_BASE}/posts?per_page=${amount}&_fields=${fields}`;
  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error("Error al obtener posts");
    const data: Post[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching posts");
  }
};

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const fields =
    "id,date,slug,title,content,author,jetpack_featured_media_url,categories,tags";
  const url = `${process.env.API_BASE}/posts?slug=${slug}&_fields=${fields}`;
  try {
    const response = await fetch(url, { next: { revalidate: 3600 } });
    if (!response.ok) throw new Error("Error al obtener el post");
    const data: Post[] = await response.json();
    return data[0];
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching post by slug");
  }
};
