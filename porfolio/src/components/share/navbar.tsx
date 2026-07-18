import { Button, buttonVariants } from "../ui/button"
import React from "react"
import { StickyContainer } from "./StickyContainer"
import { ModeToggle } from "./ModToggle"
import { Download } from "lucide-react"

type NavLinkProps = React.ComponentProps<"a"> & {
  children: React.ReactNode
}

const links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Experience", link: "/experience" },
  { name: "Blogs", link: "/blogs" },
  { name: "Contact", link: "/contact" },
]

function Navlink({ children, ...props }: NavLinkProps) {
  return (
    <a
      {...props}
      className={buttonVariants({
        variant: "ghost",
        className: "rounded-sm",
        size: "sm",
      })}
    >
      {children}
    </a>
  )
}

function Navbar() {
  return (
    <StickyContainer
      className="sticky top-0 z-50 bg-background"
      stuckClassName="border-b backdrop-blur"
    >
      <header className="item-center mx-auto flex w-full max-w-6xl justify-between px-6 py-2">
        <a href={"/"} className="text-xl font-black">
          Hasnain
        </a>

        <nav className="flex w-full items-center justify-end gap-2">
          {links.map((link, index) => (
            <Navlink key={index} href={link.link}>
              {link.name}
            </Navlink>
          ))}
          <Button className="rounded-lg text-center" size={"lg"}>
            <Download className="h-[1.2rem] w-[1.2rem]" />
            Resume
          </Button>
          <ModeToggle />
        </nav>
      </header>
    </StickyContainer>
  )
}

export default Navbar
