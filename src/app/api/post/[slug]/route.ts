import { fetchAPI } from "@/lib/fetcher";
import { Post } from "@/lib/interface";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  try {
    const post = await fetchAPI<Post[]>(`/posts/?slug=${slug}`, {
      _fields:
        "id,date,slug,title,content,author,jetpack_featured_media_url,categories,excerpt,tags",
    });

    if (!post || post.length === 0) {
      return new Response(JSON.stringify({ error: "Post no encontrado" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(post[0]), {
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
