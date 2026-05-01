import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header({ className }: { className?: string }) {
  return (
    <header className={cn("w-full", className)}>
      <nav className="mx-auto flex max-w-[1080px] items-center justify-between gap-6 px-6 py-6 sm:px-8 sm:py-8">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-5 text-sm text-muted-foreground sm:gap-8">
          <a href="#about" className="transition-colors hover:text-foreground">
            about
          </a>
          <a href="#projects" className="transition-colors hover:text-foreground">
            projects
          </a>
          <Link
            href={siteConfig.writing.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            writing
          </Link>
        </div>
      </nav>
    </header>
  );
}
