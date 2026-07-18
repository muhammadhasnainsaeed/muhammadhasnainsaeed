import { ArrowRight } from "lucide-react"
import TechImages from "./TechImages"
import { buttonVariants } from "@/components/ui/button"

const logos = [
  "React",
  "Next.js",
  "Node.js",
  "Nest JS",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "OpenAI",
]
const achievements = [
  {
    metric: "40+",
    label: "Products shipped across SaaS, EdTech and creator platforms",
  },
  { metric: "4+ yrs", label: "Building full-stack products in production" },
  { metric: "99.9%", label: "Uptime maintained on live customer platforms" },
  { metric: "10k+", label: "End users served on platforms I've built or led" },
]

function HeroSection() {
  return (
    <>
      <section className="mx-auto mt-24 mb-14 flex max-w-6xl flex-col items-center justify-center overflow-hidden px-6">
        <TechImages />
        <h1 className="md:text-[112px mt-7.5 max-w-5xl text-center text-[52px] text-hero text-primary sm:text-[80px] md:mt-15">
          Building products that scale.
        </h1>
        <p className="mt-4 max-w-2xl text-center text-[17px] text-muted-foreground md:text-lg">
          {/*I help founders, product teams and agencies ship high-performance web
        apps, AI-powered products and cloud architectures — from first commit to
        production scale.*/}
          I'm Hasnain — a Full-Stack TypeScript Engineer based in Karachi,
          Pakistan, with 4+ years of experience building scalable web
          applications with React, Next.js, Node.js, and modern DevOps
          practices.
          <a
            href="#"
            className="mx-1 inline-flex items-center gap-1 text-sm font-medium text-blue-400"
          >
            More story <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </p>
        <div className="mt-4 inline-grid grid-cols-2">
          <a
            href={"/about"}
            className={buttonVariants({
              variant: "default",
              size: "lg",
            })}
          >
            See Projects →
          </a>
          <a
            href={"/contact"}
            className={buttonVariants({
              variant: "outline",
              size: "lg",
            })}
          >
            Get in touch
          </a>
        </div>
      </section>

      <div className="my-24">
        <p className="text-center text-sm text-muted-foreground">
          Tech I work with
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80">
          {logos.map((l) => (
            <span key={l} className="text-lg font-semibold text-foreground/70">
              {l}
            </span>
          ))}
        </div>
      </div>

      <section className="bg-primary-foreground py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {achievements.map((a) => (
            <div key={a.label} className="text-center md:text-left">
              <p className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {a.metric}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{a.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
export default HeroSection
