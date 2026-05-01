import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { label: "X", href: siteConfig.social.twitter },
  { label: "GitHub", href: siteConfig.social.github },
  { label: "Substack", href: siteConfig.social.substack },
] as const;

export function Footer() {
  return (
    <footer className="w-full py-10 sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-8">
        <div className="flex flex-wrap justify-center items-center gap-5 text-sm text-muted-foreground">
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
      </div>
    </footer>
  );
}
