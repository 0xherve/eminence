import { IconBrandX, IconBrandGithub, IconRss, IconMail } from "@tabler/icons-react";

export const siteConfig = {
  name: "0xherve",
  tagline: "Aspiring Polymath",
  social: [
    { label: "X",        href: "https://twitter.com/0xherve",       icon: IconBrandX },
    { label: "GitHub",   href: "https://github.com/0xherve",         icon: IconBrandGithub },
    { label: "Substack", href: "https://0xherve.substack.com/",      icon: IconRss },
    { label: "Email",    href: "mailto:imenarwigema@gmail.com",       icon: IconMail },
  ],
  tags: [
    "Tinkerer", "Developer", "Writer"
  ]
} as const;
