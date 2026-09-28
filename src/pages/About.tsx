import { useDocumentMeta } from '../hooks/useDocumentMeta'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import ValueCard from '../components/about/ValueCard'
import TeamCard from '../components/about/TeamCard'
import { team } from '../data/team'

const beliefs = [
  {
    title: 'Technology Should Solve Problems',
    description: 'Innovation is most valuable when it improves lives, businesses, and systems.',
  },
  {
    title: 'Ideas Deserve Opportunity',
    description: 'The right technology can transform an idea into something meaningful and useful.',
  },
  {
    title: 'Functionality Matters',
    description: 'Good design is important, but technology must ultimately work.',
  },
  {
    title: 'Build for the Future',
    description: 'Digital products should be created with growth, improvement, and long-term value in mind.',
  },
]

const values = [
  { title: 'Innovation', description: 'We look for better ways to solve problems with technology.' },
  { title: 'Integrity', description: 'We build honest relationships and deliver on what we commit to.' },
  { title: 'Quality', description: 'We hold our work to a high standard, from planning to delivery.' },
  { title: 'Collaboration', description: 'We work closely with clients to get the details right.' },
  { title: 'Continuous Improvement', description: 'We keep learning and refining how we build.' },
]

export default function About() {
  useDocumentMeta(
    'About SynthaxLab Technologies',
    'Learn about SynthaxLab Technologies, a digital technology company building modern digital products and solutions.',
  )

  return (
    <>
      <PageHero
        eyebrow="About SynthaxLab"
        heading="Building Technology With Purpose."
        text="We believe technology should do more than look impressive. It should solve problems, create opportunities, and move ideas forward."
      />

      <section className="py-20 sm:py-24 border-b border-line">
        <div className="container-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <SectionHeading heading="Our Story" />
          <div className="flex flex-col gap-4 text-gray-soft leading-relaxed">
            <p>
              SynthaxLab Technologies was built around a simple belief: good ideas deserve the
              right technology to bring them to life.
            </p>
            <p>
              What began with a focus on building digital experiences and software solutions has
              grown into a broader vision of creating technology that solves real-world problems.
            </p>
            <p>
              Today, SynthaxLab Technologies works across digital products, websites,
              applications, and custom software solutions, helping ideas move from concept to
              reality.
            </p>
            <p>
              As the company continues to grow, the focus remains the same: build useful
              technology, solve meaningful problems, and create digital solutions with real
              value.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 border-b border-line">
        <div className="container-content grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3 rounded-lg border border-line p-8">
            <h2 className="text-xl font-semibold text-white">Our Mission</h2>
            <p className="text-gray-soft leading-relaxed">
              To design and build practical, innovative, and reliable digital solutions that help
              businesses, organizations, and individuals transform ideas into meaningful
              technology.
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-lg border border-line p-8">
            <h2 className="text-xl font-semibold text-white">Our Vision</h2>
            <p className="text-gray-soft leading-relaxed">
              To become a recognized technology company known for building impactful digital
              products and solutions across Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 border-b border-line">
        <div className="container-content flex flex-col gap-12">
          <SectionHeading heading="What We Believe" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {beliefs.map((belief) => (
              <div key={belief.title} className="flex flex-col gap-2">
                <h3 className="text-white font-semibold">{belief.title}</h3>
                <p className="text-sm text-gray-soft leading-relaxed">{belief.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 border-b border-line">
        <div className="container-content flex flex-col gap-12">
          <SectionHeading heading="Our Values" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-content flex flex-col gap-12">
          <SectionHeading
            eyebrow="Our Team"
            heading="The People Behind SynthaxLab."
            text="SynthaxLab Technologies is built by people passionate about technology, innovation, and creating meaningful digital solutions."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
