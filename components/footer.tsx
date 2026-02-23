import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "@/components/theme-switcher";

const socialLinks = [
  { label: "X (Twitter)", href: siteConfig.social.twitter },
  { label: "GitHub", href: siteConfig.social.github },
  { label: "Substack", href: siteConfig.social.substack },
] as const;

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "w-full border-t border-border/40 py-8",
        className
      )}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-6">
          {socialLinks.map(({ label, href }) => (
            <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </div>
        <ThemeSwitcher className="h-9 w-[7.5rem]" />
      </div>
    </footer>
  );
}
