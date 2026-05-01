import Link from "next/link";

const links = [
  { label: "projects", href: "http://polimath.dev/" },
  { label: "writing", href: "https://0xherve.substack.com/" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 h-full w-full bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 sm:px-8 sm:py-4">
        <Link
          href="/"
          className="text-xl font-bold text-foreground"
        >
          <span>0xherve</span>
        </Link>
        
        <div className="flex items-center gap-6 text-sm text-muted-foreground sm:gap-8">
        {
          links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))
        }
        </div>
      </nav>
    </header>
  );
}
