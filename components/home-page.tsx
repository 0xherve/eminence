"use client";

import { useRef } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function HomePage() {
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header aboutRef={aboutRef} projectsRef={projectsRef} />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="text-sm font-medium text-muted-foreground">
            Hello, I&apos;m
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            {siteConfig.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              variant="default"
              render={(props) => (
                <a {...props} href={`mailto:${siteConfig.email}`}>
                  Get in touch
                </a>
              )}
            />
            <Button
              variant="outline"
              render={(props) => (
                <a
                  {...props}
                  href={siteConfig.substackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read on Substack
                </a>
              )}
            />
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          ref={aboutRef}
          className="scroll-mt-20 border-t border-border/40 bg-muted/20"
        >
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              {siteConfig.about.title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {siteConfig.about.content}
            </p>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          ref={projectsRef}
          className="scroll-mt-20 border-t border-border/40"
        >
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              {siteConfig.projects.title}
            </h2>
            <ul className="mt-8 space-y-10">
              {siteConfig.projects.items.map((project) => (
                <li key={project.title}>
                  <a
                    href={project.href}
                    className={cn(
                      "group block rounded-lg border border-border/40 p-4 transition-colors hover:border-border hover:bg-muted/30",
                      project.href === "#" && "pointer-events-none"
                    )}
                  >
                    <h3 className="font-medium text-foreground group-hover:text-foreground/90">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
