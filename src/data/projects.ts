export type ProjectCategory =
  | 'Web Development'
  | 'Digital Platforms'
  | 'Mobile Applications'
  | 'E-Commerce'
  | 'Education Technology'
  | 'Financial Technology'

export interface Project {
  slug: string
  name: string
  category: ProjectCategory
  tagline: string
  description: string
  services: string[]
  url?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'ticket9ja',
    name: 'Ticket9ja',
    category: 'Digital Platforms',
    tagline: 'Digital Platform / Event Technology',
    description:
      'A digital ticketing and event platform designed to simplify event discovery, ticket management, and digital event experiences.',
    services: ['Web Development', 'Product Design'],
    featured: true,
  },
  {
    slug: 'ticket9japay',
    name: 'Ticket9jaPay',
    category: 'Financial Technology',
    tagline: 'Digital Payments / Collection System',
    description:
      'A digital collection and payment solution designed to simplify payments and financial collections for institutions and organizations.',
    services: ['Web Development', 'Custom Software'],
    featured: true,
  },
  {
    slug: 'scholarix',
    name: 'Scholarix',
    category: 'Education Technology',
    tagline: 'Education Technology',
    description:
      'A digital school management solution designed to help educational institutions manage important academic and administrative processes.',
    services: ['Custom Software', 'Web Development'],
    featured: true,
  },
  {
    slug: 'ravers',
    name: 'Ravers',
    category: 'E-Commerce',
    tagline: 'E-Commerce',
    description:
      'A modern fashion e-commerce platform designed to provide a seamless digital shopping experience.',
    services: ['Web Development', 'UI/UX Design'],
    featured: true,
  },
  {
    slug: 'greatness-football-academy',
    name: 'Greatness Football Academy',
    category: 'Web Development',
    tagline: 'Web Development',
    description:
      'A professional digital platform designed to strengthen the online presence of a football academy.',
    services: ['Web Development'],
    featured: true,
  },
  {
    slug: 'vinod-football-academy',
    name: 'Vinod Football Academy',
    category: 'Web Development',
    tagline: 'Web Development',
    description:
      'A modern website and digital platform created for a football academy.',
    services: ['Web Development'],
    featured: true,
  },
  {
    slug: 'synthaxlab-official-website',
    name: 'SynthaxLab Official Website',
    category: 'Web Development',
    tagline: 'Corporate Website',
    description:
      'The official corporate website for SynthaxLab Technologies, built to present the company, its services, and its work.',
    services: ['Web Development', 'UI/UX Design'],
    featured: false,
  },
]

export const projectCategories: ProjectCategory[] = [
  'Web Development',
  'Digital Platforms',
  'Mobile Applications',
  'E-Commerce',
  'Education Technology',
  'Financial Technology',
]
