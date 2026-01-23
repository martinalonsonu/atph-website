import React from "react";
import SpinnerPageLoad from "../shared/components/SpinnerPageLoad";
import HeaderNav from "../shared/structured/headerNav";
import BlogCardSecondary from "../shared/components/BlogCardSecondary";
import Footer from "../shared/structured/footer";
import Wrapper from "@/features/shared/layout/wrapper";
import { getPosts } from "@/lib/actions";

const BlogPage = async () => {
  const loading = false;
  const posts = await getPosts(15);

  return loading ? (
    <SpinnerPageLoad />
  ) : (
    <div className="w-full flex flex-col bg-[#fff8f5]">
      <HeaderNav />

      <main className="w-full flex flex-col">
        {/* ================= HERO ================= */}
        <section className="relative w-full bg-gradient-to-br from-[#fff8f5] via-[#fffcf9] to-[#fff3ed] overflow-hidden">
          {/* decorativos */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#8b0000]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#cca21c]/10 rounded-full blur-3xl" />
          </div>

          <Wrapper>
            <div className="relative z-10 py-16 md:py-24 text-center flex flex-col items-center gap-5">
              <p className="text-xs sm:text-sm font-bold tracking-widest text-[#cca21c] uppercase">
                Reflexiones & Devoción
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold text-[#8b0000]">
                Blog
              </h1>

              <p className="max-w-2xl text-sm sm:text-base md:text-lg font-mulish text-[#555] leading-relaxed">
                Un rincón sencillo donde compartimos la fe de cada día.
                Encontrarás devociones, reflexiones y relatos que nos invitan a
                caminar con esperanza y cercanía a Dios.
              </p>
            </div>
          </Wrapper>
        </section>

        {/* ================= LISTADO ================= */}
        <section className="w-full bg-gradient-to-b from-[#fff8f5] to-[#fffcfa] py-12 md:py-16">
          <Wrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCardSecondary key={post.id} post={post} />
              ))}
            </div>
          </Wrapper>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
