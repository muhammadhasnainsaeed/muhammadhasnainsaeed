import voiceImg from "@/assets/project-voice.jpg"
import trainerflixImg from "@/assets/project-trainerflix.jpg"
import tiptubeImg from "@/assets/project-tiptube.jpg"

function ProjectPanel({
  theme,
  eyebrow,
  title,
  body,
  image,
}: {
  theme: "dark" | "light"
  eyebrow: string
  title: string
  body: string
  image: string
}) {
  const isDark = theme === "dark"
  return (
    <div
      className={`relative aspect-square overflow-hidden rounded-[min(1.5vw,24px)] px-6 py-24 md:rounded ${
        isDark ? "bg-zinc-900" : "bg-zinc-100"
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <span
          className={`mb-6 text-xs font-semibold tracking-[0.2em] uppercase ${
            isDark ? "text-zinc-500" : "text-zinc-400"
          }`}
        >
          {eyebrow}
        </span>
        <h3
          className={`mb-8 text-4xl font-medium tracking-tight text-balance sm:text-5xl ${
            isDark ? "text-zinc-50" : "text-zinc-900"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mb-16 max-w-[48ch] text-pretty ${
            isDark ? "text-zinc-400" : "text-zinc-600"
          }`}
        >
          {body}
        </p>
        <img
          src={image}
          alt={`${title} interface`}
          width={1600}
          height={1000}
          loading="lazy"
          className={`w-full max-w-5xl rounded-[min(1vw,12px)] object-cover outline-1 -outline-offset-1 ${
            isDark ? "outline-white/5" : "outline-black/5"
          }`}
        />
      </div>
    </div>
  )
}

function FeatureProjects() {
  return (
    <section
      id="work"
      className="grid grid-cols-1 gap-5 bg-zinc-950 p-6 md:grid-cols-2"
    >
      <ProjectPanel
        theme="dark"
        eyebrow="AI Engineering"
        title="AI Voice Translator"
        body="Real-time multilingual desktop application built with Electron, React, Node.js and OpenAI — translating speech across languages with sub-second latency."
        image={voiceImg.src}
      />
      <ProjectPanel
        theme="light"
        eyebrow="Learning Platform"
        title="Trainerflix"
        body="Scalable LMS with subscriptions, authentication and instructor dashboards — serving thousands of students and creators end to end."
        image={trainerflixImg.src}
      />
      <ProjectPanel
        theme="light"
        eyebrow="Creator Platform"
        title="TipTube"
        body="Creator platform for educational content and memberships — video delivery, monetization and community in a single product."
        image={tiptubeImg.src}
      />
      <ProjectPanel
        theme="dark"
        eyebrow="Creator Platform"
        title="TipTube"
        body="Creator platform for educational content and memberships — video delivery, monetization and community in a single product."
        image={tiptubeImg.src}
      />
    </section>
  )
}
export default FeatureProjects
