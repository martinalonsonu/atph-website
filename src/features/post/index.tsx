import HeaderNav from "../shared/structured/headerNav";
import Footer from "../shared/structured/footer";
import Badge from "../shared/components/Badge";
import Heading from "./components/Heading";
import ProfileCard from "./components/ProfileCard";
import SpinnerPageLoad from "../shared/components/SpinnerPageLoad";
import { Post } from "@/lib/interface";
import Share from "./components/Share";
import Author from "./components/Author";
import Wrapper from "@/features/shared/layout/wrapper";
import { getPostBySlug } from "@/lib/actions";

interface PostPageProps {
  slug: string;
}

const PostPage = async ({ slug }: PostPageProps) => {
  const post: Post | undefined = await getPostBySlug(slug);
  const loading = false;

  const timeReading = (post?: Post): number => {
    if (!post) return 0;
    const text = post?.content?.rendered?.replace(/<[^>]+>/g, "");
    const words = text?.trim().split(/\s+/).length || 0;
    return Math.ceil(words / 200);
  };

  const getFirstParagraph = (html?: string): string => {
    if (!html) return "";
    const match = html.match(/<p[^>]*>(.*?)<\/p>/i);
    return match ? match[0] : "";
  };

  const removeFirstParagraph = (html?: string): string => {
    if (!html) return "";
    return html.replace(/<p[^>]*>.*?<\/p>/i, "");
  };

  const firstParagraph: string = getFirstParagraph(post?.content?.rendered);
  const contentWithoutFirstParagraph: string = removeFirstParagraph(
    post?.content?.rendered,
  );

  return loading ? (
    <SpinnerPageLoad />
  ) : (
    <div className="w-full flex flex-col bg-[#fff8f5]">
      <HeaderNav />

      <main className="min-h-screen flex justify-center flex-col">
        {/* HERO */}
        <section className="relative w-full bg-gradient-to-br from-[#fff8f5] via-[#fffcf9] to-[#fff3ed] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#8b0000]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#cca21c]/10 rounded-full blur-3xl" />
          </div>

          <Wrapper>
            <div className="relative z-10 py-10 md:py-16 max-w-4xl mx-auto">
              <div className="flex justify-center gap-2 mb-4">
                <Badge
                  categoryId={post?.categories[0] ?? 1}
                  tagId={post?.tags[0]}
                />
              </div>

              <Heading
                title={post?.title?.rendered ?? ""}
                subtitle={firstParagraph}
                author={post?.author ?? 1}
                date={post?.date ?? ""}
                image={post?.jetpack_featured_media_url}
                loading={loading}
                slug={slug}
                timeReading={timeReading(post)}
              />
            </div>
          </Wrapper>
        </section>

        {/* CONTENT */}
        <section className="w-full bg-gradient-to-b from-[#fff8f5] to-[#fffcfa] py-10 max-w-4xl mx-auto">
          <Wrapper>
            <div className="grid lg:grid-cols-3 gap-10">
              <article className="lg:col-span-2 space-y-8">
                <div
                  className="content-blog prose prose-lg max-w-none
                    prose-headings:font-cinzel
                    prose-headings:text-[#8b0000]
                    prose-p:font-mulish
                    prose-p:text-[#444]"
                  dangerouslySetInnerHTML={{
                    __html: contentWithoutFirstParagraph,
                  }}
                />
              </article>

              <aside className="space-y-6">
                <Share slug={slug} isDesktop />
                <Author authorId={post?.author ?? 1} />
                <ProfileCard />
              </aside>
            </div>
          </Wrapper>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PostPage;
