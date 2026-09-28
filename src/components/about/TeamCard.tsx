import { Mail, Linkedin, Twitter, Github } from 'lucide-react'
import type { TeamMember } from '../../data/team'

export default function TeamCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <div className="flex flex-col gap-5 rounded-lg border border-line bg-panel/40 p-7">
      <div className="flex items-center gap-4">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="h-16 w-16 rounded-full object-cover border border-line"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line bg-navy font-display text-lg text-purple-soft">
            {initials}
          </div>
        )}
        <div>
          <h3 className="text-white font-semibold">{member.name}</h3>
          <p className="text-sm text-electric-soft">{member.position}</p>
        </div>
      </div>

      <p className="text-sm text-gray-soft leading-relaxed">{member.bio}</p>

      {member.social && (
        <div className="flex items-center gap-4 pt-1">
          {member.social.email && (
            <a
              href={`mailto:${member.social.email}`}
              aria-label={`Email ${member.name}`}
              className="text-gray-muted hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          )}
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="text-gray-muted hover:text-white transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {member.social.twitter && (
            <a
              href={member.social.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name} on Twitter`}
              className="text-gray-muted hover:text-white transition-colors"
            >
              <Twitter className="h-4 w-4" />
            </a>
          )}
          {member.social.github && (
            <a
              href={member.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name} on GitHub`}
              className="text-gray-muted hover:text-white transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      )}
    </div>
  )
}
