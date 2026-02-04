import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site-layout.tsx";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <main className="border-x border-page-border">
        <section className="flex flex-col justify-center border-b border-page-border px-6 pt-24 pb-20">
          <div className="w-full">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/60">
              Hello, I'm
            </p>
            <h1 className="hero-name font-bold tracking-tight text-white">
              {site.name}
            </h1>
            <p className="mt-6 text-2xl font-medium leading-relaxed text-white/80 md:text-3xl">
              {site.tagline}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                <a href='mailto:imenarwigema@gmail.com'>Get in touch</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-foreground/30 text-foreground hover:bg-foreground/10 hover:text-foreground"
              >
                <a
                  href={site.links.substack}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read on Substack
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
