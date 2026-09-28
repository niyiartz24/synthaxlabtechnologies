import { useDocumentMeta } from '../hooks/useDocumentMeta'
import PageHero from '../components/ui/PageHero'
import ServiceDetail from '../components/services/ServiceDetail'
import Button from '../components/ui/Button'
import { services } from '../data/services'

export default function Services() {
  useDocumentMeta(
    'Technology & Digital Solutions | SynthaxLab Technologies',
    'Explore the technology and digital solutions offered by SynthaxLab Technologies, from custom software to mobile apps and technology consulting.',
  )

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        heading="Technology Solutions Designed Around Your Needs."
        text="From early-stage ideas to complete digital products, we help transform requirements into practical technology solutions."
      />

      <section className="py-4">
        <div className="container-content">
          {services.map((service, i) => (
            <ServiceDetail key={service.slug} service={service} reversed={i % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-content flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white max-w-xl">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-soft max-w-md">
            Tell us about your idea and let's explore the right technology solution.
          </p>
          <Button to="/contact" variant="primary">
            Start a Project
          </Button>
        </div>
      </section>
    </>
  )
}
