// Brand marks are served as SVGs from the Devicon project.
// Conceptual skills use readable monograms rather than implying a brand logo.
const iconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const skillLinks: Record<string, { url: string; icon?: string; mark?: string }> = {
  "React": { url: "https://react.dev/", icon: "react/react-original.svg" },
  "Next.js": { url: "https://nextjs.org/", icon: "nextjs/nextjs-original.svg" },
  "JavaScript": { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: "javascript/javascript-original.svg" },
  "TypeScript": { url: "https://www.typescriptlang.org/", icon: "typescript/typescript-original.svg" },
  "HTML": { url: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: "html5/html5-original.svg" },
  "CSS": { url: "https://developer.mozilla.org/en-US/docs/Web/CSS", icon: "css3/css3-original.svg" },
  "Tailwind CSS": { url: "https://tailwindcss.com/", icon: "tailwindcss/tailwindcss-original.svg" },
  "Node.js": { url: "https://nodejs.org/", icon: "nodejs/nodejs-original.svg" },
  "NestJS": { url: "https://nestjs.com/", icon: "nestjs/nestjs-original.svg" },
  "OpenAI API": { url: "https://platform.openai.com/docs/", mark: "AI" },
  "REST APIs": { url: "https://developer.mozilla.org/en-US/docs/Glossary/REST", mark: "API" },
  "Authentication": { url: "https://developer.mozilla.org/en-US/docs/Web/Security/Authentication", mark: "🔐" },
  "API design": { url: "https://swagger.io/resources/articles/best-practices-in-api-design/", mark: "{}" },
  "PostgreSQL": { url: "https://www.postgresql.org/", icon: "postgresql/postgresql-original.svg" },
  "MongoDB": { url: "https://www.mongodb.com/", icon: "mongodb/mongodb-original.svg" },
  "Supabase": { url: "https://supabase.com/", icon: "supabase/supabase-original.svg" },
  "Prisma": { url: "https://www.prisma.io/", icon: "prisma/prisma-original.svg" },
  "Relational modeling": { url: "https://www.postgresql.org/docs/current/ddl.html", mark: "DB" },
  "Git": { url: "https://git-scm.com/", icon: "git/git-original.svg" },
  "GitHub": { url: "https://github.com/", icon: "github/github-original.svg" },
  "Docker": { url: "https://www.docker.com/", icon: "docker/docker-original.svg" },
  "Vercel": { url: "https://vercel.com/", icon: "vercel/vercel-original.svg" },
  "Expo": { url: "https://expo.dev/", icon: "expo/expo-original.svg" },
  "PowerShell": { url: "https://learn.microsoft.com/en-us/powershell/", icon: "powershell/powershell-original.svg" },
};

export function skillIconUrl(skill: string): string | undefined {
  const icon = skillLinks[skill]?.icon;
  return icon ? `${iconBase}/${icon}` : undefined;
}
