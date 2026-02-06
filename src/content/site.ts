export const site = {
  name: "Herve Rwigema",
  tagline: "Aspiring Polymath",
  links: {
    substack: "https://0xherve.substack.com",
    twitter: "https://x.com/0xherve",
    github: "https://github.com/0xherve",
  },
  values: [
    { title: "Curiosity first", description: "Trying to understand how things work, then share what I learn." },
    { title: "Communicate clearly", description: "One of the most important skills: sharing thoughts and ideas properly." },
    { title: "Learn in public", description: "Diving deep into blockchain and web3, explaining as I go." },
  ],
  projects: [
    { title: "Anchor Escrow", description: "A Solana smart contract built with Anchor for token swaps.", href: "https://github.com/0xherve/anchor-escrow", tags: ["Rust", "TypeScript", "Solana"] },
    { title: "T3 Gallery", description: "A gallery application built with the T3 stack.", href: "https://github.com/0xherve/t3-gallery", tags: ["TypeScript", "Next.js"] },
  ],
} as const;
