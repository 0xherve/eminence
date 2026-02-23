"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type HeaderProps = {
  aboutRef: React.RefObject<HTMLElement | null>;
  projectsRef: React.RefObject<HTMLElement | null>;
  className?: string;
};

export function Header({ aboutRef, projectsRef, className }: HeaderProps) {
  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm",
        className
      )}
    >
      <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
        >
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => scrollTo(aboutRef)}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => scrollTo(projectsRef)}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </button>
          <Link
            href={siteConfig.writing.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {siteConfig.writing.label}
          </Link>
        </div>
      </nav>
    </header>
  );
}
