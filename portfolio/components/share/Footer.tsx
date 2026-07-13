import Image from "next/image"
import Link from "next/link"
import logo from "../../public/logo.webp"

function Footer() {
  const cols: { title: string; links: { label: string; href: string }[] }[] = [
    {
      title: "Projects",
      links: [
        { label: "Tiptube", href: "#" },
        { label: "Trainerflix", href: "#" },
        { label: "Victus", href: "#" },
        { label: "ZodiacNest", href: "#" },
        { label: "Alnafi", href: "#" },
      ],
    },
    {
      title: "Stack",
      links: [
        { label: "TypeScript", href: "#" },
        { label: "React · Next.js", href: "#" },
        { label: "Node.js · Express", href: "#" },
        { label: "PostgreSQL · MongoDB", href: "#" },
        { label: "Docker · AWS", href: "#" },
      ],
    },
    {
      title: "Elsewhere",
      links: [
        { label: "GitHub", href: "https://github.com/muhammadhasnainsaeed" },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/in/muhammadhasnainsaeed",
        },
      ],
    },
    {
      title: "Available for",
      links: [
        { label: "Full-stack roles", href: "#" },
        { label: "Contract work", href: "#" },
        { label: "Remote engagements", href: "#" },
        {
          label: "Say hi →",
          href: "https://linkedin.com/in/muhammadhasnainsaeed",
        },
      ],
    },
  ]
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <Link href={"/"}>
              <Image
                src={logo}
                alt="Logo"
                width={120}
                height={36}
                className="h-10 w-26 dark:invert"
              ></Image>
            </Link>
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/muhammadhasnainsaeed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-sm hover:bg-muted"
              >
                GH
              </a>
              <a
                href="https://linkedin.com/in/muhammadhasnainsaeed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-sm hover:bg-muted"
              >
                in
              </a>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>Karachi, Pakistan · Open to remote work</p>
              <p className="mt-1">Currently open to new roles</p>
              <p className="mt-4">© 2026 Muhammad Hasnain Saeed</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-sm font-semibold">{c.title}</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={
                          l.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          l.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="hover:text-foreground"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
