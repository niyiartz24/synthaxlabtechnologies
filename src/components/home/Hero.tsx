import { motion } from 'framer-motion'
import Button from '../ui/Button'
import HeroVisual from './HeroVisual'

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="container-content grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          <span className="label-eyebrow">SynthaxLab Technologies</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] max-w-xl">
            Building Digital Solutions for the Future.
          </h1>
          <p className="text-gray-soft text-base sm:text-lg leading-relaxed max-w-lg">
            SynthaxLab Technologies designs and develops modern digital products, software
            solutions, websites, and applications that help businesses and ideas move forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button to="/contact" variant="primary">
              Start a Project
            </Button>
            <Button to="/projects" variant="secondary">
              Explore Our Work
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  )
}
