"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface StickyContainerProps {
  children: React.ReactNode
  className?: string
  stuckClassName?: string
  unstuckClassName?: string
}

export function StickyContainer({
  children,
  className,
  stuckClassName,
  unstuckClassName,
}: StickyContainerProps) {
  const sentinelRef = React.useRef<HTMLDivElement>(null)
  const [isSticky, setIsSticky] = React.useState(false)

  React.useEffect(() => {
    const sentinel = sentinelRef.current

    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting)
      },
      {
        threshold: 0,
      }
    )

    observer.observe(sentinel)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="pointer-events-none h-px w-full"
      />

      <div
        className={cn(
          "transition-all duration-300",
          className,
          isSticky ? stuckClassName : unstuckClassName
        )}
      >
        {children}
      </div>
    </>
  )
}
