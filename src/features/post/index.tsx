"use client";

import HeaderNav from "../shared/structured/headerNav";
import Footer from "../shared/structured/footer";
import Badge from "../shared/components/Badge";
import Heading from "./components/Heading";
import useFetchPost from "@/hooks/useFetchPost";
import ProfileCard from "./components/ProfileCard";
import SpinnerPageLoad from "../shared/components/SpinnerPageLoad";
import { Post } from "@/lib/interface";
import Share from "./components/Share";
import Author from "./components/Author";

export default function PostPage({ slug }: { slug: string }) {
  const { post, loading } = useFetchPost(slug);

  const timeReading = (post: Post | undefined) => {
    if (!post) return 0;
    const text = post?.content?.rendered.replace(/<[^>]+>/g, "");
    const words = text?.trim().split(/\s+/).length || 0;
    return Math.ceil(words / 200);
  };

  return loading ? (
    <SpinnerPageLoad />
  ) : (
    <div className="w-full flex flex-col bg-[#fff8f5]">
      <HeaderNav />
      <main className="min-h-screen bg-[#fff8f5] flex justify-center p-6">
        <div className="max-w-4xl w-full bg-transparent rounded-xl lg:p-8">
          {/* Badge */}
          <div className="flex justify-center mb-4 gap-2.5">
            <Badge
              categoryId={post?.categories[0] || 1}
              tagId={post?.tags[0] || 1}
            />
          </div>

          {/* Heading */}
          <Heading
            title={post?.title.rendered || ""}
            subtitle={post?.excerpt.rendered || ""}
            author={post?.author || 1}
            date={post?.date || ""}
            image={post?.jetpack_featured_media_url}
            loading={loading}
            slug={slug}
            timeReading={timeReading(post)}
          />

          {/* Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Text */}
            <div className="lg:col-span-2 space-y-6">
              <div
                className="content-blog"
                dangerouslySetInnerHTML={{
                  __html: post?.content?.rendered || "",
                }}
              />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <Share slug={slug} isDesktop={true} />
              <Author authorId={post?.author || 1} />
              <ProfileCard />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
