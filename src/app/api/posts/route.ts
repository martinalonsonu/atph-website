import { fetchAPI } from "@/lib/fetcher";
import type { Post } from "@/lib/interface";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const amount = searchParams.get("amount");
  try {
    const posts = await fetchAPI<Post[]>("/posts", {
      per_page: Number(amount) || 5,
      _fields:
        "id,date,slug,title,content,author,jetpack_featured_media_url,categories,excerpt,tags",
    });
    return Response.json(posts, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Error fetching posts" }, { status: 500 });
  }
}
