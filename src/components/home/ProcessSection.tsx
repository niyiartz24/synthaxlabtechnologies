import SectionHeading from '../ui/SectionHeading'
import ProcessStep from './ProcessStep'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We take time to understand the idea, requirements, challenges, and goals.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We define the appropriate strategy, features, structure, and development approach.',
  },
  {
    number: '03',
    title: 'Design & Build',
    description: 'We design and develop the solution with a focus on usability, functionality, and quality.',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'We refine the product and prepare it for launch and real-world use.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 sm:py-24 border-b border-line">
      <div className="container-content grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12">
        <SectionHeading eyebrow="Our Process" heading="From Idea to Digital Reality." />

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <ProcessStep key={step.number} {...step} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
