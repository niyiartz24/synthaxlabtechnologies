import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../projects/ProjectCard'
import Button from '../ui/Button'
import { projects } from '../../data/projects'

export default function ProjectsPreview() {
  const featured = projects.filter((p) => p.featured).slice(0, 6)

  return (
    <section className="py-20 sm:py-24 border-b border-line">
      <div className="container-content flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            eyebrow="Our Work"
            heading="Building More Than Just Websites."
            text="We work on digital products, platforms, websites, and technology solutions designed to solve real problems."
          />
          <Button to="/projects" variant="secondary" className="shrink-0 self-start sm:self-auto">
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
