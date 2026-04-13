"use client";

import { useRef, useEffect, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

// Scroll reveal hook
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Section component with reveal animation
const Section = ({
  label,
  children,
  delay = 0,
}: {
  label: string;
  children: React.ReactNode;
  delay?: number;
}) => {
  const { ref, isVisible } = useReveal();

  return (
    <section
      ref={ref}
      className="mb-20 sm:mb-28"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      <div className="flex items-center gap-3 mb-7">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest font-mono">
          {label}
        </span>
        <div
          className="h-px flex-1 bg-border"
          style={{
            transformOrigin: "left",
            transform: isVisible ? "scaleX(1)" : "scaleX(0)",
            transition: `transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay + 200}ms`,
          }}
        />
      </div>
      {children}
    </section>
  );
};

export function HomePage() {
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header aboutRef={aboutRef} projectsRef={projectsRef} />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative mx-auto max-w-[780px] px-7 py-24 sm:px-8 sm:py-32">
          {/* Decorative dot pattern */}
          <div
            className="absolute -top-8 -left-10 w-32 h-32 opacity-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, var(--color-border) 1px, transparent 1px)`,
              backgroundSize: "16px 16px",
              opacity: loaded ? 0.6 : 0,
              transition: "opacity 1.2s ease 0.3s",
            }}
          />

          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s",
            }}
          >
            <div className="flex items-center gap-2 mb-8">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-muted-foreground"
                style={{
                  animation: loaded ? "blink 2.4s ease-in-out infinite" : "none",
                }}
              />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest font-mono">
                Welcome to the workshop
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
              {siteConfig.name}
            </h1>
          </div>

          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: "all 0.7s cubic-bezier(0.22,1,0.36,1) 0.25s",
            }}
          >
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
              {siteConfig.tagline} — {siteConfig.about.content}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                variant="default"
                render={(props) => (
                  <a {...props} href={`mailto:${siteConfig.email}`}>
                    Get in touch
                  </a>
                )}
                className="font-mono text-sm"
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
                className="font-mono text-sm"
              />
            </div>

            {/* Identity tags */}
            <div className="flex gap-4 mt-8 flex-wrap">
              {["developer", "writer", "tinkerer"].map((identity, i) => (
                <span
                  key={identity}
                  className="text-xs font-mono text-muted-foreground"
                  style={{
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? "translateX(0)" : "translateX(-8px)",
                    transition: `all 0.5s cubic-bezier(0.22,1,0.36,1) ${400 + i * 100}ms`,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span className="text-muted-foreground/60">—</span> {identity}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          ref={aboutRef}
          className="scroll-mt-20 border-t border-border"
        >
          <div className="mx-auto max-w-[780px] px-7 py-20 sm:px-8 sm:py-28">
            <Section label="01 — About">
              <div className="max-w-2xl">
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4">
                  {siteConfig.about.content}
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  I build things, write about them, and think a lot in between. This site is where projects and ideas live — equally important, just different formats.
                </p>
              </div>
            </Section>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          ref={projectsRef}
          className="scroll-mt-20 border-t border-border"
        >
          <div className="mx-auto max-w-[780px] px-7 py-20 sm:px-8 sm:py-28">
            <Section label="02 — Projects" delay={40}>
              <div className="space-y-5">
                {siteConfig.projects.items.map((project, index) => (
                  <a
                    key={project.title}
                    href={project.href}
                    className={cn(
                      "group block p-6 border border-border rounded-lg transition-all duration-300",
                      "hover:border-foreground/40 hover:bg-muted/50 hover:shadow-sm",
                      project.href === "#" && "pointer-events-none opacity-60"
                    )}
                    style={{
                      opacity: 0,
                      transform: "translateY(20px)",
                      animation: `fadeInUp 0.6s ease-out ${0.1 + index * 0.1}s forwards`,
                    }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg sm:text-xl font-semibold tracking-tight group-hover:text-foreground transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-muted-foreground flex-shrink-0 ml-4">
                        {new Date().getFullYear()}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                      {project.description}
                    </p>
                  </a>
                ))}
              </div>
            </Section>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
