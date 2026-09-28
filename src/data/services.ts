export type IconKey =
  | 'code'
  | 'globe'
  | 'smartphone'
  | 'layout'
  | 'briefcase'
  | 'compass'

export interface Service {
  number: string
  slug: string
  icon: IconKey
  title: string
  shortDescription: string
  detail: string
  solutions: string[]
}

export const services: Service[] = [
  {
    number: '01',
    slug: 'custom-software-development',
    icon: 'code',
    title: 'Custom Software Development',
    shortDescription:
      'We design and develop custom software solutions tailored to specific business operations, workflows, and requirements.',
    detail:
      'We build custom software solutions designed around specific business processes and operational requirements.',
    solutions: [
      'Management systems',
      'Internal business tools',
      'Custom dashboards',
      'Administrative platforms',
      'Data management systems',
      'Digital platforms',
    ],
  },
  {
    number: '02',
    slug: 'web-development',
    icon: 'globe',
    title: 'Web Development',
    shortDescription:
      'We build modern corporate websites, web applications, platforms, and digital experiences.',
    detail: 'We design and build modern websites and web applications.',
    solutions: [
      'Corporate websites',
      'Business websites',
      'E-commerce platforms',
      'Web applications',
      'Digital platforms',
      'Landing pages',
    ],
  },
  {
    number: '03',
    slug: 'mobile-app-development',
    icon: 'smartphone',
    title: 'Mobile App Development',
    shortDescription:
      'We create modern mobile applications designed around usability, performance, and real-world needs.',
    detail:
      'We develop mobile applications designed to provide useful and accessible digital experiences.',
    solutions: [
      'Business applications',
      'Marketplace applications',
      'Service platforms',
      'Social platforms',
      'Custom mobile solutions',
    ],
  },
  {
    number: '04',
    slug: 'ui-ux-product-design',
    icon: 'layout',
    title: 'UI/UX & Product Design',
    shortDescription:
      'We design intuitive digital experiences and interfaces that balance functionality, usability, and visual quality.',
    detail:
      'We design intuitive interfaces and digital experiences before and during product development.',
    solutions: [
      'User interface design',
      'User experience planning',
      'Product design',
      'Wireframes',
      'Digital product interfaces',
    ],
  },
  {
    number: '05',
    slug: 'business-digital-solutions',
    icon: 'briefcase',
    title: 'Business & Digital Solutions',
    shortDescription:
      'We help businesses adopt digital solutions that improve processes, operations, and customer experiences.',
    detail:
      'We help businesses identify opportunities to improve operations through technology.',
    solutions: [
      'Digital transformation',
      'Business systems',
      'Workflow improvements',
      'Digital platforms',
      'Process automation',
    ],
  },
  {
    number: '06',
    slug: 'technology-consulting',
    icon: 'compass',
    title: 'Technology Consulting',
    shortDescription:
      'We help businesses, entrepreneurs, and organizations make informed technology decisions and plan digital products effectively.',
    detail:
      'We help businesses and entrepreneurs make informed decisions about technology.',
    solutions: [
      'Product planning',
      'Technical direction',
      'Feature planning',
      'Technology recommendations',
      'Digital strategy',
    ],
  },
]
