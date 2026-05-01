import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="mx-auto max-w-[1080px] px-6 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16">
          <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
            Personal site
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl sm:text-7xl md:text-8xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/82 sm:text-xl">
            {siteConfig.tagline}. {siteConfig.about.content}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              Get in touch
            </a>
            <a
              href={siteConfig.substackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Read writing
            </a>
          </div>
        </section>

        <section id="about" className="border-t border-border/60">
          <div className="mx-auto grid max-w-[1080px] gap-8 px-6 py-12 sm:grid-cols-[220px_minmax(0,1fr)] sm:px-8 sm:py-16">
            <h2 className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
              About
            </h2>
            <div className="max-w-3xl text-lg leading-8 text-foreground/82">
              <p>{siteConfig.about.content}</p>
              <p className="mt-4 text-foreground/68">
                I build things, write about them, and keep the presentation out of the way.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-border/60">
          <div className="mx-auto grid max-w-[1080px] gap-8 px-6 py-12 sm:grid-cols-[220px_minmax(0,1fr)] sm:px-8 sm:py-16">
            <h2 className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
              Projects
            </h2>
            <div className="space-y-8">
              {siteConfig.projects.items.map((project) => (
                <article key={project.title} className="max-w-3xl">
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <h3 className="text-xl sm:text-2xl">
                      {project.href === "#" ? (
                        project.title
                      ) : (
                        <a href={project.href} className="hover:opacity-70">
                          {project.title}
                        </a>
                      )}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      Selected work
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-foreground/68">
                    {project.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
