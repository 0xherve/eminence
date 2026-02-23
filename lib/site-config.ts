export const siteConfig = {
  name: "Herve Rwigema",
  tagline: "Aspiring Polymath",
  email: "imenarwigema@gmail.com",
  substackUrl: "https://0xherve.substack.com/",
  social: {
    twitter: "https://twitter.com/0xherve",
    github: "https://github.com/0xherve",
    substack: "https://0xherve.substack.com/",
  },
  about: {
    title: "About",
    content: `I'm a builder and thinker exploring the intersection of technology, design, and ideas. This site is a place for my projects and writing.`,
  },
  projects: {
    title: "Projects",
    items: [
      {
        title: "Project one",
        description: "A short description of what this project is and what you built.",
        href: "#",
      },
      {
        title: "Project two",
        description: "Another project with a bit more context.",
        href: "#",
      },
    ],
  },
  writing: {
    label: "Writing",
    href: "https://0xherve.substack.com/",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Herve Rwigema`,
  },
} as const;
