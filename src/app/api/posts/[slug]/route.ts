import type { NextApiRequest, NextApiResponse } from "next";
import { fetchAPI } from "@/lib/fetcher";
import { Post } from "@/lib/interface";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;

  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ error: "Slug requerido" });
  }

  try {
    const posts = await fetchAPI<Post[]>("/posts", {
      slug,
      _fields:
        "id,date,slug,title,content,author,jetpack_featured_media_url,categories",
    });

    if (!posts.length) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    res.status(200).json(posts[0]);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
