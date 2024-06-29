import { BlogPosts } from "@/components/blog-posts";
import { API } from "@/lib/api";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const blogEntries = await API.getPostsEntries(searchParams?.page ?? null);

  return (
    <>
      <h1 className="text-4xl text-primary font-semibold py-10">
        Hello Blog!
      </h1>
      <BlogPosts entries={blogEntries} />
    </>
  );
}
