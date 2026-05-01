import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const socialLinks = [
  { label: "X", href: siteConfig.social.twitter },
  { label: "GitHub", href: siteConfig.social.github },
  { label: "Substack", href: siteConfig.social.substack },
] as const;

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("w-full border-t border-border/60 py-10 sm:py-12", className)}>
      <div className="mx-auto flex max-w-[1080px] flex-col gap-8 px-6 sm:px-8">
        <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
          {socialLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="border-t border-border/40 pt-6">
          <p className="text-sm text-muted-foreground">{siteConfig.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
