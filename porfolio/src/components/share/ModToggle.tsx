// src/components/share/ModToggle.tsx
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "../ui/button"

type Theme = "dark" | "light"

export function ModeToggle() {
  // 1. Lazy State Initialization: Safely reads the DOM state on the first render without triggering a cascading setState
  const [theme, setThemeState] = React.useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark")
        ? "dark"
        : "light"
    }
    return "light" // Server-side default fallback during Astro build
  })

  // 2. Synchronize theme state with the DOM & LocalStorage before the screen paints
  React.useLayoutEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [theme])

  // Keyboard shortcut listener
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (typeof window === "undefined") return

      const activeElement = document.activeElement as HTMLElement | null
      if (activeElement) {
        const tagName = activeElement.tagName
        if (
          tagName === "INPUT" ||
          tagName === "TEXTAREA" ||
          activeElement.isContentEditable
        ) {
          return
        }
      }

      if (event.key === "d" || event.key === "D") {
        event.preventDefault()
        setThemeState((prev) => (prev === "light" ? "dark" : "light"))
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <Button
      onClick={() =>
        setThemeState((prev) => (prev === "light" ? "dark" : "light"))
      }
      className="inline-flex h-9 w-9 rounded-lg"
      aria-label="Toggle theme"
      size={"sm"}
      variant={"ghost"}
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-slate-700" />
      )}
    </Button>
  )
}
