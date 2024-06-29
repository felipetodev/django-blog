import Link from "next/link"

export function Header() {
  return (
    <header className="h-[60px] flex items-center px-8 md:px-10 border-b backdrop-blur-sm">
      <nav className="flex justify-between w-full">
        <Link href="/">
          <h1 className="text-primary text-2xl font-bold">
            Blog App 🚀
          </h1>
        </Link>
        <a
          href="https://github.com/felipetodev/django-blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </nav>
    </header>
  )
}
