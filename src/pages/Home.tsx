import { useDocumentMeta } from '../hooks/useDocumentMeta'
import Hero from '../components/home/Hero'
import TrustSection from '../components/home/TrustSection'
import ServicesPreview from '../components/home/ServicesPreview'
import ProjectsPreview from '../components/home/ProjectsPreview'
import ProcessSection from '../components/home/ProcessSection'
import WhySection from '../components/home/WhySection'
import FinalCTA from '../components/home/FinalCTA'

export default function Home() {
  useDocumentMeta(
    'SynthaxLab Technologies | Building Digital Solutions for the Future',
    'SynthaxLab Technologies designs and builds modern digital products, software solutions, websites, and applications that help businesses and ideas move forward.',
  )

  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesPreview />
      <ProjectsPreview />
      <ProcessSection />
      <WhySection />
      <FinalCTA />
    </>
  )
}
