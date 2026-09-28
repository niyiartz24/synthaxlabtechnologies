/**
 * Abstract interface-style placeholder used when a real project screenshot
 * isn't available. Deterministic per project name so each card looks
 * distinct without relying on random or stock imagery.
 */
export default function ProjectVisual({ seed }: { seed: string }) {
  const hash = Array.from(seed).reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const barWidths = [40, 65, 50, 80, 35].map((w, i) => `${(w + ((hash + i * 7) % 20))}%`)

  return (
    <div className="relative flex h-40 w-full flex-col justify-end gap-2 overflow-hidden rounded-md border border-line bg-navy p-4">
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: 'linear-gradient(#262A33 1px, transparent 1px), linear-gradient(90deg, #262A33 1px, transparent 1px)',
        backgroundSize: '18px 18px',
      }} />
      <div className="relative flex gap-1.5 mb-2">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
      </div>
      <div className="relative flex flex-col gap-1.5">
        {barWidths.map((width, i) => (
          <div
            key={i}
            className="h-2 rounded-full bg-gradient-to-r from-purple/50 to-electric/40"
            style={{ width }}
          />
        ))}
      </div>
    </div>
  )
}
