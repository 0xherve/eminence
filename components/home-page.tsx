import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1 mx-auto max-w-4xl w-full py-20">
        <section className="mb-12">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Herve Rwigema
          </h1>
          <div className="flex gap-4 mt-4">
          {siteConfig.tags.map((tag) => (
            <span key={tag} className="text-sm text-muted-foreground uppercase tracking-widest">
              -{tag}
            </span>
          ))}
          </div>
        </section>

        <section className="space-y-4 text-foreground/70 leading-relaxed">
          <p>
            Hi, am a software engineer based in Rwanda.
          </p>
          <p>
            I like to refer to myself as a “modern software engineer”. I build most of the code I write with AI, and play with multiple tools to leave about how they work.
            I am deeply bothered by redundancies, and I love improving code efficiency.
            Currently, I have a strong interest in developer tooling like CLI tools, SDKs, and libraries.
          </p>
          <p>
            I occasionally write on{" "}
            <a
              href='https://0xherve.substack.com'
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
            >
              Substack
            </a>
            . My other interests include: Formula 1, anime, and touching grass lol.
          </p>
          
          <p>
            My recent favorite band is Linkin Park.
          </p>
          
        </section>
      </main>

      <Footer />
    </div>
  );
}
