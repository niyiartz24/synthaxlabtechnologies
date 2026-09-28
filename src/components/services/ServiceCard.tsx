import { Code2, Globe2, Smartphone, LayoutGrid, Briefcase, Compass } from 'lucide-react'
import type { Service, IconKey } from '../../data/services'

const icons: Record<IconKey, typeof Code2> = {
  code: Code2,
  globe: Globe2,
  smartphone: Smartphone,
  layout: LayoutGrid,
  briefcase: Briefcase,
  compass: Compass,
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = icons[service.icon]

  return (
    <div className="group flex flex-col gap-5 rounded-lg border border-line bg-panel/40 p-7 transition-colors duration-200 hover:border-purple/50">
      <div className="flex items-start justify-between">
        <Icon className="h-7 w-7 text-electric-soft" aria-hidden="true" />
        <span className="font-display text-sm text-gray-muted">{service.number}</span>
      </div>
      <h3 className="text-lg font-semibold text-white">{service.title}</h3>
      <p className="text-sm text-gray-soft leading-relaxed">{service.shortDescription}</p>
    </div>
  )
}
