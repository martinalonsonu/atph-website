import { fetchAPI } from "@/lib/fetcher";
import { Post } from "@/lib/interface";

interface Params {
  params: { slug: string };
}

export async function GET(req: Request, { params }: Params) {
  const { slug } = await params;
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
