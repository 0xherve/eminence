import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-5xl py-12 px-8">
          <h1 className="mt-6 text-3xl">
            Herve Rwigema
          </h1>
          <p className="mt-6 paragraph">
            {siteConfig.tagline}. {siteConfig.about.content}
          </p>
        </section>

      </main>
      <Footer />
    </div>
  );
}
