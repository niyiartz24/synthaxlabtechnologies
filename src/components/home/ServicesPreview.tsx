import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../services/ServiceCard'
import { services } from '../../data/services'

export default function ServicesPreview() {
  return (
    <section className="py-20 sm:py-24 border-b border-line">
      <div className="container-content flex flex-col gap-12">
        <SectionHeading
          eyebrow="What We Do"
          heading="Solutions Built for Real-World Problems."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
