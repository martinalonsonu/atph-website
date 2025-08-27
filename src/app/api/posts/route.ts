import { fetchAPI } from "@/lib/fetcher";
import type { Post } from "@/lib/interface";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const amount = Number(searchParams.get("amount")) || 5;
  const categories = searchParams.get("category") || undefined;

  try {
    const params: Record<string, string | number> = {
      per_page: amount,
      _fields:
        "id,date,slug,title,author,jetpack_featured_media_url,categories,excerpt,tags",
    };

    if (categories) {
      params.categories = categories;
    }

    const posts = await fetchAPI<Post[]>("/posts", params);

    return Response.json(posts, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Error fetching posts" }, { status: 500 });
  }
}
