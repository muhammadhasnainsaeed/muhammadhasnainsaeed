function CTA() {
  return (
    <section className="container mx-auto px-6 py-24 text-center">
      <h2 className="text-5xl text-hero sm:text-7xl md:text-8xl">
        Let's build something.
      </h2>
      <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-10">
        <a
          href="https://github.com/muhammadhasnainsaeed"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/muhammadhasnainsaeed"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-(--accent-blue)"
        >
          Connect on LinkedIn →
        </a>
      </div>
    </section>
  )
}
export default CTA
