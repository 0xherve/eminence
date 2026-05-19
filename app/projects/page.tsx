import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

const projects = [
  {
    name: "Toshokan",
    description:
      "Personal light novel reader. Currenly improving it to have even more books.",
    href: "https://tosho.polimath.dev/",
    status: "live",
  },
  {
    name: "Stash",
    description:
      "Store, and manage environment variables across projects.",
    href: "https://stash.polimath.dev/",
    status: "live",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1 mx-auto max-w-4xl w-full py-20 px-6 sm:px-8">
        <section className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Projects</h1>
          <p className="text-foreground/70">
            Checkout things I've been working on
          </p>
        </section>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <Link
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="flex items-baseline gap-6">
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <h2 className="text-2xl font-bold tracking-tight group-hover:underline transition-colors">
                      {project.name}
                    </h2>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-foreground/50 mt-2 max-w-2xl">
                    {project.description}
                  </p>
                </div>
                <span className="text-muted-foreground/30 group-hover:text-foreground/60 transition-colors text-sm hidden sm:block">
                  ↗
                </span>
              </div>
              {i < projects.length - 1 && (
                <div className="mt-8 border-t border-border/30" />
              )}
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
