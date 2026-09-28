import { motion } from 'framer-motion'

interface PageHeroProps {
  eyebrow: string
  heading: string
  text?: string
}

export default function PageHero({ eyebrow, heading, text }: PageHeroProps) {
  return (
    <section className="border-b border-line py-16 sm:py-20">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-4 max-w-2xl"
        >
          <span className="label-eyebrow">{eyebrow}</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            {heading}
          </h1>
          {text && <p className="text-gray-soft text-base sm:text-lg leading-relaxed">{text}</p>}
        </motion.div>
      </div>
    </section>
  )
}
