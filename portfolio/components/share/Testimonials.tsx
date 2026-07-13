function Testimonials() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-28">
      <p className="text-sm text-muted-foreground">
        <span
          className="italic"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          &quot;Kind words, in time.&quot;
        </span>
      </p>
      <h2 className="mt-6 max-w-3xl text-4xl text-hero sm:text-6xl md:text-7xl">
        What teammates say.
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        <figure className="flex flex-col rounded-3xl border border-border bg-primary-foreground p-8 md:col-span-3">
          <blockquote className="text-lg leading-snug tracking-tight text-muted-foreground">
            Client and colleague testimonials coming soon.
          </blockquote>
          <figcaption className="mt-6 text-sm">
            <div className="font-semibold">In the meantime</div>
            <div className="text-muted-foreground">
              Reach out on{" "}
              <a
                href="https://linkedin.com/in/muhammadhasnainsaeed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--accent-blue) hover:underline"
              >
                LinkedIn
              </a>{" "}
              for references.
            </div>
          </figcaption>
        </figure>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-muted-foreground">
        <span>⚡ 5+ years shipping production web apps</span>
        <span>🌍 Based in Karachi · open to remote</span>
        <span>🧰 React · Next.js · Node · TypeScript</span>
      </div>
    </section>
  )
}

export default Testimonials
