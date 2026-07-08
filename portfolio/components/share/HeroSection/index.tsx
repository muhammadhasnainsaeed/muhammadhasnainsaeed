import Link from "next/link"
import TechImages from "./TechImages"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"
// import heroImage from "../../../public/heroImages/Coding 3.svg"
import profileImage from "../../../public/heroImages/hasnain.jpg"
import { Card, CardContent } from "@/components/ui/card"

const logos = [
  "OpenAI",
  "Figma",
  "ramp",
  "◆ Cursor",
  "▲ Vercel",
  "NVIDIA.",
  "VOLVO",
  "L'ORÉAL",
  "Discord",
]

function HeroSection() {
  return (
    <section className="container mx-auto px-6 pt-10 pb-14 md:pt-20">
      <div className="mb-8 inline-grid gap-8">
        <TechImages />
        <div className="place-items-center text-center">
          <h1
            className="mb-3 font-semibold"
            style={{
              fontSize: "clamp(3.75rem, calc(11.25vw - 25.5px), 6rem);",
              lineHeight: "clamp(3rem,calc(10.8333333333vw - 17px),6.25rem);",
              letterSpacing:
                "clamp(-.2875rem,calc(-.6458333333vw + 2.375px),-.09375rem)",
            }}
          >
            Building 📦 products that 🎯 scale.
          </h1>
          <p className="mb-5 text-xl text-muted-foreground">
            Senior Full Stack Software Engineer building scalable web & AI
            products.
          </p>
          <div className="inline-grid grid-cols-2">
            <Link
              href={"#"}
              className={buttonVariants({
                variant: "default",
                size: "lg",
              })}
            >
              See Projects →
            </Link>
            <Link
              href={"#"}
              className={buttonVariants({
                variant: "outline",
                size: "lg",
              })}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
      <div className="grid h-screen w-full grid-cols-3 grid-rows-2">
        <div className="border border-dashed"></div>
        <div className="row-span-2">
          <div className="sticky top-20 mx-auto h-96 w-80 rounded shadow">
            <Image
              src={profileImage}
              alt="profile image"
              width={320}
              height={384}
              className="insect-0 absolute h-96 w-80 rounded object-cover"
              priority
              sizes="[16px 16px] [32px 32px] [48px 48px] [64px 64px] [96px 96px] [128px 128px]"
            />
          </div>
        </div>
        <div className="border border-dashed"></div>

        <div className="border border-dashed"></div>
        <div className="border border-dashed"></div>
      </div>

      <div className="mt-24">
        <p className="text-center text-sm text-muted-foreground">
          Trusted by 98% of the Forbes Cloud 100
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80">
          {logos.map((l) => (
            <span key={l} className="text-lg font-semibold text-foreground/70">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
export default HeroSection
