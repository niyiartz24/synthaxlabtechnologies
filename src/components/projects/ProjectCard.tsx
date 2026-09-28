import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../data/projects'
import ProjectVisual from './ProjectVisual'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-5 rounded-lg border border-line bg-panel/40 p-6 transition-colors duration-200 hover:border-purple/50">
      <ProjectVisual seed={project.name} />

      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium tracking-wide text-electric-soft uppercase">
          {project.tagline}
        </span>
        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
        <p className="text-sm text-gray-soft leading-relaxed">{project.description}</p>
      </div>

      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-purple-soft hover:text-white transition-colors"
        >
          View Project
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      ) : (
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-gray-muted">
          View Project
        </span>
      )}
    </div>
  )
}
