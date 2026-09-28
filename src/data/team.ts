export interface TeamMember {
  name: string
  position: string
  bio: string
  image?: string // path to a professional photo; falls back to a placeholder when omitted
  social?: {
    linkedin?: string
    twitter?: string
    github?: string
    email?: string
  }
}

/**
 * Add additional co-founders or team members here as they are confirmed.
 * Only include people whose details have been explicitly provided —
 * do not invent placeholder team members.
 */
export const team: TeamMember[] = [
  {
    name: 'Emmanuel Adeniyi',
    position: 'CEO & Co-Founder',
    bio: 'Emmanuel Adeniyi is the CEO, Co-Founder, and Lead Developer at SynthaxLab Technologies, a technology company focused on building innovative digital solutions for businesses and individuals. With four years of experience in software development, he leads the company’s technical vision, product development, and innovation.His expertise spans modern web and software development, with experience in technologies including HTML, CSS, JavaScript, Python, SQLite, and PostgreSQL. As Lead Developer, Emmanuel is committed to building reliable, scalable, and impactful digital products that solve real-world problems.Through SynthaxLab Technologies, he continues to drive innovation and deliver technology solutions that help ideas evolve into functional, valuable products.',
    social: {
      email: 'emmyniyi1208@gmail.com',
      github: 'https://github.com/niyiartz24',
      linkedin: 'https://www.linkedin.com/in/emmanuel-adeniyi-358015291?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    image:'https://res.cloudinary.com/dtz0urit6/image/upload/q_auto,f_png/cloudinary-tools-uploads/qzqly0tgqlyeleyrqydt',
  },
    {
    name: 'Adewunmi Adeniyi',
    position: 'COO & Co-Founder',
    bio: 'Mr. Adeniyi Adewunmi is a seasoned management and operations professional with over 15 years of experience in leadership, human resources, coaching, performance analysis and people development.He holds a Postgraduate Diploma (PGD) in Management Science and an MBA in Human Resources Management from Ladoke Akintola University of Technology (LAUTECH), Ogbomoso.As Co-Founder and COO of SynthaxLab Technologies, he provides strategic and operational leadership, overseeing organisational development, human capital, business processes and execution. His multidisciplinary background combines management expertise, analytical thinking, leadership and performance-driven decision-making, contributing to SynthaxLab’s vision of building innovative and impactful technology solutions.',
    social: {
      email: 'adewunmi78@gmail.com',
    },
    image:'https://res.cloudinary.com/dtz0urit6/image/upload/q_auto,f_png/cloudinary-tools-uploads/osxpnpjw5a5hsosulcqn',
  },
]
