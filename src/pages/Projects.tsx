import { useMemo, useState } from 'react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import PageHero from '../components/ui/PageHero'
import ProjectFilter from '../components/projects/ProjectFilter'
import ProjectCard from '../components/projects/ProjectCard'
import { projects, projectCategories } from '../data/projects'

const ALL = 'All'

export default function Projects() {
  useDocumentMeta(
    'Our Projects | SynthaxLab Technologies',
    'A selection of digital products, platforms, websites, and technology solutions developed by SynthaxLab Technologies.',
  )

  const availableCategories = useMemo(() => {
    const used = new Set(projects.map((p) => p.category))
    return [ALL, ...projectCategories.filter((c) => used.has(c))]
  }, [])

  const [activeCategory, setActiveCategory] = useState<string>(ALL)

  const filtered = useMemo(() => {
    if (activeCategory === ALL) return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        heading="Ideas Built Into Reality."
        text="A selection of digital products, platforms, websites, and technology solutions developed by SynthaxLab Technologies."
      />

      <section className="py-16 sm:py-20">
        <div className="container-content flex flex-col gap-10">
          <ProjectFilter
            categories={availableCategories}
            active={activeCategory}
            onChange={setActiveCategory}
          />

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-gray-soft">No projects in this category yet.</p>
          )}
        </div>
      </section>
    </>
  )
}
