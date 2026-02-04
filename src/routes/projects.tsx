import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/content/site";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteLayout>
      <main className="border-x border-page-border">
        <section className="border-b border-page-border px-6 py-24">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/50">
              Projects
            </p>
            <h1 className="mb-16 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Things I've built or worked on.
            </h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {site.projects.map((project, i) => (
                <a
                  key={i}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group border border-page-border p-8 transition hover:bg-accent/10 ${i % 2 === 1 ? "md:border-l md:border-page-border" : ""}`}
                >
                    <h2 className="mb-2 text-xl font-semibold uppercase text-foreground group-hover:text-foreground/95">
                    {project.title}
                  </h2>
                  <p className="mb-4 text-foreground/60">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-page-border bg-transparent px-2 py-0.5 text-xs text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
