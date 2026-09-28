interface ValueCardProps {
  title: string
  description: string
}

export default function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-line p-6">
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-sm text-gray-soft leading-relaxed">{description}</p>
    </div>
  )
}
