interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  text?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  heading,
  text,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto items-center' : 'text-left'

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {eyebrow && <span className="label-eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">{heading}</h2>
      {text && <p className="text-gray-soft text-base sm:text-lg leading-relaxed">{text}</p>}
    </div>
  )
}
