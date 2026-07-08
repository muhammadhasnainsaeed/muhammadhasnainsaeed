function TechImages() {
  const faces = [
    { bg: "bg-[#DDEBFF]", ring: "ring-[#4A90E2]", emoji: "👩🏻" },
    { bg: "bg-white", ring: "ring-neutral-800", emoji: "👨🏽" },
    { bg: "bg-[#FF5A3C]", ring: "ring-[#B8352A]", emoji: "🚩" },
    { bg: "bg-[#FFE9D6]", ring: "ring-[#FFB347]", emoji: "👦🏾" },
    { bg: "bg-white", ring: "ring-neutral-800", emoji: "🙂" },
    { bg: "bg-[#5B7CFA]", ring: "ring-[#3A5AD6]", emoji: "📁" },
    { bg: "bg-[#FFE6E6]", ring: "ring-[#E85A5A]", emoji: "🧑🏼‍💼" },
  ]
  return (
    <div className="flex items-center justify-center -space-x-2">
      {faces.map((f, i) => (
        <div
          key={i}
          className={`grid h-11 w-11 place-items-center rounded-full ring-2 ${f.ring} ${f.bg} text-lg`}
        >
          <span>{f.emoji}</span>
        </div>
      ))}
    </div>
  )
}
export default TechImages
