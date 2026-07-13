import Image from "next/image"
import ExpoIcon from "../../../public/heroImages/tech_icons/Expo-Icon--Streamline-Svg-Logos.svg"
import JavascriptIcon from "../../../public/heroImages/tech_icons/Javascript--Streamline-Svg-Logos.svg"
import NextjsIcon from "../../../public/heroImages/tech_icons/Nextjs-Icon--Streamline-Svg-Logos.svg"
import NodesjLogo from "../../../public/heroImages/tech_icons/Nodesj-Logo--Streamline-Ultimate.svg"
import NuxtIcon from "../../../public/heroImages/tech_icons/Nuxt-Icon--Streamline-Svg-Logos.svg"
import PythonIcon from "../../../public/heroImages/tech_icons/Python--Streamline-Svg-Logos.svg"
import ReactIcon from "../../../public/heroImages/tech_icons/React--Streamline-Svg-Logos.svg"
import SassIcon from "../../../public/heroImages/tech_icons/Sass--Streamline-Svg-Logos.svg"
import TailwindcssIcon from "../../../public/heroImages/tech_icons/Tailwindcss-Icon--Streamline-Svg-Logos.svg"
import ThreejsIcon from "../../../public/heroImages/tech_icons/Threejs--Streamline-Svg-Logos.svg"
import TypescriptIcon from "../../../public/heroImages/tech_icons/Typescript-Icon--Streamline-Svg-Logos.svg"
import VueIcon from "../../../public/heroImages/tech_icons/Vue--Streamline-Svg-Logos.svg"
import NestjsIcon from "../../../public/heroImages/tech_icons/Frame.svg"

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
          <Image
            src={f.iconfile}
            alt={f.name}
            width={10}
            height={10}
            className="aspect-square h-10 w-10 min-w-10 origin-center transition duration-150 hover:scale-125 dark:mix-blend-luminosity dark:invert"
          />
        </li>
      ))}
    </ul>
  )
}

export default TechImages
