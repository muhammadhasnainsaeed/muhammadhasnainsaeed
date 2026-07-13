import About from "@/components/share/about"
import CTA from "@/components/share/CTA"
import HeroSection from "@/components/share/HeroSection"
import HowIWork from "@/components/share/HowIWork"
import Portfolio from "@/components/share/Portfolio"
import Services from "@/components/share/Services"
import Testimonials from "@/components/share/Testimonials"

export default function Page() {
  return (
    <>
      <HeroSection />
      <About />
      <div className="bg-primary-foreground">
        <HowIWork />
        <Services />
        <Portfolio />
      </div>
      <Testimonials />
      <div className="bg-primary-foreground">
        <CTA />
      </div>
    </>
  )
}
