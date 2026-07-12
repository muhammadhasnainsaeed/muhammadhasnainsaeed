import Link from "next/link"
import TechImages from "./TechImages"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import HeroImage from "../../../public/heroImages/heroImage.svg"

function HeroSection() {
  return (
    <div className="pt-8 md:pt-12">
      <TechImages />
      <section className="container mx-auto px-2 md:px-6">
        <div className="inline-grid gap-8">
          <div className="place-items-center text-center">
            <h1
              className="mb-3 text-primary"
              style={{
                fontSize: "clamp(3.75rem, calc(11.25vw - 25.5px), 6rem)",
                lineHeight: "clamp(3rem,calc(10.8333333333vw - 17px),6.25rem)",
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
          <Image
            src={HeroImage}
            width={726}
            height={314}
            className="mx-auto mt-12 -mb-20 h-78.5 w-181.5 object-center dark:invert-100"
            alt="a team is achieveing something"
          />
        </div>
      </section>
    </div>
  )
}
export default HeroSection
