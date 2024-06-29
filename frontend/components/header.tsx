
export function Header() {
  return (
    <header className="h-[60px] flex items-center px-8 md:px-10 border-b backdrop-blur-sm">
      <nav className="flex justify-between w-full">
        <h1>Blog App</h1>
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
