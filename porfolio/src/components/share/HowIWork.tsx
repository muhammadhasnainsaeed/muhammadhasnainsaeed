import { ArrowRight, Check } from "lucide-react"

const helpTask = [
  "Design distributed systems at scale",
  "Lead code reviews & mentorship",
  "Ship zero-downtime migrations",
  "Automate CI/CD & release pipelines",
  "Architect your next platform",
]

function IssueBoardMock() {
  const cols = [
    {
      name: "Backlog",
      count: 6,
      color: "bg-rose-400",
      items: [
        "Rework rate-limiter for burst traffic",
        "Postgres connection pool tuning",
        "Design doc: multi-region failover",
        "Flaky test on billing suite",
        "Metric: cold-start p99",
        "Deprecate legacy /v1 API",
      ],
    },
    {
      name: "In progress",
      count: 3,
      color: "bg-amber-400",
      items: [
        "Migrate auth to Passkeys",
        "Refactor event bus consumers",
        "Kafka → NATS spike",
      ],
    },
    {
      name: "In review",
      count: 1,
      color: "bg-sky-400",
      items: ["PR #2841 — Idempotent payment webhooks"],
    },
  ]
  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#efe8ff] p-4 sm:p-8">
      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-lg font-semibold">Platform tracker</h4>
          <div className="text-xs text-muted-foreground">Sprint 42</div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {cols.map((c) => (
            <div key={c.name} className="min-w-0">
              <div className="mb-2 flex items-center gap-2 text-xs font-medium">
                <span className={`h-2 w-2 rounded-full ${c.color}`} />
                <span>{c.name}</span>
                <span className="text-muted-foreground">{c.count}</span>
              </div>
              <div className="flex flex-col gap-2">
                {c.items.map((it, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 rounded-lg bg-neutral-50 p-2.5 text-[13px] ring-1 ring-black/5"
                  >
                    <div className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded border border-neutral-300 bg-white">
                      <Check className="h-3 w-3 text-transparent" />
                    </div>
                    <span className="truncate">{it}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* floating PR review */}
      <div className="pointer-events-none absolute top-32 right-6 hidden w-75 rounded-xl bg-white p-4 shadow-xl ring-1 ring-black/5 md:block">
        <div className="flex items-start gap-3">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-rose-200 text-sm">
            E
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold">Emily · Staff Eng</p>
            <p className="text-sm text-foreground/80">
              Nice — retries are now bounded and the audit trail looks clean.
              Approved.
            </p>
            <div className="mt-2 flex gap-2 text-xs text-muted-foreground">
              <span>👀 3</span>
              <span>✓ 2</span>
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-start gap-3 rounded-lg bg-[#f4efff] p-3">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-[#8b5cf6] text-white">
            <Check className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold">CI · main</p>
            <p className="text-sm text-foreground/80">
              All checks passed — deploying to prod.
            </p>
            <a href="#" className="text-sm text-[color:var(--accent-blue)]">
              View pipeline
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function HowIWork() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-28">
      <h2 className="text-4xl text-hero font-bold sm:text-6xl md:text-7xl">
        Ship boring, reliable software.
      </h2>
      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[340px_1fr]">
        <div>
          <p className="text-sm text-muted-foreground">How I work</p>
          <h3 className="mt-3 text-[28px] leading-tight font-semibold tracking-tight">
            Own the problem end-to-end — from RFC to on-call.
          </h3>
          <a
            href="#"
            className="mt-6 inline-grid h-9 w-9 place-items-center rounded-full ring-1 ring-border hover:bg-muted"
          >
            <ArrowRight className="h-4 w-4" />
          </a>
          <div className="mt-16">
            <p className="text-sm font-semibold">
              Pragmatic technical leadership
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Small PRs, tight feedback loops, and design docs before code.
            </p>
          </div>
        </div>
        <IssueBoardMock />
      </div>

      <div className="mt-14">
        <p className="text-sm text-muted-foreground">What I can help with</p>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {helpTask.map((t) => (
            <a
              key={t}
              href="#"
              className="flex items-center justify-between rounded-2xl border border-border bg-background px-5 py-4 text-[15px] font-medium hover:bg-muted"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-md bg-muted text-base">
                  ⚙️
                </span>
                {t}
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowIWork
