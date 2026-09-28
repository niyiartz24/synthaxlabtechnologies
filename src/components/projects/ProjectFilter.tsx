interface ProjectFilterProps {
  categories: string[]
  active: string
  onChange: (category: string) => void
}

export default function ProjectFilter({ categories, active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
      {categories.map((category) => {
        const isActive = category === active
        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? 'border-purple bg-purple text-white'
                : 'border-line text-gray-soft hover:border-purple-soft hover:text-white'
            }`}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
