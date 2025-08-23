import { fetchAPI } from "@/lib/fetcher";
import { Post } from "@/lib/interface";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug || typeof slug !== "string") {
    return new Response(JSON.stringify({ error: "Slug requerido" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const posts = await fetchAPI<Post[]>("/posts", {
      slug,
      _fields:
        "id,date,slug,title,content,author,jetpack_featured_media_url,categories",
    });

    if (!posts.length) {
      return new Response(JSON.stringify({ error: "Post no encontrado" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(posts[0]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
