import Link from "next/link"
import { BlogPagination } from "@/components/blog-pagination"
import { type PostsEntries } from "@/lib/types"

export function BlogPosts({ entries }: { entries: PostsEntries }) {
  return (
    <div className="flex flex-col h-full">
      {entries.results.map((entry) => (
        <Link
          key={entry.id}
          href={`/post/${entry.id}`}
          className="flex flex-col p-4 border border-gray-200 rounded mb-4 transition-colors hover:border-primary"
        >
          <h2 className="text-xl font-semibold">{entry.title}</h2>
          <p className="text-gray-500">{entry.content}</p>
          <footer className="flex justify-between mt-4">
            <p className="text-sm text-primary/80">{entry.author}</p>
            <p className="text-sm text-primary/80">
              {new Date(entry.createdAt).toLocaleDateString()}
            </p>
          </footer>
        </Link>
      ))}
      <BlogPagination
        count={entries.count}
        next={entries.next}
        previous={entries.previous}
      />
    </div>
  )
}
