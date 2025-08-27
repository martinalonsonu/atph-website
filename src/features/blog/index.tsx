"use client";

import useFetchBlog from "@/hooks/useFetchBlog";
import React from "react";
import SpinnerPageLoad from "../shared/components/SpinnerPageLoad";
import HeaderNav from "../shared/structured/headerNav";
import BlogCardSecondary from "../shared/components/BlogCardSecondary";
import Footer from "../shared/structured/footer";

const BlogPage = () => {
  const { loading, posts } = useFetchBlog(15);
  return loading ? (
    <SpinnerPageLoad />
  ) : (
    <div className="w-full flex flex-col bg-[#fff8f5]">
      <HeaderNav />
      <main className="max-w-[1200px] w-full mx-auto py-12 lg:py-20 px-4 lg:px-14">
        <h1 className="mx-auto text-center text-2xl lg:text-4xl font-cinzel text-[#8b0000] mb-10">
          #Atph: Nuestro Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0).map((post) => (
            <BlogCardSecondary key={post.id} post={post} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
