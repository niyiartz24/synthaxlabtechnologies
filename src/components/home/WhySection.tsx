import { Target, Cpu, Layers, TrendingUp } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const points = [
  {
    icon: Target,
    title: 'Purpose-Driven Solutions',
    description: 'We focus on building technology that solves real problems.',
  },
  {
    icon: Cpu,
    title: 'Modern Technology',
    description: 'We use modern tools and development practices to create reliable digital solutions.',
  },
  {
    icon: Layers,
    title: 'Custom Approach',
    description: 'Every project is approached based on its unique goals and requirements.',
  },
  {
    icon: TrendingUp,
    title: 'Built for Growth',
    description: 'We consider usability, flexibility, and future growth when developing digital products.',
  },
]

export default function WhySection() {
  return (
    <section className="py-20 sm:py-24 border-b border-line">
      <div className="container-content flex flex-col gap-12">
        <SectionHeading heading="Built for More Than Just Appearance." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col gap-3">
              <Icon className="h-6 w-6 text-purple-soft" aria-hidden="true" />
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="text-sm text-gray-soft leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
