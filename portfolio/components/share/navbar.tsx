import Link from "next/link"
import { Button, buttonVariants } from "../ui/button"
import React from "react"
import Image from "next/image"
import logo from "../../public/logo.webp"
import { StickyContainer } from "./StickyContainer"

type NavLinkProps = React.ComponentProps<typeof Link> & {
  children: React.ReactNode
}

function Navlink({ children, ...props }: NavLinkProps) {
  return (
    <Link
      {...props}
      className={buttonVariants({
        variant: "ghost",
        className: "rounded-sm",
      })}
    >
      {children}
    </Link>
  )
}

function Navbar() {
  return (
    <StickyContainer
      className="sticky top-0 z-50 bg-background"
      stuckClassName="border-b backdrop-blur"
    >
      <header className="item-center flex w-full justify-between px-4 py-3">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Logo"
            width={120}
            height={36}
            className="h-10 w-26 dark:invert"
          ></Image>
        </Link>
        <nav className="flex items-center gap-2">
          <Navlink href={"/"}>Home</Navlink>
          <Navlink href={"/about"}>About</Navlink>
          <Navlink href={"/contact"}>Contact</Navlink>
        </nav>
        <Button className="h-10 w-30 rounded-lg text-center" size={"lg"}>
          Resume
        </Button>
      </header>
    </StickyContainer>
  )
}

export default Navbar
