import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import Logo from './Logo'
import { company } from '../../config/company'
import { contactConfig } from '../../config/contact'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const serviceLinks = [
  'Software Development',
  'Web Development',
  'Mobile Applications',
  'UI/UX Design',
  'Digital Solutions',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-navy/60">
      <div className="container-content grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 lg:col-span-2 max-w-sm">
          <Logo />
          <p className="text-gray-soft text-sm leading-relaxed">
            Building modern digital products, software solutions, and technology experiences for
            businesses and ideas.
          </p>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold mb-4">Navigation</h3>
          <ul className="flex flex-col gap-3">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-gray-soft hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold mb-4">Services</h3>
          <ul className="flex flex-col gap-3">
            {serviceLinks.map((label) => (
              <li key={label} className="text-sm text-gray-soft">
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-content pb-10">
        <div className="flex items-center gap-2 text-sm text-gray-soft">
          <Mail className="h-4 w-4" aria-hidden="true" />
          <a href={`mailto:${contactConfig.email}`} className="hover:text-white transition-colors">
            {contactConfig.email}
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-content py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-muted">
          <p>
            © {year} {company.name}. All Rights Reserved.
          </p>
          {company.registrationNumber && <p>Reg. No. {company.registrationNumber}</p>}
        </div>
      </div>
    </footer>
  )
}
