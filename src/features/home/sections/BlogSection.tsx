import BlogCardSecondary from "@/features/shared/components/BlogCardSecondary";
import BlogCardPrincipal from "../components/cards/BlogCardPrincipal";
import { getPosts } from "@/lib/actions";
import Wrapper from "@/features/shared/layout/wrapper";
import Link from "next/link";

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
    <section
      className="w-full bg-gradient-to-r from-[#fefefe] via-[#fffbfa] to-[#fefefe] py-8 md:py-10"
      id="blog"
    >
      <Wrapper>
        {/* Encabezado de sección */}
        <div className="flex flex-col items-center lg:items-end lg:flex-row justify-center gap-6 sm:gap-8 mb-10 sm:mb-14">
          <div className="flex flex-col items-center">
            <p className="text-xs sm:text-sm md:text-base font-bold tracking-widest text-[#cca21c] uppercase mb-2 sm:mb-3 md:mb-4">
              Historias y Inspiración
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-cinzel font-bold text-[#8b0000] mb-3 sm:mb-4 text-center lg:text-left">
              Últimas Publicaciones
            </h2>
            <div className="h-1 w-16 sm:w-18 md:w-20 bg-gradient-to-r from-[#8b0000] to-[#cca21c] rounded-full"></div>
          </div>
        </div>

        {/* Post principal destacado */}
        <div className="mb-12 sm:mb-14">
          <BlogCardPrincipal mainPost={mainPost} />
        </div>

        {/* Grid de posts secundarios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
          {otherPosts.slice(0).map((post) => (
            <BlogCardSecondary key={post.id} post={post} />
          ))}
        </div>

        {/* CTA final */}
        <div className="flex justify-center mt-12 sm:mt-14 md:mt-16 lg:mt-20">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#8b0000] text-white font-semibold text-sm sm:text-base rounded-xl hover:bg-[#a01010] transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Explora más artículos
          </Link>
        </div>
      </Wrapper>
    </section>
  );
};

export default BlogSection;
