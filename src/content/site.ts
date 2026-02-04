/**
 * Personal site content — Polimath Terminal / Herve Rwigema
 */

import aboutMd from "./about.md?raw";

export const site = {
  name: "Herve Rwigema",
  tagline: "Aspiring Polymath",
  /** About content — edit src/content/about.md */
  about: aboutMd,

  values: [
    {
      title: "Curiosity first",
      description: "Trying to understand how things work, then share what I learn.",
    },
    {
      title: "Communicate clearly",
      description: "One of the most important skills: sharing thoughts and ideas properly.",
    },
    {
      title: "Learn in public",
      description: "Diving deep into blockchain and web3, explaining as I go.",
    },
  ],

  links: {
    twitter: "https://x.com/0xherve",
    github: "https://github.com/0xherve",
    substack: "https://0xherve.substack.com",
  },

  projects: [
    {
      title: "Anchor Escrow",
      description: "A Solana smart contract built with Anchor for token swaps. Implements escrow PDAs where makers deposit tokens and takers can accept deals.",
      href: "https://github.com/0xherve/anchor-escrow",
      tags: ["Rust", "TypeScript", "Solana", "Anchor"],
    },
    {
      title: "T3 Gallery",
      description: "A gallery application built with the T3 stack. Features image upload, authentication, and database integration.",
      href: "https://github.com/0xherve/t3-gallery",
      tags: ["TypeScript", "Next.js", "T3 Stack"],
    },
    {
      title: "Rustlings",
      description: "Repo with my Rustlings work — learning Rust through exercises.",
      href: "https://github.com/0xherve/rustlings",
      tags: ["Rust"],
    },
    {
      title: "logz-theme",
      description: "A Jekyll theme for GitHub Pages based on the Hacker theme.",
      href: "https://github.com/0xherve/logz-theme",
      tags: ["SCSS", "Jekyll"],
    },
  ],

  cta: {
    title: "Say hello.",
    description: "Drop by Substack, X, or GitHub. Consider subscribing to stay updated.",
    email: "",
  },
} as const
