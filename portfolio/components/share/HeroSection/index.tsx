import Link from "next/link"
import TechImages from "./TechImages"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import HeroImage from "../../../public/heroImages/heroImage.svg"

function HeroSection() {
  return (
    <div className="overflow-hidden pt-10 pb-14 md:pt-20">
      <TechImages />
      <section className="container mx-auto flex flex-col items-center justify-center px-6">
        <h1 className="mt-7.5 mb-3 max-w-5xl text-center text-[52px] text-hero text-primary sm:text-[80px] md:mt-15 md:text-[112px]">
          Building 📦 products that 🎯 scale.
        </h1>
        <p className="mb-5 max-w-2xl text-center text-xl text-muted-foreground">
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
      </section>
    </div>
  )
}
export default HeroSection
