const helpAreas = [
  {
    title: "SaaS platforms, end to end",
    body: "From auth and billing to admin dashboards — I ship production-ready SaaS on React, Next.js, Node.js and Postgres.",
  },
  {
    title: "AI-powered products",
    body: "RAG, agents, voice and multimodal experiences integrated with OpenAI, Anthropic and open models on a stack you can maintain.",
  },
  {
    title: "Cloud & scale",
    body: "AWS, Cloudflare, Docker and CI/CD pipelines designed for reliability, observability and predictable cost.",
  },
  {
    title: "Rescue & modernization",
    body: "Legacy React or Node codebases untangled — refactored, typed, tested and shipped without downtime.",
  },
]

function HowIWork() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <h2 className="text-sm font-medium tracking-widest text-zinc-400 uppercase lg:w-1/3">
          How I can help
        </h2>
        <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-2">
          {helpAreas.map((h) => (
            <div key={h.title} className="flex flex-col gap-3">
              <h3 className="text-lg font-medium text-zinc-900">{h.title}</h3>
              <p className="text-sm leading-relaxed text-pretty text-zinc-500">
                {h.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowIWork
