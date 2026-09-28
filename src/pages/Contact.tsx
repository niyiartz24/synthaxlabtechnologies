import { Mail, MessageCircle, SearchCheck, PhoneCall, ListChecks } from 'lucide-react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import ContactCard from '../components/ui/ContactCard'
import ContactForm from '../components/contact/ContactForm'
import { contactConfig, getWhatsAppLink } from '../config/contact'

const nextSteps = [
  {
    icon: SearchCheck,
    number: '01',
    title: 'We Review Your Request',
    description: 'We take time to understand your idea and requirements.',
  },
  {
    icon: PhoneCall,
    number: '02',
    title: 'We Get in Touch',
    description: "We'll contact you to discuss the project in more detail.",
  },
  {
    icon: ListChecks,
    number: '03',
    title: 'We Define the Next Steps',
    description: "Together, we'll determine the best approach for moving forward.",
  },
]

export default function Contact() {
  useDocumentMeta(
    'Contact SynthaxLab Technologies',
    'Get in touch with SynthaxLab Technologies to discuss your website, application, or software project.',
  )

  const whatsappLink = getWhatsAppLink("Hi SynthaxLab, I'd like to talk about a project.")

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        heading="Let's Build Something Meaningful."
        text="Have an idea, project, or digital challenge? We'd like to hear about it."
      />

      <section className="py-16 sm:py-20 border-b border-line">
        <div className="container-content grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12">
          <div className="flex flex-col gap-6">
            <ContactCard
              icon={Mail}
              label="Email"
              value={contactConfig.email}
              href={`mailto:${contactConfig.email}`}
            />
            {whatsappLink && (
              <ContactCard icon={MessageCircle} label="WhatsApp" value="Message us" href={whatsappLink} />
            )}
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-content flex flex-col gap-12">
          <SectionHeading heading="What Happens Next?" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {nextSteps.map(({ icon: Icon, number, title, description }) => (
              <div key={number} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-purple-soft" aria-hidden="true" />
                  <span className="font-display text-sm text-gray-muted">{number}</span>
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="text-sm text-gray-soft leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
