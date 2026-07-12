type MarqueeProps = {
  children: React.ReactNode
  reverse?: boolean
  pauseOnHover?: boolean
  speed?: number // seconds
  className?: string
}

export function Marquee({
  children,
  reverse = false,
  pauseOnHover = true,
  speed = 30,
  className = "",
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex w-max animate-marquee whitespace-nowrap will-change-transform ${reverse ? "shimmer-reverse" : ""} ${pauseOnHover ? "hover:paused" : ""} `}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
