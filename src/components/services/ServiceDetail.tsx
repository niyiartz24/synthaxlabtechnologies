import { Code2, Globe2, Smartphone, LayoutGrid, Briefcase, Compass, Check } from 'lucide-react'
import type { Service, IconKey } from '../../data/services'

const icons: Record<IconKey, typeof Code2> = {
  code: Code2,
  globe: Globe2,
  smartphone: Smartphone,
  layout: LayoutGrid,
  briefcase: Briefcase,
  compass: Compass,
}

export default function ServiceDetail({ service, reversed }: { service: Service; reversed?: boolean }) {
  const Icon = icons[service.icon]

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 border-b border-line ${
        reversed ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-purple/40 bg-panel">
            <Icon className="h-6 w-6 text-purple-soft" aria-hidden="true" />
          </span>
          <span className="font-display text-sm text-gray-muted">{service.number}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">{service.title}</h2>
        <p className="text-gray-soft leading-relaxed max-w-md">{service.detail}</p>
      </div>

      <ul className="flex flex-col gap-3">
        {service.solutions.map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm text-gray-soft">
            <Check className="h-4 w-4 text-electric-soft shrink-0" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
