import { Image } from "astro:assets"

const ExpoIcon = "/heroImages/tech_icons/Expo-Icon--Streamline-Svg-Logos.svg"
const JavascriptIcon =
  "/heroImages/tech_icons/Javascript--Streamline-Svg-Logos.svg"
const NextjsIcon =
  "/heroImages/tech_icons/Nextjs-Icon--Streamline-Svg-Logos.svg"
const NodesjLogo = "/heroImages/tech_icons/Nodesj-Logo--Streamline-Ultimate.svg"
const NuxtIcon = "/heroImages/tech_icons/Nuxt-Icon--Streamline-Svg-Logos.svg"
const PythonIcon = "/heroImages/tech_icons/Python--Streamline-Svg-Logos.svg"
const ReactIcon = "/heroImages/tech_icons/React--Streamline-Svg-Logos.svg"
const SassIcon = "/heroImages/tech_icons/Sass--Streamline-Svg-Logos.svg"
const TailwindcssIcon =
  "/heroImages/tech_icons/Tailwindcss-Icon--Streamline-Svg-Logos.svg"
const ThreejsIcon = "/heroImages/tech_icons/Threejs--Streamline-Svg-Logos.svg"
const TypescriptIcon =
  "/heroImages/tech_icons/Typescript-Icon--Streamline-Svg-Logos.svg"
const VueIcon = "/heroImages/tech_icons/Vue--Streamline-Svg-Logos.svg"
const NestjsIcon = "/heroImages/tech_icons/Frame.svg"

function TechImages() {
  const techStack = [
    { name: "Python", iconfile: PythonIcon },
    { name: "Javascript", iconfile: JavascriptIcon },
    { name: "Typescript", iconfile: TypescriptIcon },
    { name: "Node.js", iconfile: NodesjLogo },
    { name: "nest.js", iconfile: NestjsIcon },
    { name: "React", iconfile: ReactIcon },
    { name: "Next.js", iconfile: NextjsIcon },
    { name: "Vue", iconfile: VueIcon },
    { name: "Nuxt.js", iconfile: NuxtIcon },
    { name: "Expo", iconfile: ExpoIcon },
    { name: "Tailwind CSS", iconfile: TailwindcssIcon },
    { name: "Sass", iconfile: SassIcon },
    { name: "Three.js", iconfile: ThreejsIcon },
  ]

  const techIcons = [...techStack, ...techStack]

  return (
    <ul className="flex-start flex max-w-full items-center gap-10 pl-6">
      {techIcons.map((f, i) => (
        <li className="flex transform items-center" key={i}>
          <img
            src={f.iconfile}
            alt={f.name}
            width={10}
            height={10}
            className="aspect-square h-10 w-10 min-w-10 origin-center transition duration-150 hover:scale-125 dark:mix-blend-luminosity dark:invert"
          />
        </li>
      ))}
      {}
    </ul>
  )
}

export default TechImages
