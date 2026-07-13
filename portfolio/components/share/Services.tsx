import { ArrowRight, Pause, Search, Square } from "lucide-react"

function TerminalMock() {
  return (
    <div className="rounded-3xl bg-[#f5efe6] p-6 sm:p-10">
      <div className="mx-auto max-w-sm rounded-[32px] bg-white p-4 shadow-xl ring-1 ring-black/5">
        <div className="rounded-2xl bg-neutral-900 p-4 font-mono text-[12px] text-neutral-100">
          <p className="text-emerald-400">~ alex@prod $ deploy checkout</p>
          <p className="mt-2 text-neutral-400">→ building image (sha 8f2a1c)</p>
          <p>→ running 428 tests · 428 passed</p>
          <p>→ canary 5% · error rate 0.00%</p>
          <p className="text-emerald-400">✓ rolled out to 100% in 3m 12s</p>
        </div>
        <div className="mt-3 space-y-2 text-[13px]">
          <div className="rounded-xl bg-neutral-50 p-3">
            📉 p99 latency: 240ms → 78ms
          </div>
          <div className="rounded-xl bg-neutral-50 p-3">
            💰 infra spend −34% MoM
          </div>
          <div className="rounded-xl bg-[#e8f0ff] p-3 font-medium">
            Zero incidents · 187 days
          </div>
        </div>
      </div>
    </div>
  )
}

function CodeSearchMock() {
  return (
    <div className="rounded-3xl bg-[#eaf3ff] p-6 sm:p-10">
      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
        <div className="flex items-center gap-2 border-b border-border pb-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            defaultValue="how does the payment retry work?"
            className="w-full bg-transparent text-sm outline-none"
          />
          <span className="text-xs text-muted-foreground">12 refs</span>
        </div>
        <div className="mt-4 text-[13px] leading-relaxed">
          <p>
            Payments use an <b>idempotent retry</b> queue with jittered
            exponential backoff:
          </p>
          <p className="mt-3 font-semibold">Design highlights</p>
          <ol className="mt-2 list-decimal space-y-2 pl-5">
            <li>
              <b>Idempotency keys</b> hashed per (customer, order) to dedupe
              replays.
            </li>
            <li>
              <b>Circuit breaker</b> around the gateway, tripped at 5% error
              over 30s.
            </li>
            <li>
              <b>Dead-letter queue</b> with a small ops UI for manual replay.
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

function OncallMock() {
  return (
    <div className="rounded-3xl bg-[#e8f3ec] p-6 sm:p-10">
      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold">Incident #2041 · Resolved</p>
            <p className="text-xs text-muted-foreground">June 2 · MTTR 14m</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="grid h-8 w-8 place-items-center rounded-full bg-neutral-100">
              <Pause className="h-3.5 w-3.5" />
            </button>
            <button className="grid h-8 w-8 place-items-center rounded-full bg-neutral-100">
              <Square className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="aspect-video rounded-lg bg-linear-to-br from-amber-200 to-rose-300" />
          <div className="aspect-video rounded-lg bg-linear-to-br from-sky-200 to-indigo-300" />
        </div>
        <div className="mt-4 text-[13px]">
          <p className="font-semibold">Root cause</p>
          <p className="mt-1 text-foreground/80">
            A slow query pinned a replica; connection pool starved the API tier
            during a traffic spike.
          </p>
          <p className="mt-3 font-semibold">Follow-ups</p>
          <ul className="mt-1 space-y-1 text-foreground/80">
            <li>• Add index on orders(customer_id, created_at)</li>
            <li>• Set statement_timeout at pool level</li>
            <li>• Load-test replica failover next sprint</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function Services() {
  const cards = [
    {
      tag: "Backend & Systems",
      title: "You describe the load. I design the system.",
      mock: <TerminalMock />,
    },
    {
      tag: "Codebase Deep-Dives",
      title: "One search across your entire monorepo.",
      mock: <CodeSearchMock />,
    },
    {
      tag: "On-call & Reliability",
      title: "Fewer pages. Cleaner postmortems.",
      mock: <OncallMock />,
    },
  ]
  return (
    <section className="container mx-auto px-6 py-16 md:py-28">
      <h2 className="max-w-3xl text-4xl text-hero sm:text-6xl md:text-7xl">
        What I bring to your team.
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
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-(--accent-blue)"
              >
                See case study <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
