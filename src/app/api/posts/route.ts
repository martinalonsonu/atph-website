import { fetchAPI } from "@/lib/fetcher";
import type { Post } from "@/lib/interface";

export async function GET() {
  try {
    const posts = await fetchAPI<Post[]>("/posts", {
      per_page: 5,
      _fields:
        "id,date,slug,title,content,author,jetpack_featured_media_url,categories,excerpt",
    });
    return Response.json(posts, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Error fetching posts" }, { status: 500 });
  }
}
