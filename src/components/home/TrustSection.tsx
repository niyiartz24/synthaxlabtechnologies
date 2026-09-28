import { Code2, Globe2, Smartphone, Boxes } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const capabilities = [
  { icon: Code2, label: 'Custom Software' },
  { icon: Globe2, label: 'Web Development' },
  { icon: Smartphone, label: 'Mobile Applications' },
  { icon: Boxes, label: 'Digital Products' },
]

export default function TrustSection() {
  return (
    <section className="py-20 sm:py-24 border-b border-line">
      <div className="container-content flex flex-col gap-12">
        <SectionHeading
          eyebrow="Who We Are"
          heading="Technology Built Around Ideas That Matter."
          text="SynthaxLab Technologies is a digital technology company focused on building modern, functional, and scalable digital solutions. We work with businesses, organizations, entrepreneurs, and individuals to transform ideas into products that solve real problems."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col gap-3 rounded-lg border border-line bg-panel/50 p-6"
            >
              <Icon className="h-6 w-6 text-purple-soft" aria-hidden="true" />
              <span className="text-white text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
