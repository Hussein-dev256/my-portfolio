export const siteConfig = {
  name: "Mafabi Hussein",
  role: "Software Engineer",
  heroTagline:
    "Full-stack and backend-oriented software engineer working across TypeScript, Node.js, React, and PostgreSQL.",
  emailFallback: "husseintech256@gmail.com",
  phone: "+256 760 305 803",
  website: "mhussein.vercel.app",
  social: {
    x: "https://x.com/son_of_antonn",
    github: "https://github.com/Hussein-dev256",
    linkedin: "https://www.linkedin.com/in/hussein-hussein-7a8a2436b/",
    whatsapp: "https://wa.me/256760305803",
  },
  nav: [
    { label: "Home", shortLabel: "Home", href: "/" },
    { label: "Work", shortLabel: "Work", href: "/work" },
    { label: "Engineering", shortLabel: "Eng", href: "/engineering" },
    { label: "Contact", shortLabel: "Talk", href: "/contact" },
  ],
} as const;
