import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import Logo from './Logo'
import Button from '../ui/Button'

interface NavItem {
  label: string
  to: string
}

interface MobileNavProps {
  open: boolean
  onClose: () => void
  items: NavItem[]
}

export default function MobileNav({ open, onClose, items }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-ink md:hidden"
        >
          <div className="container-content flex items-center justify-between h-18 py-4">
            <Logo />
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="text-white p-2 -mr-2"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <motion.ul
            initial="closed"
            animate="open"
            variants={{
              open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
            }}
            className="flex flex-col px-6 mt-6"
          >
            {items.map((item) => (
              <motion.li
                key={item.to}
                variants={{
                  closed: { opacity: 0, y: 12 },
                  open: { opacity: 1, y: 0 },
                }}
                className="border-b border-line"
              >
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block py-5 text-2xl font-display font-medium ${
                      isActive ? 'text-white' : 'text-gray-soft'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>

          <div className="px-6 mt-8">
            <Button to="/contact" variant="primary" onClick={onClose} className="w-full">
              Start a Project
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
