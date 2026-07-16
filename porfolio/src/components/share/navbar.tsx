import { Button, buttonVariants } from "../ui/button"
import React from "react"
import { StickyContainer } from "./StickyContainer"
import { ModeToggle } from "./ModToggle"

type NavLinkProps = React.ComponentProps<"a"> & {
  children: React.ReactNode
}

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
      <header className="item-center flex w-full justify-between px-4 py-2">
        <a href={"/"}>
          <img
            src="/logo.webp"
            alt="Logo"
            width={120}
            height={36}
            className="h-10 w-26 dark:invert"
          />
        </a>
        <nav className="flex items-center gap-2">
          <Navlink href={"/"}>Home</Navlink>
          <Navlink href={"/about"}>About</Navlink>
          <Navlink href={"/contact"}>Contact</Navlink>
        </nav>
        <div className="flex items-center gap-2">
          <Button className="h-10 w-30 rounded-lg text-center" size={"lg"}>
            Resume
          </Button>
          <ModeToggle />
        </div>
      </header>
    </StickyContainer>
  )
}

export default Navbar
