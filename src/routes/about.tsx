import { createFileRoute } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import { site } from "@/content/site";
import { SiteLayout } from "@/components/site-layout.tsx";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <main className="border-x border-page-border">
        <section className="border-b border-page-border px-6 py-24">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/50">
              Bio
            </p>
            <h1 className="mb-8 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              About me
            </h1>
            <div className="about-markdown border-t border-page-border pt-8 text-lg leading-relaxed text-white/90">
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-foreground/90"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {site.about}
              </ReactMarkdown>
            </div>
          </div>
        </section>

        <section className="border-b border-page-border px-0 py-24">
          <div className="px-6">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/50">
              principles
            </p>
            <h2 className="mb-16 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              My Guiding Light 
            </h2>
            </div>
            <div className="grid grid-cols-1 border-y border-page-border md:grid-cols-3">
              {site.values.map((v, i) => (
                <div
                  key={i}
                  className={
                    `border-b border-page-border p-8 md:border-b-0 ${i > 0 ? "border-l border-page-border" : ""} hover:bg-accent/10 transition`}
                >
                  <span className="mb-4 block text-xs font-medium uppercase tracking-wider text-white/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2 text-xl font-semibold uppercase text-white">
                    {v.title}
                  </h3>
                  <p className="text-white/60">{v.description}</p>
                </div>
              ))}
            </div>
        </section>
      </main>
    </SiteLayout>
  );
}
