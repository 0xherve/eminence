import { Link, useRouterState } from "@tanstack/react-router";
import { site } from "@/content/site";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const linkLabels: Record<keyof typeof site.links, string> = {
    substack: "Substack",
    twitter: "X (Twitter)",
    github: "GitHub",
  };

  const footerLinks = (Object.entries(site.links) as [keyof typeof site.links, string][]).filter(
    ([, href]) => href
  );

  return (
    <div className="min-h-screen w-full bg-page-bg">
      <div className="mx-auto flex min-h-screen w-full max-w-[90vw] flex-col border-x border-page-border bg-page-bg text-page-fg">
      <header className="sticky top-0 z-50 border-b border-page-border bg-page-bg/95 backdrop-blur-md">
        <nav className="flex items-center justify-between border-x border-page-border px-6 py-4">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-foreground hover:text-foreground/90"
          >
            {site.name}
          </Link>
          <div className="flex items-center gap-6">
          <Link
              to="/about"
              className={`text-sm font-medium uppercase transition hover:text-foreground ${pathname === "/about" ? "text-foreground" : "text-foreground/50"}`}
            >
              About
            </Link>
            <span className="h-4 w-px bg-page-border" aria-hidden />
            <Link
              to="/projects"
              className={`text-sm font-medium uppercase transition hover:text-foreground ${pathname === "/projects" ? "text-foreground" : "text-foreground/50"}`}
            >
              Projects
            </Link>
            <span className="h-4 w-px bg-page-border" aria-hidden />
            <a
              href={site.links.substack}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium uppercase text-foreground/50 transition hover:text-foreground"
            >
              Writing
            </a>
          </div>
        </nav>
      </header>
    <main className="flex-1">
      {children}
    </main>

      <footer className="border-t border-page-border px-6 py-8">
        <div className="flex items-center justify-between px-6 text-sm text-foreground/50">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <div className="mt-12 flex justify-center gap-6">
              {footerLinks.map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white hover:underline"
                >
                  {linkLabels[key]}
                </a>
              ))}
            </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
