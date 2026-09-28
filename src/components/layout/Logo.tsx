import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="SynthaxLab Technologies home">
      <img src='https://res.cloudinary.com/dtz0urit6/image/upload/q_auto,f_png/cloudinary-tools-uploads/ifmk42fgz1imkrho3bdp' width={40}/>
      <span className="font-display font-semibold text-lg text-white tracking-tight">
        SynthaxLab
      </span>
    </Link>
  )
}
