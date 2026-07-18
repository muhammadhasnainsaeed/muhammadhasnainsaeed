function Footer() {
  const site = {
    name: "Hasnain",
    role: "Senior Full Stack Software Engineer",
    email: "ihasnain4@gmail.com",
    tagline: "Building scalable software that powers modern digital products.",
    location: "Remote · Available worldwide",
  }
  return (
    <footer className="bg-primary-foreground py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href={"/"} className="text-xl font-black">
              {site.name}
            </a>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              {site.tagline}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/experience">Experience</a>
              </li>
              <li>
                <a href="/skills">Skills</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Connect
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-muted-foreground/5 pt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Built with precision.
        </div>
      </div>
    </footer>
  )
}

export default Footer
