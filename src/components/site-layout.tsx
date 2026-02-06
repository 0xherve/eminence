import { site } from "~/content/site";
import { createSignal, onMount } from "solid-js";

const SECTIONS = ["hero", "about", "projects"] as const;
type Section = (typeof SECTIONS)[number];

function scrollToSection(section: Section) {
  const el = document.querySelector(`[data-section="${section}"]`);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const linkLabels: Record<keyof typeof site.links, string> = {
  substack: "Substack",
  twitter: "X (Twitter)",
  github: "GitHub",
};

const navBtnClass =
  "rounded px-1 py-0.5 text-sm font-medium uppercase transition outline-none hover:text-page-fg focus-visible:ring-2 focus-visible:ring-page-fg/30 focus-visible:ring-offset-2 focus-visible:ring-offset-page-bg";

export function SiteLayout(props: { children: import("solid-js").JSX.Element }) {
  const [activeSection, setActiveSection] = createSignal<Section>("hero");

  onMount(() => {
    const sections = SECTIONS.map((key) => ({
      key,
      el: document.querySelector(`[data-section="${key}"]`),
    })).filter((s): s is { key: Section; el: Element } => s.el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const key = entry.target.getAttribute("data-section") as Section | null;
          if (key && SECTIONS.includes(key)) setActiveSection(key);
          break;
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  });

  const footerLinkOrder: (keyof typeof site.links)[] = ["twitter", "github", "substack"];
  const footerLinks = footerLinkOrder
    .filter((key) => site.links[key])
    .map((key) => [key, site.links[key]] as [keyof typeof site.links, string]);

  return (
    <div class="min-h-screen w-full bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(255,255,255,0.04),transparent),#0a0a0a]">
      <div class="mx-auto flex min-h-screen w-full max-w-[90vw] flex-col border-x border-page-border bg-page-bg text-page-fg">
        <header class="sticky top-0 z-50 border-b border-page-border bg-page-bg/90 backdrop-blur-md">
          <nav class="flex items-center justify-between px-6 py-4">
            <button
              type="button"
              onClick={() => scrollToSection("hero")}
              class="text-2xl font-bold tracking-tight text-page-fg outline-none hover:text-page-fg/90 focus-visible:ring-2 focus-visible:ring-page-fg/30 focus-visible:ring-offset-2 focus-visible:ring-offset-page-bg"
            >
              {site.name}
            </button>
            <div class="flex items-center gap-6">
              <button
                type="button"
                onClick={() => scrollToSection("about")}
                class={`${navBtnClass} ${activeSection() === "about" ? "text-page-fg" : "text-page-fg/50"}`}
              >
                About
              </button>
              <span class="h-4 w-px bg-page-border" aria-hidden />
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                class={`${navBtnClass} ${activeSection() === "projects" ? "text-page-fg" : "text-page-fg/50"}`}
              >
                Projects
              </button>
              <span class="h-4 w-px bg-page-border" aria-hidden />
              <a
                href={site.links.substack}
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-medium uppercase text-page-fg/50 transition hover:text-page-fg"
              >
                Writing
              </a>
            </div>
          </nav>
        </header>
        <main class="flex-1">{props.children}</main>
        <footer class="border-t border-page-border px-6 py-8">
          <div class="flex flex-col items-center gap-4 text-center text-sm text-page-fg/50">
            <div class="flex justify-center gap-6">
              {footerLinks.map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-page-fg hover:underline"
                >
                  {linkLabels[key]}
                </a>
              ))}
            </div>
            <span>© {new Date().getFullYear()} {site.name}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
