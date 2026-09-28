interface ProcessStepProps {
  number: string
  title: string
  description: string
  isLast?: boolean
}

export default function ProcessStep({ number, title, description, isLast }: ProcessStepProps) {
  return (
    <div className="relative flex gap-5">
      <div className="flex flex-col items-center">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-purple/40 font-display text-sm text-purple-soft">
          {number}
        </span>
        {!isLast && <span className="w-px flex-1 bg-line mt-2" />}
      </div>
      <div className="pb-10">
        <h3 className="text-white font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-soft leading-relaxed max-w-sm">{description}</p>
      </div>
    </div>
  )
}
