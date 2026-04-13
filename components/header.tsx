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
        "sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-all duration-300",
        className
      )}
    >
      <nav className="mx-auto flex h-14 max-w-[780px] items-center justify-between px-7 sm:px-8">
        <Link
          href="/"
          className="text-sm font-semibold text-foreground transition-colors hover:text-foreground/70"
        >
          <span className="font-mono text-xs tracking-wide text-muted-foreground">→</span> {siteConfig.name.split(" ")[0]}
        </Link>
        <div className="flex items-center gap-8">
          <button
            type="button"
            onClick={() => scrollTo(aboutRef)}
            className="text-xs font-mono text-muted-foreground transition-colors hover:text-foreground uppercase tracking-widest"
          >
            about
          </button>
          <button
            type="button"
            onClick={() => scrollTo(projectsRef)}
            className="text-xs font-mono text-muted-foreground transition-colors hover:text-foreground uppercase tracking-widest"
          >
            projects
          </button>
          <Link
            href={siteConfig.writing.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-muted-foreground transition-colors hover:text-foreground uppercase tracking-widest"
          >
            writing
          </Link>
        </div>
      </nav>
    </header>
  );
}
