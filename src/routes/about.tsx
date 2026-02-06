import { SiteLayout } from "~/components/site-layout";
import { site } from "~/content/site";
import "./app.css";

export default function About() {
  return (
    <SiteLayout>
      <div class="border-x border-page-border">
        <section
          data-section="hero"
          class="flex min-h-[85vh] flex-col justify-center border-b border-page-border px-6 pt-24 pb-20"
        >
          <div class="w-full max-w-3xl">
            <p class="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-page-fg/60">
              Hello, I'm
            </p>
            <h1 class="text-[clamp(3rem,12vw,7rem)] font-bold leading-[1.05] tracking-tight text-page-fg">
              {site.name}
            </h1>
            <p class="mt-6 text-2xl font-medium leading-relaxed text-page-fg/80 md:text-3xl">
              {site.tagline}
            </p>
            <div class="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:imenarwigema@gmail.com"
                class="inline-flex items-center justify-center rounded-md border border-transparent bg-page-fg px-6 py-3 text-sm font-medium text-page-bg transition hover:bg-page-fg/90"
              >
                Get in touch
              </a>
              <a
                href={site.links.substack}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center rounded-md border border-page-fg/30 bg-transparent px-6 py-3 text-sm font-medium text-page-fg transition hover:bg-page-fg/10"
              >
                Read on Substack
              </a>
            </div>
          </div>
        </section>
        <section
          data-section="about"
          class="border-b border-page-border px-6 py-24"
        >
          <div class="mx-auto max-w-3xl">
            <h2 class="text-2xl font-semibold tracking-tight text-page-fg md:text-3xl">
              About
            </h2>
            <p class="mt-4 text-page-fg/80">Content goes here.</p>
          </div>
        </section>
        <section
          data-section="projects"
          class="border-b border-page-border px-6 py-24"
        >
          <div class="mx-auto max-w-4xl">
            <h2 class="text-2xl font-semibold tracking-tight text-page-fg md:text-3xl">
              Projects
            </h2>
            <div class="mt-8 grid gap-4 md:grid-cols-2">
              {site.projects.map((p) => (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="border border-page-border p-6 transition hover:bg-page-fg/5"
                >
                  <h3 class="font-semibold text-page-fg">{p.title}</h3>
                  <p class="mt-2 text-sm text-page-fg/60">{p.description}</p>
                  <div class="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span class="rounded border border-page-border px-2 py-0.5 text-xs text-page-fg/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
);
}
