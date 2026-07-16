import { ArrowRight } from "lucide-react"

function RfcMock() {
  return (
    <div className="rounded-3xl bg-[#fff4e6] p-6 sm:p-10">
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <h4 className="text-xl font-bold">RFC-042 · Multi-region writes</h4>
        <div className="mt-3 space-y-1 text-xs">
          <p>
            <span className="text-muted-foreground">Author</span> · Muhammad
            Hasnain Saeed
          </p>
          <p>
            <span className="text-muted-foreground">Status</span> · Accepted
          </p>
          <p>
            <span className="text-muted-foreground">Type</span> · Architecture
          </p>
        </div>
        <p className="mt-4 text-sm font-semibold">Summary</p>
        <p className="mt-1 text-[13px] leading-relaxed text-foreground/80">
          Move the primary write path to a CRDT-backed store with region-local
          acknowledgements, keeping strong consistency for billing via a narrow
          synchronous path.
        </p>
        <div className="mt-5 rounded-xl border border-border p-4">
          <p className="text-sm font-semibold">Rollout · Q3</p>
          <p className="text-xs text-muted-foreground">
            DRI: Hasnain · Milestone: GA · Shadow traffic live
          </p>
        </div>
      </div>
    </div>
  )
}

function StackMock() {
  return (
    <div className="rounded-3xl bg-[#eef1ff] p-6 sm:p-10">
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <div className="mb-4 h-28 rounded-xl bg-linear-to-br from-indigo-400 to-sky-400" />
        <h4 className="text-xl font-bold">Tools I reach for 🛠️</h4>
        <p className="mt-2 text-[13px] text-foreground/80">
          A pragmatic stack, chosen for the shape of the problem.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 text-[13px]">
          <div>
            <p className="font-semibold">Backend</p>
            <ul className="mt-1 space-y-0.5 text-foreground/70">
              <li>Node.js · Express</li>
              <li>PostgreSQL · MongoDB</li>
              <li>Prisma · TypeORM</li>
              <li>REST · GraphQL</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Frontend & infra</p>
            <ul className="mt-1 space-y-0.5 text-foreground/70">
              <li>TypeScript · React · Next.js</li>
              <li>Vue · Nuxt.js · TailwindCSS</li>
              <li>Redux Toolkit · Zustand</li>
              <li>Docker · AWS · CI/CD</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectsMock() {
  return (
    <div className="rounded-3xl bg-[#ffece8] p-6 sm:p-10">
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <h4 className="text-lg font-semibold">Selected shipped work</h4>
        <div className="mt-4 space-y-2 text-[13px]">
          {[
            { name: "Tiptube", status: "Shipped", color: "bg-emerald-500" },
            { name: "Trainerflix", status: "Shipped", color: "bg-emerald-500" },
            { name: "Victus", status: "Shipped", color: "bg-emerald-500" },
            { name: "ZodiacNest", status: "Shipped", color: "bg-emerald-500" },
            {
              name: "Alnafi platform products",
              status: "Shipped",
              color: "bg-emerald-500",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-lg border border-border px-3 py-2"
            >
              <span>{t.name}</span>
              <span className="flex items-center gap-2 text-xs">
                <span className={`h-2 w-2 rounded-full ${t.color}`} />
                {t.status}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-5 flex gap-1">
          {["2022", "2023", "2024", "2025"].map((m, i) => (
            <div key={m} className="flex-1">
              <div
                className={`h-2 rounded-full ${i < 3 ? "bg-rose-400" : "bg-neutral-200"}`}
              />
              <p className="mt-1 text-center text-[10px] text-muted-foreground">
                {m}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Portfolio() {
  const cards = [
    {
      tag: "Writing",
      title: "Design docs, not blog fluff.",
      mock: <RfcMock />,
    },
    {
      tag: "Stack",
      title: "The right tool for the shape of the problem.",
      mock: <StackMock />,
    },
    {
      tag: "Projects",
      title: "Less roadmap. More shipped.",
      mock: <ProjectsMock />,
    },
  ]
  return (
    <section className="container mx-auto px-6 py-16 md:py-28">
      <h2 className="max-w-3xl text-4xl text-hero sm:text-6xl md:text-7xl">
        A decade of shipped work.
      </h2>
      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <div key={c.tag} className="flex flex-col">
            {c.mock}
            <div className="mt-6">
              <p className="text-sm text-muted-foreground">{c.tag}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                {c.title}
              </h3>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent-blue)]"
              >
                Read more <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
