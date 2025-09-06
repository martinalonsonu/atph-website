import BlogCardSecondary from "@/features/shared/components/BlogCardSecondary";
import BlogCardPrincipal from "../components/cards/BlogCardPrincipal";
import Button from "@/features/shared/components/Button";
import Title from "../components/title";
import { getPosts } from "@/lib/actions";

const BlogSection = async () => {
  const loading = false;
  const posts = await getPosts(4);

  if (loading)
    return (
      <div className="w-full flex justify-center items-center bg-[#fefefe] h-[300px]">
        <div className="spinner mx-auto" />
      </div>
    );
  if (!posts.length) return null;

  const [mainPost, ...otherPosts] = posts;

  return (
    <section className="w-full bg-[#fefefe] py-12 lg:py-20">
      <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-14">
        <div className="flex justify-between items-center mb-8">
          <Title type="secondary" title="Últimas publicaciones" />
          {/* Botón: Ver más publicaciones */}
          <Button href="/blog" text="Ver más" />
        </div>

        {/* Post principal en 2 columnas */}
        <BlogCardPrincipal mainPost={mainPost} />

        {/* Grid de 3 posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPosts.slice(0).map((post) => (
            <BlogCardSecondary key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
