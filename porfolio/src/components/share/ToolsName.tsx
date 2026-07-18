import { Marquee } from "./Marquee"
import { StickyContainer } from "./StickyContainer"

function Tools() {
  const logos = [
    // Languages
    "TypeScript",
    "JavaScript",
    "Python",
    "Go",
    "Java",
    "C#",
    "Rust",

    // Frontend
    "React",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "Angular",
    "React Native",
    "Expo",
    "Three.js",
    "Tailwind CSS",
    "Shadcn UI",
    "Framer Motion",
    "SASS",

    // Backend
    "Node.js",
    "NestJS",
    "Express",
    "Fastify",
    "Bun",
    "Deno",

    // API & Communication
    "REST API",
    "GraphQL",
    "Apollo",
    "tRPC",
    "gRPC",
    "Swagger",
    "WebSocket",
    "Socket.IO",

    // Databases
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Redis",
    "SQLite",
    "Supabase",
    "Firebase",
    "DynamoDB",
    "Elasticsearch",

    // ORM & Data
    "Prisma",
    "Drizzle ORM",
    "TypeORM",
    "Mongoose",

    // DevOps & Cloud
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Google Cloud",
    "Cloudflare",
    "Vercel",
    "Netlify",
    "Railway",
    "Render",
    "DigitalOcean",
    "Nginx",

    // CI/CD
    "GitHub Actions",
    "GitLab CI",
    "Jenkins",

    // AI & LLM
    "OpenAI",
    "Anthropic",
    "Gemini",
    "LangChain",
    "LangGraph",
    "Hugging Face",
    "Pinecone",
    "ChromaDB",
    "Ollama",
    "MCP",

    // Authentication
    "Auth.js",
    "Clerk",
    "Auth0",
    "Firebase Auth",

    // Payments
    "Stripe",
    "PayPal",

    // Testing
    "Playwright",
    "Cypress",
    "Jest",
    "Vitest",

    // Version Control
    "Git",
    "GitHub",
    "GitLab",

    // Developer Tools
    "VS Code",
    "Linux",
    "Postman",
    "Figma",
    "Jira",
    "Linear",
    "Notion",
  ]

  const marqueeItems = logos.flatMap((logo, index) =>
    index === logos.length - 1 ? [logo] : [logo, "•"]
  )

  return (
    <StickyContainer
      className="sticky bottom-0 bg-background"
      stuckClassName="border-t shadow-sm"
    >
      <Marquee speed={100}>
        {marqueeItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={`m-3 ${
              item === "•"
                ? "text-muted-foreground/40"
                : "text-lg font-medium text-foreground/80"
            } `}
          >
            {item}
          </span>
        ))}
      </Marquee>
    </StickyContainer>
  )
}

function ToolsName() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-6 md:py-12">
      <p className="mb-5 text-center text-sm text-muted-foreground">
        Tech I work with
      </p>
      <Tools />
    </div>
  )
}

export default ToolsName
