import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "@/components/theme-switcher";

const socialLinks = [
  { label: "X", href: siteConfig.social.twitter },
  { label: "GitHub", href: siteConfig.social.github },
  { label: "Substack", href: siteConfig.social.substack },
] as const;

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "w-full border-t border-border py-12 sm:py-16 transition-all duration-300",
        className
      )}
    >
      <div className="mx-auto max-w-[780px] px-7 sm:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            {socialLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-muted-foreground transition-colors hover:text-foreground uppercase tracking-widest"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Theme
            </span>
            <ThemeSwitcher className="h-8 w-auto" />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50">
          <p className="text-xs font-mono text-muted-foreground/70 tracking-widest uppercase">
            {siteConfig.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
