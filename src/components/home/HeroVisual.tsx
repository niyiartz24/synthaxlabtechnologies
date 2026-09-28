import { motion } from 'framer-motion'

/**
 * An abstract, architecture-inspired visual: a grid of panels with a few
 * highlighted nodes and connecting lines, evoking system structure rather
 * than a literal screenshot or stock illustration.
 */
export default function HeroVisual() {
  const nodes = [
    { x: 60, y: 70 },
    { x: 220, y: 40 },
    { x: 340, y: 150 },
    { x: 150, y: 220 },
    { x: 300, y: 300 },
  ]

  return (
    <svg
      viewBox="0 0 420 380"
      className="w-full h-auto max-w-md"
      aria-hidden="true"
    >
      <defs>
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#262A33" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="420" height="380" fill="url(#grid)" rx="16" />

      {nodes.slice(0, -1).map((n, i) => {
        const next = nodes[i + 1]
        return (
          <motion.line
            key={i}
            x1={n.x}
            y1={n.y}
            x2={next.x}
            y2={next.y}
            stroke="#3B82F6"
            strokeOpacity={0.4}
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
          />
        )
      })}

      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === 2 ? 8 : 5}
          fill={i === 2 ? '#7C5CFC' : '#3B82F6'}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
        />
      ))}

      <motion.rect
        x="40"
        y="20"
        width="340"
        height="340"
        rx="16"
        fill="none"
        stroke="#7C5CFC"
        strokeOpacity="0.5"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
      />
    </svg>
  )
}
