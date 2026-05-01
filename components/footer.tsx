import Link from "next/link";
import { Icon } from "@/components/icon";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="w-full py-10 sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {siteConfig.social.map(({ label, href, icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="opacity-50 hover:opacity-100 transition-opacity"
              aria-label={label}
            >
              <Icon icon={icon} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
