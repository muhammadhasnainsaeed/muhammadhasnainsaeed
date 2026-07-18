import { buttonVariants } from "../ui/button"

function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h2 className="text-4xl font-semibold tracking-tight text-balance text-zinc-900 sm:text-6xl">
        Let's build something meaningful.
      </h2>
      <p className="mx-auto mt-6 mb-5 max-w-[48ch] text-lg text-zinc-600">
        Currently open to senior engineering roles and high-impact consulting
        engagements.
      </p>
      <div className="mt-5 flex items-center justify-center gap-5">
        <a
          href="/contact"
          className={buttonVariants({
            size: "lg",
          })}
        >
          Start a project
        </a>
        <a
          href="/experience"
          className={buttonVariants({
            size: "lg",
            variant: "secondary",
          })}
        >
          See my journey →
        </a>
      </div>
    </section>
  )
}
export default CTA
