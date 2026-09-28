import type { LucideIcon } from 'lucide-react'

interface ContactCardProps {
  icon: LucideIcon
  label: string
  value: string
  href: string
}

export default function ContactCard({ icon: Icon, label, value, href }: ContactCardProps) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="flex items-center gap-4 rounded-lg border border-line bg-panel/40 p-5 transition-colors hover:border-purple/50"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy">
        <Icon className="h-5 w-5 text-purple-soft" aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs text-gray-muted">{label}</p>
        <p className="text-sm font-medium text-white">{value}</p>
      </div>
    </a>
  )
}
