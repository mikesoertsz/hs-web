import BlogHero from "./blog-hero";
import BlogHomeAllArticles from "./blog-home-allarticles";
import BlogHomePopular from "./blog-home-popular";
import BlogHomeRecent from "./blog-home-recent";

type Props = {
  searchParams: { [key: string]: string | undefined };
};

export default async function BlogHome({ searchParams }: Props) {
  return (
    <main className="flex flex-col items-center justify-center mx-auto bg-slate-50">
      <BlogHero />
      <BlogHomePopular />
      <BlogHomeRecent />
      <BlogHomeAllArticles searchParams={searchParams} />
    </main>
  );
}
